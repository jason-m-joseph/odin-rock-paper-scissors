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

    

    if (playerChoice === computerSelection) {
        ties += 1;
        rounds += 1;
        console.log("ties: ", ties);
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "This round's a tie!";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {   
        cWins += 1;
        rounds += 1;
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Lost This Round! Paper beats Rock";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        pWins += 1;
        rounds += 1;
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Won This Round! Rock beats Scissors";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        pWins += 1;
        rounds += 1;
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Won This Round! Paper beats Rock";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        cWins += 1;
        rounds += 1;
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Lost This Round! Scissors beats Paper";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        cWins += 1;
        rounds += 1;
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Lost This Round! Rock beats Scissors";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        pWins += 1;
        rounds += 1;
        displayScore(score);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Won This Round! Scissors beats Paper";
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            // resetScores(pWins, cWins, ties, rounds, score);
        }
    } else {
        results.textContent = "Something went wrong";
    }
}

function displayScore(score) {
    return score.textContent = `You:  ${pWins}   Computer:  ${cWins}   Ties:  ${ties}`;    
}

function displayRound(rounds) {
    round.textContent = `Round: ${rounds}`;
}

function displayHands(pHand, cHand) {
    return hands.textContent = `You played ${pHand}, Computer played ${cHand}`;
}

function displayWinner(pWins, cWins, results) {
    if (pWins > cWins) {
        console.log('You Win!')
        results.textContent = "YOU WON THE GAME!"
    } else {
        console.log('Computer wins!')
        results.textContent = "YOU WON THE GAME!"
    }
}

/* function resetScores(pWins, cWins, ties, rounds, score){
    pWins = 0;
    cWins = 0;
    ties = 0;
    rounds = 0;
    
    displayRound(rounds);
    
    displayScore(score);
    
    score.textContent = `You:  ${pWins}   Computer:  ${cWins}   Ties:  ${ties}`;
} */

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

// note: severe bug in resetScores(); which is why it's commented
// out in playRound(); and in function declaration
// The bug is once everything resets, it
// keeps everything to 0 for about 5 rounds before displaying
// everyting again when you keep clicking. I've spent too long on
// exercise so I'm just going to move on. 