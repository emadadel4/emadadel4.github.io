    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; 
        const blurAmount = Math.min(scrollPosition / 100, 10);
        document.querySelector('.background').style.filter = `blur(${blurAmount * 8}px)`; 

        // Reset blur to 0 when scrolling up
        if (scrollPosition === 0) {
            document.querySelector('.background').style.filter = 'blur(0px)'; 
        }
    });
