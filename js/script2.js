const form = document.getElementById('contactForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const asuntoError = document.getElementById('asuntoError');
const mensajeError = document.getElementById('mensajeError');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Validación nombre
    if (nombre.value.trim() === '') {
        nombreError.style.display = 'block';
        isValid = false;
    } else {
        nombreError.style.display = 'none';
    }

    // Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validación asunto
    if (asunto.value.trim() === '') {
        asuntoError.style.display = 'block';
        isValid = false;
    } else {
        asuntoError.style.display = 'none';
    }

    // Validación mensaje
    if (mensaje.value.trim() === '') {
        mensajeError.style.display = 'block';
        isValid = false;
    } else {
        mensajeError.style.display = 'none';
    }

    if (isValid) {
        alert('Mensaje enviado correctamente!');
        form.reset();
    }
});