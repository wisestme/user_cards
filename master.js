let hamburgerIcon = document.querySelector('.fa-bars');
let closeIcon = document.querySelector('.fa-cross');


hamburgerIcon.addEventListener('click', () => {
    closeIcon.style.display = 'block';
    hamburgerIcon.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
});