let lowInput = prompt("We're going to create a random number between two numbers you enter. Enter a low number:");

let highInput = prompt("Now enter the high number:");

let lowNum = parseInt(lowInput);
let highNum = parseInt(highInput);
document.write(Math.floor(Math.random() * (highNum - lowNum + 1) + lowNum)); //The maximum is inclusive and the minimum is inclusive

// function getRandomIntInclusive(min, max)
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(3));
// // expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // expected output: 0

// console.log(Math.random());
// // expected output: a number from 0 to <1
