let flip = Math.round(Math.random());
let guess = window.prompt("Enter a value of 1 or 0");
guess = guess * 1;

if (guess !== 0 && guess !== 1) {
  console.log(`Your guess was ${guess}. This is not a valid number. We need a 1 or 0`);
} else if (flip === guess) {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You Won!`);
} else {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You Lost!`);
}

flip = Math.round(Math.random());
guess = window.prompt("Enter a value of 1 or 0");
guess = guess * 1;

if (guess !== 0 && guess !== 1) {
  console.log(`Your guess was ${guess}. This is not a valid number.`);
} else if (flip === guess) {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You Won!`);
} else {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You Lost!`);
}

flip = Math.round(Math.random());
guess = window.prompt("Enter a value of 1 or 0");
guess = guess * 1;

if (guess !== 0 && guess !== 1) {
  console.log(`Your guess was ${guess}. This is not a valid number.`);
} else if (flip === guess) {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You Won!`);
} else {
  console.log(`Your guess was ${guess}. Flip was ${flip}. You Lost!`);
}