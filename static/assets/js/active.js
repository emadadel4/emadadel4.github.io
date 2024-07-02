const nav = document.querySelectorAll('.nav-link');
nav.forEach(nav => {
    nav.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        nav.classList.add('active');
    });
});