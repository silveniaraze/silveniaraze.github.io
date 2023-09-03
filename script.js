const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.loginBtn-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');});

loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');});

btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');});

iconClose.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');});

var carouselWidth = $('.carousel-inner').scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPostition = 0;

$('.carousel-control-next').on('click', function(){
    console.log('next');
    scrollPostition = scrollPostition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPostition}),
    600;
});

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})