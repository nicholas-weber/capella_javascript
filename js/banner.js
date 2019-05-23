// Creating image array
var images = new Array();
// Defining the default index of the image array as 0
var currentIndex = 0;

// Scripts to be run on load
function onpageload() {
    // Placing the three images into the image array
    images[0] = 'images/banner1.jpg';
    images[1] = 'images/banner2.jpg';
    images[2] = 'images/banner3.jpg';
    // Defines the currently displayed image as equivalent to currentIndex
    currentImage = images[currentIndex];
    // Displays the current image
    setBannerImage();
};

function setBannerImage() {
    // If on the last image, start over
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    // If on the first or second image, move to the next one
    } else {
        currentIndex++;
    }

    // Defines the image to change as the banner image
    var image = document.getElementById("bannerImageId");
    // Defines an image as being equivalent to the string stored as the current index
    image.src = images[currentIndex];
    // Sets the banner to change every three seconds
    setTimeout(setBannerImage, 3000);
}