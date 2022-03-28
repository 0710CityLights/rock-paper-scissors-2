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

