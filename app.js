let playerWins = 0;
let computerWins = 0;
let p_text = document.querySelector("p");
const outcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};
let choices = ["paper", "scissors", "rock"];

let getPlayerChoice = function()  {return prompt("paper, scissors or rock?")};

let button_print_test = document.createElement("button");

document.body.appendChild(button_print_test);
button_print_test.addEventListener("click", game);
button_print_test.textContent = "Start round";

function getComputerChoice() {
    //console.log(choices[randomNumber])
    return choices[Math.floor(Math.random() * 3)];
    
}

function playRound(playerSelection, computerSelection) {
    console.log(`${playerSelection} + ${computerSelection}`);

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
    if (playerWins === 2 || computerWins === 2) {
        let gameWinner = playerWins > computerWins ? "Player" : "Computer";
        p_text.textContent = (`${gameWinner} won the best of 5!`)
        return;
        //alert(`${gameWinner} won the best of 5!`);
    }
    else {
        let computerSelection = getComputerChoice();
        console.log(playRound(getPlayerChoice(), computerSelection));

    }    
    console.log(`pwins: ${playerWins} & cWins: ${computerWins}`);
    return;
}

game();
