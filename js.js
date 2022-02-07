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

function playRound(playerSelection, computerSelection) {
    // makes player's choice case-insensitive
    let playerChoice = playerSelection.toLowerCase();

    displayHands(playerChoice, computerSelection);

    if (playerChoice === computerSelection) {
        ties += 1;
        rounds += 1;
        console.log("ties: ", ties);
        displayRound();
        displayScore();
        return results.textContent = "This round's a tie!";
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {   
        cWins += 1;
        rounds += 1;
        displayRound();
        displayScore();
        return results.textContent = "You Lost This Round! Paper beats Rock";
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        pWins += 1;
        rounds += 1;
        displayRound();
        displayScore();
        return results.textContent = "You Won This Round! Rock beats Scissors";
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        pWins += 1;
        rounds += 1;
        displayRound();
        displayScore();
        return results.textContent = "You Won This Round! Paper beats Rock";
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        cWins += 1;
        rounds += 1;
        displayRound();
        displayScore();
        return results.textContent = "You Lost This Round! Scissors beats Paper";
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        cWins += 1;
        rounds += 1;
        displayRound();
        displayScore();
        return results.textContent = "You Lost This Round! Rock beats Scissors";
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        pWins += 1;
        rounds += 1;
        displayRound();
        displayScore();
        return results.textContent = "You Won This Round! Scissors beats Paper";
    } else {
        return results.textContent = "Something went wrong";
    }
}

function displayScore() {
    return score.textContent = `You:  ${pWins}   Computer:  ${cWins}   Ties:  ${ties}`;    
}

function displayRound() {
    round.textContent = `Round: ${rounds}`;
}

function displayHands(pHand, cHand) {
    return hands.textContent = `You played ${pHand}, Computer played ${cHand}`;
}

let pWins = 0;
let cWins = 0;
let ties = 0;
let rounds = 0;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const hands = document.querySelector('#hands');
const round = document.querySelector('#round');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

function game() {
    // stuff
}