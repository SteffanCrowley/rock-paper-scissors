//created by Steffan Crowley on May 3, 2022.
//Simple rock, paper, scissors game that plays through five rounds.
//user chooses their selection and opponent is created using random number generator.

//returns random number that is assigned to rock, paper, or scissor.
function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) {
    let z = "rock";
    return z;
  } else if (x == 1) {
    let z = "paper";
    return z;
  } else if (x == 2) {
    let z = "scissors";
    return z;
  }
}

//function to play one round and return message about who won.
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let x = playerSelection.toLowerCase();
  let y = computerSelection.toLowerCase();

  if (x == "rock" && y == "rock") {
    console.log("You Tie!  Rock and Rock Tie!");
  } else if (x == "rock" && y == "paper") {
    console.log("You Lose!  Rock loses to Paper!");
    return false;
  } else if (x == "rock" && y == "scissors") {
    console.log("You Win!  Rock beats Scissors!");
    return true;
  } else if (x == "paper" && y == "rock") {
    console.log("You Win!  Paper beats Rock!");
    return true;
  } else if (x == "paper" && y == "paper") {
    console.log("You Tie!  Paper and Paper Tie!");
  } else if (x == "paper" && y == "scissors") {
    console.log("You Lose!  Paper loses to Scissors!");
    return false;
  } else if (x == "scissors" && y == "rock") {
    console.log("You Lose!  Scissors loses to Paper!");
    return false;
  } else if (x == "scissors" && y == "paper") {
    console.log("You Win!  Scissors beats Paper!");
    return true;
  } else if (x == "scissors" && y == "scissors") {
    console.log("You Tie!  Scissors and Scissors Tie!");
  } else {
    console.log("invalid input");
  }
}

//playes five rounds of the game and returns the score.
function game() {
  yourScore = 0;
  enemyScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log("***round " + (i + 1) + "***"); //Shows which round we are on
    let computerSelection = computerPlay(); //stores computers choice
    let playerSelection = prompt("Rock, Paper, or Scissors?"); //stores user input

    let result = playRound(playerSelection, computerSelection);

    if (result == true) {
      yourScore++;
    } else if (result == false) {
      enemyScore++;
    }
  }
  console.log(whoWins(yourScore, enemyScore));
}

//takes your score and enemy score and decides who wins
function whoWins(x, y) {
  if (x > y) {
    return "congrats! you win " + yourScore + " - " + enemyScore;
  } else if (x < y) return "you lose! " + yourScore + " - " + enemyScore;
  else if (x == y) return "you tie! " + yourScore + " - " + enemyScore;
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

//starts the game
// game();
