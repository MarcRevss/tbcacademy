"use strict";
//Selecting DOM elements
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector('.off-screen-menu');
const allPartnersContainer = document.querySelector('.all-partners');
const partnersContainer = document.querySelector('.partners-center');
const partnerArrows = document.querySelector('.partner-arrows');
const partnersFirstDivs = allPartnersContainer.querySelectorAll('.partners-first');
const partnersSecondDivs = allPartnersContainer.querySelectorAll('.partners-second');
const partnersThirdDivs = allPartnersContainer.querySelectorAll('.partners-third');
const arrowLeft = document.getElementsByClassName('arrow-left');
const arrowRight = document.getElementsByClassName('arrow-right');
const dotOne = document.getElementById("dot1");
const dotTwo = document.getElementById("dot2");
const dotThree = document.getElementById("dot3");
const questions = document.getElementsByClassName('question');
const answers = document.getElementsByClassName('answer');
const arrowofQ = document.getElementsByClassName('faqarrow');
const rulesnCond = document.querySelector('.rules-cond');
const rulesnConsffscreenMenu = document.querySelector('.rules-off-screen');
const closeRules = document.querySelector('.close-rules');
const xLose = document.querySelector('.xlose');
const darkTransition = document.querySelector('.dark-transition');
const lists = document.querySelector('.list');
const header = document.querySelector('header');




//-----Partners wheel-----//

//Combining all partner divs into a single array
const allDivsArray = [
    ...partnersFirstDivs,
    ...partnersSecondDivs,
    ...partnersThirdDivs
];

// Initializing variables
let currentGroupIndex = 0;
let arrowClickedRecently = false;
let mouseEnter = 0;

/* 
handleArrowClick function sets arrowClickedRecently to true,  indicating that an arrow click is recent. 
it Initiates a fade-out effect on all partner divs by changing their opacity to 0 using the forEach loop.
Updates the currentGroupIndex based on the arrow direction ('left' or 'right').
Calls the showGroup function to trigger a fade-in effect on the corresponding group of partner divs.
Uses setTimeout to reset arrowClickedRecently to false after a delay of 500 milliseconds, 
allowing time for the fade-out transition to complete. banners dont change if mouse is over them.
            */
function handleArrowClick(direction) {
    if (!mouseEnter) {
    arrowClickedRecently = true;
    //if arrow was clicked recently fade out on every element is happening
    allDivsArray.forEach((element) => {
        element.style.transition = "opacity 1s ease-in-out";
        element.style.opacity = "0";
    });

    //Updates the currentGroupIndex based on the arrow direction ('left' or 'right').
    if (direction === 'left') {
        currentGroupIndex = (currentGroupIndex - 1 + 3) % 3;
    } else {
        currentGroupIndex = (currentGroupIndex + 1) % 3;
    }

    //fade in happening accordingly 
    if (currentGroupIndex === 0) {
        showGroup(partnersFirstDivs);
    } else if (currentGroupIndex === 1) {
        showGroup(partnersSecondDivs);
    } else {
        showGroup(partnersThirdDivs);
    }
    //makes arrowclickedrecently false every 500ms
    setTimeout(() => {
        arrowClickedRecently = false;
    }, 3000);
}}


//added event listener on all partners banners and
allDivsArray.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
});
function handleMouseEnter() {        
    mouseEnter = 1;        
}
function handleMouseLeave() {        
    mouseEnter = 0;  
}

//calling function with parameter left if left arrow was clicked

for (let i = 0; i < arrowLeft.length; i++) {
    arrowLeft[i].addEventListener("click", () => {
        handleArrowClick('left');
    });
}
//calling function with parameter right if right arrow was clicked

for (let i = 0; i < arrowRight.length; i++) {
    arrowRight[i].addEventListener("click", () => {
        handleArrowClick('right');
    });
}

// provides a fade-in effect by setting the transition and opacity properties for each element in a group.
function showGroup(groupDivs) {
    groupDivs.forEach((element) => {
        element.style.transition = "opacity 1s ease-in-out";
        element.style.opacity = "1";
    });
}
// Function to hide group. used in dots to hide previous banner group.
function hideGroups(groups) {
    groups.forEach((group) => {
        group.forEach((element) => {
            element.style.transition = "opacity 1s ease-in-out";
            element.style.opacity = "0";
        });
    });
}

