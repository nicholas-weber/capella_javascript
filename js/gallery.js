// This will grow an image when rolled over
function bigImg(x) {
    x.style.height = "140px";
    x.style.width = "200px";
}

// This will return an image to normal size when the cursor is removed
function normalImg(x) {
    x.style.height = "120px";
    x.style.width = "180px";
}

// This rollover function determines whether the user has rolled over the image or not and calls the appropriate function
function setupRollover(theImage) {
    theImage.onmouseout = function () {
        normalImg(this);
    }

    theImage.onmouseover = function () {
        bigImg(this);
    }
}

// Preloads the images and tells them to work with setupRollover function
function onpageload() {
    var img1 = document.getElementById("img1");
    setupRollover(img1);

    var img2 = document.getElementById("img2");
    setupRollover(img2);

    var img3 = document.getElementById("img3");
    setupRollover(img3);

    var img4 = document.getElementById("img4");
    setupRollover(img4);
}

