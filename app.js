//created by Steffan Crowley on May 3, 2022.
//Simple rock, paper, scissors game that plays through five rounds.
//user chooses their selection and opponent is created using random number generator.

let yourScore = 0;
let enemyScore = 0;

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
    content.textContent = "You Tie!  Rock and Rock Tie!";
    console.log("You Tie!  Rock and Rock Tie!");
  } else if (x == "rock" && y == "paper") {
    content.textContent = "You Lose!  Rock loses to Paper!";
    console.log("You Lose!  Rock loses to Paper!");
    enemyScore += 1;
    score.textContent = "Current Score: " + yourScore + " - " + enemyScore;
  } else if (x == "rock" && y == "scissors") {
    content.textContent = "You Win!  Rock beats Scissors!";
    console.log("You Win!  Rock beats Scissors!");
    yourScore += 1;
    score.textContent = "Current Score: " + yourScore + " - " + enemyScore;
  } else if (x == "paper" && y == "rock") {
    content.textContent = "You Win!  Paper beats Rock!";
    console.log("You Win!  Paper beats Rock!");
    yourScore += 1;
    score.textContent = "Current Score: " + yourScore + " - " + enemyScore;
  } else if (x == "paper" && y == "paper") {
    content.textContent = "You Tie!  Paper and Paper Tie!";
    console.log("You Tie!  Paper and Paper Tie!");
  } else if (x == "paper" && y == "scissors") {
    content.textContent = "You Lose!  Paper loses to Scissors!";
    console.log("You Lose!  Paper loses to Scissors!");
    enemyScore += 1;
    score.textContent = "Current Score: " + yourScore + " - " + enemyScore;
  } else if (x == "scissors" && y == "rock") {
    content.textContent = "You Lose!  Scissors loses to Paper!";
    console.log("You Lose!  Scissors loses to Paper!");
    enemyScore += 1;
    score.textContent = "Current Score: " + yourScore + " - " + enemyScore;
  } else if (x == "scissors" && y == "paper") {
    content.textContent = "You Win!  Scissors beats Paper!";
    console.log("You Win!  Scissors beats Paper!");
    yourScore += 1;
    score.textContent = "Current Score: " + yourScore + " - " + enemyScore;
  } else if (x == "scissors" && y == "scissors") {
    content.textContent = "You Tie!  Scissors and Scissors Tie!";
    console.log("You Tie!  Scissors and Scissors Tie!");
  } else {
    console.log("invalid input");
  }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");

const score = document.createElement("div");
score.classList.add("score");
score.textContent = "Current Score: 0 - 0";
container.appendChild(score);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id);
    container.appendChild(content);
    container.appendChild(score);
    checkFive();
  });
});

//starts the game
// game();

function checkFive() {
  if (yourScore >= 5) {
    console.log("you win");
    alert("You Win! Final Score: " + yourScore + " - " + enemyScore);
  } else if (enemyScore >= 5) {
    console.log("you lose");
    alert("You Lose! Final Score: " + yourScore + " - " + enemyScore);
  } else return;
}
