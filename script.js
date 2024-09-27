// Guess the number Game

let gameNumber = 37;

let userNumber = prompt('Guess the Number : ');

while(userNumber != gameNumber) {
    if(userNumber < gameNumber) {
        alert('Too Low!');
    } else {
        alert('Too High!');
    }
    userNumber = prompt('Try Again, Guess the Number : ');
}

alert('Congratulations! You guessed it right.');