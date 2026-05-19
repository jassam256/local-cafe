// MENU NAVIGATION
const drinksBtn = document.getElementById("drinks-btn");
const foodBtn = document.getElementById("food-btn");
const dessertBtn = document.getElementById("dessert-btn");

// Initially used a click rather than a mouseover
drinksBtn.addEventListener("mouseover", () => openForm("drinks-menu"));
foodBtn.addEventListener("mouseover", () => openForm("food-menu"));
dessertBtn.addEventListener("mouseover", () => openForm("dessert-menu"));

function openForm(target) {
  let targetForm = document.getElementById(target);

  if (targetForm.classList.contains("hide")) {
    closeForms();

    targetForm.classList.remove("hide");
  } else {
    // targetForm.classList.add("hide");
  }
}

function closeForms() {
  const drinks = document.getElementById("drinks-menu");
  const food = document.getElementById("food-menu");
  const dessert = document.getElementById("dessert-menu");

  if (!drinks.classList.contains("hide")) {
    drinks.classList.add("hide");
  }

  if (!food.classList.contains("hide")) {
    food.classList.add("hide");
  }

  if (!dessert.classList.contains("hide")) {
    dessert.classList.add("hide");
  }
}
