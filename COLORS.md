# Synkrony ABC - Sistema de Cores

Este documento define a paleta de cores oficial do projeto Synkrony ABC, associando uma cor única a cada arquivo de letra.

## Paleta de Cores

| Letra | HEX     | Nome               | Visualizacao |
|-------|---------|--------------------|--------------|
| A     | #FFB3B3 | Light Coral        | ![A](https://via.placeholder.com/15/FFB3B3/000000?text=+) |
| B     | #B3E8E3 | Light Turquoise    | ![B](https://via.placeholder.com/15/B3E8E3/000000?text=+) |
| C     | #B3D9EA | Light Sky Blue     | ![C](https://via.placeholder.com/15/B3D9EA/000000?text=+) |
| D     | #C9E6D9 | Light Sage         | ![D](https://via.placeholder.com/15/C9E6D9/000000?text=+) |
| E     | #FFF3CC | Light Cream        | ![E](https://via.placeholder.com/15/FFF3CC/000000?text=+) |
| F     | #EBD3EB | Light Plum         | ![F](https://via.placeholder.com/15/EBD3EB/000000?text=+) |
| J     | #C9ECE3 | Light Mint         | ![J](https://via.placeholder.com/15/C9ECE3/000000?text=+) |
| K     | #FAEBAA | Light Golden       | ![K](https://via.placeholder.com/15/FAEBAA/000000?text=+) |
| Y     | #DDC5E8 | Light Lavender     | ![Y](https://via.placeholder.com/15/DDC5E8/000000?text=+) |

## Estrutura do Arquivo colors.json

O arquivo `colors.json` contem a definicao completa do sistema de cores:

```json
{
  "metadata": {
    "version": "1.0.0",
    "project": "Synkrony ABC",
    "lastUpdated": "2026-03-18"
  },
  "palette": {
    "A": { "hex": "#FFB3B3", "name": "Light Coral" },
    "B": { "hex": "#B3E8E3", "name": "Light Turquoise" },
    ...
  },
  "themes": {
    "default": { "background": "#2C3E50", "text": "#ECF0F1" },
    "light": { "background": "#FFFFFF", "text": "#2C3E50" }
  }
}
```

## Como Usar

### Visualizador Interativo

Abra o arquivo `viewer.html` no seu navegador para ver uma visualizacao interativa de todas as cores. O visualizador inclui:

- Grid responsivo com todas as letras coloridas
- Botao para alternar entre temas claro e escuro
- Contraste automatico de texto baseado na cor de fundo
- Efeitos hover e animacoes suaves

### Uso Programatico

Para usar as cores no seu codigo:

```javascript
// Carregar o arquivo colors.json
const colors = require('./colors.json');

// Acessar a cor de uma letra
const corA = colors.palette.A.hex;        // "#FFB3B3"
const nomeA = colors.palette.A.name;      // "Light Coral"

// Usar em aplicacao
console.log(`A letra A tem a cor ${corA} (${nomeA})`);
```

```python
# Carregar o arquivo colors.json
import json

with open('colors.json', 'r') as f:
    colors = json.load(f)

# Acessar a cor de uma letra
cor_a = colors['palette']['A']['hex']      # "#FFB3B3"
nome_a = colors['palette']['A']['name']    # "Light Coral"
```

## Temas Disponiveis

O sistema inclui dois temas predefinidos:

| Tema    | Background | Texto  |
|---------|------------|--------|
| Default | #2C3E50    | #ECF0F1 |
| Light   | #FFFFFF    | #2C3E50 |

## Adicionando Novas Cores

Para adicionar uma nova letra ao sistema, use a seguinte formula para gerar cores distintas:

```javascript
function generateColor(letter) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = alphabet.indexOf(letter);
    const hue = (index * 13.85) % 360;
    return hslToHex(hue, 60 + (index % 3) * 10, 55 + (index % 4) * 5);
}
```

Esta formula garante que:
1. Cada letra tenha uma cor distinta
2. As cores sejam visualmente harmoniosas
3. O contraste seja adequado para leitura

## Validacao

Para validar o arquivo colors.json:

```bash
cat colors.json | python -m json.tool
```

## Arquivos do Sistema

- `colors.json` - Definicao principal do sistema de cores
- `viewer.html` - Visualizador interativo das cores
- `COLORS.md` - Esta documentacao

## Historico

- **v1.1.0** (2026-03-18): Atualizacao para paleta de cores claras (variantes suaves)
- **v1.0.0** (2026-03-18): Implementacao inicial do sistema de cores Synkrony ABC
