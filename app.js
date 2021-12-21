let playerScore = 0
let computerScore = 0
let gameNumber = 0
let playerSelection
let computerSelection

const displayResultH = document.getElementById('gameresultheader')
const displayResult = document.getElementById('result')
const displayScoreH = document.getElementById('scoreheader')
const displayScore = document.getElementById('score')
const possibleSelections = document.querySelectorAll('button')

//Default text display
gameresultheader = 'Game 0'
result = 'Player versus Computer'
scoreheader = 'Please'
score = 'Choose your weapon'

displayResultH.innerHTML = gameresultheader
displayResult.innerHTML = result
displayScoreH.innerHTML = scoreheader
displayScore.innerHTML = score


//Operation for game play
possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', (event) => {
  playerSelection = event.target.id
  computerPlay()
  console.log(playerSelection, computerSelection)
  playRound(playerSelection, computerSelection)
  gameresultheader = `Game ${gameNumber}`
  scoreheader = 'Score'
  determineWinner()
  displayScoreH.innerHTML = scoreheader
  displayResultH.innerHTML = gameresultheader
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
    if (computerScore >= 6 || playerScore >= 6) {
        result = `Sorry, the game has finished. Please refresh the browser to start a new game.`
        gameresultheader = 'Thank you for playing.'
        scoreheader = 'By VillageWhirl'
        score = 'github.com/VillageWhirl'

    } else if (playerScore === 5) {
        result = `Congratulations! You've beat the computer (${playerScore} to ${computerScore}).`

    } else if (computerScore === 5) {
        result = `Game over. The computer beat you (${computerScore} to ${playerScore}).`
    } 
}

//Determines winner of each round, updates scores, and displays these on the view port. 
function playRound (playerSelection, computerSelection) {
    gameNumber++;
    if (playerSelection === computerSelection) {
        result = `The computer played ${computerSelection}. You tied.`;
        score = `You: ${playerScore} |  Computer: ${computerScore}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        ++playerScore;
        result = `The computer played ${computerSelection}. You won!`;
        score = `You: ${playerScore} | Computer: ${computerScore}`
    } else {
        ++computerScore;
        result = `The computer played ${computerSelection}. You lost.`;
        score = `You: ${playerScore} | Computer: ${computerScore}`;
    }
    
}