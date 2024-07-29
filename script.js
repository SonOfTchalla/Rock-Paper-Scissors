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
    let playerEl = document.querySelector(".player")
    let computerEl = document.querySelector(".computer")
    let resultEl = document.querySelector(".result")
    let hScore = document.querySelector("#h-score")
    let cScore = document.querySelector("#c-score")

    playerEl.textContent = `You Chose: ${humanChoice}`;
    computerEl.textContent = `Computer Chose: ${computerChoice}`;
    if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore++;
        resultEl.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore++;
        resultEl.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore++;
        resultEl.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    }else if(computerChoice === humanChoice){
        resultEl.textContent = `${computerChoice} ties ${humanChoice}`;
    }else if(humanChoice === 'invalid input'){
        resultEl.textContent = 'invalid input! Please choose a valid option';
    } 
    else{
        humanScore++;
        resultEl.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    hScore.textContent = `Player Score: ${humanScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;
}

    

    
    
    