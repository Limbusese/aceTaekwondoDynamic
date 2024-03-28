const openMenu = document.querySelector(".open_menu");

const closeMenu = document.querySelector(".close_menu");

const navigation = document.querySelector(".nav_links");

const navigationMenu = document.querySelector(".navigation_menu");

const background = document.querySelector(".background_section");



const navAnchors = document.querySelector("ul");
console.log("The navigation anchos are:", navAnchors)

const navAttributes = document.querySelector("ul a");
console.log("the navigation attributes are", navAttributes)

navigationMenu.addEventListener("click", ()=> {
    navigationMenu.classList.toggle("active");
    navigation.classList.toggle("active");
})


// Navigation removal function

navAnchors.addEventListener("click", () => {
    navigationMenu.classList.toggle("active");
    navigation.classList.toggle("active");

});


  

// Header Scroller 

window.addEventListener("scroll", function() {
    let header = document.querySelector('header');
    
    if (window.scrollY > 50) {
      header.classList.add("active");
    
    } else {
      header.classList.remove("active");
 
    }

  });






// const width = window.screen.width;
// const height = window.screen.height;

// alert (`The screen resolution is ${width} * ${height}`); 


  

