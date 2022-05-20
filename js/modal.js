export 
const sendBtn = document.querySelector('.modal__send');
    const close = document.querySelector('.load__content');
    if(sendBtn){
        sendBtn.addEventListener("click", function(e){
        close.classList.toggle('closed__content');
        setTimeout(() => {
            close.classList.remove("closed__content");
            modalOpen.style.display = 'none';
        }, 5500);
        })
    }
const modal = document.querySelectorAll('.card__btn');
const buyBtn = document.querySelector('.section__button');
const modalOpen = document.querySelector('.modal');
if(modal){
    modal.forEach(tag => {
        tag.addEventListener("click", function(e) {
            modalOpen.style.display = 'block';
        })
    });
    if(buyBtn){
        buyBtn.addEventListener("click", function(e) {
            modalOpen.style.display = 'block';
        })
    }
}
//     document.querySelectorAll('.modal__imputs[data-error] .modal__input').forEach(inpEl => {
//         inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
//     });

