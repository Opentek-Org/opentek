const addEventToNavbarToggler = () => {
  const navTogglerIcon = document.querySelector(".navbar-custom-toggler-icon");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLink = document.querySelectorAll(".nav-link");
  const navButton = document.querySelectorAll(".nav-button");
  const toggleClasses = () => {
    navTogglerIcon.classList.toggle("bi-list");
    navTogglerIcon.classList.toggle("bi-x-circle-fill");
  };
  const closeMenu = () => {
    navTogglerIcon.classList.remove("bi-x-circle-fill");
    navTogglerIcon.classList.add("bi-list");
  };
  navTogglerIcon.addEventListener("click", () => {
    toggleClasses();
    navLink.forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });
    navButton.forEach((button) => {
      button.addEventListener("click", () => closeMenu());
    });
  });
};
addEventToNavbarToggler();
