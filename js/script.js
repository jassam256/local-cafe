// NAV MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementsByClassName("nav-links");
const menuToggle = document.getElementById("menu-toggle");

toggle.addEventListener("click", () => {
  // console.log("menu click");

  // change symbol
  if (menuToggle.classList.contains("active")) {
    menuToggle.classList.remove("active");
  } else menuToggle.classList.add("active");

  // show links
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle("show");
  }
});
