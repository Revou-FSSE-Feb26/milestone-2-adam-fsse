const randomImage = document.getElementById('random-image');

const images = [
        '../assets/img/rock.png',
        '../assets/img/paper.png',
        '../assets/img/scissors.png',
    ];

let idInterval;

function startGame() {
idInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * 3);
randomImage.src = images[randomIndex];
}, 50);
}

startGame();

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resetBtn = document.getElementById('reset-btn');

const choiceBtns = document.querySelectorAll('.click-button');

choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(idInterval);

        const userChoice = btn.id.replace('-btn', '');
        const computerChoice = randomImage.src.split('/').pop().split('.')[0];

        checkWinner(userChoice, computerChoice);

        choiceBtns.forEach(b => {
            if (b !== btn) b.disabled = true;
        });

        resetBtn.classList.remove('btn-hidden');
    });
});

resetBtn.addEventListener('click', () => {
    startGame();
    
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    resetBtn.classList.add('btn-hidden');
    document.getElementById('message').textContent = '';
});

function checkWinner(userChoice, computerChoice) {
    const outcome = `${userChoice}-${computerChoice}`;
    let message = '';

    switch (outcome) {
        case 'rock-rock':
        case 'paper-paper':
        case 'scissors-scissors':
            message = `It's a tie! You both chose ${userChoice}.`;
            break;
        
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            message = `You win! ${userChoice} beats ${computerChoice}.`;
            break;
        
        default:
            message = `You lose! ${computerChoice} beats ${userChoice}.`;
            break;
    }

    document.getElementById('message').textContent = message;
}