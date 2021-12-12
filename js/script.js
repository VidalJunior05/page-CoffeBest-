$(function() {
    $(".back-to-top").hide();
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $(".back-to-top").fadeIn();
        }else{
            $(".back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});

function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 75 * i);
    });
};

const title = document.querySelector('.text_efect-js');
typeWriter(title);


let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};


document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = ()=>{
        var sourceImage = images.getAttribute('src');
        document.querySelector('.main-home-image').src = sourceImage;
    }
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 0,
        },
        900: {
          slidesPerView: 3,
        },
        500:{
            slidesPerView: 2,
        }
    },
    loop: true,
    grabCursor: true,
});
