document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // How many pixels from bottom before showing

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            // If the element is within the viewport, add 'active'
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };

    // Listen to scroll event
    window.addEventListener("scroll", revealOnScroll);
    
    // Trigger once on load to show elements already on screen
    revealOnScroll();
});