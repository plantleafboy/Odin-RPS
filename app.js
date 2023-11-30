let playerWins = 0;
let computerWins = 0;
let p_text = document.querySelector("p");
let resetDiv = document.querySelector("#resetDiv")
let resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', resetGame);


const outcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};
let choices = ["paper", "scissors", "rock"];

//let getPlayerChoice = function()  {return prompt("paper, scissors or rock?")};

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let selection = document.querySelector(".selection");
selection.addEventListener("click", (e) => {
    console.log(playRound(e.target.value, getComputerChoice())); 
    checkGame();
})

// document.choices.append(button_print_test);
// button_print_test.addEventListener("click", game);
// button_print_test.textContent = "Start round";

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

function resetGame() {
    playerWins = 0;
    computerWins = 0;

    resetDiv.style.display = 'none';
    p_text.textContent = (`champions are made here!`)
}

function checkGame() {
    if (playerWins === 3 || computerWins === 3) {
        let gameWinner = playerWins > computerWins ? "Player" : "Computer";
        p_text.textContent = (`${gameWinner} won the best of 5!`)

        resetDiv.style.display = 'block';
        return;
        //alert(`${gameWinner} won the best of 5!`);
    }
    // else {
    //     let computerSelection = getComputerChoice();
    //     console.log(playRound(getPlayerChoice(), computerSelection));

    // }    

    console.log(`pwins: ${playerWins} & cWins: ${computerWins}`)
    console.log("----------------");
    return;
}
