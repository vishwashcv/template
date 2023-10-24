const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const work = document.querySelector(".part__work");
const blog = document.querySelector(".part__blog");
const about = document.querySelector(".part__about");
const showcase01 = document.querySelector(".project__showcase:nth-child(1)");
const showcase02 = document.querySelector(".project__showcase:nth-child(2)");
const footerCTA = document.querySelector(".footer__cta");
const works = document.querySelectorAll(".part__work");
const blogs = document.querySelectorAll(".part__blog");
const abouts = document.querySelectorAll(".part__about");
window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

[work, blog, about].forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    if (link === blog) {
      cursorDot.classList.add("active-brown-link");
      cursorOutline.classList.add("active-brown-link");
    } else {
      cursorDot.classList.add("active-link");
      cursorOutline.classList.add("active-link");
    }
  });
  link.addEventListener("mouseleave", (e) => {
    if (link === blog) {
      cursorDot.classList.remove("active-brown-link");
      cursorOutline.classList.remove("active-brown-link");
    } else {
      cursorDot.classList.remove("active-link");
      cursorOutline.classList.remove("active-link");
    }
  });
});

[showcase01, showcase02, footerCTA].forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    if (link === showcase02) {
      cursorDot.classList.add("active-white-arrow-link");
      cursorOutline.classList.add("active-white-arrow-link");
    } else {
      cursorDot.classList.add("active-brown-arrow-link");
      cursorOutline.classList.add("active-brown-arrow-link");
    }
  });
  link.addEventListener("mouseleave", (e) => {
    if (link === showcase02) {
      cursorDot.classList.remove("active-white-arrow-link");
      cursorOutline.classList.remove("active-white-arrow-link");
    } else {
      cursorDot.classList.remove("active-brown-arrow-link");
      cursorOutline.classList.remove("active-brown-arrow-link");
    }
  });
});

footerCTA.addEventListener("click", (_) => {
  window.location.href = "mailto:selvampreethi360@gmail.com";
});

works.forEach((work) => {
  work.addEventListener("click", (_) => {
    window.location.href = "./modern-layout-project.html";
  });
});

blogs.forEach((blog) => {
  blog.addEventListener("click", (_) => {
    window.location.href = "./blog.html";
  });
});

abouts.forEach((about) => {
  about.addEventListener("click", (_) => {
    window.location.href = "./about.html";
  });
});
