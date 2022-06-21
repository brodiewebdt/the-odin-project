const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const roundResult = document.getElementById("round-result");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const gameResult = document.getElementById("game-result");
const btnPlay = document.getElementById("btn-play");
let pScore = 0;
let cScore = 0;

function computerPlay() {
    const gameArray = ["rock", "paper", "scissors"];

    let randomNum = Math.floor(Math.random() * gameArray.length);
    // console.log(randomNum, gameArray[randomNum]);
    return gameArray[randomNum];
}

function playerPlay() {
    const gameArray = ["rock", "paper", "scissors"];

    let randomNum = Math.floor(Math.random() * gameArray.length);
    // console.log(randomNum, gameArray[randomNum]);
    return gameArray[randomNum];
}

function playRound(playerSelection, computerSelection) {
    computerChoice.innerText = computerSelection;
    playerChoice.innerText = playerSelection;

    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Paper covers Rock, Computer wins!");
        roundResult.innerText = "Paper covers Rock, Computer wins!";
        cScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock breaks Scissors, Player wins!");
        roundResult.innerText = "Rock breaks Scissors, Player wins!";
        pScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper covers Rock, Player wins!");
        roundResult.innerText = "Paper covers Rock, Player wins!";
        pScore++;
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        console.log("Scissors cut Paper, Computer wins!");
        roundResult.innerText = "Scissors cut Paper, Computer wins!";
        cScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock breaks Scissors, Computer wins!");
        roundResult.innerText = "Rock breaks Scissors, Computer wins!";
        cScore++;
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        console.log("Scissors cut Paper, Player wins!");
        roundResult.innerText = "Scissors cut Paper, Player wins!";
        pScore++;
    } else if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        roundResult.innerText = "It's a draw!";
    }
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;
}

let computerSelection;
let playerSelection;

function checkScore() {
    if (pScore < 5 && cScore < 5) {
        playRound(playerSelection, computerSelection);
    } else if (pScore > 4) {
        gameResult.innerText = "Player takes the game";
    } else if (cScore > 4) {
        gameResult.innerText = "Computer takes the game";
    } else {
        // playRound(playerSelection, computerSelection);
    }
}

btnPlay.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    checkScore();
});
