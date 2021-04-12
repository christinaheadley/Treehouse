const main = document.querySelector("main");
let html = "";
for (let i = 1; i < 11; i++) {
  html += `<div>${i}</div>`;
}
main.innerHTML = html;
