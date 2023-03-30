let playerSelection;
let computerSelection = getComputerChoice();
function getComputerChoice(){
    n = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(n == 1){
        return "ROCK";
    } else if(n == 2){
        return "PAPER";
    } else{
        return "SCISSORS";
    }
}

let playerWins = 0;
let cpuWins = 0;
function game(){    
    for(let i = 1; i <= 5; i++){ 
        playerSelection = prompt("Pick between rock paper scissors", 'Rock').toUpperCase();   
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);          
    }
    console.log(`CPU wins: ${cpuWins}`);
    console.log(`Player wins: ${playerWins}`);
    if(playerWins > cpuWins){
        console.log('You win the game!!!');
    }else if(playerWins < cpuWins){
        console.log('You lose the game!!!');
    }else{
        console.log('It\' a TIE!');
    }
}


function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
        console.log(`Nobody wins. Both players picked ${playerSelection}`);
    }else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log('You win. Scissors beats Paper');
        playerWins++;
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log('You win. Rock beats Scissors');
        playerWins++;
    }else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log('You win. Paper beats Rock');
        playerWins++;
    }else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log('You lose. Scissors beats Paper');
        cpuWins++;
    }else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log('You lose. Paper beats Rock');
        cpuWins++;
    }else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log('You lose. Rock beats Scissors');
        cpuWins++;
    }
    }

game();