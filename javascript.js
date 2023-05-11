const boxes = document.querySelectorAll('li');
const resultsOutput = document.querySelector('.game-result');
const para = document.createElement('p')
resultsOutput.insertBefore(para, resultsOutput.firstElementChild);

const score = document.querySelector('.game-stats');
const playerScore = document.createElement('p');
score.appendChild(playerScore);
const cpuScore = document.createElement('p');
score.appendChild(cpuScore);


const gameResult = document.createElement('p');
resultsOutput.parentNode.appendChild(gameResult);
console.log(resultsOutput.parentNode);

const btn = document.createElement('button');
btn.textContent = 'Play again?';
btn.classList.add('btn-10', 'custom-btn');

let playerWins = 0;
let cpuWins = 0;

boxes.forEach(box => {
    box.addEventListener('click', getPlayerChoice);
});

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    let result;

    if(playerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
        result = `Nobody wins. Both players picked ${playerSelection}`;

    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        result = 'You win. Scissors beats Paper';
        playerWins++;

    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        result = 'You win. Rock beats Scissors';
        playerWins++;

    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        result = 'You win. Paper beats Rock';
        playerWins++;

    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        result = 'You lose. Scissors beats Paper';
        cpuWins++;

    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        result = 'You lose. Paper beats Rock';
        cpuWins++;

    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        result = 'You lose. Rock beats Scissors';
        cpuWins++;
    }} 
    //     else {
    //     alert("Canceled");
    // } // !! only for prompt version; alert if the prompt is canceled
    para.textContent = result;
}

function getComputerChoice() {
    n = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (n == 1) {
    return "ROCK";
    } else if(n == 2){
        return "PAPER";
    } else{
        return "SCISSORS";
    }
} 

function playGame(p, cpu) {
    const pCount = document.querySelectorAll('.game-stats p');
    pCount[0].textContent = `P1: ${p}`;
    pCount[1].textContent = `CPU: ${cpu}`;
    if (p == 5) {
        gameResult.textContent = 'Game over! Player wins!';
        playerWins = 0;
        cpuWins = 0;
        boxes.forEach(box => {
            box.removeEventListener('click', getPlayerChoice);
            resultsOutput.parentNode.appendChild(btn);
            btn.style.display = 'block';
        });
        
    } else if (cpu == 5) {
        gameResult.textContent = 'Game over! CPU wins!';
        playerWins = 0;
        cpuWins = 0;
        boxes.forEach(box => {
            box.removeEventListener('click', getPlayerChoice);
            resultsOutput.parentNode.appendChild(btn);
            btn.style.display = 'block';
        });
    }
}

function getPlayerChoice() {
    const playerChoice = this.textContent.replace(/\s{2,}/g,'');
    playRound(playerChoice);    
    playGame(playerWins, cpuWins);
}

btn.addEventListener('click', () => {
    gameResult.textContent = '';
    para.textContent = '';
    playerScore.textContent = '';
    cpuScore.textContent = '';
    btn.style.display = 'none';
    boxes.forEach(box => {
        box.addEventListener('click', getPlayerChoice);
    });
});


// !!! Prompt version; updated it to interactive UI with a click event listener

// let playerSelection;
// let computerSelection;


// function game() {    
//     let gameStatus = 1;
//     for (let i = 1; i <= 5; i++) { 
//         playerSelection = prompt("Pick between \"Rock\", \"Paper\" or \"Scissors\"", 'Rock');   
//         if (playerSelection == null) {
//             i = 5;
//             gameStatus = 0;
//         } else {
//         console.log(`Round ${i}!`);    
//         playerSelection = playerSelection.toUpperCase();
//         computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);     
//         }     
//     }
//     if (gameStatus == 1) {
//     console.log(`The game has ended. Here are the results:`);
//     console.log(`CPU wins: ${cpuWins}`);
//     console.log(`Player wins: ${playerWins}`);
//     if (playerWins > cpuWins) {
//         alert('You win the game!!!');
//     } else if (playerWins < cpuWins){
//         alert('You lose the game!!!');
//     } else {
//         alert('It\' a TIE!');
//     }} else {
//         alert('Game abandoned!');
//     }
// } // prompt version for 5 round game


// function getPlayerChoice() {
//     playerChoice = prompt("Pick between \"Rock\", \"Paper\" or \"Scissors\"", 'Rock');   
//     return playerChoice;
// } 

