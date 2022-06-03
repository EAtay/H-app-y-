export default function changeTheme() {
  const lightModeOn = document.querySelector(".light__btn");
  const darkModeOn = document.querySelector(".dark__btn");
  const section = document.querySelector(".mode__section");
  const textMode = document.querySelector(".text__frame");
  const themeName = document.querySelector(".theme-name");
  const textLight = document.querySelector(".light__btn");
  const textDark = document.querySelector(".dark__btn");
  const boldTitleChange = document.getElementById("bold-title");

  lightModeOn.addEventListener("click", function (e) {
    section.classList.add("light-theme");
    section.classList.add('changeTheme__title')
    themeName.innerHTML = "light";
    textMode.classList.add("changeTheme__title");
    textLight.classList.add("d_mode_btn");
    textDark.classList.add("l_mode_btn");
    boldTitleChange.innerHTML = "light";
  });

  darkModeOn.addEventListener("click", function (e) {
    section.classList.remove("light-theme");
    themeName.innerHTML = "dark";
    section.classList.remove('changeTheme__title')
    textMode.classList.remove("changeTheme__title");
    textLight.classList.remove("d_mode_btn");
    textDark.classList.remove("l_mode_btn");
    boldTitleChange.innerHTML = "dark";
  });
}
