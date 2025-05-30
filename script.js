const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // compensa o menu fixo
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

const toggleBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Fecha o menu quando clicar em algum item
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});

document.querySelectorAll('.carrossel').forEach(carrossel => {
    const faixa = carrossel.querySelector('.faixa');
    const imagens = faixa.querySelectorAll('img');
    const btnAnterior = carrossel.querySelector('.controle.anterior');
    const btnProximo = carrossel.querySelector('.controle.proximo');

    let indiceAtual = 0;

    function atualizarFaixa() {
        faixa.style.transform = `translateX(-${indiceAtual * 100}%)`;
        atualizarBotoes();
    }

    function atualizarBotoes() {
        btnAnterior.disabled = indiceAtual === 0;
        btnProximo.disabled = indiceAtual === imagens.length - 1;

        // Também pode adicionar uma classe visual
        btnAnterior.classList.toggle('inativo', indiceAtual === 0);
        btnProximo.classList.toggle('inativo', indiceAtual === imagens.length - 1);
    }

    btnAnterior.addEventListener('click', () => {
        if (indiceAtual > 0) {
            indiceAtual--;
            atualizarFaixa();
        }
    });

    btnProximo.addEventListener('click', () => {
        if (indiceAtual < imagens.length - 1) {
            indiceAtual++;
            atualizarFaixa();
        }
    });

    // Inicializa o carrossel
    atualizarFaixa();
});