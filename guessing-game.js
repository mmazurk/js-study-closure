function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let count = 1;
  let gameOver = false;

  function game(number) {
    if (gameOver) {
      return "The game is over, you already won!";
    } else if (number > randomNumber) {
      count++;
      return `${number} is too high!`;
    } else if (number < randomNumber) {
      count++;
      return `${number} is too low!`;
    } else if (number === randomNumber) {
      gameOver = true;
      return `You win! You found ${randomNumber} in ${count} guesses.`;
    }
  }
  return game;
}

module.exports = { guessingGame };
