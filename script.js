const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    formStatus.textContent = "Please check the highlighted fields.";
    return;
  }

  formStatus.textContent =
    "Form validation successful. This demo does not send messages yet.";
  contactForm.reset();
});
