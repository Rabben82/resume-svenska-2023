document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    const navLinks = document.querySelectorAll('.menu a');

    function removeAllActive() {
        navLinks.forEach(l => l.classList.remove('active'));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeAllActive();
            link.classList.add('active');
        });
    });

    // Highlight the "Profile" link as default
    const profileLink = document.querySelector('.profile a');
    profileLink.classList.add('active');
});