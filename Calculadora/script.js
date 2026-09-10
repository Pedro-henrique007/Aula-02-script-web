const btn = document.querySelector('#calc');
const saida = document.querySelector('#saida');

btn.addEventListener('click', function () {
    const campo1 = document.querySelector('#n1');
    const campo2 = document.querySelector('#n2');
    const campo3 = document.querySelector('#n3');
    const campo4 = document.querySelector('#n4');

    if (campo1.value === '' || campo2.value === '' || campo3.value === '' || campo4.value === '') {
        alert('Preencha todas as quatro notas!');
        return; 
    }


    const n1 = Number(campo1.value);
    const n2 = Number(campo2.value);
    const n3 = Number(campo3.value);
    const n4 = Number(campo4.value);


    const media = (n1 + n2 + n3 + n4) / 4;


    saida.textContent = `Sua média é: ${media}`;

  
    if (media >= 7) {
        saida.className = 'aprovado';
        saida.textContent += ' (Aprovado)';
    } else if (media >= 4) {
        saida.className = 'recuperacao';
        saida.textContent += ' (Recuperação)';
    } else {
        saida.className = 'reprovado';
        saida.textContent += ' (Reprovado)';
    }
});