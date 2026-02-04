'use strict';

// Variável de estado
let count = 0;
const MIN_VALUE = -999;

// Seleção de elementos
const counterValue = document.getElementById('counterValue');
const btnIncrement = document.getElementById('btnIncrement');
const btnDecrement = document.getElementById('btnDecrement');
const btnReset = document.getElementById('btnReset');

// Função para atualizar o display
function updateDisplay() {
    counterValue.textContent = count;

    // Adicionar classe de animação
    counterValue.classList.add('value-changed');

    // Remover classe após a animação completar
    setTimeout(() => {
        counterValue.classList.remove('value-changed');
    }, 300);
}

// Função para incrementar
function increment() {
    count += 1;
    updateDisplay();
}

// Função para decrementar
function decrement() {
    if (count > MIN_VALUE) {
        count -= 1;
        updateDisplay();
    }
}

// Função para zerar
function reset() {
    count = 0;
    updateDisplay();
}

// Event Listeners para clique
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
btnReset.addEventListener('click', reset);

// Suporte a teclado (Enter e Space)
btnIncrement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        increment();
    }
});

btnDecrement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        decrement();
    }
});

btnReset.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        reset();
    }
});

// Inicialização
updateDisplay();
