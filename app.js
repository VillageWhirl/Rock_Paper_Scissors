let playerScore = 0
let computerScore = 0
let playerSelection
let computerSelection
const displayResult = document.getElementById('result')
const displayScore = document.getElementById('score')
const possibleSelections = document.querySelectorAll('button')

possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', (event) => {
  playerSelection = event.target.id
  computerPlay()
  console.log(playerSelection, computerSelection)
  playRound(playerSelection, computerSelection)
  determineWinner()
  displayResult.innerHTML = result
  displayScore.innerHTML = score
}))


//Generates random computer choice
function computerPlay() {
    options = ['rock', 'paper', 'scissors']
    const x = Math.floor(Math.random()*3)
    computerSelection = options[x]
}

//Checks each iteration for a winner, and displays corresponding message to viewport.
function determineWinner() {
    if (computerScore >= 5 || playerScore >= 5) {
        result = `Sorry, the game has finished. Please refresh the browser to start a new game.`
    } else if (playerScore === 5) {
        result = `Congratulations! You've beat the computer (${playerScore} to ${computerScore}).`
    } else if (computerScore === 5) {
        result = `Game over. The computer beat you (${computerScore} to ${playerScore}).`
    } 
}

//Determines winner of each round, updates scores, and displays these on the view port. 
function playRound (playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (playerSelection === computerSelection) {
        result = `The computer played ${computerSelection}. You tied.`;
        score = `You: ${playerScore} |  Computer: ${computerScore}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        ++playerScore;
        result = `The computer played ${computerSelection}. You won!`;
        score = `You: ${playerScore} | Computer : ${computerScore}`
    } else {
        ++computerScore;
        result = `The computer played ${computerSelection}. You lost.`;
        score = `You: ${playerScore} | Computer: ${computerScore}`;
    }
    
}