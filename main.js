// Selecione o carrossel
var carousel = document.getElementById('carouselMain');

// Escute o evento 'slid.bs.carousel' que é disparado após a mudança do slide
carousel.addEventListener('slid.bs.carousel', function () {
    // Identifique o slide ativo
    var activeSlide = carousel.querySelector('.carousel-item.active');

    // Obtenha os dados personalizados dos atributos `data-*` do slide ativo
    var newTitle = activeSlide.getAttribute('data-title');
    var newText = activeSlide.getAttribute('data-text');
    var newBtnLink = activeSlide.getAttribute('data-btn-link');

    // Atualize o conteúdo da div correspondente
    document.getElementById('carousel-title').textContent = newTitle;
    document.getElementById('carousel-text').textContent = newText;
    document.getElementById('carousel-btn').setAttribute('href', newBtnLink);
});
