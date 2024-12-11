const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carousel = document.querySelector('.carousel');
const figures = document.querySelectorAll('.carousel figure');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + figures.length) % figures.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % figures.length;
    updateCarousel();
});

function updateCarousel() {
    figures.forEach((figure, index) => {
        figure.style.display = index === currentIndex ? 'flex' : 'none';
    });
}

// Inicialize o carrossel
updateCarousel();
