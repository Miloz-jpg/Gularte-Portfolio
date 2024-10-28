// Selecciona todos los contenedores de slider
const sliders = document.querySelectorAll('.proyecto');

// Aplica la funcionalidad a cada slider
sliders.forEach((slider) => {
    const images = slider.querySelectorAll('.slider img');
    const navLinks = slider.querySelectorAll('.slider-nav a');

    let currentIndex = 0;

    // Función para mostrar la imagen actual y ocultar las demás
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('visible', i === index);
            img.classList.toggle('hidden', i !== index);
        });
        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
    }

    // Añadir evento a los botones de navegación
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // Muestra la primera imagen al cargar
    showImage(currentIndex);
});
