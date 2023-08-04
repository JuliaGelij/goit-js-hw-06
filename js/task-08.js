//+++++ 1 Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
//+++++ 2 Podczas przesyłania formularza strona nie powinna się odświeżać.
//+++++ 3 Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// 4 Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa pola będzie
// nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// 5 Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

const submitBtn = document.querySelector("button[type='submit']");

function handleLogin(e) {
  e.preventDefault();

  const { form } = e.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);


  const formData = {
    email:email.value,
    password:password.value,
  }
console.log(formData)

  form.reset();
}

submitBtn.addEventListener("click", handleLogin);
