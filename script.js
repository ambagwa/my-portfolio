document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbar = document.getElementById("navbar");

  navbarToggle.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
  });
});
