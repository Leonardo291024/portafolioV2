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


/*
function hola(){
    const clickImagesrc = proyect.image;
    const nombre = proyect.name;
    const popupContent = document.createElement('article');

    popupContent.classList.add('card');

    const imgPopup = document.createElement('img');
    imgPopup.setAttribute('src', clickImagesrc);

    const containerDescripcion = document.createElement('div');

    const nameProyect = document.createElement('h2');
    nameProyect.innerText = nombre;
    console.log(nameProyect);

    const descripsion = document.createElement('p');
    descripsion.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quas exercitationem";


    popupContent.appendChild(imgPopup);
    popupContent.appendChild(containerDescripcion);
    containerDescripcion.appendChild(nameProyect);
    containerDescripcion.appendChild(descripsion);

    popup.innerHTML = ''; // Limpiar el contenido anterior
    popup.appendChild(popupContent);
    overlay.style.display = 'block';
    popup.style.display = 'block';
}
*/