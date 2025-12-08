// 1. HORIZONTAL SLIDE FUNCTION
const wrapper = document.getElementById('intro-wrapper');

function triggerSlide(target) {
    if (target === 'about') {
        wrapper.classList.add('slide-active');
    } else if (target === 'home') {
        wrapper.classList.remove('slide-active');
        window.scrollTo(0, 0); // Return to top
    }
}

// 2. VERTICAL SCROLL ANIMATION FOR PROJECTS/CERTS
document.addEventListener("DOMContentLoaded", function() {
    const contentBlocks = document.querySelectorAll(".content-block");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        contentBlocks.forEach((block) => {
            const elementTop = block.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                block.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    // Initial check
    revealOnScroll();
});

// 3. AUTO-TRIGGER SLIDE ON SCROLL DOWN (UX enhancement)
let isSlid = false;
window.addEventListener('wheel', (e) => {
    // Only trigger if we are at the very top of the page
    if (!isSlid && e.deltaY > 0 && window.scrollY < 50) {
        triggerSlide('about');
        isSlid = true;
    } else if (isSlid && e.deltaY < 0 && window.scrollY < 50) {
        triggerSlide('home');
        isSlid = false;
    }
});
