const image = document.getElementById('zoomImage');

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    let scaleValue = 1 + (scrolled * 2); // Adjust as needed
    image.style.transform = `scale(${scaleValue})`;
});
