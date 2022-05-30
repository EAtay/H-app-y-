    let form = document.querySelector('.js-form')
    let formInputs = document.querySelectorAll('.modal__input-text')
    let inputEmail = document.querySelector('.js-input-email')
    let inputName = document.querySelector('.js-input-name')
    var radio = document.querySelectorAll('input[type="radio"]');
    var check = document.querySelectorAll('input[type="checkbox"]');

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateName(text) {
        let req = /^[a-zA-Z]+$/;
        return req.test(String(text).toLowerCase());
    }

    form.onsubmit = function (e) {
        e.preventDefault()
        let emailVal = inputEmail.value
        let nameVal = inputName.value
        let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

        console.log(emailval);
        if (emptyInputs.length !== 0) {
            document.getElementById("span__email").textContent = "this field is reqiured*"
            return false;
        } else {
            document.getElementById("span__email").textContent = ""
        }

        if (emailVal.length < 3) {
            document.getElementById("span__email").textContent = "should be more then 3 symbols"
            return false
        } else {
            document.getElementById("span__email").textContent = ""
            let modal_time = document.getElementById('modal_time')
            let open = document.getElementById('time-open')
            open.onclick = function () {
                modal_time.style.display = "flex";
            }
        }
        if (!validateEmail(emailVal)) {
            document.getElementById("span__email").textContent = "email not valid"
            return false;
        } else {
            document.getElementById("span__email").textContent = ""
        }

        if (nameVal.length < 3) {
            document.getElementById("span__name").textContent = "should be more then 3 symbols"
            return false
        } else {
            document.getElementById("span__name").textContent = ""
        }
        if (!validateName(nameVal)) {
            document.getElementById("span__name").textContent = "name not valid"
            return false;
        } else {
            document.getElementById("span__name").textContent = ""
        }

        for (var i = 0; i < radio.length; i++) {
            radio[i].checked === true ? activeRadio = radio[i].value : null
        }
        for (var i = 0; i < check.length; i++) {
            check[i].checked === true ? activeCheck = check[i].value : null
        }

        console.log("name" + ":" + nameVal, "email" + ":" + emailVal, "radio" + ":" + activeRadio, "check" + ":" + activeCheck)
// }