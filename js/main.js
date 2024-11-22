document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.getElementById('burger-button');
    const navLinks = document.querySelector('.nav-links');

    burgerButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

let ImageAr = [
    'website-images-assets/aces-032-computing-playstation-lab.jpg',
    'website-images-assets/aces-036-computing-playstation-lab-2.jpg',
    'website-images-assets/cantor4.jpg',
    'website-images-assets/cantor-atrium-3.jpg',
    'website-images-assets/cantor-atrium-4.jpg',
    'website-images-assets/cantor-lecture-theatre-3.jpg',
    'website-images-assets/cantor-lecture-theatre-4.jpg',
    'website-images-assets/cantor-lecture-theatre-5.jpg',
    'website-images-assets/cantor-lecture-theatre-11.jpg',
    'website-images-assets/dscf5127.jpg',
    'website-images-assets/img_0170.jpeg',
    'website-images-assets/img_1005.jpeg',
    'website-images-assets/img_1087.jpeg',
    'website-images-assets/img_1089.jpeg',
    'website-images-assets/img_1099.jpeg',
    'website-images-assets/img_1298.jpeg',
    'website-images-assets/img_1318.jpeg',
    'website-images-assets/img_1437.jpeg',
    'website-images-assets/img_1439.jpeg',
    'website-images-assets/img_1441.jpeg',    
    'website-images-assets/img_1642.jpeg',
    'website-images-assets/img_1808.jpeg',
    'website-images-assets/img_1809.jpeg',
    'website-images-assets/main_2529_image4.png'
];

let ImageRotator = document.getElementById('image-rotator').querySelector('.slide img');
let ImageCounter = 0;
function changeImage() {
    ImageRotator.setAttribute('src', ImageAr[ImageCounter]);
    ImageCounter++;
    if (ImageCounter >= ImageAr.length) {
        ImageCounter = 0;
    }
    console.info(ImageCounter);
}

setInterval(changeImage, 2000);
