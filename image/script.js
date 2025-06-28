const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }    
  });
});
