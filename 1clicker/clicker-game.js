const button = document.getElementById('click-btn');
const scoreSpan = document.getElementById('score-text');
const timerSpan = document.getElementById('timer-text');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let timeLeft = 10;
let gameActive = false;

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

//debug
console.log(score);
console.log(timeLeft);
console.log(gameActive);
});

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

function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    button.disabled = true;
    button.innerText = "TIME'S UP!";
    restartBtn.style.display = "inline-block";
}

function resetGame() {
    score = 0;
    timeLeft = 10;
    scoreSpan.innerText = score;
    timerSpan.textContent = timeLeft;
    button.disabled = false;
    button.innerText = "CLICK ME!";
    restartBtn.style.display = "none";
}

restartBtn.addEventListener('click', resetGame);

//debug
console.log(score);
console.log(timeLeft);
console.log(gameActive);
