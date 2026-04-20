# Contador Interativo

Um contador interativo simples e elegante desenvolvido com HTML5, CSS3 e JavaScript vanilla. O projeto permite incrementar, decrementar e zerar valores com uma interface visual moderna e responsiva.

![Tema do Projeto](https://img.shields.io/badge/tema-roxo-purple)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Demonstração](#demonstração)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Personalização](#personalização)
- [Acessibilidade](#acessibilidade)
- [Navegadores Suportados](#navegadores-suportados)
- [Desenvolvimento](#desenvolvimento)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Visão Geral

O Contador Interativo é uma aplicação web simples que demonstra o uso de tecnologias web fundamentais (HTML, CSS, JavaScript) para criar uma interface interativa e responsiva. O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web, incluindo:

- Separação de responsabilidades (HTML, CSS e JavaScript em arquivos separados)
- Design responsivo e mobile-first
- Acessibilidade (ARIA labels, navegação por teclado)
- Código limpo e bem documentado
- Performance otimizada

## ✨ Funcionalidades

### Funcionalidades Principais

- ➕ **Incrementar**: Aumenta o valor do contador em 1
- ➖ **Decrementar**: Diminui o valor do contador em 1
- 🔄 **Zerar**: Reseta o contador para 0

### Funcionalidades Adicionais

- 🎨 **Design Moderno**: Interface elegante com tema roxo e gradientes
- 📱 **Responsivo**: Adaptado para funcionar em dispositivos móveis, tablets e desktops
- ⌨️ **Acessível**: Suporte completo a navegação por teclado e leitores de tela
- 🎭 **Animações**: Transições suaves e feedback visual em interações
- 🔒 **Validação**: Limite mínimo de -999 para evitar overflow visual
- 🌐 **Cross-browser**: Compatível com os principais navegadores modernos

## 📸 Demonstração

### Interface Desktop

```
┌─────────────────────────────────┐
│     Contador Interativo         │
│                                 │
│              0                  │
│                                 │
│    [➖ -1] [🔄 Zerar] [➕ +1]    │
│                                 │
│ Use os botões para controlar    │
│ o contador                      │
└─────────────────────────────────┘
```

### Cores do Tema Roxo

- **Gradiente de Fundo**: `#9333ea` → `#6b21a8`
- **Display do Valor**: `#9333ea` (roxo vibrante)
- **Botão Incrementar (+)**: `#a855f7` (roxo claro)
- **Botão Decrementar (-)**: `#c084fc` (roxo médio)
- **Botão Zerar**: `#7c3aed` (roxo escuro)

## 🚀 Instalação

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência ou build tool necessária

### Passos de Instalação

1. **Clone o repositório** (ou baixe os arquivos):

```bash
git clone https://github.com/MauroSon/ABC.git
cd ABC
```

2. **Abra o arquivo HTML**:

Você pode abrir o arquivo `contador.html` diretamente no navegador:

- **Opção 1**: Dê um duplo clique no arquivo `contador.html`
- **Opção 2**: Use o Live Server no VS Code
- **Opção 3**: Use qualquer servidor HTTP local

```bash
# Exemplo usando Python 3
python -m http.server 8000

# Exemplo usando Node.js (http-server)
npx http-server
```

3. **Acesse no navegador**:

```
http://localhost:8000/contador.html
```

## 📖 Uso

### Uso Básico

1. **Incrementar**: Clique no botão **"➕ +1"** para aumentar o valor
2. **Decrementar**: Clique no botão **"➖ -1"** para diminuir o valor
3. **Zerar**: Clique no botão **"🔄 Zerar"** para resetar para 0

### Atalhos de Teclado

- **Tab**: Navegar entre os botões
- **Enter** ou **Space**: Ativar o botão focado
- **Shift + Tab**: Navegar para trás

### Limite do Contador

- **Valor Mínimo**: -999 (evita overflow visual)
- **Valor Máximo**: Ilimitado (limitado apenas pelo JavaScript)

## 📁 Estrutura do Projeto

```
contador/
├── contador.html          # Estrutura HTML principal (49 linhas)
├── styles.css             # Estilos CSS e design (140 linhas)
├── script.js              # Lógica JavaScript e interatividade (77 linhas)
└── README.md              # Documentação do projeto (este arquivo)
```

### Descrição dos Arquivos

#### `contador.html`
Estrutura semântica HTML5 que define a interface do contador:
- Meta tags para charset e viewport
- Link para o arquivo CSS externo
- Script tag para o JavaScript externo
- Elementos semânticos: `<main>`, `<header>`, `<footer>`
- ARIA labels para acessibilidade

#### `styles.css`
Folha de estilos CSS que define a aparência visual:
- Reset CSS e estilos base
- Layout com Flexbox
- Gradientes e animações
- Estilos responsivos com media queries
- Cores em tons de roxo

#### `script.js`
Lógica JavaScript que implementa a funcionalidade:
- Estado do contador (variável `count`)
- Funções: `increment()`, `decrement()`, `reset()`, `updateDisplay()`
- Event listeners para clique e teclado
- Validações e animações

## 🎨 Personalização

### Alterar Cores

Edite o arquivo `styles.css` para personalizar as cores:

```css
/* Gradiente de fundo */
background: linear-gradient(135deg, #9333ea 0%, #6b21a8 100%);

/* Display do valor */
.counter-value {
    color: #9333ea;
}

/* Botões */
.btn-increment {
    background-color: #a855f7; /* Roxo claro */
}

.btn-decrement {
    background-color: #c084fc; /* Roxo médio */
}

.btn-reset {
    background-color: #7c3aed; /* Roxo escuro */
}
```

### Alterar Limite Mínimo

Edite o arquivo `script.js`:

```javascript
const MIN_VALUE = -999; // Altere este valor
```

### Alterar Tamanhos de Fonte

Edite o arquivo `styles.css`:

```css
.counter-value {
    font-size: 72px; /* Tamanho do display */
}
```

## ♿ Acessibilidade

O projeto segue as diretrizes WCAG 2.1 (AA):

### Recursos de Acessibilidade Implementados

- ✅ **ARIA Labels**: Todos os botões possuem `aria-label` descritivos
- ✅ **Navegação por Teclado**: Tab, Enter, Space funcionam corretamente
- ✅ **Focus Visible**: Indicador de foco claramente visível
- ✅ **Contraste**: Cores com ratio mínimo de 4.5:1 (WCAG AA)
- ✅ **aria-live**: Display do valor atualiza leitores de tela
- ✅ **Semântica HTML**: Uso correto de elementos HTML5

### Testando Acessibilidade

1. **Navegação por Teclado**:
   - Use `Tab` para navegar entre botões
   - Use `Enter` ou `Space` para ativar

2. **Leitor de Tela**:
   - Ative NVDA (Windows), VoiceOver (Mac), ou ORCA (Linux)
   - Navegue e verifique se os botões são anunciados corretamente

3. **Contraste**:
   - Use extensões como "Colour Contrast Analyzer" para verificar

## 🌐 Navegadores Suportados

| Navegador | Versão Mínima | Status |
|-----------|---------------|--------|
| Chrome | 90+ | ✅ Totalmente suportado |
| Firefox | 88+ | ✅ Totalmente suportado |
| Safari | 14+ | ✅ Totalmente suportado |
| Edge | 90+ | ✅ Totalmente suportado |
| Opera | 76+ | ✅ Totalmente suportado |

### Recursos Utilizados

- CSS Grid e Flexbox
- ES6+ (Arrow functions, const/let, template literals)
- CSS Animations e Transitions
- ARIA attributes
- HTML5 semantic elements

## 💻 Desenvolvimento

### Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos e animações modernas
- **JavaScript ES6+**: Lógica de interatividade

### Melhores Práticas

- Separação de responsabilidades (HTML/CSS/JS)
- Código limpo e legível
- Comentários descritivos
- Nomes de variáveis e funções semânticos
- Validações de edge cases
- Performance otimizada

### Código Limpo

O projeto segue princípios de Clean Code:
- Funções pequenas e com responsabilidade única
- Nomes descritivos para variáveis e funções
- Comentários apenas quando necessário
- Sem código duplicado
- Formatação consistente

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

### Sugestões de Melhorias

- [ ] Adicionar histórico de operações
- [ ] Implementar persistência (localStorage)
- [ ] Adicionar temas claros/escuros
- [ ] Implementar limite máximo configurável
- [ ] Adicionar sons para feedback
- [ ] Suporte a múltiplos contadores
- [ ] Adicionar testes automatizados

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
Copyright (c) 2025 MauroSon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Autor

**MauroSon** - [GitHub](https://github.com/MauroSon)

## 📞 Suporte

Se você encontrou um bug ou tem uma sugestão:

1. Abra uma [Issue](https://github.com/MauroSon/ABC/issues)
2. Envie um Pull Request
3. Entre em contato através do GitHub

## ⭐ Se este projeto foi útil para você, considere dar uma estrela!

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript**
