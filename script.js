let playerScore = 0;
let computerScore = 0;
let playerHand;
const hands = ["Rock", "Paper", "Scissors"];

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const infoLog = document.querySelector('.info-log-container');
const playerScoreInfo = document.querySelector('#player-score');
const computerScoreInfo = document.querySelector('#computer-score');


rockButton.addEventListener('click', () =>{
  playerHand = hands[0]
  playRound()
});

paperButton.addEventListener('click', () =>{
  playerHand = hands[1]
  playRound()
});

scissorsButton.addEventListener('click', () =>{
  playerHand = hands[2]
  playRound()
});


function generateComputerHand() {
  return hands[Math.floor(Math.random() * 3)];
}

function playerWon() {
  infoLog.textContent = `Player won`
  playerScore = 0;
  computerScore = 0;
}

function computerWon() {
  infoLog.textContent = `Computer won`
  playerScore = 0;
  computerScore = 0;
}

function playRound() {
  let computerHand = generateComputerHand();
  let computerWinsMessage = `${computerHand} beats ${playerHand}. Computer won this round.`;
  let playerWinsMessage = `${playerHand} beats ${computerHand}. Player won this round.`;
  switch (true) {
    case computerHand === "Rock" && playerHand === "Scissors":
      computerScore++;
      infoLog.textContent = computerWinsMessage
      break;
    case computerHand === "Paper" && playerHand === "Rock":
      computerScore++;
      infoLog.textContent = computerWinsMessage
      break;
    case computerHand === "Scissors" && playerHand === "Paper":
      computerScore++;
      infoLog.textContent = computerWinsMessage
      break;
    case computerHand === "Scissors" && playerHand === "Rock":
      playerScore++;
      infoLog.textContent = playerWinsMessage
      playerScoreInfo.textContent = `Player: ${playerScore}`
      break;
    case computerHand === "Rock" && playerHand === "Paper":
      playerScore++;
      infoLog.textContent = playerWinsMessage
      break;
    case computerHand === "Paper" && playerHand === "Scissors":
      playerScore++;
      infoLog.textContent = playerWinsMessage
      break;
    default:
      infoLog.textContent = "A tie"
      break;

  }
  changeScore()
  checkScore()
}

function changeScore(){
  playerScoreInfo.textContent = `Player: ${playerScore}`
  computerScoreInfo.textContent = `Computer: ${computerScore}`
}
function checkScore() {
    if (playerScore >= 5) {
        playerWon();
    } else if (computerScore >= 5) {
        computerWon();
    }
}
