console.log("rock Paper Scissors");

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

console.log(computerPlay());
