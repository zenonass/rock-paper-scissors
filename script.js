let playerScore = 0;
let computerScore = 0;
const hands = ["Rock", "Paper", "Scissors"];

function playerWon() {
  alert(
    `Player Score: ${playerScore}. Computer Score: ${computerScore}. Player won`
  );
  let answer = window.confirm("One more ?")
  if (answer){
    playerScore = 0;
    computerScore = 0;
    playGame()
  }
  else{
    alert("Bye")
}
}

function computerWon() {
  alert(
    `Computer Score: ${computerScore}. Player Score: ${playerScore}. Computer won`
  );
  let answer = window.confirm("One more ?")
  if (answer){
    playerScore = 0;
    computerScore = 0;
    playGame()
  }
  else{
      alert("Bye")
  }
}

function generateComputerHand() {
    return hands[Math.floor(Math.random() * 3)];
  }
  function generatePlayerHand() {
    let playerOption = window.prompt("Choose your hand");
    let playerHand =
      playerOption.substr(0, 1).toUpperCase() +
      playerOption.substr(1).toLowerCase();
    if (hands.includes(playerHand)) {
      return playerHand;
    } else {
      alert("Incorrect option, choose from Rock, Paper and Scissors. Try again");
      generatePlayerHand();
    }
  }

function playRound() {
  let computerHand = generateComputerHand();
  let playerHand = generatePlayerHand();
  let computerWinsMessage = `${computerHand} beats ${playerHand}. Computer won. Computer Score: ${
    computerScore + 1
  }. Player Score: ${playerScore}.`;
  let playerWinsMessage = `${playerHand} beats ${computerHand}. Player won. Computer Score: ${computerScore}. Player Score: ${
    playerScore + 1
  }.`;
  switch (true) {
    case computerHand === "Rock" && playerHand === "Scissors":
      computerScore++;
      alert(computerWinsMessage);
      break;
    case computerHand === "Paper" && playerHand === "Rock":
      computerScore++;
      alert(computerWinsMessage);
      break;
    case computerHand === "Scissors" && playerHand === "Paper":
      computerScore++;
      alert(computerWinsMessage);
      break;
    case computerHand === "Scissors" && playerHand === "Rock":
      playerScore++;
      alert(playerWinsMessage);
      break;
    case computerHand === "Rock" && playerHand === "Paper":
      playerScore++;
      alert(playerWinsMessage);
      break;
    case computerHand === "Paper" && playerHand === "Scissors":
      playerScore++;
      alert(playerWinsMessage);
      break;
    default:
      alert("A tie");
      break;
  }
}
function playGame() {
    while (true) {
    if (playerScore === 5) {
        playerWon();
        break;
    } else if (computerScore === 5) {
        computerWon();
        break;
    } else {
        playRound();
    }
    }
}

playGame()