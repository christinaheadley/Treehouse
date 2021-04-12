// function getRandomNumber(upper) {
//   return Math.floor(Math.random() * upper) + 1;
// }

// let counter = 0;
// do {
//   console.log(`The random number is ${getRandomNumber(10)}`);
//   counter++;
// } while (counter === 10);

// while secret !== "sesame"
//   let secret = prompt("What is the secret password?");
// }
// do while (secret === "sesame");
// // This should run after the loop is done executing
// alert("You know the secret password. Welcome!");

let secret;
do {
  secret = prompt("What is the secret password?");
} while (secret !== "sesame");
alert("You know the secret password. Welcome!");
