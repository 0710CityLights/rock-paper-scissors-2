let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const randNum = Math.floor(Math.random() * 3);

    switch (randNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `Tied! No score counted`;
    } 
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            ++computerScore;
            return 'You Lose! Paper beats rock!';
        }
        else {
            ++playerScore;
            return 'You Win! Rock beats Scissors!'
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            ++playerScore;
            return 'You Win! Paper beats Rock!';
        }
        else {
            ++computerScore;
            return 'You Lose! Scissors beats Paper!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            ++computerScore;
            return 'You Lose! Rock beats Scissors!';
        }
        else {
            ++playerScore;
            return 'You Win! Scissors beats Paper!';
        }
    }
    
}

function game() {

    for (let i = 1; i <= 5; i++) {
        // let userInput = prompt("Rock, Paper, or Scissors?");
        const playerSelection = userInput.toLowerCase();
        const computerSelection = computerPlay();
        const results = playRound(playerSelection, computerSelection);
        console.log(results);
        console.log(`Round ${i}: Player Score: ${playerScore} Computer Score: ${computerScore} Computer Choice : ${computerSelection} Player Choice: ${playerSelection}`);
    }

}


game();

