
// Cuando se carguen todos los elementos HTML en el navegador, se agregan los eventos de click
document.addEventListener("DOMContentLoaded", function () {
    // Adquiriendo elementos HTML
    //Botones
    let btnJuego = document.getElementById("btn-juego");
    let btnBonificaciones = document.getElementById("btn-bonificaciones");
    let btnAcercaDe = document.getElementById("btn-acerca-de");

    //Contenidos
    let divJuego = document.getElementById("juego");
    let divBonificaciones = document.getElementById("bonificaciones");
    let divAcercaDe = document.getElementById("acerca-de");

    btnJuego.onclick = function (evento) {
        divJuego.classList.add('visible');
        divBonificaciones.classList.remove('visible');
        divAcercaDe.classList.remove('visible');
    }

    btnBonificaciones.onclick = function (evento) {
        divJuego.classList.remove('visible');
        divBonificaciones.classList.add('visible');
        divAcercaDe.classList.remove('visible');
    }

    btnAcercaDe.onclick = function (evento) {
        divJuego.classList.remove('visible');
        divBonificaciones.classList.remove('visible');
        divAcercaDe.classList.add('visible');
    }
});