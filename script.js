// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Toggle detailed job descriptions
document.querySelectorAll('.experience-item').forEach(item => {
    const description = item.querySelector('.job-description');

    item.addEventListener('click', () => {
        description.classList.toggle('show-description');
    });
});
