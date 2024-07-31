// script.js
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

const featuredItems = document.querySelectorAll('.featured-item');

featuredItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('flip');
    });
});