
// Selecione o carrossel
var carousel = document.getElementById('carouselMain');

// Escute o evento 'slid.bs.carousel' que é disparado após a mudança do slide
carousel.addEventListener('slid.bs.carousel', function () {
//     // Identifique o slide ativo
    var activeSlide = carousel.querySelector('.carousel-item.active');

//     // Obtenha os dados personalizados dos atributos `data-*` do slide ativo
    var newTitle = activeSlide.getAttribute('data-title');
    var newText = activeSlide.getAttribute('data-text');
    var newBtnLink = activeSlide.getAttribute('data-btn-link');

//     // Atualize o conteúdo da div correspondente
    document.getElementById('carousel-title').textContent = newTitle;
    document.getElementById('carousel-text').textContent = newText;
    document.getElementById('carousel-btn').setAttribute('href', newBtnLink);
});

$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu E-mail',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids(); 
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})