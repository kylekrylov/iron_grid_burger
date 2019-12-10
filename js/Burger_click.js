$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu').toggleClass('active');
    });
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
});