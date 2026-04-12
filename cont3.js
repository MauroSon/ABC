(function() {
    let contador3 = 0;
    const elementId = "valor-perfeito";

    function init() {
        atualizarTela3();
    }

    function somar3() {
        contador3++;
        atualizarTela3();
    }

    function subtrair3() {
        contador3--;
        atualizarTela3();
    }

    function atualizarTela3() {
        const elemento = document.getElementById(elementId);
        if (elemento) {
            elemento.textContent = contador3;
        }
    }

    // Expose functions globally for HTML onclick handlers
    window.somar3 = somar3;
    window.subtrair3 = subtrair3;

    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
