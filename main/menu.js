const menuIcon = document.getElementById('logo-menu');
const menu = document.getElementById('menu-mobile');

menuIcon.addEventListener('click', function(){
    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
    }else{
        menu.style.display = "none"
    }
})