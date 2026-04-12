
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
    const elemento = document.getElementById("valor");
    if (elemento) {
        elemento.textContent = contador2;
    }
}
