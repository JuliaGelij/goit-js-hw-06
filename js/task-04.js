// Licznik składa się z elementu span i przycisków, które, po ich kliknięciu,
//powinny zwiększać i zmniejszać jego wartość o jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i
//nadaj jej początkową wartość wartość 0.
// Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.

const counterValue = document.querySelector("#value");
let accum = 0;

document.querySelector("#counter").addEventListener("click", (e) => {
  const action = e.target.dataset.action;

  if (action === "increment") {
    accum++;
  } else if (action === "decrement") {
    accum--;
  }
  counterValue.textContent = accum;
});
