let playerScore = 0;
let computerScore = 0;
let playerSelection = "none";
let computerSelection = "none";
const items = ["rock", "paper", "scissors"];

function playPlayer() {
    let playerEntry = window.prompt("Will you choose rock, paper, or scissors?", "enter choice here . . .");
    playerSelection = playerEntry.toLowerCase();
}

function playComputer(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function playRound() {
    computerSelection = playComputer(items);
    playPlayer();
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
           (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log("You win!");
            playerScore = ++playerScore;
    }

    else if ((playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
            console.log("You lose!");
            computerScore = ++computerScore;
    }
}

function playGame() {
    for (let i=0; i < 5;i++)this.playRound();

    if (playerScore > computerScore) {
        console.log("Final score, computer: " + computerScore + ", you: " + playerScore + ". You won the game!")
    }

    else if (computerScore > playerScore) {
        console.log("Final score, computer: " + computerScore + ", you: " + playerScore + ". Computer wins!")
    }

    else {
        console.log("Final score, computer: " + computerScore + ", you: " + playerScore + ". It's a draw!")
    }
}
    
playGame();