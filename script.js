const images = document.querySelectorAll(".container > div");

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(otherImage => {
            otherImage.classList.remove('active');
        });
        image.classList.add('active');
    })
});