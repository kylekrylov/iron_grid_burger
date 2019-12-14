$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu').toggleClass('active');
    });
});

//?
//!
//?



let line = document.querySelector('.team_cards');

let slides = document.querySelectorAll('.team_card');
let slidesWidth = document.querySelector('.team_card').offsetWidth;

console.log(slidesWidth);
// см продолжение! https://www.youtube.com/watch?v=vM7zWNn4IPE