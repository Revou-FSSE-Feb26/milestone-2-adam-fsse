let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

const button = document.getElementById('guess-btn');
const restartBtn = document.getElementById('reset-btn');

button.addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const guessInput = document.getElementById("guessInput");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Please enter a valid number between 1 and 100!";
        guessInput.value = "";
        return;
    }

    if (userGuess === randomNumber) {
    document.getElementById("message").textContent = "Congratulations! You've guessed the number!";
    button.disabled = true;

    restartBtn.classList.remove('btn-hidden');
    
    } else {
    attempts--;
    document.getElementById("attempts").textContent = attempts;

    if (attempts > 0) {
        hint(); 
    } else {
        document.getElementById("message").textContent = `Game over! The number was ${randomNumber}.`;
        button.disabled = true;
        guessInput.disabled = true;

        restartBtn.classList.remove('btn-hidden');
    }
}
});

function hint() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const diff = userGuess - randomNumber;
    let hintWay = "";

    switch (true) {
        case (diff < -10):
            hintWay = "way ";
        case (diff < 0):
            hintWay += "too low";
            document.getElementById("message").textContent = `You guessed ${userGuess}. It's ${hintWay}! Try a higher number.`;
            break;

        case (diff > 10):
            hintWay = "way ";
        case (diff > 0):
            hintWay += "too high";
            document.getElementById("message").textContent = `You guessed ${userGuess}. It's ${hintWay}! Try a lower number.`;
            break;
    }
}

const guessInput = document.getElementById("guessInput");
guessInput.addEventListener("click", function() {
    this.value = ""; 
});

restartBtn.addEventListener('click', resetGame);

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    button.disabled = false;
    guessInput.disabled = false;
    
    restartBtn.classList.add('btn-hidden');
    
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("guessInput").value = "";
}