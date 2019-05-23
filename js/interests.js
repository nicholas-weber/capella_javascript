function onload() {
    var userName = getParameterByName('userName');
    var password = getParameterByName('password');
    var passwordVerify = getParameterByName('passwordVerify');
    var firstName = getParameterByName('firstName');
    var lastName = getParameterByName('lastName');
    var email = getParameterByName('email');

    var userNameInput = document.getElementById('userName');
        userNameInput.value = userName;
    var passwordInput = document.getElementById('password');
        passwordInput.value = password;
    var passwordVerifyInput = document.getElementById('passwordVerify');
        passwordVerifyInput.value = passwordVerify;
    var firstNameInput = document.getElementById('firstName')
        firstNameInput.value = firstName;
    var lastNameInput = document.getElementById('lastName')
        lastNameInput.value = lastName;
    var emailInput = document.getElementById('email')
        emailInput.value = email;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function register() {
    document.cookie = `userName=${userNameInput.value}`;
    document.cookie = `password=${passwordInput.value}`;
    document.cookie = `passwordVerify=${passwordVerifyInput.value}`;
    document.cookie = `firstName=${firstNameInput.value}`;
    document.cookie = `lastName=${lastNameInput.value}`;
    document.cookie = `email=${emailInput.value}`;

    window.location="confirmation.html";
};