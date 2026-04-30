function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) return "Rock";
  if (computerChoice === 1) return "Paper";
  if (computerChoice === 2) return "Scissors";
}

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    if (humanSelection === computerSelection) {
      console.log(`It's a draw! Both chose ${humanSelection}.`);
      return;
    }

    if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      humanScore++;
      console.log(
        `You win the round! ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`,
      );
    } else {
      computerScore++;
      console.log(
        `You lose the round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)}`,
      );
    }
  }

  for (let roundCounter = 0; roundCounter < 5; roundCounter++) {
    const roundResult = playRound();
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (humanScore === computerScore) {
    console.log(`The game is a draw!`);
    console.log(`Final Player Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log(`You win the game!`);
    console.log(`Final Player Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Computer wins the game!`);
    console.log(`Final Player Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);
  }
}

console.log(playGame());
