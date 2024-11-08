let tries = 7;
let guess = '';
let code = generateCode();

function generateCode() {
    // Generate a random code with digits from 1 to 3
    return Array.from({length: 3}, () => Math.floor(Math.random() * 3) + 1).join('');
}

//In the case theres not enough digits in the number, adds digits so that theres 3
function addDigit(digit) {
    if (guess.length < 3) {
        guess += digit;
        updateDisplay();
        
        if (guess.length === 3) {
            checkGuess();
        }
    }
}
//Shows 3 underscores which when the 1-3 numbers are entered, they can be placed in place of the underscore
function updateDisplay() {
    document.getElementById('digit1').innerText = guess[0] || '_';
    document.getElementById('digit2').innerText = guess[1] || '_';
    document.getElementById('digit3').innerText = guess[2] || '_';
}

//main activity
function checkGuess() {
    if (guess === code) {
        alert("You cracked the vault!");
        resetGame();
    } else {
        //Tells if the guess is too high or too low
        let feedback = guess > code ? "Lower" : "Higher";
        //logs guess
        logAttempt(`${guess}: ${feedback}`);
        tries--;
        document.getElementById('tries-left').innerText = tries;
        
        if (tries === 0) {
            alert("Out of tries! Game Over.");
            resetGame();
        } else {
            clearGuess();
        }
    }
}
function clearGuess() {
    guess = '';
    updateDisplay();
}

function logAttempt(message) {
    const logList = document.getElementById('log-list');
    const logItem = document.createElement('li');
    logItem.innerText = message;
    logList.appendChild(logItem);
}

function resetGame() {
    tries = 7;
    code = generateCode();
    document.getElementById('tries-left').innerText = tries;
    document.getElementById('log-list').innerHTML = '';
    clearGuess();
}