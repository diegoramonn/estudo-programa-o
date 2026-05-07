const cards = document.querySelectorAll('.card');

window.addEventListener.querySelectorAll('scroll', () => {
    const trigger = window.innerHeight * 0.8;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add('show');
        }
    });
    
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});