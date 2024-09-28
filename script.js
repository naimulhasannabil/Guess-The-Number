// Guess the number Game
// it's My first Game Code When i learn New Code.
// let gameNumber = 37;

// let userNumber = prompt('Guess the Number : ');

// while(userNumber != gameNumber) {
//     if(userNumber < gameNumber) {
//         alert('Too Low!');
//     } else {
//         alert('Too High!');
//     }
//     userNumber = prompt('Try Again, Guess the Number : ');
// }

// alert('Congratulations! You guessed it right.');

// After Updating Myself Here is New Version
// Guess the Number
function guessTheNumber(difficulty) {
  let maxAttempts;
  let attempts = 0;
  let randomNumber;
  let range;
  switch (difficulty) {
    case "easy":
      range = 10;
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1; // Random Number Between 1 - 10.
    //   console.log(randomNumber);
      break;

    case "medium":
      range = 100;
      maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 100) + 1; // Random Number Between 1 - 100.
    //   console.log(randomNumber);
      break;

    case "hard":
      range = 1000;
      maxAttempts = 10;
      randomNumber = Math.floor(Math.random() * 1000) + 1; // Random Number Between 1 - 1000.
    //   console.log(randomNumber);
      break;

    default:
      alert(
        "Invalid difficulty level!, Choose ('easy', 'medium', or 'hard') & Refresh Again.."
      );
  }
  while (attempts < maxAttempts) {
    let guess = parseInt(
      prompt(
        `Guess a number between 1 and ${range} (Inclusive.) You have ${
          maxAttempts - attempts
        } Attempts Left.`
      )
    );
    console.log(guess);
    attempts++;

    if (guess === randomNumber) {
      alert(
        `Congratulations! You guessed the number in ${attempts} Attempts. \n If you Want Play More, Refresh and Play the Game.`
      );

      break;
    } else if (guess < randomNumber) {
      alert("Too Low, Try Again!");
    } else {
      alert("Too High, Try Again!");
    }
  }
  if (maxAttempts === attempts) {
    alert(
      `Sorry, You run out of attempts. The Number was ${randomNumber}. \n If You Want play more, Refresh Again & Enjoy the Game.`
    );
  }
}

// Get User Input
let difficulty = prompt("Choose difficulty (easy, medium, hard)").toLowerCase();

guessTheNumber(difficulty);
// console.log(difficulty);
