const randomImage = document.getElementById('random-image');

const images = [
        '../assets/rock.png',
        '../assets/paper.png',
        '../assets/scissors.png',
    ];

let idInterval;

function startGame() {
idInterval = setInterval(() => {
    // 3. Pick a random index
    const randomIndex = Math.floor(Math.random() * 3);
    // 4. Change the image source
randomImage.src = images[randomIndex];
}, 50);
}

startGame();

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resetBtn = document.getElementById('reset-btn');

rockBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    const userChoice = 'rock';
    const computerChoice = randomImage.src.split('/').pop().split('.')[0];
    checkWinner(userChoice, computerChoice);
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetBtn.style.display = "inline-block";
});

paperBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    const userChoice = 'paper';
    const computerChoice = randomImage.src.split('/').pop().split('.')[0];
    checkWinner(userChoice, computerChoice);
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    resetBtn.style.display = "inline-block";
});

scissorsBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    const userChoice = 'scissors';
    const computerChoice = randomImage.src.split('/').pop().split('.')[0];
    checkWinner(userChoice, computerChoice);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    resetBtn.style.display = "inline-block";
});

resetBtn.addEventListener('click', () => {
    startGame();
    
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    resetBtn.style.display = "none";
    document.getElementById('message').textContent = '';
});

// determine winner
// function checkWinner(userChoice, computerChoice) {
//     let message = '';
//     if (userChoice === computerChoice) {
//         message = `It's a tie! You both chose ${userChoice}.`;
//     } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
//                (userChoice === 'paper' && computerChoice === 'rock') ||
//                (userChoice === 'scissors' && computerChoice === 'paper')) {
//         message = `You win! ${userChoice} beats ${computerChoice}.`;
//     } else {
//         message = `You lose! ${computerChoice} beats ${userChoice}.`;
//     }   
//     document.getElementById('message').textContent = message;
// }

// prefer switch case to determine winner
function checkWinner(userChoice, computerChoice) {
    const outcome = `${userChoice}-${computerChoice}`;
    let message = '';

    switch (outcome) {
        // Tie Cases
        case 'rock-rock':
        case 'paper-paper':
        case 'scissors-scissors':
            message = `It's a tie! You both chose ${userChoice}.`;
            break;
        
        // Winning Cases
        case 'rock-scissors':
        case 'paper-rock':
        case 'scissors-paper':
            message = `You win! ${userChoice} beats ${computerChoice}.`;
            break;
        
        // Losing Cases
        default:
            message = `You lose! ${computerChoice} beats ${userChoice}.`;
            break;
    }

    // Update DOM
    document.getElementById('message').textContent = message;
}