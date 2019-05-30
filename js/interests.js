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
    // document.cookie = `userName=${document.getElementById('userName').value}`;
    // document.cookie = `password=${document.getElementById('password').value}`;
    // document.cookie = `passwordVerify=${document.getElementById('passwordVerify'.value)}`;
    // document.cookie = `firstName=${document.getElementById('firstName').value}`;
    // document.cookie = `lastName=${document.getElementById('lastName').value}`;
    // document.cookie = `email=${document.getElementById('email').value}`;

    const interestsArray = document.getElementsByName('interest');
    let interests = '';
    for (var i = 0; i < interestsArray.length; i++) {
        if(interestsArray[i].checked==true) {
            try {

                interests = interests + interestsArray[i].value + ",";
            } catch (ex) {
                console.log(ex);
            }
        }  
    }

    const jsonValue = {
        userName: document.getElementById('userName').value,
        password: document.getElementById('password').value,
        passwordVerify: document.getElementById('passwordVerify').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        interests: interests,
        signUpNewsletter: document.querySelector('input[name="signUpNewsletter"]:checked').value,
        comments: document.getElementById('comments').value,
        referredBy: document.getElementById('referredBy').value
    }

    const stringValue = JSON.stringify(jsonValue);
    localStorage.setItem('userInfo', stringValue);
    document.cookie = `userInfo=${stringValue}`;

    let url = `confirm.html`;
    const interestsForm = document.getElementById('interestsForm');
    interestsForm.action = url;
    interestsForm.submit();
};