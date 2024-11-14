// Función para desplazar la vista hacia la cabecera de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Selecciona todas las secciones con la clase "seccion"
const secciones = document.querySelectorAll('.seccion');

// Agrega los eventos para mostrar y ocultar el botón
secciones.forEach((seccion) => {
    const boton = seccion.querySelector('.boton-regresar');

    seccion.addEventListener('mouseenter', () => {
        boton.style.display = 'block';
    });

    seccion.addEventListener('mouseleave', () => {
        boton.style.display = 'none';
    });
});
