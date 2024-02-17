/*<!--article class="card">
    <img src="./assets/apeperia.png" alt="appeperia">
        <div>
            <h2>Appeperia</h2>
            <div class="container-icons">
                <img src="./assets/icons8-html-48.png" alt="icono-html">
                <img src="./assets/icons8-css-48.png" alt="icono-css">
            </div>
        <a href="https://github.com/Leonardo291024/Apeperia" class="repositorio">Repositorio</a>
        <a href="https://leonardo291024.github.io/Apeperia/">Sitio web</a>
        </div>
</article-->*/
const cardsContainerHtmlCss = document.querySelector('.container-cards-grid');
const proyectosHtmlCssList = [];

proyectosHtmlCssList.push({
    name: "Appeperia",
    image: './assets/apeperia.png',
    web: 'https://leonardo291024.github.io/Apeperia/',
    repositorio: 'https://github.com/Leonardo291024/Apeperia',
    iconoHtml: './assets/icons8-html-48.png',
    iconoCss: './assets/icons8-css-48.png',
    iconoJs: ''
});
proyectosHtmlCssList.push({
    name: "BatataBit",
    image: './assets/batataBit.png',
    web: 'https://leonardo291024.github.io/Bata-Bit/',
    repositorio: 'https://github.com/Leonardo291024/Bata-Bit',
    iconoHtml: './assets/icons8-html-48.png',
    iconoCss: './assets/icons8-css-48.png',
    iconoJs: ''
});
proyectosHtmlCssList.push({
    name: "Uber",
    image: './assets/proyecto-uber.jpg',
    web: 'https://leonardo291024.github.io/landing-page-uber/',
    repositorio: 'https://github.com/Leonardo291024/landing-page-uber',
    iconoHtml: './assets/icons8-html-48.png',
    iconoCss: './assets/icons8-css-48.png',
    iconoJs: ''
});
proyectosHtmlCssList.push({
    name: "Encriptador De Texto",
    image: './assets/encriptador.png',
    web: 'https://leonardo291024.github.io/textoEncriptador/',
    repositorio: 'https://github.com/Leonardo291024/textoEncriptador',
    iconoHtml: './assets/icons8-html-48.png',
    iconoCss: './assets/icons8-css-48.png',
    iconoJs: './assets/icons8-javascript-48.png'
});
proyectosHtmlCssList.push({
    name: "Calculadora",
    image: './assets/calculadora.jpg',
    web: 'https://leonardo291024.github.io/calculadora/',
    repositorio: 'https://github.com/Leonardo291024/calculadora',
    iconoHtml: './assets/icons8-html-48.png',
    iconoCss: './assets/icons8-css-48.png',
    iconoJs: './assets/icons8-javascript-48.png'
});
proyectosHtmlCssList.push({
    name: "E-comerce",
    image: './assets/tienda-empeno.jpg',
    web: 'https://leonardo291024.github.io/casa-de-empe-o/',
    repositorio: 'https://github.com/Leonardo291024/casa-de-empe-o',
    iconoHtml: './assets/icons8-html-48.png',
    iconoCss: './assets/icons8-css-48.png',
    iconoJs: './assets/icons8-javascript-48.png'
});

function renderProyects(arr){
    for(proyect of arr){
        const proyectCard = document.createElement('article');
        proyectCard.classList.add('card');

        const proyectImage = document.createElement('img');
        proyectImage.setAttribute('src', proyect.image);

        const proyectInfo = document.createElement('div');

        const titleProyect = document.createElement('h2');
        titleProyect.innerText = proyect.name;

        const containerIcons = document.createElement('div');
        containerIcons.classList.add('container-icons');

        const iconHtml = document.createElement('img');
        iconHtml.setAttribute('src', proyect.iconoHtml);

        const iconCss = document.createElement('img');
        iconCss.setAttribute('src', proyect.iconoCss);

        const iconJs = document.createElement('img');
        iconJs.setAttribute('src', proyect.iconoJs);

        const btnRepositorio = document.createElement('a');
        btnRepositorio.setAttribute('href' ,proyect.repositorio);
        btnRepositorio.classList.add('repositorio');
        btnRepositorio.innerText = "Repositorio";

        const btnSitioWeb = document.createElement('a');
        btnSitioWeb.setAttribute('href', proyect.web);
        btnSitioWeb.innerText = "Sitio Web";

        proyectCard.appendChild(proyectImage);
        proyectCard.appendChild(proyectInfo);

        proyectInfo.appendChild(titleProyect);
        proyectInfo.appendChild(containerIcons);

        containerIcons.appendChild(iconCss);
        containerIcons.appendChild(iconHtml);
        containerIcons.appendChild(iconJs);

        proyectInfo.appendChild(btnRepositorio);
        proyectInfo.appendChild(btnSitioWeb);

        

        cardsContainerHtmlCss.appendChild(proyectCard);

    }
}

renderProyects(proyectosHtmlCssList);