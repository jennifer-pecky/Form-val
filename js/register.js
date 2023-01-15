const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email")
const passWord = document.getElementById("password");
const passWord2 = document.getElementById("password2");
const formControl = document.querySelectorAll(".form-control")

// ***********Eventlisterners***********//

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //****submitbtnValidation^^^^^^^//
    usernameValidation()
    emailValidation()
    passWordValidation()
    passWord2Validation()

    let LoginVal = true;

    formControl.forEach((element) => {
        console.log(element);
        if (element.classList.contains("error")) {
            LoginVal = false;
        }
    });

    console.log(LoginVal);

    if (LoginVal) {
        window.location.href = "http://127.0.0.1:5500/pages/login.html";
    }
})

//^^^^^^ Error message ^^^^^^^//
const errorMesage = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector("small");

    errorDisplay.textContent = message;
    formControl.classList.add("error")
    formControl.classList.remove("success")
}
//********* Success message^^^^^^^// 

const successMesage = (element) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector("small")

    errorDisplay.textContent = "";
    formControl.classList.remove("error")
    formControl.classList.add("success")
}


//*************Validation section******** */

const usernameValidation = () => {
    // console.log('get');
    const userNameValue = userName.value.trim();

    if (userNameValue === "") {
        errorMesage(userName, "userName is required")
    } else if (userNameValue.length < 3 || userNameValue.length > 15) {
        errorMesage(userName, "between 3 and 15 characters must be unique")
    } else {
        successMesage(userName)
        localStorage.setItem("userName", userName.value)
    }
}

const emailValidation = () => {
    const emailValue = email.value.trim()
    console.log('emailValidation');

    if (emailValue === "") {
        errorMesage(email, "email address is required")
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        errorMesage(email, "email address must be valid")
    } else {
        successMesage(email)
        localStorage.setItem("email", email.value)
        console.log("my love");
    }
}

const passWordValidation = () => {
    const passwordvalue = passWord.value.trim()

    if (passwordvalue === "") {
        errorMesage(passWord, "A valid password is required")
    } else if (passwordvalue.length > 8 || passwordvalue.length < 15) {
        errorMesage(passWord, "must between 8 and 15 characters must be unique")
    } else {
        successMesage(passWord)
        localStorage.setItem("passWord", passWord.value)
    }
}

const passWord2Validation = () => {
    const password2value = passWord2.value.trim()
    const passwordvalue = passWord.value.trim()

    if (password2value === "") {
        errorMesage(passWord2, "A valid password is required")
    } else if (password2value !== passwordvalue) {
        errorMesage(passWord2, "must match the password filed value")
    } else {
        successMesage(passWord2)
        localStorage.setItem("passWord2", passWord2.value)
    }
}



//*******/ validation seconds setting******//

userName.addEventListener("change", () => {
    setTimeout(() => usernameValidation(), 2000)
})
email.addEventListener("change", () => {
    setTimeout(() => emailValidation(), 2000)
})
passWord.addEventListener("change", () => {
    setTimeout(() => passWordValidation(), 2000)
})
passWord2.addEventListener("change", () => {
    setTimeout(() => passWord2Validation(), 2000)
})
















































// alert("hey there!")