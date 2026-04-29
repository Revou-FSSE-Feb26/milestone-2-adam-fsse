# Readme
---
### Overview of the website
This is a RevoU milestone 3 project, it will demonstrate my JavaScript skills by creating a landing page for a fictional gaming company. The landing page will showcase and host simple JavaScript-based games that I develop. This project will challenge my ability to structure content, implement interactive features, and apply JavaScript logic effectively.

### Features Implemented
This site include the required landing page, and the navigation menu which linked to three Javascript game sites.
1. **Landing Page:**
    * The Home page contains the title of the website, a brief info about the website and the navigation links for the Javascript games.
    * I used a simple flexbox that is aligned to the center.
    * I used CSS to enhance visual and layout.
2. **Clicker Game Page:**
    * First game is Clicker game.
    * I make a simple click button.
    * Every time the player clicks it, the score increases.
    * After 10s, the game ends and displays the final score.
3. **Number Guessing Game Page:**
    * The computer randomly selects a number between 1-100.
    * The player tries to guess the number.
    * The game provides hints: “Too high” or “Too low.”
    * Limit the number of attempts to 5 tries.
4. **Rock, Paper, Scissors Game Page:**
    * The player chooses Rock, Paper, or Scissors.
    * The computer randomly selects one as well.
    * The game determines the winner based on classic rules.

### Technologies Used
1. **Each Game Pages Includes:**
  * Game instructions.
  * Interactive gameplay using JavaScript.
  * A "Back to Home" button.
   
2. **Folder Structure:**
  * I used the folder structure so the pages is more organized.
  * I put together the CSS files.
  * I made the basic CSS file that apply to all the pages, such as the color theme, and the button styling.
  * I add another CSS file specific to each pages.
  * I put each game in each folder containing the html file and js file.
  * I put together the asset files such as the rock paper scissors images and such.
  
3. **Clicker Game:**
  * I used the *button.addEventListener('click', () => {}* to catch the clicker button, and do the logic from there.
  * I put the required elements on the const variable.
  * I then set the initial state for the game.
  * I used the *setInterval(() => {}* to set the timer countdown.
  * I made the *endGame ()* function that runs when the timer is ended. Its locked the button and shows the restart button
  * I made the *resetGame ()* function that sets everything to the initial state.
  
4. **Guess the Number Game:**
  * Here I get the random number using the *Math.floor(Math.random() * 100) + 1;* and put it into a variable.
  * I put the required elements on the const variable.
  * I then set the initial state for the game.
  * I made the validation inside the logic that limit the user input into 1-100.
  * I used the if else cases for the condition of the guess.
  * I also made the *hint ()* function to make the game more engaging.
  * I made the *resetGame ()* function that sets everything to the initial state.
    
5. **Rock Paper Scissors Game:**
  * Here I generate a random hands for the Computer using the *const randomIndex = Math.floor(Math.random() * 3);*.
  * I Made the *startGame()* function to start randomizing the Computer hand.
  * I add *addEventListener('click', () => {}* for each of the player hands.
  * I also used the *addEventListener('click', () => {}* on the reset button, and set the game into initial state.
  * Each button click on Players hand will lock the others button and compare with the Computer hands. 

### How To Access
You can access the website from this Live URL:
  https://revou-fsse-feb26.github.io/milestone-2-adam-fsse/

You can access the repositories from here:
  https://github.com/Revou-FSSE-Feb26/milestone-2-adam-fsse
 

-end of file-