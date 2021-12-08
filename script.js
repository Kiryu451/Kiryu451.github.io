const main_images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * main_images.length + 'px';
    main_images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= main_images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = main_images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}