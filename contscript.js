window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.seccion');
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelectorAll('a');

    sections.forEach((section, i) => {
        const navLink = navLinks[i];
        navLink.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});