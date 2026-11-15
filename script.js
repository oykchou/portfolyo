function selectFolder(selectedIndex) {
    const folders = document.querySelectorAll('.folder');

    folders.forEach((folder, idx) => {
        folder.style.zIndex = idx + 1;

        if (idx === selectedIndex) {
            folder.classList.add('active');
        } else {
            folder.classList.remove('active');
        }
    });
}


function changeSlide(button, direction) {
    const gallery = button.closest('.gallery-box');
    const imgElement = gallery.querySelector('img');
    const counterElement = gallery.querySelector('.slide-counter');

    
    const images = gallery.dataset.images.split(',').map(item => item.trim());
    let currentIndex = parseInt(gallery.dataset.currentIndex || '0', 10);

    
    currentIndex = (currentIndex + direction + images.length) % images.length;
    gallery.dataset.currentIndex = currentIndex;

    
    imgElement.src = images[currentIndex];
    counterElement.textContent = `${currentIndex + 1} / ${images.length}`;
}


function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = src;
    lightbox.classList.add('open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
    selectFolder(0);
});