//rock paper scissors game

//keep a score
let humanScore = 0;
let computerScore = 0;

//Query selectors
let rockEl = document.querySelector("#rock")
let paperEl = document.querySelector("#paper")
let scissorsEl = document.querySelector("#scissors")

//Event listeners
rockEl.addEventListener("click", () => {
    let userChoice = "rock";
    const computerSelection = getComputerChoice()
    playRound(userChoice, computerSelection);
})

paperEl.addEventListener("click", () => {
    let userChoice = "paper";
    const computerSelection = getComputerChoice()
    playRound(userChoice, computerSelection);
})

scissorsEl.addEventListener("click", () => {
    let userChoice = "scissors";
    const computerSelection = getComputerChoice()
    playRound(userChoice, computerSelection);
})

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

//play a single round
function playRound(humanChoice, computerChoice){
    //humanChoice = humanChoice.toLowerCase();

    console.log(`You chose ${humanChoice}`)
    console.log(`Computer chose ${computerChoice}`)
    if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    }else if(computerChoice === humanChoice){
        console.log(`${computerChoice} ties ${humanChoice}`);
    }else if(humanChoice === 'invalid input'){
        console.log('invalid input! Please choose a valid option');
    } 
    else{
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

    

    
    
    