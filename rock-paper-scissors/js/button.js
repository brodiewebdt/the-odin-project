const buttons = document.querySelectorAll('.button');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const finalScore = document.getElementById('final-score');
pScore = document.getElementById('player-score');
cScore = document.getElementById('computer-score');

let playerSelection = '';
let computerSelection = '';
let computerScore = 0;
let playerScore = 0;

// get choice from computer (computerPlay) use random function
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerSelection = 'rock';
  } else if (randomNumber === 1) {
    computerSelection = 'paper';
  } else if (randomNumber === 2) {
    computerSelection = 'scissors';
  }

  // if (randomNumber === 1) {
  //   computerSelection = 'rock';
  // } else if (randomNumber === 2) {
  //   computerSelection = 'paper';
  // } else if (randomNumber === 3) {
  //   computerSelection = 'scissors';
  // } else if (randomNumber === 4) {
  //   computerSelection = 'lizard';
  // } else {
  //   computerSelection = 'spock';
  // }

  userChoiceDisplay.innerText = playerSelection;
  computerChoiceDisplay.innerText = computerSelection;
  return computerSelection;
}

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // clickedButtonValue = event.target.textContent;
    playerSelection = event.target.getAttribute('id');
    // console.log(playerSelection + ' was clicked');
    computerPlay();
    playRound(playerSelection, computerSelection);
    game();
  });
});

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  console.log(playerSelection);

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('Paper covers Rock, Computer wins!');
    result.innerText = 'Paper covers Rock, Computer wins!';
    computerScore += 1;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('Rock breaks Scissors, Player wins!');
    result.innerText = 'Rock breaks Scissors, Player wins!';
    playerScore += 1;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('Paper covers Rock, Player wins!');
    result.innerText = 'Paper covers Rock, Player wins!';
    playerScore += 1;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('Scissors cut Paper, Computer wins!');
    result.innerText = 'Scissors cut Paper, Computer wins!';
    computerScore += 1;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('Rock breaks Scissors, Computer wins!');
    result.innerText = 'Rock breaks Scissors, Computer wins!';
    computerScore += 1;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('Scissors cut Paper, Player wins!');
    result.innerText = 'Scissors cut Paper, Player wins!';
    playerScore += 1;
    pScore.innerText = playerScore;
    cScore.innerText = computerScore;
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log("Rock and Rock, It's a draw!");
    result.innerText = "Rock and Rock, It's a draw!";
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log("Paper and Paper, It's a draw!");
    result.innerText = "Paper and Paper, It's a draw!";
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    console.log("Scissors and Scissors, It's a draw!");
    result.innerText = "Scissors and Scissors, It's a draw!";
  }
}

function game() {
  if (computerScore === 5) {
    finalScore.innerText = `Computer wins the game: ${computerScore} to ${playerScore} `;
  } else if (playerScore === 5) {
    finalScore.innerText = `Player wins the game: ${playerScore} to ${computerScore} `;
  }
}
