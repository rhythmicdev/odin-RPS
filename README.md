# odin-RPS

## Problem

Write a function that randomly returns "rock", "paper", or "scissors".

## Pseudocode

### Computer choice

Create function `getComputerChoice` that will randomly return "rock", "paper" or "scissors".

```
Randomly generate number between 0 and 2
If number is 0, return "rock"
If number is 1, return "paper"
If number is 2, return "scissors"
```

### Human choice
Create function `getHumanchoice` that will return one of the valid choices depending on user input.

```
Declare variable 'humanChoice', prompt user for input: "Rock, paper, or scissors?"
When user inputs string
Convert string to lowercase
Loop until user types a valid string
While user input != valid choice, reprompt: "Please enter a valid choice! Rock, paper, or scissors?"
If user input is valid, return 'humanChoice'
```

### Player score

### Single round

### Entire game
