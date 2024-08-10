// scripts.js

// Agrega aquí cualquier funcionalidad adicional en JavaScript
// Por ejemplo, animaciones, interacciones, etc.

// Ejemplo: Añadir un efecto de desplazamiento suave a los enlaces de navegación
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
