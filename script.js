/**
 * Contador Interativo - Script Principal
 *
 * Este script implementa a lógica do contador interativo, permitindo
 * incrementar, decrementar e zerar valores com validações e animações.
 *
 * @author MauroSon
 * @version 1.0.0
 * @license MIT
 */

'use strict';

// ============================================================================
// ESTADO DA APLICAÇÃO
// ============================================================================

/**
 * Variável que armazena o valor atual do contador
 * @type {number}
 */
let count = 0;

/**
 * Valor mínimo permitido para evitar overflow visual
 * Pode ser ajustado conforme necessário
 * @type {number}
 * @constant
 */
const MIN_VALUE = -999;

// ============================================================================
// SELEÇÃO DE ELEMENTOS DOM
// ============================================================================

/**
 * Elemento que exibe o valor atual do contador
 * @type {HTMLElement}
 */
const counterValue = document.getElementById('counterValue');

/**
 * Botão para incrementar o valor (+1)
 * @type {HTMLElement}
 */
const btnIncrement = document.getElementById('btnIncrement');

/**
 * Botão para decrementar o valor (-1)
 * @type {HTMLElement}
 */
const btnDecrement = document.getElementById('btnDecrement');

/**
 * Botão para resetar o valor (zerar)
 * @type {HTMLElement}
 */
const btnReset = document.getElementById('btnReset');

// ============================================================================
// FUNÇÕES PRINCIPAIS
// ============================================================================

/**
 * Atualiza o display do contador com o valor atual
 *
 * Esta função é chamada sempre que o valor do contador muda.
 * Ela atualiza o texto do elemento e adiciona uma animação
 * temporária para fornecer feedback visual ao usuário.
 *
 * @returns {void}
 */
function updateDisplay() {
    // Atualiza o texto do display com o valor atual
    counterValue.textContent = count;

    // Adiciona classe CSS que ativa a animação de highlight
    counterValue.classList.add('value-changed');

    // Remove a classe após 300ms (duração da animação)
    // Isso permite que a animação seja reativada em mudanças subsequentes
    setTimeout(() => {
        counterValue.classList.remove('value-changed');
    }, 300);
}

/**
 * Incrementa o valor do contador em 1
 *
 * Esta função é chamada quando o usuário clica no botão de incremento.
 * Não há limite máximo para o valor.
 *
 * @returns {void}
 */
function increment() {
    count += 1;
    updateDisplay();
}

/**
 * Decrementa o valor do contador em 1
 *
 * Esta função é chamada quando o usuário clica no botão de decremento.
 * Respeita o valor mínimo definido em MIN_VALUE para evitar overflow.
 *
 * @returns {void}
 */
function decrement() {
    // Verifica se o valor atual é maior que o mínimo permitido
    if (count > MIN_VALUE) {
        count -= 1;
        updateDisplay();
    }
    // Se count == MIN_VALUE, a função não faz nada (valor mínimo atingido)
}

/**
 * Reseta o valor do contador para 0
 *
 * Esta função é chamada quando o usuário clica no botão de reset.
 * Sempre define o valor como 0, independentemente do valor atual.
 *
 * @returns {void}
 */
function reset() {
    count = 0;
    updateDisplay();
}

// ============================================================================
// EVENT LISTENERS - INTERAÇÕES DE MOUSE/TOUCH
// ============================================================================

/**
 * Event listener de clique no botão de incremento
 * @listens click
 */
btnIncrement.addEventListener('click', increment);

/**
 * Event listener de clique no botão de decremento
 * @listens click
 */
btnDecrement.addEventListener('click', decrement);

/**
 * Event listener de clique no botão de reset
 * @listens click
 */
btnReset.addEventListener('click', reset);

// ============================================================================
// EVENT LISTENERS - ACESSIBILIDADE (TECLADO)
// ============================================================================

/**
 * Suporte a teclado para o botão de incremento
 * Permite ativar o botão com Enter ou Space
 *
 * @param {KeyboardEvent} e - Evento de teclado
 * @listens keydown
 */
btnIncrement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Previne scroll ou comportamento padrão
        increment();
    }
});

/**
 * Suporte a teclado para o botão de decremento
 * Permite ativar o botão com Enter ou Space
 *
 * @param {KeyboardEvent} e - Evento de teclado
 * @listens keydown
 */
btnDecrement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Previne scroll ou comportamento padrão
        decrement();
    }
});

/**
 * Suporte a teclado para o botão de reset
 * Permite ativar o botão com Enter ou Space
 *
 * @param {KeyboardEvent} e - Evento de teclado
 * @listens keydown
 */
btnReset.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Previne scroll ou comportamento padrão
        reset();
    }
});

// ============================================================================
// INICIALIZAÇÃO
// ============================================================================

/**
 * Inicializa o contador quando a página carrega
 *
 * Garante que o display mostre o valor inicial (0)
 * assim que o script é executado.
 */
updateDisplay();
