document.addEventListener('DOMContentLoaded', () => {
    const images = [
         '#',
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[0];

    const style = document.createElement('style');
    style.innerHTML = `body::before { background-image: url(${JSON.stringify(selectedImage)}); }`;
    document.head.appendChild(style);
});
