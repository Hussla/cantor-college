// Minimal JavaScript for critical functionality only
(function() {
    'use strict';
    
    // Burger menu - critical functionality
    function initBurgerMenu() {
        const burgerButton = document.getElementById('burger-button');
        const navLinks = document.querySelector('.nav-links');

        if (burgerButton && navLinks) {
            burgerButton.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                const isExpanded = navLinks.classList.contains('active');
                burgerButton.setAttribute('aria-expanded', isExpanded);
            });
        }
    }

    // Simple slideshow without complex animations
    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        
        if (slides.length === 0) return;

        let currentSlide = 0;
        
        // Show first slide immediately
        if (slides[0]) slides[0].classList.add('active');
        if (indicators[0]) indicators[0].classList.add('active');
        
        function showSlide(index) {
            // Hide current
            if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
            if (indicators[currentSlide]) indicators[currentSlide].classList.remove('active');
            
            // Show new
            currentSlide = index;
            if (slides[currentSlide]) slides[currentSlide].classList.add('active');
            if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
        }
        
        // Auto-advance slides
        setInterval(function() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }, 5000);
        
        // Indicator clicks
        indicators.forEach(function(indicator, index) {
            indicator.addEventListener('click', function() {
                showSlide(index);
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initBurgerMenu();
            // Delay slideshow to reduce initial blocking
            setTimeout(initSlideshow, 200);
        });
    } else {
        initBurgerMenu();
        setTimeout(initSlideshow, 200);
    }
})();
