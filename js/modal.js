export default function openModal() {
  const modal = document.querySelectorAll(".card__btn");
  const buyBtn = document.querySelector(".buy-now__btn__main");
  const modalOpen = document.querySelector(".modal");
  const standardBtnBuy = document.querySelector(".standard__btn");
  const premiumBtnBuy = document.querySelector(".premium__btn");
  const selectStandard = document.getElementById("standard");
  const selectPremium = document.getElementById("premium");
  modal.forEach((tag) => {
    tag.addEventListener("click", function (e) {
      modalOpen.style.display = "block";
      document.body.classList.add("body__scroll-off");
    });
  });
  buyBtn.addEventListener("click", function (e) {
    modalOpen.style.display = "block";
    document.body.classList.add("body__scroll-off");
  });
  standardBtnBuy.addEventListener("click", function (e) {
    selectStandard.checked = true;
  });
  premiumBtnBuy.addEventListener("click", function (e) {
    selectPremium.checked = true;
  });
  const sendBtn = document.querySelector(".modal__btn-send");
  const close = document.querySelector(".load__content");
  const doneBtn = document.querySelector(".hidden__btn-done");
  sendBtn.addEventListener("click", function (e) {
    const checked_btn = document.querySelector('input[name = "drone"]:checked');
    const ss = document.getElementById('checkbox__facebook');
    if(ss && ss.value){
      console.log("input");
      }
    close.classList.add("hidden__modal__content");
    console.log("Plan: " + checked_btn.value);
    
    setTimeout(() => {
      sendBtn.setAttribute("disabled", "");
      close.classList.remove("hidden__modal__content");
      doneBtn.style.display = "block";
      doneBtn.addEventListener("click", function (e) {
        modalOpen.style.display = "none";
        doneBtn.style.display = "none";
        sendBtn.removeAttribute("disabled", "");
        document.body.classList.remove("body__scroll-off");
      });
    }, 3000);
  });
}