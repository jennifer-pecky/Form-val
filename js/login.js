const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

// localStorage validaton//
const checkEmail = localStorage.getItem("email")
const checkPassword = localStorage.getItem("password")

form.addEventListener("submit", (e) => {
     e.preventDefault()


     emailValidation()
     passWordValidation()
     loginValidation()
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

const emailValidation = () => {
     const emailValue = email.value.trim()
     // console.log('get');

     if (emailValue === "") {
          errorMesage(email, "email address is required")
     } else if (email.value !== checkEmail) {
          errorMesage(email, "a valid email is required")
     } else {
          successMesage(email)
     }
}

const passWordValidation = () => {
     const passwordvalue = password.value.trim()

     if (passwordvalue === "") {
          errorMesage(password, "A valid password is required")
     } else if (passwordvalue < 8 || passwordvalue > 15) {
          errorMesage(password, "must be between 8 and 15 characters")
     } else if (passwordvalue === checkPassword) {
          errorMesage(password, "Invalid password, input a valid password")
     } else {
          successMesage(password)
     }
}

const loginValidation = () => {
     console.log("hey you");
     if (email.value === checkEmail && password.value === checkPassword) {
          successMesage(email)
          successMesage(password)
     } else {
          setTimeout(() => {
               alert("you have been logged in.Welcome to your account")
          }, 1000)
     }
     // alert("you just clicked login")
}