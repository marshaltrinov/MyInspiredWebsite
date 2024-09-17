document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} My Inspired Website`;
});
