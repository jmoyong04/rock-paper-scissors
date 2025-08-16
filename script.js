/*
Rock paper scissors game:
Create function to play a round
    Get choice from Computer
    Get choice from user
    Display who won
    Display current score
*/


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

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors")
    choice = choice.toLowerCase()
    if (!(choice == "rock" || choice == "paper" || choice == "scissors")){
        alert("Invalid choice, must choose rock, paper, or scissors")
        getHumanChoice();
    }
    return choice
}



function playGame(){
    function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
            humanScore++
            alert(`You win this round! ${humanChoice} beats ${computerChoice}.`)
    
        }
        else if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")){
            computerScore++
            alert(`Oh no! You lost the round. ${computerChoice} beats ${humanChoice}.`)
    
        }
        else{
            alert(`It's a tie! Play again`)
            playRound()
        }
    }

    let humanScore = 0
    let computerScore = 0
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    if (humanScore > computerScore){
        alert(`Good job! You won ${humanScore} to ${computerScore}!`)
    }
    else{
        alert(`Better luck next time :( you lost ${computerScore} to ${humanScore}.`)
    }


}

playGame();



