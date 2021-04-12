let html = "";
// let red;
// let green;
// let blue;
// let randomRGB;
const random = () => Math.floor(Math.random() * 256);

// function randomRGB() {
//   const color = `rgb( ${random()}, ${random()}, ${random()} )`;
//   return color;
function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}
for (let i = 1; i < 101; i++) {
  // red = random();
  // green = random();
  // blue = random();
  // randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  // randomRGB();
  html += `<div style="background-color: ${randomRGB(random)}">${i}</div>`;
}

document.querySelector("main").innerHTML = html;
