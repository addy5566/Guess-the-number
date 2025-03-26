let randomNum = (Math.round(Math.random()*100) + 1);
console.log(randomNum);
let submit = document.querySelector("#subt");
let userInput = document.querySelector(".guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
const advice = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.');
    }

    else if(guess<1){
        alert('Please enter a number greater than 1.');
    }

    else if(guess>100){
        alert('Please enter a number less than 100.');
    }

    else {
        prevGuesses.push(guess);
        numGuesses++;
        cleanupGuess(guess);
        checkGuess(guess);
        
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMessage(`You guessed it right.`);
        endGame();
    }

    if(numGuesses >= 10 ){
        displayMessage(`Game Over. The correct number was ${randomNum}.`);
        endGame();
    }

    else if(guess>randomNum){
        displayMessage(`your number is too high.`)
    }

    
    else if(guess<randomNum){
        displayMessage(`Your number is too low.`);
    }

    
}

function cleanupGuess(guess){
    userInput.value= "";
    guessSlot.innerHTML += `${guess}  `;
    remaining.innerHTML = `${10-numGuesses}`;
}

function displayMessage(w){
    advice.innerHTML = `${w}`;
}


function endGame(){
    userInput.value =  '';
    userInput.disabled = true;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}



function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(){
        randomNum = (Math.round(Math.random()*100) + 1);
        prevGuesses =[];
        numGuesses = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = "10";
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage("");
        playGame = true;
        
    })
}

