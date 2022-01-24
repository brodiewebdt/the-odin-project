
const btn = document.getElementById('btn');
const btnSubmit = document.getElementById('btn-submit');
const input = document.getElementById("p-selection");
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerSelection = '';
let computerSelection = '';
const result = document.getElementById('result');
const finalScore = document.getElementById('final-score');
let computerScore = 0;
let playerScore = 0;
pScore = document.getElementById('player-score');
cScore = document.getElementById('computer-score');

// get choice from computer (computerPlay) use random function
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        computerSelection = 'rock';
    }else if (randomNumber === 2) {
        computerSelection = 'paper';
    }else if (randomNumber === 3) {
        computerSelection = 'scissors';
    }

    computerChoiceDisplay.innerText = computerSelection;
    return computerSelection;
   }


   // get choice from player
function playerChoice() {
    

    playerSelection = input.value.toLowerCase();
    // console.log(playerSelection)


    userChoiceDisplay.innerText = playerSelection;
    return playerSelection;

    
}

// use function game() to play a 5 round game
// print winners of each round
// function game() {
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
//     playRound(playerSelection, computerSelection);
// }

// btn.addEventListener("click", function () {
//     computerPlay()
//     playRound(playerSelection, computerSelection);
// });



btnSubmit.addEventListener('click', function() {
    game()
    playerChoice() 
    computerPlay();
    playRound(playerSelection, computerSelection);
    input.value = "";
})

function game() {
    if (computerScore === 5) {
        finalScore.innerText = `Computer wins the game: ${computerScore} to ${playerScore} `;
    } else if (playerScore === 5) {
        finalScore.innerText = `Player wins the game: ${playerScore} to ${computerScore} `;
    }
}


// use function playRound to compare player choice and computer choice and return string declaring the winner
function playRound(playerSelection, computerSelection) {

    console.log(computerSelection)
    console.log(playerSelection)


    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Paper covers Rock, Computer wins!')
        result.innerText = 'Paper covers Rock, Computer wins!';
        computerScore += 1;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Rock breaks Scissors, Player wins!");
        result.innerText = "Rock breaks Scissors, Player wins!";
        playerScore += 1;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("Paper covers Rock, Player wins!");
        result.innerText = "Paper covers Rock, Player wins!";
        playerScore += 1;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("Scissors cut Paper, Computer wins!");
        result.innerText = "Scissors cut Paper, Computer wins!";
        computerScore += 1;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;

    } else if  (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("Rock breaks Scissors, Computer wins!");
        result.innerText = "Rock breaks Scissors, Computer wins!";
        computerScore += 1;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("Scissors cut Paper, Player wins!");
        result.innerText = "Scissors cut Paper, Player wins!";
        playerScore += 1;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;

    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("Rock and Rock, It's a draw!");
        result.innerText = "Rock and Rock, It's a draw!";

    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("Paper and Paper, It's a draw!");
        result.innerText = "Paper and Paper, It's a draw!";

    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log("Scissors and Scissors, It's a draw!");
        result.innerText = "Scissors and Scissors, It's a draw!";

    }

}




