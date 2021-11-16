const menuIcon = document.querySelector(".hamb-icon");
const menu = document.querySelector(".menu-links");
const exitIcon = document.querySelector(".hamb-close-btn");
const linksMenu = document.querySelectorAll('.menu-link');

menuIcon.addEventListener("click", () => {
  menu.style.display = "flex";
});

exitIcon.addEventListener("click", () => {
  menu.style.display = "none";
});

// linksMenu.forEach((link) => {
//     link.addEventListener('click', () => {
//         menu.style.display = "none";
//     })
// })