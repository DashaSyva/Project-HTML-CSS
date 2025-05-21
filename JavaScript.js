window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo img');

    if (window.scrollY > 65) {
        header.classList.add('scrolled');
        logo.src = './Images/LOGO-BLACK.svg';
    } else {
        header.classList.remove('scrolled');
        logo.src = './Images/LOGO.svg';
    }
});