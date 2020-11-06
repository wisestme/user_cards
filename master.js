let hamburgerIcon = document.querySelector('.fa-bars');
let closeIcon = document.querySelector('.fa-cross');
let modal = document.querySelector('#modal');


hamburgerIcon.addEventListener('click', () => {
    closeIcon.style.display = 'block';
    hamburgerIcon.style.display = 'none';
    modal.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    modal.style.display = 'none';
});