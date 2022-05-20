export const iconMenu = document.querySelector('.menu__icon');
const menuNav = document.querySelector('.navbar');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuNav.classList.toggle('_active');
    })
}
const menuLinks = document.querySelectorAll('.menu__item[data-goto], .btn__scroll[data-goto]');
if(menuLinks.length > 0){
     menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);
     });
     function onMenuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;
            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuNav.classList.remove('_active');    
            }
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}
}
