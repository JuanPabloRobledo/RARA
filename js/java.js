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

const btnEnvio = document.getElementById('enviarCorreo');
btnEnvio.addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const asunto = document.getElementById('asunto').value;
    window.location.href = `mailto:raraoficialcontacto@gmail.com?
subject=Consulta&body=Nombre%3A${nombre}%0AEmail%3A${email}%0AAsunto%3A${asunto}%0AMensaje%3A${mensaje}`;
});

window.sr = ScrollReveal();

sr.reveal('.tituloEmisoras', {
    duration: 2000,
    origin: 'left',
    distance: '-500px'
});

