// Loads on page load
function loadConfirmation() {
    // obtains the cookie as a string and splits it at the semicolons
    var value = "; " + document.cookie;
    var cookies = value.split("; ");
    
    // find the cookie for userInfo
    var userInfoString = cookies[1];

    // places the split data into the document for user confirmation
    if (userInfoString) {
        userInfoStringMinusStuff = userInfoString.replace('userInfo=', '');
        var userInfo = JSON.parse(userInfoStringMinusStuff);
        document.getElementById('userName').innerHTML = userInfo.userName;
        document.getElementById('password').innerHTML = userInfo.password;
        document.getElementById('passwordVerify').innerHTML = userInfo.passwordVerify;
        document.getElementById('firstName').innerHTML = userInfo.firstName;
        document.getElementById('lastName').innerHTML = userInfo.lastName;
        document.getElementById('email').innerHTML = userInfo.email;
        document.getElementById('interests').innerHTML = userInfo.interests;
        document.getElementById('signUpNewsletter').innerHTML = userInfo.signUpNewsletter;
        document.getElementById('comments').innerHTML = userInfo.comments;
        document.getElementById('referredBy').innerHTML = userInfo.referredBy;
    }
}
