const cardsContainerHtmlCss = document.querySelector('.container-cards-grid');
//const overlay = document.getElementById('overlay');
//const popup = document.getElementById('popup');

function renderProyects(arr){
    for(let i = 0; i < arr.length; i++){
        const proyect = arr[i];

        const proyectCard = document.createElement('article');
        proyectCard.classList.add('card');

        const proyectImage = document.createElement('img');
        proyectImage.setAttribute('src', proyect.image);
        proyectImage.addEventListener('click', () => {
            const clickImagesrc = proyect.image;
            const nombre = proyect.name;
            const readme = proyect.readme;
            const popupContent = document.createElement('article');

            popupContent.classList.add('card');

            const imgPopup = document.createElement('img');
            imgPopup.setAttribute('src', clickImagesrc);

            const containerDescripcion = document.createElement('div');

            const nameProyect = document.createElement('h2');
            nameProyect.innerText = nombre;
            console.log(nameProyect);

            const descripsion = document.createElement('p');
            descripsion.innerText = readme;


            popupContent.appendChild(imgPopup);
            popupContent.appendChild(containerDescripcion);
            containerDescripcion.appendChild(nameProyect);
            containerDescripcion.appendChild(descripsion);

            popup.innerHTML = ''; // Limpiar el contenido anterior
            popup.appendChild(popupContent);
            overlay.style.display = 'block';
            popup.style.display = 'block';
        });

        /*proyectImage.addEventListener('click', (event) => {
            const clickImagesrc = event.target.getAttribute('src');
            const nameProyect = proyect.name;
            const popupContent = document.createElement('article');
            popupContent.classList.add('card');

            const imgPopup = document.createElement('img');
            imgPopup.setAttribute('src', clickImagesrc);

            const name = document.createElement('h2');
            name.innerText = nameProyect;

            popupContent.appendChild(imgPopup);
            popupContent.appendChild(name);

            popup.innerHTML = ''; // Limpiar el contenido anterior
            popup.appendChild(popupContent);
            overlay.style.display = 'block';
            popup.style.display = 'block';
        });*/


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
        btnRepositorio.setAttribute('href',proyect.repositorio);
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
renderProyects(proyectosHtmlCssList)

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
  });