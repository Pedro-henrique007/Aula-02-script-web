
let cliques = 0;
const btn = document.querySelector('#contador');

btn.addEventListener('click', function () {
    cliques = cliques + 1;
    btn.textContent = `Clicado ${cliques}x`;
});