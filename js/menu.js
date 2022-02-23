

var menuHamburger = document.querySelector('menu');
var closeHamburger = document.querySelector('close_menu');

function openMenu(){
    menu.style.transition = "0.5s";
    menu.style.display = "flex";
    menu.style.top = "0";

}

function closeMenuF(){
    menu.style.top = "-100vh";
    closeHamburger.style.display = "flex";
}

function optionClick(){
    closeMenuF();
}