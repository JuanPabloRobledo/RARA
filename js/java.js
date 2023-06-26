const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

window.addEventListener("scroll", function () {
    var nav = document.querySelector("header");
    nav.classList.toggle("abajo", window.scrollY > 0);
})

window.addEventListener("load", function () {
    this.document.getElementById("loader").classList.toggle("loader2")
})

window.sr = ScrollReveal();

sr.reveal('.tituloEmisoras', {
    duration: 2000,
    origin: 'left',
    distance: '-500px'
});


