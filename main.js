
function displayMobileNav() {
    $('.hamburger-menu').click(() => {
        $('.hamburger-menu').toggleClass('close');
        $('.mobile-nav-links').toggleClass('expand');
    })
}


$(document).ready(function(){
    displayMobileNav();
 
 });