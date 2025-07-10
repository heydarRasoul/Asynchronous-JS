const symbols = ["💎", "🍭", "🍀", "🍩", "💀"];
let startBalance = 100;

function spining() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let randomSymbolSet = [];
      for (let i = 0; i < 3; i++) {
        let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        randomSymbolSet.push(randomSymbol);
      }
      resolve(randomSymbolSet);
    }, 1000);
  });
}

function checkWiningConditions(randomSymbolSet, bet) {
  const [a, b, c] = randomSymbolSet;

  if (a === b && a === c) {
    if (a === "💎") return bet * 40;
    else if (a === "🍭") return bet * 30;
    else if (a === "🍀") return bet * 20;
  }
  if (a === b || b === c) {
    return bet * 2;
  }
  return -bet;
}

async function playSlotGame() {
  alert(`Welcome to the game. Your start balance: $ ${startBalance}`);

  let playAgain = true;

  while ((playAgain = true && startBalance > 0)) {
    let bet = Number(
      prompt(`Your balance is $ ${startBalance}\nPlease enter your bet:`)
    );

    if (bet > startBalance) {
      alert(`Invalid! Your current balance is $ ${startBalance}`);
      continue;
    } else if (bet <= startBalance && bet > 0) {
      alert("Spining! Please wait.");
      const result = await spining();
      alert(`Result : [${result}]`);

      const winnings = checkWiningConditions(result, bet);
      if (winnings > 0) {
        startBalance += winnings;
        alert(`You won $ ${winnings}`);
        alert(`Your current balance is $ ${startBalance}`);
      } else {
        alert(`You lost $ ${bet}`);
        startBalance -= bet;
        alert(`Your current balance is $ ${startBalance}`);
      }
      playAgain = prompt(`Do you want to play again?(Y/N)`).toLowerCase();
      if (playAgain === "y" && startBalance > 0) {
        continue;
      } else if (playAgain === "y" && startBalance <= 0) {
        alert(`Your balance is not enough!`);
        break;
      } else {
        alert(`Thank you for playing.`);
        break;
      }
    } else {
      alert(`Invalid input!`);
      continue;
    }
  }
}

playSlotGame();


