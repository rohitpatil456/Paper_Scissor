
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Generate computer choice
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Handle draw0       p   
const drawGame = () => {
  msg.innerText = "Game was a draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
};

// Main game logic
const playGame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
    return;
  }

  let userWin = false;

  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userWin = true;
  }

  showWinner(userWin, userChoice, compChoice);
};

// Event listeners
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
