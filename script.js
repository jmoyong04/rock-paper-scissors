/*
Rock paper scissors game:
    Create function to play a round
        Get choice from Computer
        Get choice from user
        Display who won
        Display current score
    Create a function to play entire game
*/
let choices = document.querySelector("#container")
let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector("#paper")
let btnScissors = document.querySelector("#scissors")
let displayResults = document.querySelector("#display-results")
let humanScore = 0
let computerScore = 0 


function getComputerChoice(){
let choice = Math.floor(Math.random() * 3) + 1
switch(choice){
    case 1:
        return "rock"
    case 2:
        return "paper"
    case 3:
        return "scissors"
    }   
}
function playGame(){
    function handleClick(e){
        let target = e.target
        switch(target.id) {
            case 'rock':
                playRound('rock')
                break;
            case 'paper':
                playRound('paper')
                break;
            case 'scissors':
                playRound('scissors')
                break;
        }
    }
    choices.addEventListener('click', handleClick)
    function checkScore(humanScore, computerScore){
        if (humanScore == 5 || computerScore == 5){
            choices.removeEventListener('click', handleClick);
            const message = document.createElement("p")
            if (computerScore == 5){
                message.textContent = `Game over :( you lost ${humanScore} to ${computerScore}`
                displayResults.appendChild(message)
            }
            else {
                message.textContent = `Good Job! You won ${humanScore} to ${computerScore}`
                displayResults.appendChild(message)
            }
        }
    }
    function playRound(humanChoice, computerChoice = getComputerChoice()){
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
            humanScore++
            const message = document.createElement("p")
            message.textContent = (`You win this round! ${humanChoice} beats ${computerChoice}.
                                        You: ${humanScore} Computer: ${computerScore}
                `)
            displayResults.appendChild(message)
            checkScore(humanScore, computerScore)
        }
        else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")){
            computerScore++
            const message = document.createElement("p")
            message.textContent = `Oh no! You lost the round. ${computerChoice} beats ${humanChoice}.
                                        You: ${humanScore} Computer: ${computerScore}`
            displayResults.appendChild(message)
            checkScore(humanScore, computerScore)
    
        }
        else {
            const message = document.createElement("p")
            message.textContent = "Its a tie! Play again"
            displayResults.appendChild(message)
        }
    }
}

playGame();



