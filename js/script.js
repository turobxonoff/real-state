const menuBtn = document.querySelector('#menu-icon');
const nav = document.querySelector('.nav')
$(document).ready(function () {
    "use strict";
    
    // CAROUSEL BANNER
    $(".carousel-sliders").owlCarousel({
        animateOut: "fadeOut",
        animateIn: "flipInX",
        loop: true,
        autoplay: true,
        autoplayTimeout: 100000,
        nav: true,
        dots: false,
        navContainer: ".banner .custom-nav",
        items: 1,
    });
    
    // CAROUSEL TESTIMONIALS
    $(".carousel-testimonials").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });
});

window.onscroll = function() {toggleMenu()};
 
let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop + navbar.offsetHeight;

function toggleMenu() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('fa-times')
    nav.classList.toggle('active');
})