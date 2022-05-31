export default function openModal() {
  const modal = document.querySelectorAll(".card__btn");
  const buyBtn = document.querySelector(".buy-now__btn__main");
  const modalOpen = document.querySelector(".modal");
  const standardBtnBuy = document.querySelector(".standard__btn");
  const premiumBtnBuy = document.querySelector(".premium__btn");
  const selectStandard = document.getElementById("standard");
  const selectPremium = document.getElementById("premium");
  const sendBtn = document.querySelector(".modal__btn-send");
  const loadContent = document.querySelector(".load__content");
  let username = document.getElementById("firstname"),
    email = document.getElementById("email"),
    errorMsg = document.querySelectorAll(".input-status");
  const doneBtn = document.querySelector(".hidden__btn-done");
  const closeModal = document.querySelector(".close__content");
  const checked_btn = document.querySelector('input[name = "drone"]:checked');
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
  function validateEmail(email) {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validateName(text) {
    let req = /^[a-zA-Z]+$/;
    return req.test(String(text).toLowerCase());
  }
  modal.forEach((tag) => {
    tag.addEventListener("click", function (e) {
      modalOpen.style.display = "block";
      document.body.classList.add("body__scroll-off");
    });
  });
  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      return false;
    } else {
      errorMsg[serial].innerHTML = "";
    }
    if (id.value.length < 3) {
      errorMsg[serial].innerHTML = "should be more then 3 symbols";
      return false;
    } else {
      errorMsg[serial].innerHTML = "";
    }
  };

  closeModal.addEventListener("click", function (e) {
    username.value = "";
    email.value = "";
    modalOpen.style.display = "none";
    doneBtn.style.display = "none";
    sendBtn.removeAttribute("disabled", "");
    document.body.classList.remove("body__scroll-off");
  });
  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    engine(username, 0, "username cannot be blank");
    engine(email, 1, "email cannot be blank");
    if (!validateName(username.value)) {
      errorMsg[0].innerHTML = "name not valid";
      return false;
    } else {
      errorMsg[0].innerHTML = "";
    }
    if (!validateEmail(email.value)) {
      errorMsg[1].innerHTML = "email not valid";
      return false;
    } else {
      errorMsg[1].innerHTML = "";
    }
    loadContent.classList.add("hidden__modal__content");
    console.log("Plan: " + checked_btn.value);
    setTimeout(() => {
      sendBtn.setAttribute("disabled", "");
      loadContent.classList.remove("hidden__modal__content");
      doneBtn.style.display = "block";
      doneBtn.addEventListener("click", function (e) {
        username.value = "";
        email.value = "";
        modalOpen.style.display = "none";
        doneBtn.style.display = "none";
        sendBtn.removeAttribute("disabled", "");
        document.body.classList.remove("body__scroll-off");
      });
    }, 3000);
  });
}
