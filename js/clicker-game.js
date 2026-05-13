const button = document.getElementById('click-btn');
const scoreSpan = document.getElementById('score-text');
const timerSpan = document.getElementById('timer-text');
const restartBtn = document.getElementById('restart-btn');

let score = 0;
let timeLeft = 10;
let gameActive = false;
let timerInterval;

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
    
    const prevBest = localStorage.getItem('clickerHighScore') || 0;
    if (score > prevBest) {
        localStorage.setItem('clickerHighScore', score);
        document.getElementById('high-score').textContent = `New Best: ${score}!`;
    } else {
        document.getElementById('high-score').textContent = `Best: ${prevBest}`;
    }

    restartBtn.classList.remove('btn-hidden');
}

function resetGame() {
    score = 0;
    timeLeft = 10;
    scoreSpan.innerText = score;
    timerSpan.textContent = timeLeft;
    button.disabled = false;
    button.innerText = "CLICK ME!";
    document.getElementById('high-score').textContent = '';
    restartBtn.classList.add('btn-hidden');
}

restartBtn.addEventListener('click', resetGame);