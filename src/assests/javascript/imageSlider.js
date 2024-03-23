const images = [...document.querySelectorAll(".competition_achievement_images_slider img")];
const largeImage = document.querySelector(".large_image");
const imageContainer = document.querySelector(".competition_achievement_image img");
const popUp = document.querySelector(".competition_achievement_images_popup");
const leftArrow = document.querySelector(".prev_slide");
const rightArrow = document.querySelector(".next_slide");
let index = 0;

// Function to update the large image source
function updateLargeImage(src) {
    largeImage.src = src;
}

// Function to toggle the popup
function togglePopup(i) {
    if (popUp.classList.contains("active")) {
        // If popup is already active and the same image is clicked again, close it
        if (index === i) {
            popUp.classList.remove("active");
            index = 0;
        } else {
            // If a different image is clicked, update large image and index
            updateLargeImage(images[i].src);
            index = i;
        }
    } else {
        // If popup is inactive, show it, update large image, and set index
        popUp.classList.add("active");
        updateLargeImage(images[i].src);
        index = i;
    }
}

// Event listener for clicking on images
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        togglePopup(i); // Toggle the popup with index i
    });
});

// Function to show the image with transition
function showImage(index) {
    function showImage(index) {
        const offset = -index * 100; // Assuming each image takes up 100% width
        console.log("Offset:", offset);
        imageContainer.style.transition = "transform 0.5s ease-in-out"; // Apply transition
        imageContainer.style.transform = `translateX(${offset}%)`; // Move to the next image
    }
    setTimeout(() => {
        imageContainer.style.transition = "transform 0.9s ease-in-out";
    }, 500);
}

// Event listener for clicking on left arrow
leftArrow.addEventListener('click', () => {
    // Calculate previous index
    index = (index - 1 + images.length) % images.length;
    // Update large image source
    updateLargeImage(images[index].src);
    // Show previous image with transition
    showImage(index);
});

// Event listener for clicking on right arrow
// Event listener for clicking on right arrow
rightArrow.addEventListener('click', () => {
    // Calculate next index
    index = (index + 1) % images.length;
    console.log("Next index:", index);
    // Update large image source
    console.log("Updating large image source:", images[index].src);
    updateLargeImage(images[index].src);
    // Show next image with transition
    showImage(index);
});

// Event listener for clicking on the popup to close it
popUp.addEventListener('click', (event) => {
    // Check if the clicked element is not one of the bottom controls
    if (!event.target.closest('.competition_achievement_images_controls')) {
        // Toggle the popup
        popUp.classList.remove("active");
        index = 0;
    }
}); 