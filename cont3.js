let contador3 = 0;

function somar3() {
    contador3++;
    atualizarTela3();
}

function subtrair3() {
    contador3--;
    atualizarTela3();
}

function atualizarTela3() {
    const elemento = document.getElementById("valor-perfeito");
    if (elemento) {
        elemento.innerText = contador3;
    }
}
