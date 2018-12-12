// setting global variables
var wins = 0
var losses = 0
var alphabet = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'] 
var triesLeft = 10
var prevGuessed = []
var compLtr = compLtr
var guessHTML = document.getElementById('guesses');
var newGuess = document.createElement('div');
    newGuess.textContent = triesLeft;

//computer picks random letter
compLtr = alphabet[Math.floor(Math.random() * alphabet.length)];
    //Confirm random letter selection worked with console.log. Each refresh producted a different letter.
    console.log(compLtr);

//function of the game is the computer picking the random letter
function ltrPick () {
    compLtr = alphabet[Math.floor(Math.random() * alphabet.length)];
}

//logging correct guess
document.onkeyup = function (event) {

    function game () {
    var guess = event.key;
    if (guess === compLtr) {
        triesLeft = 10;
        prevGuessed = [];
        wins++;
        alert ("Good job! You Win!")
    } else { 
        triesLeft--;
    }
    
    if (triesLeft == 0) {
        losses++;
        alert("You lost!");
    }
    
    if (prevGuessed.indexOf(guess) >= 0) {
        
    } else {
        prevGuessed.push(guess);
        document.getElementById('lettersGuessed').innerHTML = prevGuessed;
    }

console.log(guess);
console.log(wins);
console.log(losses);
}
}

    //documenting wins/losses
    function win () {
    var windiv = document.getElementById('wins');
    var newWinDiv = document.createElement('div');
        newWinDiv.textContent = wins;
    windiv.appendChild(newWinDiv);
    }

    function lose () {
    var lossdiv = document.getElementById('losses');
    var newLossDiv = document.createElement('div');
        newLossDiv.textContent = losses;
    lossdiv.appendChild(newLossDiv);
    }

    function attempts (){
        if (triesLeft < 10) {
            newGuess.innerHTML = triesLeft --;
        }
    }
