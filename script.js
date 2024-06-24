//rock paper scissors game

//keep a score
let humanScore = 0;
let computerScore = 0;

//keep a round count

//get the computer choice
function getComputerChoice () {
    let compChoice = Math.random()
    if(compChoice >= 0 && compChoice < 0.33){
        return "rock";
    } else if(compChoice > 0.33 && compChoice <= 0.66) {
        return "paper";
    }
    else{
        return "scissors";
    }    
}
//console.log(`Computer chose: ${getComputerChoice()}`);

//get the human choice
function getHumanChoice() {
    let userChoice = prompt("Choose one of the following options: 0-Rock, 1-Paper, 2-Scissors. What is your choice?");
    if(userChoice === '0'){
        return 'rock';
    }else if(userChoice === '1'){
        return 'paper';
    }else if(userChoice === '2'){
        return 'scissors';
    }else{
        return 'invalid input';
    }
}
//console.log(`User chose: ${getHumanChoice()}`);

//play a single round
function playRound(humanChoice, computerChoice){
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
        return 'invalid input';
    } 
    else{
        humanScore++;
        return `You won! ${humanChoice} beats ${computerChoice}`;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection));

//continue from step 6

//delcare the winner