/* set interval is used to automatically trigger the handleArrowClick function with the 'right' direction every 4000 milliseconds.
Change is only triggered if an arrow click was not recent, preventing interruptions and ensuring a smooth transition.*/

setInterval(() => {
    if (!arrowClickedRecently) {
        handleArrowClick('right');
    }
}, 3000);


// Event listener for dotOne
dotOne.addEventListener("click", function () {
    showGroup(partnersFirstDivs);
    hideGroups([partnersSecondDivs, partnersThirdDivs]);
});

// Event listener for dotTwo
dotTwo.addEventListener("click", function () {
    showGroup(partnersSecondDivs);
    hideGroups([partnersFirstDivs, partnersThirdDivs]);
});

// Event listener for dotThree
dotThree.addEventListener("click", function () {
    showGroup(partnersThirdDivs);
    hideGroups([partnersFirstDivs, partnersSecondDivs]);
});

//---------Question accordion----------// 
//runs through questions and gives active status if clicked, removes if clicked again. 
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        // Close all answers except the clicked one
        for (let j = 0; j < answers.length; j++) {
            if (j !== i) {
                questions[j].classList.remove("active");
                answers[j].classList.remove("slide");
                arrowofQ[j].innerHTML = "˯";
            }
        }

        questions[i].classList.toggle("active");
        arrowofQ[i].innerHTML = questions[i].classList.contains("active") ? "˰" : "˯";
        answers[i].classList.toggle("slide");
    });
}









//-------------------------------------//



//----Hamburger menu and RulesAndCondition menu--//

//function for dark background appereance when clicked rules or when clicked menu when it is mobile version
let click = false;

function darkMode() {
    if (click) {
        darkTransition.style.display = 'block';
    } else {
        darkTransition.style.display = 'none';
    }
}

// hamburger menu and rules dissapears when clicked dark background. dark background dissapears with them.
darkTransition.addEventListener('click', () => {
    click = false;
    darkMode();
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    rulesnCond.classList.remove('active');
    rulesnConsffscreenMenu.classList.remove('active');
});
//rules close when clicked "close" button
closeRules.addEventListener('click', () => {
    click = !click;
    rulesnCond.classList.toggle('active');
    rulesnConsffscreenMenu.classList.toggle('active');
    darkMode();
});

//rules close  when clicked "x" button
xLose.addEventListener('click', () => {
    click = !click;
    rulesnCond.classList.toggle('active');
    rulesnConsffscreenMenu.classList.toggle('active');
    darkMode();

});


//Hamburger menu. gives certain elements toggle to acitve.Off-screen menu appears smoothly.
hamMenu.addEventListener('click', () => {
    click = !click;
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    darkMode();
})

//Rules and Conditions menu slides smoothly when clicked
rulesnCond.addEventListener('click', () => {
    click = !click;
    rulesnCond.classList.toggle('active');
    rulesnConsffscreenMenu.classList.toggle('active');
    darkMode();

});


// ------Scroll down opacity changing on header---------//
let lastScrollTop = 0;

// Adding event listener on scrolling.
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let bodyDoc = document.body;

    // If scrolling down, adjust header opacity and other elements
    if (scrollTop > lastScrollTop) {
        header.style.opacity = '0.85';
        //when it's mobile version  header slides up smoothly when scrolled down
        if (bodyDoc.offsetWidth <= 717) {
            header.style.transform = "translateY(-100%)";
            console.log(bodyDoc.offsetWidth);
            lists.style.opacity = '1';
            offScreenMenu.style.opacity = '1';
        }
    } else {
        // If scrolling up, reset header and adjust other elements
        if (scrollTop === 0) {
            header.style.opacity = '1';
           
        }
        

        ////when it's mobile version  header slides down smoothly when scrolled up
        if (bodyDoc.offsetWidth <= 717) {
            header.style.transform = "translateY(0)";
            console.log(bodyDoc.offsetWidth);
            lists.style.background = "rgb(43, 43, 43)";
            lists.style.height = "5000px";
            lists.style.opacity = "1";       
                
        }
    }

    lastScrollTop = scrollTop;
});