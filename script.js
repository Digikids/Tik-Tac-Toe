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

function clickDot(dot) {
  dot.classList.add("player");
}

for (var dot of dots) {
  dot.addEventListener("click", function (e) {
    clickDot(e.target);
  });
}
