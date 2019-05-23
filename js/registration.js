// Defining all inputs
const registrationForm = document.getElementById("registrationForm");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const passwordVerify = document.getElementById("passwordVerify");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const submitButton = document.getElementById("submitButton");

// Defining the error messages
const userNameError = document.getElementById("userNameError");
const passwordError = document.getElementById("passwordError");
const passwordVerifyError = document.getElementById("passwordVerifyError");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const phoneNumberError = document.getElementById("phoneNumberError");

// Assumes forms are valid until an alternative argument is considered
let isValidUserName = true;
let isValidPassword = true;
let isValidPasswordVerify = true;
let isValidFirstName = true;
let isValidLastName = true;
let isValidEmail = true;
let isValidPhoneNumber = true;

// Event listeners which determine validity and validation upon user interaction
userName.addEventListener('keyup', function (event) {
    isValidUserName = userName.checkValidity();
    checkValidation();
});

password.addEventListener('keyup', function (event) {
    isValidPassword = password.checkValidity();
    checkValidation();
});

passwordVerify.addEventListener('keyup', function (event) {
    isValidPasswordVerify = passwordVerify.checkValidity();
    checkValidation();
});

firstName.addEventListener('keyup', function (event) {
    isValidFirstName = firstName.checkValidity();
    checkValidation();
});

lastName.addEventListener('keyup', function (event) {
    isValidLastName = lastName.checkValidity();
    checkValidation();
});

email.addEventListener('keyup', function (event) {
    isValidEmail = email.checkValidity();
    checkValidation();
});

phoneNumber.addEventListener('keyup', function (event) {
    isValidPhoneNumber = phoneNumber.checkValidity();
    checkValidation();
});

function fillValues() {
    userName.value = 'Nicholas';
    password.value = 'jamesweber';
    passwordVerify.value = 'jamesweber';
    firstName.value = 'Nicholas';
    lastName.value = 'Weber';
    email.value = 'nikkoweber@live.com';
    phoneNumber.value = "7632185996";
}

// Determines whether or not the user input matched standards for submission
function checkValidation() {
    if (isValidUserName) {
        userNameError.innerHTML = "";
        var regEx = /^[a-z0-9]+$/i;
        if (regEx.test(userName.value)) {
            userNameError.innerHTML = "";
        } else {
            userNameError.innerHTML = "Alphanumeric characters only";
            userName.focus;
            submitButton.disabled = true;
        }
    } else {
        userNameError.innerHTML = "Username required";
        userName.focus;
        submitButton.disabled = true;
    }

    if (isValidPassword) {
        passwordError.innerHTML = "";
        if (password.value.length >= 8) {
            passwordError.innerHTML = "";
        } else {
            passwordError.innerHTML = "Must have at least eight characters";
            password.focus;
            submitButton.disabled = true;
        }
    } else {
        passwordError.innerHTML = "Password required";
        password.focus;
        submitButton.disabled = true;
    }

    if (isValidPasswordVerify) {
        passwordVerifyError.innerHTML = "";
        if (passwordVerify.value.length >= 8 && passwordVerify.value === password.value) {
            passwordVerifyError.innerHTML = "";
        } else {
            passwordVerifyError.innerHTML = "Must have at least eight characters and match password";
            passwordVerify.focus;
            submitButton.disabled = true;
        }
    } else {
        passwordVerifyError.innerHTML = "Password verification required";
        passwordVerify.focus;
        submitButton.disabled = true;
    }

    if (isValidFirstName) {
        firstNameError.innerHTML = "";
        var regEx = /^[a-z]+$/i;
        if (regEx.test(firstName.value)) {
            firstNameError.innerHTML = "";
        } else {
            firstNameError.innerHTML = "Text only";
            submitButton.disabled = true;
        }
    } else {
        firstNameError.innerHTML = "First name required";
        firstName.focus;
        submitButton.disabled = true;
    }

    if (isValidLastName) {
        lastNameError.innerHTML = "";
        var regEx = /^[a-z]+$/i;
        if (regEx.test(lastName.value)) {
            lastNameError.innerHTML = "";
        } else {
            lastNameError.innerHTML = "Text only";
            submitButton.disabled = true;
        }
    } else {
        lastNameError.innerHTML = "Last name required";
        submitButton.disabled = true;
    }

    if (isValidEmail) {
        emailError.innerHTML = "";
        var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (regEx.test(email.value)) {
            emailError.innerHTML = "";
        } else {
            emailError.innerHTML = "Proper email format required"
            submitButton.disabled = true;
        }
    }

    if (isValidPhoneNumber) {
        phoneNumberError.innerHTML = "";
        var regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (regEx.test(phoneNumber.value)) {
            phoneNumberError.innerHTML = "";
        } else {
            phoneNumberError.innerHTML = "Proper phone number format required";
            submitButton.disabled = true;
        }
    }
}

function goToInterests() {
    let url = `interests.html?userName=${userName.value}&password=${password.value}&passwordVerify=${passwordVerify.value}&firstName=${firstName.value}&lastName=${lastName.value}&email=${email.value}`;
    window.location = url;
}