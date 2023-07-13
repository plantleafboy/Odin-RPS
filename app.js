function getComputerChoice() {
    let choice;


    return choice;
}

function playRound(playerSelection, computerSelection) {
    p_selection
    c_selection 
    if (playerSelection === "rock") { //logic for picking winner
        if (computerSelection === "scissors") {

        }
    }
    return `You Win! ${playerSelection} beats ${computerSelection}!`; //if player win
    return `You Lose! ${computerSelection} beats ${playerSelection}!`; //if player lose
    return `Tie! you both picked ${playerSelection}!`; //if tie
}

const playerSelection = prompt("paper scissors or rock?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));