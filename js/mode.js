export
const lightMode = document.querySelector('.light__btn');
const section = document.querySelector('.mode__section');
const textMode = document.querySelector('.text__frame');
const textLight = document.querySelector('.light__btn');
const textDark = document.querySelector('.dark__btn');
const light = document.getElementById('textMode');
if(lightMode){
    lightMode.addEventListener("click", function(e){
    section.classList.toggle('_light');
    textMode.classList.toggle('_light');
    textLight.classList.toggle('d_mode_btn');
    textDark.classList.toggle('l_mode_btn')
    light.innerHTML = "light";
    })
}
const darkMode = document.querySelector('.dark__btn');
if(darkMode){
    darkMode.addEventListener("click", function(e){
        section.classList.remove('_light');
    textMode.classList.remove('_light');
    textLight.classList.remove('d_mode_btn');
    textDark.classList.remove('l_mode_btn')
    light.innerHTML = "dark";
    })
}
