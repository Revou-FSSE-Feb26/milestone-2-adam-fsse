const button = document.getElementById('click-btn');
const scoreSpan = document.getElementById('score-text');
const timerSpan = document.getElementById('timer-text');
const restartBtn = document.getElementById('restart-btn');

// this is the initial game state variables
let score = 0;
let timeLeft = 10;
let gameActive = false;
let timerInterval;

// this will listen for the click button
// if the game is active and timer is still in initial state, then it will starts the game
// if the game is active, it will increase the score by 1 and update the score display
// else if the game is not active, it will disable the button to prevent further clicks
button.addEventListener('click', () => {
    if (!gameActive && timeLeft === 10) {
        startGame();
    }
    if (gameActive) {
        score++;
        scoreSpan.textContent = score;
    } 
    else {
        button.disabled = true;
    }
});

// this function starts the game by setting gameActive to true and starting a timer that counts down every second
function startGame() {
    gameActive = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// this function ends the game by setting gameActive to false, clearing the timer interval, disabling the click button, and showing the restart button
function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    button.disabled = true;
    button.innerText = "TIME'S UP!";
    
    restartBtn.classList.remove('btn-hidden');
    // modify to classList to remove the btn-hidden class to show the restart button
    //restartBtn.style.display = "inline-block";
}

// this function resets the game state to start a new game by resetting the score and timer, enabling the click button, and hiding the restart button
function resetGame() {
    score = 0;
    timeLeft = 10;
    scoreSpan.innerText = score;
    timerSpan.textContent = timeLeft;
    button.disabled = false;
    button.innerText = "CLICK ME!";

    restartBtn.classList.add('btn-hidden'); 
    // modify to classList to add the btn-hidden class to hide the restart button
    //restartBtn.style.display = "none";
}

// this will listen for the restart button click and run the resetGame function to reset the game state
restartBtn.addEventListener('click', resetGame);
