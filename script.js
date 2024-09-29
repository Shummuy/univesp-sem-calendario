// Lógica do carrossel de imagens
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Atualizar o índice do slide atual
    currentSlide += direction;

    // Verificar limites do carrossel
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Volta para o último slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Volta para o primeiro slide
    }

    // Mover a galeria de imagens
    const offset = -currentSlide * 100; // Calcular o deslocamento
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}


    // Exibir botões radio ao selecionar Agendar Procedimento

document.getElementById('appointment-type').addEventListener('change', function() {
    var timeButtons = document.getElementById('time-buttons');
    if (this.value === 'procedure') {
        timeButtons.style.display = 'block';  // Mostra os botões de horário
    } else {
        timeButtons.style.display = 'none';   // Oculta os botões de horário
    }
});

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none'; // Fecha o menu se estiver aberto
    } else {
        dropdownMenu.style.display = 'block'; // Abre o menu
    }
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
