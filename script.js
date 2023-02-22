document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#icon-menu').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('nav-expand');
        document.querySelector('.nav-links').classList.toggle('nav-mobile-show');
    });

});