# 📊 Contador Simples - Flask Application

Uma aplicação web de contador interativo desenvolvida com Flask e Tailwind CSS.

## 🎯 Funcionalidades

- ✅ Display numérico grande e centralizado
- ✅ Botão para incrementar (+1)
- ✅ Botão para decrementar (-1)
- ✅ Botão para zerar o contador
- ✅ Interface responsiva e moderna
- ✅ Animações suaves e feedback visual

## 📋 Requisitos

- Python 3.7 ou superior
- pip (gerenciador de pacotes Python)
- Conexão com internet (para Tailwind CSS via CDN)

## 🚀 Como Executar

### 1. Criar Ambiente Virtual

**Linux/Mac:**
```bash
python3 -m venv venv
source venv/bin/activate
```

**Windows:**
```cmd
python -m venv venv
venv\Scripts\activate
```

### 2. Instalar Dependências

```bash
pip install -r requirements.txt
```

### 3. Executar a Aplicação

```bash
python app.py
```

### 4. Acessar a Aplicação

Abra seu navegador e acesse:
```
http://127.0.0.1:5000/
```

## 🎮 Como Usar

1. **Incrementar**: Clique no botão verde **+1** para adicionar 1 ao contador
2. **Decrementar**: Clique no botão vermelho **-1** para subtrair 1 do contador
3. **Zerar**: Clique no botão cinza **Zerar** para resetar o contador para 0

## 🛠️ Estrutura do Projeto

```
.
├── app.py                 # Aplicação Flask principal
├── requirements.txt       # Dependências Python
├── templates/
│   └── index.html        # Template HTML com Tailwind CSS
└── README_CONTADOR.md    # Este arquivo
```

## 🔧 Troubleshooting

### Erro: "Command not found: python"
- Tente usar `python3` em vez de `python`

### Erro: "Module not found: flask"
- Certifique-se de ativou o ambiente virtual antes de instalar as dependências
- Verifique se instalou as dependências: `pip install -r requirements.txt`

### Erro: "Address already in use"
- A porta 5000 já está sendo usada por outra aplicação
- Pare a outra aplicação ou altere a porta em `app.py`

### Erro: "Secret key not set"
- Este erro não deve ocorrer pois a chave está configurada no código
- Se ocorrer, verifique se o arquivo `app.py` está correto

## 📝 Notas Técnicas

- A aplicação usa **sessões do Flask** para manter o estado do contador
- **Tailwind CSS** é carregado via CDN para simplificar o setup
- A aplicação roda em **modo desenvolvimento** com debug ativado
- Para produção, desative o debug e configure uma SECRET_KEY segura

## 🔐 Segurança

⚠️ **AVISO**: Esta aplicação é apenas para fins educacionais. Para uso em produção:

- Configure uma `SECRET_KEY` segura e aleatória
- Desative o modo debug: `app.run(debug=False)`
- Implemente proteção CSRF para formulários POST
- Use HTTPS em vez de HTTP

## 🎨 Personalização

### Alterar Cores

Edite o arquivo `templates/index.html` e modifique as classes Tailwind:
- Verde (incrementar): `bg-green-500`, `hover:bg-green-600`
- Vermelho (decrementar): `bg-red-500`, `hover:bg-red-600`
- Cinza (zerar): `bg-gray-500`, `hover:bg-gray-600`

### Alterar Tamanho do Display

Modifique as classes `text-8xl sm:text-9xl` no elemento do contador em `templates/index.html`.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 📱 Smartphones (portrait e landscape)
- 📱 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🚀 Próximos Passos (Possíveis Extensões)

- Persistência do contador em arquivo JSON ou banco de dados
- Múltiplos contadores com nomes personalizados
- Histórico de operações
- API REST endpoints
- Testes automatizados com pytest
- Limite mínimo/máximo para o contador
- Temas claro/escuro

## 📄 Licença

Este é um projeto educacional de código aberto.

---

**Desenvolvido com ❤️ usando Flask e Tailwind CSS**
