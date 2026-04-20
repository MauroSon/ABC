# Paleta de Cores

**Fonte da Imagem:** https://v362xobj90cn.share.zrok.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MiwicHVyIjoiYmxvYl9pZCJ9fQ==--ca322e940b60d9f642cb2d1b3a47c6fec9fed45b/image.png

**Data de Extração:** 2026-01-30

---

## Nota Importante

⚠️ **Não foi possível acessar automaticamente a imagem fornecida** devido a restrições de acesso externo às URLs do serviço zrok.

Para completar esta paleta de cores, você pode:

1. **Opção 1 - Baixar a Imagem Localmente:**
   ```bash
   # Baixe a imagem e salve no repositório
   curl -L -o image.png "https://v362xobj90cn.share.zrok.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MiwicHVyIjoiYmxvYl9pZCJ9fQ==--ca322e940b60d9f642cb2d1b3a47c6fec9fed45b/image.png"
   ```

2. **Opção 2 - Usar Ferramenta Online:**
   - Visite [ImageColor Picker](https://imagecolorpicker.com/)
   - Faça upload da imagem
   - Extraia os códigos hexadecimais automaticamente

3. **Opção 3 - Descrição Manual:**
   - Descreva as cores que você vê na imagem
   - Eu posso ajudá-lo a identificar os códigos hexadecimais aproximados

---

## Estrutura da Paleta de Cores

Quando as cores forem identificadas, esta documentação seguirá a estrutura abaixo:

### 🎨 Cores Principais

| Nome da Cor | Hexadecimal | RGB | Contexto | Presença |
|-------------|-------------|-----|----------|----------|
| *Cor Primária* | #XXXXXX | rgb(0, 0, 0) | Descrição | ~XX% |
| *Cor Secundária* | #XXXXXX | rgb(0, 0, 0) | Descrição | ~XX% |
| *Cor Terciária* | #XXXXXX | rgb(0, 0, 0) | Descrição | ~XX% |

### 🌈 Cores Secundárias

| Nome da Cor | Hexadecimal | RGB | Contexto |
|-------------|-------------|-----|----------|
| *Cor de Apoio 1* | #XXXXXX | rgb(0, 0, 0) | Descrição |
| *Cor de Apoio 2* | #XXXXXX | rgb(0, 0, 0) | Descrição |

### ✨ Cores de Destaque/Acento

| Nome da Cor | Hexadecimal | RGB | Contexto |
|-------------|-------------|-----|----------|
| *Cor de Destaque* | #XXXXXX | rgb(0, 0, 0) | Descrição |
| *Cor de Contraste* | #XXXXXX | rgb(0, 0, 0) | Descrição |

### ⚪ Cores Neutras (se aplicável)

| Nome da Cor | Hexadecimal | RGB | Contexto |
|-------------|-------------|-----|----------|
| *Fundo* | #XXXXXX | rgb(0, 0, 0) | Descrição |
| *Texto* | #XXXXXX | rgb(0, 0, 0) | Descrição |

---

## Visualização da Paleta

<!-- Exemplo de blocos de cor -->
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <div style="width: 100px; height: 100px; background-color: #XXXXXX; border-radius: 8px;"></div>
  <div style="width: 100px; height: 100px; background-color: #XXXXXX; border-radius: 8px;"></div>
  <div style="width: 100px; height: 100px; background-color: #XXXXXX; border-radius: 8px;"></div>
</div>

---

## Análise de Harmonia

<!-- Esta seção será preenchida após análise das cores -->

- **Esquema de Cores:** *A ser determinado*
- **Temperatura:** *A ser determinado (quente/fria/neutra)*
- **Contraste:** *A ser determinado (alto/médio/baixo)*
- **Observações Estéticas:** *A ser preenchido*

---

## Recomendações de Uso

### Combinações Sugeridas

1. **Combinação Primária:**
   - Fundo: `#XXXXXX`
   - Texto: `#XXXXXX`
   - Destaque: `#XXXXXX`

2. **Combinação Secundária:**
   - Fundo: `#XXXXXX`
   - Acento: `#XXXXXX`
   - Detalhe: `#XXXXXX`

### Aplicações Recomendadas

- **UI/Web:** *Recomendações a serem adicionadas*
- **Design Gráfico:** *Recomendações a serem adicionadas*
- **Impressos:** *Recomendações a serem adicionadas*

---

## Como Extrair Cores da Imagem

### Usando Python

```python
from PIL import Image
from collections import Counter
import numpy as np

def extract_colors(image_path, num_colors=5):
    img = Image.open(image_path)
    img = img.convert('RGB')

    # Reduzir tamanho para processamento mais rápido
    img_small = img.resize((150, 150))

    # Obter todos os pixels
    pixels = list(img_small.getdata())

    # Contar cores mais frequentes
    color_counts = Counter(pixels)
    top_colors = color_counts.most_common(num_colors)

    for i, (color, count) in enumerate(top_colors, 1):
        r, g, b = color
        hex_color = f'#{r:02x}{g:02x}{b:02x}'
        print(f'Cor {i}: {hex_color} - {color}')

    return top_colors

# Usar
extract_colors('image.png', num_colors=5)
```

### Usando JavaScript (Node.js)

```javascript
const ColorThief = require('colorthief');
const Image = require('image-stats');

async function extractColors(imagePath) {
  const colors = await ColorThief.getPalette(imagePath, 5);

  colors.forEach((color, index) => {
    const [r, g, b] = color;
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    console.log(`Cor ${index + 1}: ${hex}`);
  });
}

extractColors('image.png');
```

### Usando Ferramentas Online

1. **Adobe Color:** https://color.adobe.com/pt/create/image
   - Faça upload da imagem
   - Extraia automaticamente a paleta

2. **Coolors:** https://coolors.co/upload-image
   - Upload de imagem
   - Geração de paleta automática

3. **ImageColor Picker:** https://imagecolorpicker.com/
   - Upload da imagem
   - Selecione áreas específicas
   - Obtenha códigos hexadecimais precisos

4. **Canva Color Palette Generator:** https://www.canva.com/colors/color-palette-generator/
   - Upload de imagem
   - Geração instantânea de paleta

---

## Formato JSON para Uso Programático

```json
{
  "source": "https://v362xobj90cn.share.zrok.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MiwicHVyIjoiYmxvYl9pZCJ9fQ==--ca322e940b60d9f642cb2d1b3a47c6fec9fed45b/image.png",
  "extracted_at": "2026-01-30",
  "colors": [
    {
      "name": "Nome da Cor",
      "hex": "#XXXXXX",
      "rgb": {"r": 0, "g": 0, "b": 0},
      "hsl": {"h": 0, "s": 0, "l": 0},
      "type": "primary|secondary|accent|neutral",
      "context": "Descrição de onde aparece",
      "presence_percent": 0
    }
  ]
}
```

---

## Variáveis CSS/SASS

### CSS Variables

```css
:root {
  /* Cores Principais */
  --color-primary: #XXXXXX;
  --color-secondary: #XXXXXX;
  --color-tertiary: #XXXXXX;

  /* Cores de Acento */
  --color-accent: #XXXXXX;
  --color-highlight: #XXXXXX;

  /* Cores Neutras */
  --color-background: #XXXXXX;
  --color-text: #XXXXXX;
  --color-border: #XXXXXX;
}
```

### SCSS Variables

```scss
// Cores Principais
$color-primary: #XXXXXX;
$color-secondary: #XXXXXX;
$color-tertiary: #XXXXXX;

// Cores de Acento
$color-accent: #XXXXXX;
$color-highlight: #XXXXXX;

// Cores Neutras
$color-background: #XXXXXX;
$color-text: #XXXXXX;
$color-border: #XXXXXX;
```

---

## Metadados

- **Arquivo de Origem:** PALETA_CORES.md
- **Data de Criação:** 2026-01-30
- **Status:** Aguardando acesso à imagem para extração das cores
- **Próximos Passos:**
  1. Obter acesso à imagem
  2. Extrair cores predominantes
  3. Identificar códigos hexadecimais
  4. Completar esta documentação

---

## Referências e Recursos Úteis

- [W3C Colors](https://www.w3.org/TR/css-color/) - Especificação oficial de cores CSS
- [ColorHexa](https://www.colorhexa.com/) - Conversor e informativo de cores
- [Coolors Newsletter](https://coolors.co/) - Inspiração de paletas
- [Paletton](https://paletton.com/) - Designer de paletas de cores
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verificar acessibilidade das cores
