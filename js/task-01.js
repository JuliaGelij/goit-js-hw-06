// Napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst
// nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

const categoryLength = document.querySelectorAll("#categories .item");
console.log(categoryLength.length);

const categoryHeadder = document.querySelectorAll(".item h2");
categoryHeadder.forEach((category) => {
  categoryName = category.textContent;
  console.log(`tekst nagłówka: ${categoryName}`);
});
