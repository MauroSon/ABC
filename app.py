"""
Aplicação de Contador Simples com Flask
Uma aplicação web minimalista para demonstrar um contador interativo
com funcionalidades de incrementar, decrementar e zerar.
"""

from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)

# Configurar chave secreta para sessões do Flask
app.secret_key = 'contador-simples-secret-key-2024'


@app.route('/')
def index():
    """
    Rota principal que exibe o contador.
    Inicializa o contador em 0 se ainda não existir na sessão.
    """
    if 'contador' not in session:
        session['contador'] = 0
    return render_template('index.html', contador=session['contador'])


@app.route('/incrementar', methods=['POST'])
def incrementar():
    """
    Incrementa o valor do contador em 1.
    """
    if 'contador' not in session:
        session['contador'] = 0
    session['contador'] += 1
    return redirect(url_for('index'))


@app.route('/decrementar', methods=['POST'])
def decrementar():
    """
    Decrementa o valor do contador em 1.
    """
    if 'contador' not in session:
        session['contador'] = 0
    session['contador'] -= 1
    return redirect(url_for('index'))


@app.route('/zerar', methods=['POST'])
def zerar():
    """
    Reseta o valor do contador para 0.
    """
    session['contador'] = 0
    return redirect(url_for('index'))


if __name__ == '__main__':
    # Executar aplicação em modo desenvolvimento
    app.run(debug=True, host='127.0.0.1', port=5000)
