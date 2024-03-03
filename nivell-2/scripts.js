// Function to check screen size and add/remove dropdown class
function checkScreenSize() {
    var dropdown = document.querySelector('.menu-items');
    if (window.innerWidth <= 768) {
        dropdown.classList.add('dropdown');
    } else {
        dropdown.classList.remove('dropdown');
    }
}

// Run checkScreenSize function when the document is loaded
document.addEventListener('DOMContentLoaded', checkScreenSize);

// Run checkScreenSize function when the window is resized
window.addEventListener('resize', checkScreenSize);

// Toggle dropdown class when hamburger menu is clicked
document.querySelector('.hamburger').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
});