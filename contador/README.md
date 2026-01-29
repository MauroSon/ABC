# Contador Simples (React + TypeScript)

Um contador interativo desenvolvido com React, TypeScript e Vite. Clique no botão para incrementar o valor em 1.

## Funcionalidades

✅ Contador inicializado em 0
✅ Botão para incrementar em 1
✅ Interface visual moderna com gradientes
✅ Animações suaves e responsivas
✅ Design responsivo para mobile
✅ TypeScript para type-safety
✅ Vite para build rápido e HMR
✅ CSS Modules para escopo de estilos
✅ Acessibilidade (ARIA)

## Stack Tecnológica

- React 18+
- TypeScript 5+
- Vite 6+
- CSS3 Modules

## Pré-requisitos

- Node.js 18+ ou 20+
- npm 9+ ou yarn 1.22+

## Como Instalar

```bash
# Clone o repositório (se aplicável)
cd contador
npm install
# ou
yarn install
```

## Como Executar (Desenvolvimento)

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em http://localhost:5173

## Como Buildar para Produção

```bash
npm run build
# ou
yarn build
```

## Como Preview do Build

```bash
npm run preview
# ou
yarn preview
```

## Estrutura do Projeto

```
contador/
├── src/
│   ├── components/
│   │   ├── Counter.tsx
│   │   └── Counter.module.css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run type-check` - Verifica tipos TypeScript
