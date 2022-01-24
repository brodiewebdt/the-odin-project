


if(playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('Paper covers Rock, Computer wins!')
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("Rock breaks Scissors, Player wins!");
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("Paper covers Rock, Player wins!");
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log("Scissors cut Paper, Computer wins!");
} else if  (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log("Rock breaks Scissors, Computer wins!");
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log("Scissors cut Paper, Player wins!");
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log("Rock and Rock, It's a draw!");
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    console.log("Paper and Paper, It's a draw!");
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    console.log("Scissors and Scissors, It's a draw!");
}
