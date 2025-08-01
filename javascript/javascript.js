const getMenuSmall = document.querySelector('.icon-menu-small');
const getNavSmall = document.querySelector('.nav__item-small');


getMenuSmall.addEventListener('click', function() {
    getNavSmall.classList.toggle('open');
    getNavSmall.classList.toggle('close');
})

