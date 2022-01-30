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
        console.log("It's a tie!");
        return "It's a tie!";
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {
        console.log("You Lose! Paper beats Rock");
        return "You Lose! Paper beats Rock";
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log("You Win! Rock beats Scissors");
        return "You Win! Rock beats Scissors";
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log("You Win! Paper beats Rock");
        return "You Win! Paper beats Rock";
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log("You Lose! Scissors beats Paper");
        return "You Lose! Scissors beats Paper";
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log("You Lose! Rock beats Scissors");
        return "You Lose! Rock beats Scissors";
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log("You Win! Scissors beats Paper");
        return "You Win! Scissors beats Paper"
    } else {
        console.log("Something went wrong");
        return "Something went wrong"
    }
}

// play a 5 round game that keeps score and reports a winner or loser at the end. 
// 
function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Enter choice:", 'rock, paper, or scissors');
        console.log("userChoice: ", userChoice);
        playRound(userChoice, computerPlay());
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

