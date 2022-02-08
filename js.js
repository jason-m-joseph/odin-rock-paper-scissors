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
        console.log("--before--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
    

    if (playerChoice === computerSelection) {
        console.log("playerChoice: ", playerChoice);
        ties += 1;
        rounds += 1;
        console.log("ties: ", ties);
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "This round's a tie!";

        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);

        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);
            
        }
    } else if (playerChoice === 'rock' && computerSelection === 'paper') {   
        console.log("playerChoice: ", playerChoice);
        cWins += 1;
        rounds += 1;
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Lost This Round! Paper beats Rock";
        
        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
        
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            
        }
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        console.log("playerChoice: ", playerChoice);
        pWins += 1;
        rounds += 1;
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Won This Round! Rock beats Scissors";
        
        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
        
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            
        }
    } else if (playerChoice === 'paper' && computerSelection === 'rock') {
        console.log("playerChoice: ", playerChoice);
        pWins += 1;
        rounds += 1;
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Won This Round! Paper beats Rock";
        
        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
        
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            
        }
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        console.log("playerChoice: ", playerChoice);
        cWins += 1;
        rounds += 1;
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Lost This Round! Scissors beats Paper";
        
        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
        
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            
        }
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        console.log("playerChoice: ", playerChoice);
        cWins += 1;
        rounds += 1;
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Lost This Round! Rock beats Scissors";
        
        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
        
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            
        }
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        console.log("playerChoice: ", playerChoice);
        pWins += 1;
        rounds += 1;
        displayScore(score, pWins, cWins, ties);
        displayRound(rounds);
        displayHands(playerChoice, computerSelection);
        results.textContent = "You Won This Round! Scissors beats Paper";
    
        console.log("--after--pWins:", pWins, 
        "cWins:", cWins, "ties:", ties, "rounds:", rounds,
        "score:", score);
        
        if (cWins === 5 || pWins === 5) {
            displayWinner(pWins, cWins, results);            
            
        }
    } else {
        results.textContent = "Something went wrong";
    }
}

function displayScore(score, pWins, cWins, ties) {
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
        console.log('You Win!');
        results.textContent = "YOU WON THE GAME!";
    } else {
        console.log('Computer wins!');
        results.textContent = "YOU LOST THE GAME!";
    }
}

function resetScores() {
    pWins = 0;
    cWins = 0;
    ties = 0;
    rounds = 0;

    displayRound(rounds);
    displayScore(score, pWins, cWins, ties);
    hands.textContent = `You:   Computer:   Ties:`;
    results.textContent = "";
}

let pWins = 0;
let cWins = 0;
let ties = 0;
let rounds = 0;

const buttons = document.querySelectorAll('.playbtn');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
const hands = document.querySelector('#hands');
const round = document.querySelector('#round');
const resetBtn = document.querySelector('.resetbtn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {  
        playRound(button.id, computerPlay());
                
    });
});

resetBtn.addEventListener('click', () => resetScores());

// need to figure out how to stop the rock paper and scissors
// buttons from triggering event handler once the game is won.
// basically.. how to stop the game when 5 wins are reached.


