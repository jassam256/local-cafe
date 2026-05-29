// Menu navigation
const drinksBtn = document.getElementById("drinks-btn");
const foodBtn = document.getElementById("food-btn");
const dessertBtn = document.getElementById("dessert-btn");

// Event Listeners
drinksBtn.addEventListener("click", () => openForm("drinks-menu"));
foodBtn.addEventListener("click", () => openForm("food-menu"));
dessertBtn.addEventListener("click", () => openForm("dessert-menu"));

// OPEN AND CLOSE MENU FORMS
function openForm(target) {
  let targetForm = document.getElementById(target);

  removeActive();
  addActive(target);

  if (targetForm.classList.contains("hide")) {
    closeForms();

    targetForm.classList.remove("hide");
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

// REMOVE ACTIVE BUTTON
function removeActive() {
  if (drinksBtn.classList.contains("selected")) {
    drinksBtn.classList.remove("selected");
  }

  if (foodBtn.classList.contains("selected")) {
    foodBtn.classList.remove("selected");
  }

  if (dessertBtn.classList.contains("selected")) {
    dessertBtn.classList.remove("selected");
  }
}

// ADD ACTIVE BUTTON
function addActive(target) {
  if (target == "drinks-menu") {
    drinksBtn.classList.add("selected");
  }
  if (target == "food-menu") {
    foodBtn.classList.add("selected");
  }
  if (target == "dessert-menu") {
    dessertBtn.classList.add("selected");
  }
}
