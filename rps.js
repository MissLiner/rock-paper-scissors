let playerScore = 0;
let computerScore = 0;
let playerSelection = "none";
let computerSelection = "none";
const items = ["rock", "paper", "scissors"];

const gamePlay = document.createElement('div');
gamePlay.textContent = "Game Play";
document.body.appendChild(gamePlay);

const playerChoice = document.createElement('p');
gamePlay.appendChild(playerChoice);

const computerChoice = document.createElement('p');
gamePlay.appendChild(computerChoice);

const gameResult = document.createElement('p');
gamePlay.appendChild(gameResult);

const roundResult = document.createElement('p');
gamePlay.appendChild(roundResult);

function playComputer(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function playRound() {
    computerSelection = playComputer(items);
    //playPlayer();

    playerChoice.textContent = "You chose: " + playerSelection;    
    computerChoice.textContent =  "Computer chose: " + computerSelection;

    if (playerSelection === computerSelection) {
        gameResult.textContent = "It's a draw!";
        }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
           (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            gameResult.textContent = "You win!";
            playerScore = ++playerScore;
            }

    else if ((playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
            gameResult.textContent = "You lose!";
            computerScore = ++computerScore;
            }
}

function playGame() {
    this.playRound();

    if (playerScore > computerScore) {
        roundResult.textContent = "Current score, computer: " + computerScore + ", you: " + playerScore;
        }

    else if (computerScore > playerScore) {
        roundResult.textContent = "Current score, computer: " + computerScore + ", you: " + playerScore;
        }

    else {
        roundResult.textContent = "Current score, computer: " + computerScore + ", you: " + playerScore;
        }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playGame();
    });
});
//playRound();


//playGame();