// Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline)
//  po kliknięciu na button.change-color i wyświetla wartość koloru w span.color.
//  Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// <div class="widget">
// <p>Background color: <span class="color">-</span></p>
// <button type="button" class="change-color">Change color</button>
// </div>

const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");

function getRandomHexColor() {
  const body = document.querySelector("body");

  const colorHex = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  console.log(colorHex);

  body.style.backgroundColor = colorHex;

  color.textContent = colorHex;
}

changeColorBtn.addEventListener("click", getRandomHexColor);
