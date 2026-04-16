# Paleta de Cores Synkrony ABC

Esta documentação descreve a paleta de cores expandida do projeto Synkrony ABC, incluindo todas as letras de A a J e o caractere especial ç.

## Visão Geral

- **Versão:** 1.0.1
- **Última atualização:** 2026-04-16
- **Propósito:** Documentação e Visualização

## Tabela de Cores

| Letra | Hex | Nome | Visual |
|-------|-----|------|--------|
| A | `#FFB3B3` | Light Coral | <span style="background:#FFB3B3; padding:4px 8px;">&nbsp;</span> |
| B | `#B3E8E3` | Light Turquoise | <span style="background:#B3E8E3; padding:4px 8px;">&nbsp;</span> |
| C | `#B3D9EA` | Light Sky Blue | <span style="background:#B3D9EA; padding:4px 8px;">&nbsp;</span> |
| D | `#C9E6D9` | Light Sage | <span style="background:#C9E6D9; padding:4px 8px;">&nbsp;</span> |
| E | `#FFF3CC` | Light Cream | <span style="background:#FFF3CC; padding:4px 8px;">&nbsp;</span> |
| F | `#EBD3EB` | Light Plum | <span style="background:#EBD3EB; padding:4px 8px;">&nbsp;</span> |
| G | `#FFE6CC` | Light Peach | <span style="background:#FFE6CC; padding:4px 8px;">&nbsp;</span> |
| H | `#E6F3FF` | Light Azure | <span style="background:#E6F3FF; padding:4px 8px;">&nbsp;</span> |
| I | `#F0E6FF` | Light Periwinkle | <span style="background:#F0E6FF; padding:4px 8px;">&nbsp;</span> |
| J | `#C9ECE3` | Light Mint | <span style="background:#C9ECE3; padding:4px 8px;">&nbsp;</span> |
| ç | `#FFE6F0` | Light Rose | <span style="background:#FFE6F0; padding:4px 8px;">&nbsp;</span> |

## Temas

### Tema Padrão (Dark)
- **Background:** `#2C3E50`
- **Texto:** `#ECF0F1`

### Tema Light
- **Background:** `#FFFFFF`
- **Texto:** `#2C3E50`

## Como Usar

### CSS/SCSS

Importe o arquivo `colors.css` no seu HTML:

```html
<link rel="stylesheet" href="colors.css">
```

Use as variáveis CSS:

```css
.my-element {
  background-color: var(--color-a);
  color: var(--theme-text-default);
}
```

### JavaScript

```javascript
// Carregar configuração
const colors = require('./colors.json');

// Acessar cor por letra
const colorA = colors.palette.A.hex; // "#FFB3B3"
const colorNameA = colors.palette.A.name; // "Light Coral"

// Listar todas as cores
Object.entries(colors.palette).forEach(([letter, data]) => {
  console.log(`${letter}: ${data.hex} - ${data.name}`);
});
```

### Python

```python
import json

# Carregar configuração
with open('colors.json', 'r') as f:
    colors = json.load(f)

# Acessar cor por letra
color_a = colors['palette']['A']['hex']  # "#FFB3B3"
color_name_a = colors['palette']['A']['name']  # "Light Coral"

# Listar todas as cores
for letter, data in colors['palette'].items():
    print(f"{letter}: {data['hex']} - {data['name']}")
```

## Visualizador Interativo

Um visualizador interativo está disponível no arquivo `viewer.html`. Abra este arquivo em um navegador para:

- Visualizar todas as cores da paleta
- Alternar entre temas claro e escuro
- Ver as cores aplicadas em elementos interativos

## Estrutura de Arquivos

```
repo/
├── colors.json      # Configuração JSON da paleta
├── colors.css       # Variáveis CSS
├── COLORS.md        # Esta documentação
└── viewer.html      # Visualizador interativo
```

## Referência

Este sistema é baseado no branch `synkrony/feat/add-synkrony-abc-color-853a1949`.
