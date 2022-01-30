// computer's play. randomly returns 'rock', 'paper', or 'scissors'
function computerPlay() {
    // create random choice of: 0, 1, or 2.
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        console.log("computerPlay: rock");
        return 'rock';
    } else if (choice === 1) {
        console.log("computerPlay: paper");
        return 'paper';
    } else {
        console.log("computerPlay: scissors");
        return 'scissors';
    }
}

// plays a single round. returns a string that declares the winner
// ex: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    // makes player's choice case-insensitive
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        console.log("This round's a tie!");
        ties += 1;
        return "This round's a tie!";
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log("You Lost This Round! Paper beats Rock");
        cWins += 1;
        return "You Lost This Round! Paper beats Rock";
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log("You Won This Round! Rock beats Scissors");
        pWins += 1;
        return "You Won This Round! Rock beats Scissors";
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log("You Won This Round! Paper beats Rock");
        pWins += 1;
        return "You Won This Round! Paper beats Rock";
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log("You Lost This Round! Scissors beats Paper");
        cWins += 1;
        return "You Lost This Round! Scissors beats Paper";
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log("You Lost This Round! Rock beats Scissors");
        cWins += 1;
        return "You Lost This Round! Rock beats Scissors";
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log("You Won This Round! Scissors beats Paper");
        pWins += 1;
        return "You Won This Round! Scissors beats Paper";
    } else {
        console.log("Something went wrong");
        return "Something went wrong";
    }
}


// for keeping score - pWins is total player wins, cWins is total computer wins.
// Note to self: Figure out how to do this without global variables.
let pWins = 0;
let cWins = 0;
let ties = 0;


// play a 5 round game that keeps score and reports a winner or loser at the end.  
function game() {
    
    
    // play five rounds
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Enter choice:", 'rock, paper, or scissors');
        console.log("userChoice: ", userChoice);
        playRound(userChoice, computerPlay());
    }

    // Choose final score message
    let finalScoreMessage;
    if (pWins > cWins) {
        finalScoreMessage = "You Won The Game! \nFinal Score: You: " + pWins + "  Computer: " + cWins + "  Ties: " + ties;
    } else if (cWins > pWins) {
        finalScoreMessage = "You Lost The Game! \nFinal Score: You: " + pWins + "  Computer: " + cWins + "  Ties: " + ties;
    } else {
        finalScoreMessage = "The Game Ended In A Draw! \nFinal Score: You: " + pWins + "  Computer: " + cWins + "  Ties: " + ties;
    }

    // display final score message (to the console)
    console.log(finalScoreMessage);
}











/*testing just playRound() with direct input. -- checks out well
console.log(playRound("rock", "rock"));
console.log(playRound("paper", "paper"));
console.log(playRound("scissors", "scissors"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scissors"));
console.log(playRound("paper", "rock"));
console.log(playRound("paper", "scissors"));
console.log(playRound("scissors", "rock"));
console.log(playRound("scissors", "paper"));
console.log(playRound("rOcK", "rock")); 
console.log(playRound("ROCK", "rock")); 
*/

