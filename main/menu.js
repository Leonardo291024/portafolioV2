const logoMenu = document.querySelector('.menuLogo');
const logoCerrar = document.querySelector('.logo-cerrar');
const menuMobile = document.querySelector('.container-menuMobile');

logoMenu.addEventListener('click', abrirMenuMobile);
logoCerrar.addEventListener('click', cerrarMenuMobile);

function abrirMenuMobile(){
    menuMobile.classList.remove('inactive');
}

function cerrarMenuMobile(){
    menuMobile.classList.add('inactive');
}