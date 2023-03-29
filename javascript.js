let playerSelection = prompt("Pick between rock paper scissors", 'Rock').toUpperCase();
let computerSelection = getComputerChoice().toUpperCase();
function getComputerChoice(){
    n = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(n == 1){
        return "rock";
    } else if(n == 2){
        return "paper";
    } else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "ROCK" && computerSelection == "ROCK"){
        console.log('Nobody wins. Both players picked rock');
    }else if(playerSelection == "PAPER" && computerSelection == "PAPER"){
        console.log('Nobody wins. Both players picked paper');
    }else if(playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
        console.log('Nobody wins. Both players picked scissors');
    }else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        console.log('You win. Scissors beats paper');
    }else if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        console.log('You win. Rock beats scissors');
    }else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log('You win. Paper beats rock')
    }else if(playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        console.log('You lose. Scissors beats paper')
    }else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log('You lose. Paper beats rock')
    }else if(playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        console.log('You lose. Rock beats scissors')
    }
    }


console.log(playRound(playerSelection, computerSelection));