const secsPerMinute = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

let myAge = 45;
const secondsPerDay = secsPerMinute * minsPerHour * hoursPerDay;

const secondsAlive = myAge * weeksPerYear * daysPerWeek * secondsPerDay;

console.log(`There are ${secondsPerDay} seconds in a day.`);
console.log(`I've been alive for more than ${secondsAlive} seconds!`);
