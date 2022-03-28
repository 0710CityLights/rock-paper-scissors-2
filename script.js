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
    else if (playerSelection === `rock` && computerSelection === `paper`) {
        ++computerScore;
        return `You Lose! Paper beats Rock`;
    }
    else if (playerSelection === `rock` && computerSelection === `scissors`) {
        ++playerScore;
        return `You Win! Rock beats Scissors`;
    }
    else if (playerSelection === `paper` && computerSelection === `rock`) {
        ++playerScore;
        return `You Win! Paper beats Rock`;
    }
    else if (playerSelection === `paper` && computerSelection === `scissors`) {
        ++computerScore;
        return `You Lose! Scissors beats Paper`;
    }
    else if (playerSelection === `scissors` && computerSelection === `paper`) {
        ++playerScore;
        return `You Win! Scissors beats Paper`;
    }
    else if (playerSelection === `scissors` && computerSelection === `rock`) {
        ++computerScore;
        return `You Lose! Rock beats Scissors`
    }
    else {
        return "Invalid input. Try again.";
        
    }


}



function game() {

    for (let i = 1; i <= 5; i++){
        let userInput = prompt("Rock, Paper, or Scissors?");
        const playerSelection = userInput.toLowerCase();
        const computerSelection = computerPlay();
        const results = playRound(playerSelection, computerSelection);
        console.log(results);
        console.log(`Round ${i}: Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }

}


game();

