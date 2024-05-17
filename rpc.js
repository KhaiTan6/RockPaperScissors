// Initialize scores
let playerScore = 0;
let computerScore = 0;

function get_computer_choice(){
    var options = ["rock", "paper", "scissors"];
    var choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id !== 'reset') {
            button.disabled = true;
        }
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayScores();
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = '';
    enableButtons();
}

// Function to update and display the scores
function displayScores() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// Function to play a single round and update scores and results
function play_round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === computerSelection){
        result = "It's a tie!";
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            result = "You lose! Paper beats Rock";
            computerScore++;
        }
        else{
            result = "You win! Rock beats Scissors";
            playerScore++;
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            result = "You win! Paper beats Rock";
            playerScore++;
        }
        else{
            result = "You lose! Scissors beats Paper";
            computerScore++;
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            result = "You lose! Rock beats Scissors";
            computerScore++;
        }
        else{
            result = "You win! Scissors beats Paper";
            playerScore++;
        }
    }
    else{
        result = "Invalid input";
    }
    
    // Update scores and results
    displayScores();
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = result;

    // Announce winner if one player reaches 5 points
    if (playerScore === 5) {
        resultsDiv.textContent += "\nCongratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultsDiv.textContent += "\nSorry, you lose the game!";
        disableButtons();
    }
}

// Function to initiate the game
function game(){
    // Get the buttons for each selection
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    const resetButton = document.getElementById('reset');

    // Add event listeners to each button
    rockButton.addEventListener('click', function() {
        play_round("rock", get_computer_choice());
    });

    paperButton.addEventListener('click', function() {
        play_round("paper", get_computer_choice());
    });

    scissorsButton.addEventListener('click', function() {
        play_round("scissors", get_computer_choice());
    });

    resetButton.addEventListener('click', function() {
        resetGame();
    });
    
    // Update scores initially
    displayScores();
}

// Call the game function to start the game
game();
