const footerCTA = document.querySelector("footer .footer__cta");
const link01 = document.querySelector(".modal-links .modal-link:nth-child(1)");
const link02 = document.querySelector(".modal-links .modal-link:nth-child(2)");
const link03 = document.querySelector(".modal-links .modal-link:nth-child(3)");

footerCTA.addEventListener("click", (_) => {
  window.location.href = "mailto:selvampreethi360@gmail.com";
});

link01.addEventListener("click", (_) => {
  window.location.href = "./modern-layout-project.html";
});

link02.addEventListener("click", (_) => {
  window.location.href = "./about.html";
});

link03.addEventListener("click", (_) => {
  window.location.href = "./blog.html";
});
