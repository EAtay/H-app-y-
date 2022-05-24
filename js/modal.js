export default function openModal (){
    const sendBtn = document.querySelector('.modal__send');
    const close = document.querySelector('.load__content');
    const done = document.querySelector('.buy__content');
    const formInput = document.querySelector('.modal__input');
    const inputEmail = document.querySelector('.modal_email');
        if(sendBtn){
            sendBtn.addEventListener("click", function(e){
                    close.classList.toggle('closed__content');
                    setTimeout(() => {
                        sendBtn.setAttribute('disabled',"")
                        close.classList.remove("closed__content");
                        done.style.display = "block";
                        done.addEventListener('click', function(e){
                            modalOpen.style.display = 'none';
                            done.style.display = "none";
                            sendBtn.removeAttribute('disabled',"")
                        })
                }, 4000);
            //     const inputVal = formInput.value;
            //     const emailVal = inputEmail.value;
            // formInput.forEach(function(input){
            //     if(input.value == ''){
            //         input.classList.add('error')
            //         console.log('inputnooot');
                    // input.parentElement.setAttribute('data-error');
        //         }
        //     })
        })
        }
        // document.querySelectorAll('.modal__inputs[data-error] .modal__input')
        // .forEach(inpEl => {
            // inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
            // });
        
        const modal = document.querySelectorAll('.card__btn');
        const buyBtn = document.querySelector('.section__button');
        const modalOpen = document.querySelector('.modal');
        const blueBtnPricing = document.querySelector('.standard__btn');
        const blueBtnFill = document.querySelector('.blue__btn');
        const redBtnPricing = document.querySelector('.premium__btn');
        const redBtnFill = document.querySelector('.red__btn');
        const orangeBtnFill = document.querySelector('.orange__btn');
        const selected = document.querySelector('.select__svg');
        if(blueBtnPricing){
            blueBtnPricing.addEventListener('click', function(e){
                blueBtnFill.classList.toggle('standard');
                blueBtnFill.style.color = "#fff";
                selected.style.display = "flex";
                orangeBtnFill.classList.remove('lifetime');
                orangeBtnFill.style.color = ('#ff9209');
            })
        }
        if(redBtnPricing){
            redBtnPricing.addEventListener('click', function(e) {
                redBtnFill.classList.toggle('premium');
                redBtnFill.style.color = "#fff";
                selected.style.display = "flex";
                orangeBtnFill.classList.remove('lifetime');
                orangeBtnFill.style.color = ('#ff9209');
            })
        }
            if(modal){
                blueBtnFill.addEventListener('click',function(e){
                    blueBtnFill.classList.toggle('standard');
                    blueBtnFill.style.color = "#fff";
                    selected.style.display = "flex";
                    orangeBtnFill.classList.remove('lifetime');
                    orangeBtnFill.style.color = ('#ff9209');
                    redBtnFill.classList.remove('premium');
                    redBtnFill.style.color = ('#FF5437');
                })
                redBtnFill.addEventListener('click', function(e){
                redBtnFill.classList.toggle('premium');
                redBtnFill.style.color = "#fff";
                selected.style.display = "flex";
                blueBtnFill.classList.remove('standard');
                blueBtnFill.style.color = ('#0278ED')
                orangeBtnFill.classList.remove('lifetime');
                orangeBtnFill.style.color = ('#ff9209');
                })
                orangeBtnFill.addEventListener('click', function(e){
                    orangeBtnFill.classList.toggle('lifetime');
                    orangeBtnFill.style.color = "#fff";
                    selected.style.display = "flex";
                    blueBtnFill.classList.remove('standard');
                    blueBtnFill.style.color = ('#0278ED');
                    redBtnFill.classList.remove('premium');
                    redBtnFill.style.color = ('#FF5437');
                    })
            modal.forEach(tag => {
                tag.addEventListener("click", function(e) {
                    modalOpen.style.display = 'block';
                    selected.style.display = "flex";
                })
            });
            if(buyBtn){
                buyBtn.addEventListener("click", function(e) {
                    modalOpen.style.display = 'block';
                })
            }
        }
}

