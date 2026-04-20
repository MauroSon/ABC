# Exemplos de Uso da Paleta de Cores

Este documento fornece exemplos práticos de como utilizar a paleta de cores extraída da imagem em diferentes contextos de desenvolvimento.

## 📋 Índice

- [Exemplos CSS](#exemplos-css)
- [Exemplos SASS/SCSS](#exemplos-sassscss)
- [Exemplos Tailwind CSS](#exemplos-tailwind-css)
- [Exemplos JavaScript](#exemplos-javascript)
- [Exemplos React](#exemplos-react)
- [Aplicações Práticas](#aplicações-práticas)

---

## Exemplos CSS

### Uso Básico com Variáveis CSS

```css
/* Definição das variáveis de cor */
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
  --color-text-muted: #XXXXXX;
  --color-border: #XXXXXX;

  /* Variações de Opacidade */
  --color-primary-light: rgba(XXX, XXX, XXX, 0.1);
  --color-primary-medium: rgba(XXX, XXX, XXX, 0.5);
  --color-primary-dark: rgba(XXX, XXX, XXX, 0.9);
}

/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}
```

### Componentes de UI

#### Botões

```css
/* Botão Primário */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-primary-light);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Botão Secundário */
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--color-primary-light);
}

/* Botão de Destaque */
.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-accent:hover {
  background-color: var(--color-highlight);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
```

#### Cards

```css
.card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px var(--color-primary-light);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px var(--color-primary-medium);
}

.card-header {
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.card-title {
  color: var(--color-primary);
  font-size: 20px;
  font-weight: 700;
}

.card-body {
  color: var(--color-text);
  font-size: 16px;
}

.card-footer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 14px;
}
```

#### Formulários

```css
/* Inputs */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  color: var(--color-text);
  font-weight: 600;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.form-input::placeholder {
  color: var(--color-text-muted);
}

/* Checkbox Customizado */
.form-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-checkbox:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
```

#### Alertas

```css
/* Alert Success */
.alert-success {
  background-color: #XXXXXX; /* Verde da paleta */
  color: var(--color-background);
  padding: 16px 20px;
  border-radius: 8px;
  border-left: 4px solid #XXXXXX;
}

/* Alert Warning */
.alert-warning {
  background-color: #XXXXXX; /* Amarelo/Laranja da paleta */
  color: var(--color-text);
  padding: 16px 20px;
  border-radius: 8px;
  border-left: 4px solid #XXXXXX;
}

/* Alert Error */
.alert-error {
  background-color: #XXXXXX; /* Vermelho/Rosa da paleta */
  color: var(--color-background);
  padding: 16px 20px;
  border-radius: 8px;
  border-left: 4px solid #XXXXXX;
}

/* Alert Info */
.alert-info {
  background-color: var(--color-primary);
  color: var(--color-background);
  padding: 16px 20px;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
}
```

### Navegação

```css
/* Navbar */
.navbar {
  background-color: var(--color-primary);
  color: var(--color-background);
  padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-background);
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  gap: 24px;
  list-style: none;
}

.navbar-link {
  color: var(--color-background);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: var(--color-accent);
}
```

### Tabelas

```css
.table-container {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--color-primary-light);
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-background);
}

.table thead {
  background-color: var(--color-primary);
  color: var(--color-background);
}

.table th {
  padding: 16px;
  text-align: left;
  font-weight: 600;
}

.table td {
  padding: 16px;
  border-bottom: 1px solid var(--color-border);
}

.table tbody tr:hover {
  background-color: var(--color-primary-light);
}

.table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.02);
}
```

---

## Exemplos SASS/SCSS

### Variáveis e Mixins

```scss
// Variáveis de Cor
$color-primary: #XXXXXX;
$color-secondary: #XXXXXX;
$color-tertiary: #XXXXXX;
$color-accent: #XXXXXX;
$color-highlight: #XXXXXX;
$color-background: #XXXXXX;
$color-text: #XXXXXX;
$color-text-muted: #XXXXXX;
$color-border: #XXXXXX;

// Função para gerar variações de opacidade
@function rgba-color($color, $alpha) {
  @return rgba($color, $alpha);
}

// Mixin para sombras coloridas
@mixin colored-shadow($color, $opacity: 0.2) {
  box-shadow: 0 4px 12px rgba-color($color, $opacity);
}

// Mixin para transições
@mixin transition($property: all, $duration: 0.3s, $easing: ease) {
  transition: $property $duration $easing;
}

// Mixin para center
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Mixin responsivo
@mixin responsive($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 768px) {
      @content;
    }
  } @else if $breakpoint == tablet {
    @media (min-width: 769px) and (max-width: 1024px) {
      @content;
    }
  } @else if $breakpoint == desktop {
    @media (min-width: 1025px) {
      @content;
    }
  }
}

// Exemplo de uso
.button {
  background-color: $color-primary;
  color: $color-background;
  padding: 12px 24px;
  border-radius: 8px;
  @include colored-shadow($color-primary);
  @include transition();

  &:hover {
    background-color: $color-secondary;
    transform: translateY(-2px);
  }

  @include responsive(mobile) {
    padding: 10px 20px;
    font-size: 14px;
  }
}
```

### Sistema de Design com SASS

```scss
// Design Tokens
$colors: (
  primary: $color-primary,
  secondary: $color-secondary,
  tertiary: $color-tertiary,
  accent: $color-accent,
  background: $color-background,
  text: $color-text,
  border: $color-border
);

// Spacing
$spacing: (
  xs: 4px,
  sm: 8px,
  md: 16px,
  lg: 24px,
  xl: 32px,
  xxl: 48px
);

// Typography
$font-sizes: (
  xs: 12px,
  sm: 14px,
  base: 16px,
  lg: 18px,
  xl: 20px,
  xxl: 24px,
  xxxl: 32px
);

// Função para acessar mapas
@function get($map, $key) {
  @return map-get($map, $key);
}

// Mixin para criar variantes de componentes
@mixin component-variant($variant) {
  $bg-color: map-get($colors, $variant);
  background-color: $bg-color;

  @if lightness($bg-color) < 60% {
    color: #FFFFFF;
  } @else {
    color: #000000;
  }
}

// Uso
.card {
  padding: get($spacing, md);
  border-radius: 8px;

  &.primary {
    @include component-variant('primary');
  }

  &.secondary {
    @include component-variant('secondary');
  }

  &.accent {
    @include component-variant('accent');
  }
}
```

---

## Exemplos Tailwind CSS

### Configuração Personalizada

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#XXXXXX',
          light: '#YYYYYY',
          dark: '#ZZZZZZ',
        },
        secondary: {
          DEFAULT: '#XXXXXX',
          light: '#YYYYYY',
          dark: '#ZZZZZZ',
        },
        tertiary: '#XXXXXX',
        accent: {
          DEFAULT: '#XXXXXX',
          light: '#YYYYYY',
          dark: '#ZZZZZZ',
        },
        highlight: '#XXXXXX',
        background: '#XXXXXX',
        text: {
          DEFAULT: '#XXXXXX',
          muted: '#YYYYYY',
        },
        border: '#XXXXXX',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'colored': '0 4px 12px rgba(XXX, XXX, XXX, 0.2)',
        'colored-lg': '0 8px 24px rgba(XXX, XXX, XXX, 0.3)',
      },
    },
  },
  plugins: [],
}
```

### Exemplos de Classes Tailwind

```html
<!-- Botão Primário -->
<button class="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-colored">
  Botão Primário
</button>

<!-- Botão de Destaque -->
<button class="bg-accent text-background px-6 py-3 rounded-lg font-bold hover:bg-highlight transition-all duration-300">
  Ação Importante
</button>

<!-- Card -->
<div class="bg-background border border-border rounded-xl p-6 shadow-colored hover:-translate-y-1 hover:shadow-colored-lg transition-all duration-300">
  <h3 class="text-primary font-bold text-xl mb-4">Título do Card</h3>
  <p class="text-text mb-4">Conteúdo do card usando a paleta de cores.</p>
  <button class="bg-primary text-background px-4 py-2 rounded-lg text-sm">
    Saiba Mais
  </button>
</div>

<!-- Navbar -->
<nav class="bg-primary text-background px-6 py-4 shadow-md">
  <div class="flex items-center justify-between max-w-7xl mx-auto">
    <a href="#" class="text-2xl font-bold">Logo</a>
    <ul class="flex gap-6">
      <li><a href="#" class="font-medium hover:text-accent transition-colors">Home</a></li>
      <li><a href="#" class="font-medium hover:text-accent transition-colors">Sobre</a></li>
      <li><a href="#" class="font-medium hover:text-accent transition-colors">Contato</a></li>
    </ul>
  </div>
</nav>

<!-- Formulário -->
<div class="max-w-md mx-auto">
  <div class="mb-5">
    <label class="block text-text font-semibold mb-2">Email</label>
    <input type="email" class="w-full px-4 py-3 border-2 border-border rounded-lg bg-background text-text focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="seu@email.com">
  </div>
  <div class="mb-5">
    <label class="block text-text font-semibold mb-2">Senha</label>
    <input type="password" class="w-full px-4 py-3 border-2 border-border rounded-lg bg-background text-text focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder="••••••••">
  </div>
  <button class="w-full bg-accent text-background py-3 rounded-lg font-bold hover:bg-highlight transition-all">
    Entrar
  </button>
</div>

<!-- Alerta -->
<div class="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
  <p class="text-text font-medium">Mensagem informativa usando as cores da paleta!</p>
</div>

<!-- Tabela -->
<div class="overflow-x-auto rounded-xl shadow-colored">
  <table class="w-full bg-background">
    <thead class="bg-primary text-background">
      <tr>
        <th class="px-6 py-4 text-left font-semibold">Nome</th>
        <th class="px-6 py-4 text-left font-semibold">Email</th>
        <th class="px-6 py-4 text-left font-semibold">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-border hover:bg-primary/5 transition-colors">
        <td class="px-6 py-4 text-text">João Silva</td>
        <td class="px-6 py-4 text-text-muted">joao@email.com</td>
        <td class="px-6 py-4"><span class="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">Ativo</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Exemplos JavaScript

### Objeto de Cores

```javascript
// Cores extraídas da paleta
const palette = {
  primary: '#XXXXXX',
  secondary: '#XXXXXX',
  tertiary: '#XXXXXX',
  accent: '#XXXXXX',
  highlight: '#XXXXXX',
  background: '#XXXXXX',
  text: '#XXXXXX',
  textMuted: '#YYYYYY',
  border: '#XXXXXX',

  // Gradientes
  gradients: {
    primary: 'linear-gradient(135deg, #XXXXXX 0%, #YYYYYY 100%)',
    accent: 'linear-gradient(135deg, #XXXXXX 0%, #YYYYYY 100%)',
  },

  // Sombras
  shadows: {
    primary: 'rgba(XXX, XXX, XXX, 0.2)',
    accent: 'rgba(XXX, XXX, XXX, 0.2)',
  }
};

// Função para converter hex para RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Função para converter RGB para HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Função para criar variação de opacidade
function addAlpha(hex, alpha) {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

// Exemplo de uso dinâmico
document.documentElement.style.setProperty('--color-primary', palette.primary);
document.documentElement.style.setProperty('--color-secondary', palette.secondary);
document.documentElement.style.setProperty('--color-accent', palette.accent);

// Função para alterar tema
function setTheme(theme) {
  const themes = {
    light: {
      background: '#XXXXXX',
      text: '#XXXXXX',
    },
    dark: {
      background: '#YYYYYY',
      text: '#YYYYYY',
    }
  };

  const selectedTheme = themes[theme];
  document.documentElement.style.setProperty('--color-background', selectedTheme.background);
  document.documentElement.style.setProperty('--color-text', selectedTheme.text);
}

// Função para validar contraste
function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);

  const luminance1 = (0.299 * rgb1.r + 0.587 * rgb1.g + 0.114 * rgb1.b) / 255;
  const luminance2 = (0.299 * rgb2.r + 0.587 * rgb2.g + 0.114 * rgb2.b) / 255;

  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (lighter + 0.05) / (darker + 0.05);
}
```

---

## Exemplos React

### Contexto de Tema

```jsx
// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [colors] = useState({
    primary: '#XXXXXX',
    secondary: '#XXXXXX',
    tertiary: '#XXXXXX',
    accent: '#XXXXXX',
    highlight: '#XXXXXX',
    background: '#XXXXXX',
    text: '#XXXXXX',
    textMuted: '#YYYYYY',
    border: '#XXXXXX',
  });

  const theme = {
    colors,
    gradients: {
      primary: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
      accent: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.highlight} 100%)`,
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Uso em componentes
const Button = ({ variant = 'primary', children, ...props }) => {
  const { colors } = useTheme();

  const variants = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.background,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.primary,
      border: `2px solid ${colors.primary}`,
    },
    accent: {
      backgroundColor: colors.accent,
      color: colors.background,
    },
  };

  return (
    <button
      style={{
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...variants[variant],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// Componente Card
const Card = ({ title, children }) => {
  const { colors } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.background,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      padding: '24px',
      boxShadow: `0 2px 8px ${colors.primary}33`,
    }}>
      <h3 style={{
        color: colors.primary,
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '16px',
      }}>
        {title}
      </h3>
      <div style={{ color: colors.text }}>
        {children}
      </div>
    </div>
  );
};
```

### Componentes Estilizados

```jsx
// Button.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

