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

const currentScore = document.createElement('p');
gamePlay.appendChild(currentScore);

const finalResult = document.createElement('p');
gamePlay.appendChild(finalResult);

function playComputer(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function playRound() {
    computerSelection = playComputer(items);
    //playPlayer();

    playerChoice.textContent = "You chose: " + playerSelection;    
    computerChoice.textContent =  "Computer chose: " + computerSelection;

    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        finalResult.textContent = "";
    }

    if (playerSelection === computerSelection) {
        gameResult.textContent = "It's a draw!";
        }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
           (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")) {
            gameResult.textContent = "Point to you :)";
            playerScore = ++playerScore;
            
            if (playerScore === 5) {
                finalResult.textContent = "YOU WON THE ROUND!";
            }
            }

    else if ((playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
            gameResult.textContent = "Point to the computer :(";
            computerScore = ++computerScore;

            if (computerScore === 5) {
                finalResult.textContent = "Wah, computer won the round";
            }
            }
}

function playGame() {
    this.playRound();

    if (playerScore > computerScore) {
        currentScore.textContent = "Current score, computer: " + computerScore + ", you: " + playerScore;
        }

    else if (computerScore > playerScore) {
        currentScore.textContent = "Current score, computer: " + computerScore + ", you: " + playerScore;
        }

    else {
        currentScore.textContent = "Current score, computer: " + computerScore + ", you: " + playerScore;
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