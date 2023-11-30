let playerWins = 0;
let computerWins = 0;
let p_display = document.querySelector(".top-left");
let c_display = document.querySelector(".top-right");
let standings = document.querySelector(".status-effect");
let status_text = document.querySelector(".status-text");
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
    (playRound(e.target.value, getComputerChoice())); 
    checkGame();
})

// let triggerStatus = new CustomEvent('triggerStatus', )

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
        status_text.textContent = `Tie! you both picked ${playerSelection}!`; //if tie
        standings.classList.remove('fadeIn');
        // standings.classList.add('fadeIn');
        setTimeout(function() {
            standings.classList.add('fadeIn');
        }, 10);
    }
    else if (outcomes[playerSelection] === computerSelection) {
        playerWins++;
        p_display.textContent = `Player: ${playerWins}`;
        status_text.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`; //if player win
        
        standings.classList.remove('fadeIn');
        // standings.classList.add('fadeIn');
        setTimeout(function() {
            standings.classList.add('fadeIn');
        }, 10);
    }
    else {
        computerWins++;
        c_display.textContent = `CP: ${computerWins}`;

        standings.classList.remove('fadeIn');
        status_text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`; //if player lose
        // standings.classList.add("fadeIn");
        setTimeout(function() {
            standings.classList.add('fadeIn');
        }, 10);
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    p_display.textContent = `Player: ${playerWins}`;
    c_display.textContent = `CP: ${computerWins}`;
    resetDiv.style.display = 'none';
    p_text.textContent = (`hello friends!`)
    status_text.textContent = "Another round...";
}

function checkGame() {
    if (playerWins === 3 || computerWins === 3) {
        let gameWinner = playerWins > computerWins ? "Player" : "Computer";
        p_text.textContent = `${gameWinner} wins!`;

        resetDiv.style.display = 'block';
        return;
    }
 

    console.log(`pwins: ${playerWins} & cWins: ${computerWins}`)
    console.log("----------------");
    return;
}
