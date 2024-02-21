const openMenu = document.querySelector(".open_menu");
console.log(openMenu)

const closeMenu = document.querySelector(".close_menu");
console.log(closeMenu)

const navigation = document.querySelector(".nav_links");
console.log(navigation)

const navigationMenu = document.querySelector(".navigation_menu")
console.log(navigationMenu);

const navAnchors = document.querySelector("ul");
console.log(navAnchors)


navigationMenu.addEventListener("click", ()=> {
    navigationMenu.classList.toggle("active");
    navigation.classList.toggle("active");
})

// Header Scroller 

window.addEventListener("scroll", function () {
    let header = document.querySelector('header');

    if (this.window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// Navigation removal function

navAnchors.addEventListener("click", ()=> {
    navigationMenu.classList.toggle("active");
    navigation.classList.toggle("active");
});


const width = window.screen.width;
const height = window.screen.height;

alert (`The screen resolution is ${width} * ${height}`);