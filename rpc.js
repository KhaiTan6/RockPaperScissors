//console.log("Hello World");

function get_computer_choice(){
    var options = ["rock", "paper", "scissors"]
    var choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function play_round(playerSelection, computerSelection){
    choice = playerSelection.toLowerCase()
    if (choice == computerSelection){
        return "It's a tie!"
    }
    else if (choice == "rock"){
        if (computerSelection == "paper"){
            return "You lose! Paper beats Rock"
        }
        else{
            return "You win! Rock beats Scissors"
        }
    }
    else if (choice == "paper"){
        if (computerSelection == "rock"){
            return "You win! Paper beats Rock"
        }
        else{
            return "You lose! Scissors beats Paper"
        }
    }
    else if (choice == "scissors"){
        if (computerSelection == "rock"){
            return "You lose! Rock beats Scissors"
        }
        else{
            return "You win! Scissors beats Paper"
        }
    }
    else{
        return "Invalid input"
    }
}
function game(){
    var playerScore = 0
    var computerScore = 0
    var roundNum = 1
    for (var i = 0; i < 5; i++){
        var playerSelection = prompt('Round ' + roundNum + ', Enter your choice: Rock, Paper, or Scissors')
        var computerSelection = get_computer_choice()
        var result = play_round(playerSelection, computerSelection)
        console.log(result)
        if (result.includes("win")){
            playerScore += 1
        }
        else if (result.includes("lose")){
            computerScore += 1
        }
        roundNum += 1
    }
    if (playerScore > computerScore){
        console.log("Final results: You win!")
    }
    else if (playerScore < computerScore){
        console.log("Final results: You lose!")
    }
    else{
        console.log("Final results: It's a tie!")
    }
}
game();
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log("Computer chose: " + computerSelection);
//console.log(playRound(playerSelection, computerSelection));

