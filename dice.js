// Function that rolls the dice and updates the numbers
function rollDice() {
    // prints random #
    document.getElementById("dice1").value = getRandomNumber();
    document.getElementById("dice2").value = getRandomNumber();
}

// ensures number will be between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
