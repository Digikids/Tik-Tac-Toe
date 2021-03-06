const A1 = document.getElementById("1A");
const A2 = document.getElementById("2A");
const A3 = document.getElementById("3A");
const B1 = document.getElementById("1B");
const B2 = document.getElementById("2B");
const B3 = document.getElementById("3B");
const C1 = document.getElementById("1C");
const C2 = document.getElementById("2C");
const C3 = document.getElementById("3C");

var dots = [A1, A2, A3, B1, B2, B3, C1, C2, C3];

function computerPlay() {
  const random = Math.floor(Math.random() * dots.length);
  let dot = random;
  dots[random].classList.add("computer");
  dots.splice(random, 1);
}

function clickDot(dot, index) {
  dot.classList.add("player");
  dots.splice(index, 1);
  setTimeout(computerPlay, 100);
}

for (var dot of dots) {
  dot.addEventListener("click", function (e) {
    clickDot(e.target, dots.indexOf(e.target));
  });
}

A1.classList.contains("computer");
