const menu = document.querySelector(".menu");
const closeBtn = document.querySelector("#close-btn");
const overlay = document.querySelector(".modal-overlay");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.add("modal-is-open");
});
closeBtn.addEventListener("click", (e) => {
  document.body.classList.remove("modal-is-open");
});
