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
  const checkedInputs = document.querySelectorAll(".checkbox__input");
  const checkedInputsLabel = document.querySelectorAll(
    ".checkbox__input-label"
  );
  const activeCheckboxesText = () => {
    let texts = [];
    checkedInputs.forEach((checkbox, index) => {
      if (checkbox.checked === true) {
        texts.push(checkedInputsLabel[index].textContent);
      }
    });
    return texts;
  };

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

    if (username.value && email.value && activeCheckboxesText) {
      loadContent.classList.add("hidden__modal__content");
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
      console.log("Username:" + username.value);
      console.log("Username:" + email.value);
      console.log("Plan: " + checked_btn.value);
      console.log(activeCheckboxesText());
      console.log("true");
    } else {
      console.log("false");
    }
  });
}
