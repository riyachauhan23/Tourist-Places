// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Change background color on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222'; // Darker color when scrolling
    } else {
        header.style.backgroundColor = '#333'; // Original color
    }
});

// Example: Image gallery lightbox (optional)
const galleryImages = document.querySelectorAll('.attraction img');
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <span class="close">&times;</span>
            <img src="${this.src}" alt="${this.alt}">
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelector('.close').addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    });
});
