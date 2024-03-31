const btnWatts = document.querySelector('.icono-watts');

btnWatts.addEventListener('click', () => {
    const numero = '5627414141';

    const mensaje = "Hola, Me gustaria una cotizacion para un proyecto Web 💻🙋‍♂️";

    var url = 'https://api.whatsapp.com/send?phone=' + numero + '&text=' + encodeURIComponent(mensaje);

    window.open(url);
})