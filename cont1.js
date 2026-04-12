(function() {
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
        const element = document.getElementById("valor");
        if (element) {
            element.innerText = contador;
        }
    }
})();
