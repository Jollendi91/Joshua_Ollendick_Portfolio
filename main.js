
function displayMobileNav() {
    $('.hamburger-menu').click(() => {
        $('.mobile-nav-links').toggleClass('expand');
    })
}


$(document).ready(function(){
    displayMobileNav();
 
 });