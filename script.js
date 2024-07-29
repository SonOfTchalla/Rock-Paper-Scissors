//rock paper scissors game


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

function playGame(){
    //keep a score
    let humanScore = 0;
    let computerScore = 0;

    //play a single round
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

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

    }
    
    
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice()

            console.log(`-------Round ${i+1}-------`);
            console.log(`You chose: ${humanSelection.toLowerCase()}`);
            console.log(`Computer chose: ${computerSelection}`); 

            playRound(humanSelection, computerSelection);
            
            console.log(' ');
            console.log(`User Score: ${humanScore}`);
            console.log(`Computer Score: ${computerScore}`);
            console.log(' ');

        

        if(humanScore > computerScore)
        {
            console.log("You win!");
        }else if(humanScore == computerScore){
            console.log("It's a tie");
        }else{
            console.log("You lose!");
        }

}


//function call
playGame();