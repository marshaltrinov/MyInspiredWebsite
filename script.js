document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const body = document.querySelector('body');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('href');

            body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });

    window.addEventListener('load', () => {
        body.style.opacity = 1;
    });
});
