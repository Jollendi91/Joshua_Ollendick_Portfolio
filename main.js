
function displayMobileNav() {
    $('.hamburger-menu').click(() => {
        $('.mobile-nav-links').toggleClass('expand');
        $('.hamburger-menu').toggleClass('close');
        if ($('.hamburger-menu').hasClass('close')) {
            $('.hamburger-menu').attr('aria-label', 'Close navigation menu');
        }
        else {
            $('.hamburger-menu').attr('aria-label', 'Open navigation menu');
        }
    })
}


$(document).ready(function(){
    displayMobileNav();
 
 });