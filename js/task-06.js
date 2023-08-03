// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość wprowadzona
// przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)
// Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony,
//  a jeśli liczba jest nieprawidłowa - czerwony.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

// <input
// type="text"
// id="validation-input"
// data-length="6"
// placeholder="Please enter 6 symbols"
// />

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (e) => {
  if (validationInput.value.length === 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
