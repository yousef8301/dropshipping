// Image array for the carousel
const images = [
    "images/fridge inside.jpg",
    "images/MideaFridge.jpg"
];

let currentIndex = 0;

// Function to update the displayed image
function updateImage() {
    const carouselImage = document.getElementById("carouselImage");
    carouselImage.src = images[currentIndex];
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}
