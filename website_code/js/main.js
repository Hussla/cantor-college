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

    // Initialise when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Critical functionality first
            initBurgerMenu();
            
            // Defer non-critical functionality to avoid blocking LCP
            if ('requestIdleCallback' in window) {
                requestIdleCallback(function() {
                    initSlideshow();
                    initPerformanceMonitoring();
                    initAdvancedImageLoading();
                }, { timeout: 1000 });
            } else {
                // Fallback for browsers without requestIdleCallback
                setTimeout(function() {
                    initSlideshow();
                    initPerformanceMonitoring();
                    initAdvancedImageLoading();
                }, 100);
            }
        });
    } else {
        // Critical functionality first
        initBurgerMenu();
        
        // Defer non-critical functionality
        if ('requestIdleCallback' in window) {
            requestIdleCallback(function() {
                initSlideshow();
                initPerformanceMonitoring();
                initAdvancedImageLoading();
            }, { timeout: 1000 });
        } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(function() {
                initSlideshow();
                initPerformanceMonitoring();
                initAdvancedImageLoading();
            }, 100);
        }
    }

    // Performance Monitoring - LCP Tracking
    function initPerformanceMonitoring() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', Math.round(entry.startTime), 'ms');
                        if (entry.startTime > 2500) {
                            console.warn('LCP is above 2.5s threshold');
                        } else {
                            console.log('✅ LCP is within good range');
                        }
                    }
                }
            });
            observer.observe({entryTypes: ['largest-contentful-paint']});
        }
    }

    // Advanced Image Loading Optimisation
    function initAdvancedImageLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // Only load when about to come into view
                        if (!img.src && img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px' // Load 50px before coming into view
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
})();
