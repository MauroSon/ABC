 
let contador2 = 0;

function somar2() {
    contador2 = contador2 + 1;
    atualizarTela2();
}

function subtrair2() {
    contador2 = contador2 - 1;
    atualizarTela2();
}

function atualizarTela2() {
    // ERRO MÉDIO: usa innerHTML desnecessariamente (pode causar problemas de segurança)
    document.getElementById("valor").innerHTML = contador2;
}