const Button = ({ variant = 'primary', children, onClick }) => {
  const { colors } = useTheme();

  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.primary,
      color: colors.background,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.primary,
      border: `2px solid ${colors.primary}`,
    },
    accent: {
      backgroundColor: colors.accent,
      color: colors.background,
    },
  };

  const hoverStyles = {
    primary: {
      backgroundColor: colors.secondary,
      transform: 'translateY(-2px)',
      boxShadow: `0 4px 12px ${colors.primary}33`,
    },
    secondary: {
      backgroundColor: `${colors.primary}1A`,
    },
    accent: {
      backgroundColor: colors.highlight,
      boxShadow: `0 4px 12px ${colors.accent}33`,
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...(isHovered ? hoverStyles[variant] : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

## Aplicações Práticas

### Dashboard Layout

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - Paleta de Cores</title>
  <style>
    :root {
      --color-primary: #XXXXXX;
      --color-secondary: #XXXXXX;
      --color-accent: #XXXXXX;
      --color-background: #XXXXXX;
      --color-text: #XXXXXX;
      --color-border: #XXXXXX;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #f5f5f5;
      color: var(--color-text);
    }

    .dashboard {
      display: grid;
      grid-template-columns: 250px 1fr;
      min-height: 100vh;
    }

    .sidebar {
      background-color: var(--color-primary);
      color: white;
      padding: 20px;
    }

    .sidebar-header {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 40px;
    }

    .nav-item {
      padding: 12px;
      margin-bottom: 8px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .nav-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .main-content {
      padding: 40px;
    }

    .header {
      margin-bottom: 40px;
    }

    .header h1 {
      font-size: 32px;
      color: var(--color-primary);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      border-left: 4px solid var(--color-primary);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .stat-label {
      color: var(--color-text-muted);
      font-size: 14px;
      margin-bottom: 8px;
    }

    .stat-value {
      font-size: 32px;
      font-weight: bold;
      color: var(--color-primary);
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <aside class="sidebar">
      <div class="sidebar-header">Dashboard</div>
      <nav>
        <div class="nav-item">Visão Geral</div>
        <div class="nav-item">Relatórios</div>
        <div class="nav-item">Configurações</div>
      </nav>
    </aside>

    <main class="main-content">
      <div class="header">
        <h1>Bem-vindo ao Dashboard</h1>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Total de Usuários</div>
          <div class="stat-value">1,234</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Receita Mensal</div>
          <div class="stat-value">R$ 45.678</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Novos Pedidos</div>
          <div class="stat-value">89</div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

### Landing Page

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page - Paleta de Cores</title>
  <style>
    :root {
      --color-primary: #XXXXXX;
      --color-secondary: #XXXXXX;
      --color-accent: #XXXXXX;
      --color-background: #XXXXXX;
      --color-text: #XXXXXX;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      color: var(--color-text);
    }

    .hero {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }

    .hero h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }

    .hero p {
      font-size: 20px;
      margin-bottom: 40px;
      opacity: 0.9;
    }

    .cta-button {
      background-color: var(--color-accent);
      color: white;
      padding: 16px 32px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      display: inline-block;
      transition: all 0.3s;
    }

    .cta-button:hover {
      background-color: var(--color-highlight);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .features {
      padding: 80px 20px;
      background-color: var(--color-background);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      text-align: center;
      padding: 40px 20px;
      border-radius: 12px;
      transition: transform 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-8px);
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      background-color: var(--color-primary);
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 32px;
    }

    .feature-title {
      font-size: 24px;
      margin-bottom: 12px;
      color: var(--color-primary);
    }
  </style>
</head>
<body>
  <section class="hero">
    <h1>Bem-vindo à Nossa Plataforma</h1>
    <p>Soluução inovadora para suas necessidades</p>
    <a href="#" class="cta-button">Começar Agora</a>
  </section>

  <section class="features">
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3 class="feature-title">Rápido</h3>
        <p>Performance otimizada para máxima produtividade</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3 class="feature-title">Intuitivo</h3>
        <p>Interface fácil de usar e aprender</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3 class="feature-title">Seguro</h3>
        <p>Seus dados sempre protegidos</p>
      </div>
    </div>
  </section>
</body>
</html>
```

---

## Dicas de Acessibilidade

### Verificar Contraste

```javascript
// Função para verificar se o contraste atende WCAG AA
function meetsWCAGAA(foreground, background) {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= 4.5; // WCAG AA para texto normal
}

// Função para verificar se o contraste atende WCAG AAA
function meetsWCAGAAA(foreground, background) {
  const ratio = getContrastRatio(foreground, background);
  return ratio >= 7; // WCAG AAA para texto normal
}

// Exemplo de uso
const textColor = palette.text;
const bgColor = palette.background;

console.log('WCAG AA:', meetsWCAGAA(textColor, bgColor));
console.log('WCAG AAA:', meetsWCAGAAA(textColor, bgColor));
```

### CSS para Foco Acessível

```css
/* Garantir que o foco seja visível */
*:focus {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
}

/* Melhorar visibilidade de links */
a:focus {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
  background-color: var(--color-primary-light);
}
```

---

## Notas

- Substitua todos os `#XXXXXX` pelos códigos hexadecimais reais extraídos da imagem
- Ajuste os valores RGB conforme necessário
- Personalize os exemplos de acordo com as necessidades específicas do projeto
- Sempre teste a acessibilidade das cores escolhidas
- Considere diferentes modos (claro/escuro) para melhor experiência do usuário

---

**Próximos Passos:**

1. ✅ Substituir códigos hexadecimais placeholder pelos valores reais
2. ✅ Testar os componentes em diferentes contextos
3. ✅ Validar acessibilidade das combinações de cores
4. ✅ Ajustar conforme feedback do design
5. ✅ Documentar decisões de design e padrões de uso
