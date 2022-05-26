export default function burger(){
    const iconMenu = document.querySelector('.menu__icon');
    const menuNav = document.querySelector('.navbar');
    if(iconMenu){
        iconMenu.addEventListener("click", function(e){
            document.body.classList.add('body__scroll-off')
            iconMenu.classList.add('_active');
            menuNav.classList.add('_active');
        })
    }
}
