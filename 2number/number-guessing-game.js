let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

const button = document.getElementById('guess-btn');
const restartBtn = document.getElementById('reset-btn');

button.addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const guessInput = document.getElementById("guessInput");

    // Validation Check - ensures the user input is a number between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Please enter a valid number between 1 and 100!";
        guessInput.value = ""; // Clear the bad input
        return; // Stop the function here
    }

    // Main game logic - checks if the user's guess is correct, and if not, provides feedback and updates attempts
    if (userGuess === randomNumber) {
    document.getElementById("message").textContent = "Congratulations! You've guessed the number!";
    button.disabled = true;

    restartBtn.classList.remove('btn-hidden');
    // modify to classList to remove the btn-hidden class to show the restart button
    // restartBtn.style.display = "inline-block";
    
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
        // modify to classList to remove the btn-hidden class to show the restart button
        // restartBtn.style.display = "inline-block";
    }
}
});


// this will gives a hint "too high" or "too low", and if it's more than 10 points away, it gives a "way too high" or "way too low" hint
function hint() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const diff = userGuess - randomNumber;
    let hintWay = "";

    switch (true) {
        // Low Guesses
        case (diff < -10):
            hintWay = "way "; // Starts the string
        case (diff < 0):
            hintWay += "too low"; // Adds "low" to whatever hintWay currently is
            document.getElementById("message").textContent = `You guessed ${userGuess}. It's ${hintWay}! Try a higher number.`;
            break;

        // High Guesses
        case (diff > 10):
            hintWay = "way ";
        case (diff > 0):
            hintWay += "too high";
            document.getElementById("message").textContent = `You guessed ${userGuess}. It's ${hintWay}! Try a lower number.`;
            break;
    }
}

// clears the input field when clicked
const guessInput = document.getElementById("guessInput");
guessInput.addEventListener("click", function() {
    this.value = ""; 
});

// this will listen for the restart button click and run the resetGame function to reset the game state
restartBtn.addEventListener('click', resetGame);

// this function resets the game state to start a new game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    button.disabled = false;
    guessInput.disabled = false;
    
    restartBtn.classList.add('btn-hidden');
    // modify to classList to add the btn-hidden class to hide the restart button
    // restartBtn.style.display = "none";
    
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("guessInput").value = "";
}

