function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) return "Rock";
  if (randomNum === 1) return "Paper";
  if (randomNum === 2) return "Scissors";
}

console.log(getComputerChoice());