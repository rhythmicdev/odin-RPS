function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) return "Rock";
  if (computerChoice === 1) return "Paper";
  if (computerChoice === 2) return "Scissors";
}

console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();

  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt(
      "Please enter a valid choice! Rock, paper, or scissors?",
    ).toLowerCase();
  }
  return humanChoice;
}

console.log(getHumanChoice());