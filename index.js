const choices = ['Rock', 'Paper', 'Scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const resetButton = document.getElementById('resetButton');
const playAgainButton = document.getElementById('playAgainButton');

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
let gameOver = false;

function playAgain() {
    gameOver = false;
    resetScores();
    resultDisplay.textContent = "Let's play again!";
}

function disableButtons() {
    document.querySelectorAll('.choices button').forEach(btn => btn.disabled = true);
}

function enableButtons() {
    document.querySelectorAll('.choices button').forEach(btn => btn.disabled = false);
}

function resetScores() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "Scores Reset!";
    resultDisplay.classList.remove("greenText", "redText");
    enableButtons();
    playAgainButton.style.display = 'none';
}


function playGame(playerChoice) {
    if (gameOver) return;
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    }
    else {
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "You Win!" : "You lose";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!" : "You lose";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You Win!" : "You lose";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
   
    switch(result) {
        case "You Win!":
            resultDisplay.classList.add("greenText");
            break;
        case "You lose":
            resultDisplay.classList.add("redText");
            break;
    }

    if (result === "You Win!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You lose") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    // Check for game end
    if (playerScore >= maxScore) {
        gameOver = true;
        resultDisplay.textContent = "🎉 You won the game! 🎉";
        resultDisplay.classList.add("greenText");
        disableButtons();
        playAgainButton.style.display = 'block';
    } else if (computerScore >= maxScore) {
        gameOver = true;
        resultDisplay.textContent = "😞 Computer won the game! 😞";
        resultDisplay.classList.add("redText");
        disableButtons();
        playAgainButton.style.display = 'block';
    }
}     
