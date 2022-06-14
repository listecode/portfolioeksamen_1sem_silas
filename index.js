var body = document.querySelector("body");
var button = document.querySelector("button");

button.addEventListener("click", darkMode);

function darkMode() {
  body.classList.toggle("dark");
  if (button.innerHTML == "Biograf Tilstand") {
    button.innerHTML = "Lys Tilstand";
  } else {
    button.innerHTML = "Biograf Tilstand";
  }
}
