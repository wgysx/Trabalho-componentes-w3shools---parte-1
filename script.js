let slideIndex = 1;
showSlides(slideIndex);

// Controle próximo/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Controle da imagem em miniatura
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let thumbnails = document.getElementsByClassName("thumbnail");
    
    // Verificar limites
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Ocultar todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remover classe 'active' de todas as miniaturas
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    
    // Mostrar slide atual e ativar miniatura correspondente
    slides[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
}

// Slideshow automático (opcional - descomente para ativar)
let slideInterval;

function startAutoSlide() {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Iniciar slideshow automático
startAutoSlide();

// Pausar ao passar o mouse sobre o slideshow
document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slideshow-container').addEventListener('mouseleave', startAutoSlide);

// Adicionar suporte a teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
        plusSlides(1);
    }
});