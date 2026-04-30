# odin-RPS

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

Declare variables to keep track of player score
```
Declare variable `humanScore` with value of 0
Declare variable `computerScore` with value of 0
```

### Single round

Create function `playRound` that takes user and computer choices as arguments, plays a single round, increments the round winner's score and logs winner announcement.

```
Create function `playRound` with parameters `humanChoice` and `computerChoice`
If `humanChoice` === `computerChoice`
Log "It's a draw! Both chose ${humanChoice}."
If user selects, rock and computer selects scissors OR user selects paper and computer selects rock OR user selects scissors and computer selects paper:
Increment user score and log: "You win! ${humanChoice} beats ${computerChoice}."
Else, increment computer score and log "You lose! ${computerChoice} beats ${humanChoice}."
```

### Entire game
Create `playGame` function that calls `playRound` to play 5 rounds, keeps track of the scores and declares a winner at the end.

```
Declare `roundCounter` with value of 5
Loop while `roundCounter` > 1
Call `playRound` function
If `roundCounter` = 0
Check player and computer scores
Announce user with higher score winner and show final scores
```