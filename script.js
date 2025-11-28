const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleCursor(e) {
    const cursor = document.getElementById('mouseCursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', circleCursor);
const miniCursor = document.getElementById('minicircle');
document.addEventListener('mousemove', (e) => {
    miniCursor.style.left = e.pageX + 'px';
    miniCursor.style.top = e.pageY + 'px';
});
const navLinks = document.querySelectorAll('#nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        miniCursor.style.transform = 'scale(3)';
        miniCursor.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    }
    );
    link.addEventListener('mouseout', () => {
        miniCursor.style.transform = 'scale(1)';
        miniCursor.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
    );
});
const heroButton = document.getElementById('hero-button');
heroButton.addEventListener('mouseover', () => {
    miniCursor.style.transform = 'scale(3)';
    miniCursor.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
}
);
heroButton.addEventListener('mouseout', () => {
    miniCursor.style.transform = 'scale(1)';
    miniCursor.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
}
);
// GSAP Animations
gsap.from('#hero h1', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
gsap.from('#hero p', { duration: 1, y: 50, opacity: 0, ease: 'power2.out', delay: 0.5 });
gsap.from('#hero-button', { duration: 1, scale: 0.5, opacity: 0, ease: 'power2.out', delay: 1 });
gsap.from('#nav a', { duration: 1, y: -20, opacity: 0, ease: 'power2.out', stagger: 0.2, delay: 1.5 });
