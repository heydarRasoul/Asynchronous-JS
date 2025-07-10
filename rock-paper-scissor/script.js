const options = { 1: "Paper", 2: "Scissor", 3: "Rock" };

const getUserInput = () => {
  while (true) {
    const userInput = prompt(
      "Select an option:\n Paper(1),\n Scissor(2),\n Rock(3)."
    );
    let userChoice = options[userInput];
    if (!userChoice) {
      alert("Invalid choice. Please enter 1, 2 or 3");
      continue;
    }
    return userChoice;
  }
};

const getComputerChoice = () => {
  const computerChoice = options[Math.floor(Math.random() * 3)];
  return computerChoice;
};

const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "draw";

  if (
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "user";
  }
  return "computer";
};

const playAgain = () => {
  while (true) {
    const input = prompt(
      "Would you like to play another round? (Y/N)"
    ).toLowerCase();

    if (input === "n") {
      alert("Thanks for playing!");
      return false;
    } else if (input === "y") {
      return true;
    } else {
      alert("Invalid choice. Please enter (Y/N)");
    }
  }
};

const playGame = () => {
  while (true) {
    const compChoice = getComputerChoice();

    const usersChoice = getUserInput();
    if (!usersChoice) break;

    const winner = getWinner(usersChoice, compChoice);

    if (winner === "draw") {
      alert(`It's a draw! You both chose ${usersChoice}.`);
    } else if (winner === "user") {
      alert(`You win! You chose ${usersChoice}, computer chose ${compChoice}.`);
    } else {
      alert(
        `You lose! You chose ${usersChoice}, computer chose ${compChoice}.`
      );
    }

    const keepPlaying = playAgain();
    if (!keepPlaying) break;
  }
};

playGame();

// let playGameAgain = true;

// while (playGameAgain) {
//   let playGameAgain = playGame();
// }

// ==============

// const choices = ["paper", "scissor", "rock"];
// let playAgain = true;
// while (playAgain) {
//   let userInput = prompt(
//     "Please select an option by entering its number: Paper(1), Scissor(2), Rock(3)"
//   );

//   let userChoice = choices[Number(userInput) - 1];
//   let computerChoice = choices[Math.floor(Math.random() * 3)];

//   if (!userChoice) {
//     alert("Invalid choice. Please enter 1, 2, or 3.");
//     continue;
//   }
//   userChoice === computerChoice
//     ? alert(
//         `It's draw! You chose ${userChoice} and the computer chose ${computerChoice}.`
//       )
//     : (userChoice === "scissor" && computerChoice === "paper") ||
//       (userChoice === "rock" && computerChoice === "scissor") ||
//       (userChoice === "paper" && computerChoice === "rock")
//     ? alert(
//         `You won! You chose ${userChoice} and the computer chose ${computerChoice}.`
//       )
//     : alert(
//         `You lose! You chose ${userChoice} and the computer chose ${computerChoice}.`
//       );

//   while (playAgain) {
//     let playAgainInput = prompt(
//       "Would you like to play another round? (Y/N)"
//     ).toLowerCase();

//     if (playAgainInput === "n") {
//       alert("Thanks for playing!");
//       playAgain = false;
//       break;
//     } else if (playAgainInput === "y") {
//       break;
//     } else {
//       alert("Invalid choice. Please enter (Y/N)");
//     }
//   }
// }
