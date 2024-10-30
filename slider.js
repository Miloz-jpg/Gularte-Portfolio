const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Array de imágenes por proyecto
const projectsImages = [
    // Proyecto 1 - Blink-182 Argentina
    [
        "img/img-proyectos/proyecto-blink (1).png",
        "img/img-proyectos/proyecto-blink (2).png",
        "img/img-proyectos/proyecto-blink (3).png"
    ],
    // Proyecto 2 - Pastelería Hey
    [
        "img/img-proyectos/proyecto-lettering (1).png",
        "img/img-proyectos/proyecto-lettering (2).png",
        "img/img-proyectos/proyecto-lettering (3).png"
    ],
    // Proyecto 3 - Huawei Tea
    [
        "img/img-proyectos/proyecto-latas (1).png",
        "img/img-proyectos/proyecto-latas (2).png",
        "img/img-proyectos/proyecto-latas (3).png"
    ]
];

// Variable para almacenar el índice del proyecto y la imagen actual
let currentProjectIndex = 0;
let currentImageIndex = 0;

// Función para mostrar la imagen actual
function showImage(projectIndex, imageIndex) {
    lightboxImg.src = projectsImages[projectIndex][imageIndex];
    lightbox.style.display = 'flex';
}

// Añadir evento para abrir el lightbox en la imagen seleccionada
document.querySelectorAll('.slider img').forEach((image, index) => {
    const projectIndex = Math.floor(index / 3); // Dividir para obtener el índice del proyecto
    const imageIndex = index % 3;               // Índice de la imagen dentro del proyecto
    image.addEventListener('click', () => {
        currentProjectIndex = projectIndex;
        currentImageIndex = imageIndex;
        showImage(currentProjectIndex, currentImageIndex);
    });
});

// Navegación con flechas
prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currentImageIndex = (currentImageIndex === 0) ? projectsImages[currentProjectIndex].length - 1 : currentImageIndex - 1;
    showImage(currentProjectIndex, currentImageIndex);
});

nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    currentImageIndex = (currentImageIndex === projectsImages[currentProjectIndex].length - 1) ? 0 : currentImageIndex + 1;
    showImage(currentProjectIndex, currentImageIndex);
});

// Evento para cerrar el lightbox al hacer clic en el botón de cerrar
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});