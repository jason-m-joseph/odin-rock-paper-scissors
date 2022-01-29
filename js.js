// computer's play. randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    // create random choice of: 0, 1, or 2.
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// plays a single round. returns a string that declares the winner
// ex: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    // makes player's choice case-insensitive
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        return "It's a tie!";
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats Paper"
    } else {
        return "Something went wrong"
    }
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