let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href *= '+id+']').classList.add ('active')
            })
        }
    })
}
menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    // Construir el enlace de WhatsApp con los datos del formulario
    let enlaceWhatsApp = "https://wa.me/XXXXXXXXXX?text=Nombre:%20" + encodeURIComponent(nombre) + "%0ATeléfono:%20" + encodeURIComponent(telefono) + "%0AAsunto:%20" + encodeURIComponent(asunto) + "%0AMensaje:%20" + encodeURIComponent(mensaje);

    // Redirigir a WhatsApp
    window.location.href = enlaceWhatsApp;
  });