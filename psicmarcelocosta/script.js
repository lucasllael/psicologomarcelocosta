window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > window.innerHeight * 0.3) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }
});



// função para adicionar a classe 'visible' ao container e à imagem quando eles aparecem na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

// seleciona o container e a imagem para observar
const sobreMimImagem = document.querySelector('.sobre-mim-imagem img');
const sobreMimContainer = document.querySelector('.sobre-mim-container');

// começa a observar
observer.observe(sobreMimImagem);
observer.observe(sobreMimContainer);







