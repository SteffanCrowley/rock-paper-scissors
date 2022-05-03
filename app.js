//returns random number that is assigned to rock, paper, or scissor.
function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  console.log(x);
  if (x == 0) {
    let z = "rock";
    return z;
  } else if (x == 1) {
    let z = "paper";
    return z;
  } else if (x == 2) {
    let z = "scissor";
    return z;
  }
}

//assigns variables to player and ai opponent
let playerSelection = "rock";
let computerSelection = "scissors";
// let computerSelection = computerPlay();

//function to play one round and return message about who won.
function playRound(playerSelection, computerSelection) {
  let x = playerSelection.toLowerCase();
  let y = computerSelection.toLowerCase();

  if (x == "rock" && y == "rock") {
    return "You Tie!  Rock and Rock Tie!";
  } else if (x == "rock" && y == "paper") {
    return "You Lose!  Rock loses to Paper!";
  } else if (x == "rock" && y == "scissors") {
    return "You Win!  Rock beats Scissors!";
  } else if (x == "paper" && y == "rock") {
    return "You Win!  Paper beats Rock!";
  } else if (x == "paper" && y == "paper") {
    return "You Tie!  Paper and Paper Tie!";
  } else if (x == "paper" && y == "scissors") {
    return "You Lose!  Paper loses to Scissors!";
  } else if (x == "scissors" && y == "rock") {
    return "You Lose!  Scissors loses to Paper!";
  } else if (x == "scissors" && y == "paper") {
    return "You Win!  Scissors beats Paper!";
  } else if (x == "scissors" && y == "scissors") {
    return "You Tie!  Scissors and Scissors Tie!";
  }
}

console.log(playRound(playerSelection, computerSelection));
