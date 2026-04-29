let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

const button = document.getElementById('guess-btn');
const restartBtn = document.getElementById('reset-btn');

button.addEventListener('click', () => {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const guessInput = document.getElementById("guessInput");

    // Validation Check
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Please enter a valid number between 1 and 100!";
        guessInput.value = ""; // Clear the bad input
        return; // Stop the function here
    }

    // Main game logic
    if (userGuess === randomNumber) {
    document.getElementById("message").textContent = "Congratulations! You've guessed the number!";
    button.disabled = true;
    restartBtn.style.display = "inline-block";
    } else {
    attempts--;
    document.getElementById("attempts").textContent = attempts;

    if (attempts > 0) {
        hint(); 
    } else {
        document.getElementById("message").textContent = `Game over! The number was ${randomNumber}.`;
        button.disabled = true;
        guessInput.disabled = true;
        restartBtn.style.display = "inline-block";
    }
}

//debug
console.log(randomNumber);
console.log(attempts);
console.log(userGuess);
console.log(button);
});


//gives a hint "too high" or "too low", and if it's more than 10 away, it gives a "way too high" or "way too low" hint
function hint() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    let hintWay = "";
    if (userGuess < randomNumber) {
        if (userGuess+10 < randomNumber) {
            hintWay = "way too low";
        } else {
            hintWay = "too low";
        }
        document.getElementById("message").textContent = `You guessed ${userGuess}. It's ${hintWay}! Try a higher number.`;
    
    } else if (userGuess > randomNumber) {
        if (userGuess-10 > randomNumber) {
            hintWay = "way too high";
        } else {
            hintWay = "too high";
        }
        document.getElementById("message").textContent = `You guessed ${userGuess}. It's ${hintWay}! Try a lower number.`;
    }

//debug
console.log(hintWay);
}

// clears the input field when clicked
const guessInput = document.getElementById("guessInput");

guessInput.addEventListener("click", function() {
    this.value = ""; 
});

// restart button
restartBtn.addEventListener('click', resetGame);

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    button.disabled = false;
    guessInput.disabled = false;
    restartBtn.style.display = "none";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("guessInput").value = "";
}

//debug
console.log(randomNumber);
console.log(attempts);
console.log(userGuess);
console.log(button);