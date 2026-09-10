
const btnTema = document.querySelector('#tema');

btnTema.addEventListener('click', function () {
    document.body.classList.toggle('escuro');
});

const links = document.querySelectorAll('nav a');
const visorContador = document.querySelector('#contador');
let total = 0;

links.forEach(function (link) {
    link.addEventListener('click', function () {
        total = total + 1;
        visorContador.textContent = total;
    });
});

const form = document.querySelector('form');
const campoNome = document.querySelector('#nome');

form.addEventListener('submit', function (evento) {
    if (campoNome.value === '') {
        evento.preventDefault();
        alert('Preencha o seu nome antes de enviar!');
    }
});