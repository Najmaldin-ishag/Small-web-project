const hamburger = document.querySelector(".hamb");
const navlist = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
  this.classlist.toggle("click");
  navlist.classList.toggle("open");
});
