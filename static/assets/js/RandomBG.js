document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://w.wallhaven.cc/full/5w/wallhaven-5wd277.png',
        'https://w.wallhaven.cc/full/95/wallhaven-956291.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const style = document.createElement('style');
    style.innerHTML = `body::before { background-image: url(${selectedImage}); }`;
    document.head.appendChild(style);
});
