window.addEventListener('scroll', () => {
    const landing = document.getElementById('hero');
    const emptySection = document.getElementById('empty-section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    let opacityValue = 1 - (scrollPosition / windowHeight);
    
    if (opacityValue < 0) opacityValue = 0;
    if (opacityValue > 1) opacityValue = 1;

    landing.style.opacity = opacityValue;
    emptySection.style.opacity = opacityValue-0.3 > 0 ? opacityValue-0.3 : 0;
});