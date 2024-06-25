//rock paper scissors game

//keep a score
let humanScore = 0;
let computerScore = 0;

//keep a round count

//get the computer choice
function getComputerChoice () {
    let compChoice = Math.random()
    if(compChoice >= 0 && compChoice <= 0.33){
        return "rock";
    } else if(compChoice > 0.33 && compChoice <= 0.66) {
        return "paper";
    }
    else{
        return "scissors";
    }    
}

//get the human choice
function getHumanChoice() {
    let userChoice = prompt("Choose one of the following options: Rock, Paper or Scissors. What is your choice?");
    if(userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors"){
        return userChoice;
    }else{
        return 'invalid input';
    }
}

//play a single round
function playRound(humanChoice, computerChoice){
    /*humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();*/

    if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}`;
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}`;
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        return `You lost! ${computerChoice} beats ${humanChoice}`;
    }else if(computerChoice === humanChoice){
        return `${computerChoice} ties ${humanChoice}`;
    }else if(humanChoice === 'invalid input'){
        return 'invalid input! Please choose a valid option';
    } 
    else{
        humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}`;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

console.log(`You chose: ${humanSelection.toLowerCase()}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(humanSelection, computerSelection));

//continue from step 6

//delcare the winner */