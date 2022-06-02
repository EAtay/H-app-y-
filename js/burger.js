export default function burger() {
  const iconMenu = document.querySelector(".menu__icon");
  const menuNav = document.querySelector(".navbar");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuNav.classList.toggle("_active");
  });
  const renderModalLink = () => {
    const links = document.querySelectorAll(".navbar__li");
    links.forEach((link) =>
      link.addEventListener("click", () => {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuNav.classList.remove("_active");
      })
    );
  };
  renderModalLink();
}
