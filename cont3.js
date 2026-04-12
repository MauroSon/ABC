let contador3 = 0;

function somar() {
    contador++;
    atualizarTela3();
}

function subtrair() {
    contador--;
    atualizarTela3();
}

function atualizarTela() {
    const elemento = document.getElementById("valor-perfeito");
    if (elemento) {
        elemento.innerText = contador;
    }
}
