const outcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

function getComputerChoice() {
    let choices = ["paper", "scissors", "rock"];
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(choices[randomNumber])
    return choices[randomNumber];
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { //logic for picking winner
        return `Tie! you both picked ${playerSelection}!`; //if tie
    }
    else if (outcomes[playerSelection] === computerSelection) {
        playerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}!`; //if player win
    }
    else {
        computerWins++;
        return `You Lose! ${computerSelection} beats ${playerSelection}!`; //if player lose
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    if (playerWins !== 5 || computerWins !== 5) {
        let playerSelection = prompt("paper, scissors or rock?");
        playRound(playerSelection, getComputerChoice);
    }
    let gameWinner = (max(playerWins, computerWins));
    console.log(`${gameWinner} won the best of 5!`);
    return;
}



//const playerSelection = prompt("paper scissors or rock?");
const playerSelection = "rock";
const computerSelection = getComputerChoice();
let button_print_test = document.createElement("button");
button_print_test.addEventListener("click", getComputerChoice);
document.body.appendChild(button_print_test);
//game();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));