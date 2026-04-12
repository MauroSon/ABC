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
    // ERRO CRÍTICO: elemento não existe (vai quebrar o script)
    document.getElementById("valor-inexistente").innerText = contador;
}
