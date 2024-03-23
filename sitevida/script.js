const image = document.querySelector('.main-image');

image.addEventListener('mouseover', () => {
    image.style.transform = 'rotate(5deg)';
});

image.addEventListener('mouseout', () => {
    image.style.transform = 'rotate(0deg)';
});
