// let comp = 0;
// let user = 0;

// let choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     user++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     comp++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   //Generate computer choice
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     //Draw Game
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //scissors, paper
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       //rock, scissors
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       //rock, paper
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });

let comp = 0;
let user = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetBtn = document.querySelector("#reset-btn");

// Generate computer's choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Handle a draw
const drawGame = () => {
  msg.innerText = "It's a draw! Play again.";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    user++;
    userScorePara.innerText = user;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    comp++;
    compScorePara.innerText = comp;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
};

// Play the game
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } else {
      userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Reset the game
resetBtn.addEventListener("click", () => {
  user = 0;
  comp = 0;
  userScorePara.innerText = user;
  compScorePara.innerText = comp;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "";
});
