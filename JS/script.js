///////////////////////////////////////////////////////////////////
//MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-nav-mobile");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
