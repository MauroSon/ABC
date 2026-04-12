let contador = 0;

function somar() {
    contador = contador + 1;
    atualizarTela();
}

function subtrair() {
    contador = contador - 1;
    atualizarTela();
}

function atualizarTela() {
    document.getElementById("valor").innerText = contador;
}
