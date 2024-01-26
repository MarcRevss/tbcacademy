# TBCxUSAID TA

## Project Description
TBCxUSAID TA is a technical assignment completed as part of the TBC Academy REACT courses qualifier stage. It represents only one page of identical TBC academy website. This is mainly a markup project with some vannila javascript used. Page is responsive, transforming into a mobile version when the width is reduced to 717 pixels or less.


### Key Features
- **Partner Banners Wheel:**
  *  A smooth-shuffling wheel displays banners of partners. Navigation can be done using left and right arrows or by clicking on dots corresponding to each partner. Partners wheel stop shuffling when mouse enters the banners.

  - Event Listeners for Arrows:
  Event listeners are attached to left and right arrows, calling handleArrowClick with the corresponding direction ('left' or 'right').

  - handleArrowClick(direction):
  This function is called when the left or right arrow is clicked. If the mouse is not currently over any banner (as indicated by mouseEnter), the function proceeds.
  Sets arrowClickedRecently to true, initiating a recent arrow click. Fades out all partner banners by adjusting their opacity using a forEach loop.
  Updates currentGroupIndex based on the arrow direction ('left' or 'right'). Calls the showGroup function to initiate a fade-in effect on the corresponding group of partner divs.
  Uses setTimeout to reset arrowClickedRecently to false after a 3000-millisecond delay, allowing time for the fade-out transition to complete.

  - handleMouseEnter() and handleMouseLeave():
  These functions are attached to the mouseenter and mouseleave events on partner banners.
  handleMouseEnter sets mouseEnter to 1, indicating that the mouse is currently over a banner.
  handleMouseLeave sets mouseEnter to 0, indicating that the mouse is no longer over a banner.
  
  - showGroup(groupDivs):
  This function provides a fade-in effect by setting the transition and opacity properties for each element in a group.
  
  - hideGroups(groups):
  This function hides groups by fading out each element in the specified groups.

  - Automatic Banner Cycling:
  A setInterval is used to automatically trigger the handleArrowClick function with the 'right' direction every 3000 milliseconds.
  The change is only triggered if an arrow click was not recent (!arrowClickedRecently), preventing interruptions and ensuring a smooth transition.

  - Event Listeners for Dots:
  Event listeners are attached to dot elements, each calling showGroup for the showing partner section and hiding other groups using hideGroups.


- **Accordion for FAQs:**
  * Three frequently asked questions are presented with hidden answers. Clicking on a question smoothly reveals the answer, closing any previously open question.
   
  - Loop through Questions:
   The outer loop iterates over each question element in the questions array.
   An event listener is attached to each question element. When a question is clicked, the function will be executed. 

  - Closing Other Answers:
  Inside the click event function, there is another loop that iterates over all the answers. For each answer except the clicked one (j !== i), it does the following:
  Removes the "active" class from the corresponding question.
  Removes the "slide" class from the corresponding answer.
  Sets the inner HTML of the arrow element associated with the question to "˯".

  - Click event function:
  After closing other answers, the clicked question's class "active" is toggled.
  The inner HTML of the arrow element associated with the clicked question is set based on whether the question has the "active" class. If active, set to "˰"; otherwise, set to "˯".
  The "slide" class is toggled on the corresponding answer, enabling or disabling a sliding animation effect.


- **Rules and Conditions Menu:**
  * Clicking on a button "Rules and Conditins" menu slides from the left smoothly, revealing the rules and conditions of TBC. A dark transparent background covers other half the screen. Clicking on this background slides the menu back and dark background dissapears. Transition is made in CSS.

  - Dark Mode Function:
  The darkMode function toggles the display of a dark background. If click is true, the dark background is displayed (display = 'block'),
  and if false, it is hidden (display = 'none').

  - Dark Background Click Event:
  The darkTransition element has a click event listener that triggers when the dark background is clicked.
  On click, it sets click to false, hides the dark background, and removes the "active" class from various menus (hamMenu, offScreenMenu, rulesnCond, rulesnConsffscreenMenu).

  - Close Rules Event:
  The close rules button and x icon has a click event listener. On click, it toggles the "active" class. Additionally, it calls the darkMode function to handle the dark background appearance.
  

- **Hamburger Menu (Mobile Version):**
  * In mobile mode, the horizontal menu disappears, and a hamburger menu appears. Clicking on the three lines icon transforms them into an X. Clicking on the hamburger menu reveals the menu options. Dark background technology is used here also.

  - Hamburger Menu Event:
  The hamMenu element has a click event listener.
  On click, it toggles the "active" class on the hamburger menu (hamMenu) and its off-screen counterpart (offScreenMenu), toggles the click variable, and calls darkMode. Transitions are made in CSS. 

  - **Hamburger Menu (Mobile Version):**
  * Scrolling down changes effect of headers opacity. When it's back to start position, regains opacity. In mobile mode, if scrolling down, header makes slide up effect and vice versa.

  - Scrolling Down:
  If the current scroll position (scrollTop) is greater than the last scroll position (lastScrollTop), it indicates that the user is scrolling down.
  The opacity of the header is set to '0.85'.
  If the viewport width is less than or equal to 717 pixels (mobile version): The header is smoothly translated upward (transform: translateY(-100%)).
    
  - Scrolling Up:
  If the current scroll position is less than or equal to the last scroll position, it indicates that the user is scrolling up.
  If the current scroll position is at the top (scrollTop === 0), the opacity of the header is set to '1'.
  If the viewport width is less than or equal to 717 pixels (mobile version): The header is smoothly translated downward (transform: translateY(0)).
  

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla)

## Installation
1. Clone the repository: `git clone https://github.com/MarcRevss/tbcacademy`
2. Open the project folder: `cd tbcacademy`
3. Open the HTML file (`index.html`) in your preferred browser.

## Usage
To experience the full functionality, open the `index.html` file. Ensure you explore the responsive design by adjusting the width of your browser.

## Contact
For any inquiries or feedback, feel free to contact the project owner:
- Vakho Revazisvhili
- Email: vakho.revazishvili@gmail.com
- GitHub: https://github.com/MarcRevss
