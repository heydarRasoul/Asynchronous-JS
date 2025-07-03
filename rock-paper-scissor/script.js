// const choices = ["paper", "scissor", "rock"];
// let playAgain = true;
// while (playAgain) {
//   let userInput = prompt(
//     "Please select an option by entering its number: Paper(1), Scissor(2), Rock(3)"
//   );
//   let randomNumber = Math.floor(Math.random() * 3);
//   let userChoice = choices[Number(userInput) - 1];
//   let computerChoice = randomNumber;

//   if (!userChoice) {
//     alert("Invalid choice. Please enter 1, 2, or 3.");
//     continue;
//   }
//   if (userChoice === computerChoice) {
//     alert(
//       `It's draw! You chose ${userChoice} and the computer chose ${computerChoice}.`
//     );
//   } else if (
//     (userChoice === "scissor" && computerChoice === "paper") ||
//     (userChoice === "rock" && computerChoice === "scissor") ||
//     (userChoice === "paper" && computerChoice === "rock")
//   ) {
//     alert(
//       `You won! You chose ${userChoice} and the computer chose ${computerChoice}.`
//     );
//   } else {
//     alert(
//       `You lose! You chose ${userChoice} and the computer chose ${computerChoice}.`
//     );
//   }

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

// ===========================

const choices = ["paper", "scissor", "rock"];
let playAgain = true;
while (playAgain) {
  let userInput = prompt(
    "Please select an option by entering its number: Paper(1), Scissor(2), Rock(3)"
  );

  let userChoice = choices[Number(userInput) - 1];
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  if (!userChoice) {
    alert("Invalid choice. Please enter 1, 2, or 3.");
    continue;
  }
  userChoice === computerChoice
    ? alert(
        `It's draw! You chose ${userChoice} and the computer chose ${computerChoice}.`
      )
    : (userChoice === "scissor" && computerChoice === "paper") ||
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock")
    ? alert(
        `You won! You chose ${userChoice} and the computer chose ${computerChoice}.`
      )
    : alert(
        `You lose! You chose ${userChoice} and the computer chose ${computerChoice}.`
      );

  while (playAgain) {
    let playAgainInput = prompt(
      "Would you like to play another round? (Y/N)"
    ).toLowerCase();

    if (playAgainInput === "n") {
      alert("Thanks for playing!");
      playAgain = false;
      break;
    } else if (playAgainInput === "y") {
      break;
    } else {
      alert("Invalid choice. Please enter (Y/N)");
    }
  }
}
