const randomImage = document.getElementById('random-image');

const images = [
        '../assets/rock.png',
        '../assets/paper.png',
        '../assets/scissors.png',
    ];

let idInterval;

function startGame() {
idInterval = setInterval(() => {
    // this will pick a random index to chose from the images array, which will be used to change the image source to create a cycling effect.
    const randomIndex = Math.floor(Math.random() * 3);
    // This will change the image source DOM element on a 50ms interval to create a cycling effect.
randomImage.src = images[randomIndex];
}, 50);
}

startGame();

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resetBtn = document.getElementById('reset-btn');


// This is the event listener for user buttons clicks.
// It will stop the image cycling and determine the winner with the function checkWinner().
// the check is based on the user's choice and the computer's choice.
// The computer's choice is extracted from the current image source by splitting the string to get the filename without the extension.
// After determining the winner, it disables the other buttons and shows the reset button to allow the user to play again.
rockBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    const userChoice = 'rock';
    const computerChoice = randomImage.src.split('/').pop().split('.')[0];
    checkWinner(userChoice, computerChoice);
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    resetBtn.classList.remove('btn-hidden');
    // modify to classList to remove the btn-hidden class to show the reset button
    // resetBtn.style.display = "inline-block";
});

paperBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    const userChoice = 'paper';
    const computerChoice = randomImage.src.split('/').pop().split('.')[0];
    checkWinner(userChoice, computerChoice);
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;

    resetBtn.classList.remove('btn-hidden');
    // modify to classList to remove the btn-hidden class to show the reset button
    // resetBtn.style.display = "inline-block";
});

scissorsBtn.addEventListener('click', () => {
    clearInterval(idInterval);
    const userChoice = 'scissors';
    const computerChoice = randomImage.src.split('/').pop().split('.')[0];
    checkWinner(userChoice, computerChoice);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    
    resetBtn.classList.remove('btn-hidden');
    // modify to classList to remove the btn-hidden class to show the reset button
    // resetBtn.style.display = "inline-block";
});

resetBtn.addEventListener('click', () => {
    startGame();
    
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    resetBtn.classList.add('btn-hidden');
    // modify to classList to add the btn-hidden class to hide the reset button
    // resetBtn.style.display = "none";
    document.getElementById('message').textContent = '';
});


// this function will check the case to determine winner
// there are 3 cases: tie, win, and lose as a default case.
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

    // Update DOM based on the function check case
    document.getElementById('message').textContent = message;
}