


// Load More Images Function 
// Define variables
let currentImages = 0; 

const hiddenImages = document.querySelectorAll('.competition_achievement_images img:nth-child(n+7)'); // Select hidden images using CSS selector
console.log(hiddenImages.length)

const loadMoreBtn = document.getElementsByClassName('load_more');
console.log(loadMoreBtn)

const loadLessBtn = document.getElementsByClassName("load_less");
console.log(loadLessBtn)


// Function to display next batch of images
loadMoreBtn[0].addEventListener("click", () => {
    console.log("btn is clicked")
   for (let i = currentImages; i < currentImages + 3; i++) {
    if (hiddenImages[i])
    {
        hiddenImages[i].style.display = "inline-block";
    }
   }

   currentImages += 3;

   
   console.log(hiddenImages <= currentImages)

   if (hiddenImages.length <= currentImages) {
    loadLessBtn[0].classList.remove("hidden");
    loadMoreBtn[0].classList.add("hidden");
    
   }

});


// Function to show Load Less 
loadLessBtn[0].addEventListener("click", () => {

    for (let i = hiddenImages.length-1; i >= 0; i--) {
        hiddenImages[i].style.display = "none";
    }

    currentImages = 0;
    
    if (hiddenImages.length) {
        loadLessBtn[0].classList.add("hidden");
        loadMoreBtn[0].classList.remove("hidden");
    }

    console.log(hiddenImages.length)
});