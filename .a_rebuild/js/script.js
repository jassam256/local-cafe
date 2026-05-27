// NAV MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementsByClassName("nav-links");

toggle.addEventListener("click", () => {
  // console.log("menu click");

  // show links
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle("show");
  }
});
