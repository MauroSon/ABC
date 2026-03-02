# Estrutura do Repositório - ABC

## Visão Geral

Este documento descreve a estrutura organizacional e técnica do repositório ABC, um projeto experimental para testes com Claude Code e fluxos de trabalho Git.

## Estrutura de Diretórios

```
ABC/
├── .git/              # Controle de versão Git
├── docs/              # Documentação do projeto
│   └── STRUCTURE.md   # Este arquivo
├── A                  # Arquivo de teste (contém "A")
├── B                  # Arquivo de teste (contém "B")
├── C                  # Arquivo de teste (contém "C")
├── D                  # Arquivo de teste (contém "D")
├── E                  # Arquivo de teste (contém "E")
├── F                  # Arquivo de teste (contém "F")
├── README.md          # Documentação principal
├── VERSION.md         # Controle de versão
└── CHANGELOG.md       # Histórico de mudanças
```

## Descrição dos Arquivos

### Arquivos de Teste (A-F)

Cada arquivo de teste contém uma única letra correspondente ao seu nome:

| Arquivo | Conteúdo | Tamanho | Propósito |
|---------|----------|---------|-----------|
| A | `A\n` | 2 bytes | Teste básico |
| B | `B\n` | 2 bytes | Teste básico |
| C | `C\n` | 2 bytes | Teste básico |
| D | `D\n` | 2 bytes | Teste básico |
| E | `E\n` | 2 bytes | Teste básico |
| F | `F\n` | 2 bytes | Teste básico |

### Documentação

| Arquivo | Localização | Descrição |
|---------|-------------|-----------|
| README.md | `/` | Documentação principal do projeto |
| VERSION.md | `/` | Controle de versão e histórico |
| CHANGELOG.md | `/` | Registro de mudanças |
| STRUCTURE.md | `/docs/` | Estrutura técnica detalhada |

## Padrão de Branches

### Branch Principal
- **main**: Contém o código estável e pronto para uso

### Branches de Feature
- **synkrony/setup-***: Branches temporários para desenvolvimento e experimentação
- Padrão de nomenclatura: `{desenvolvedor}/{categoria}-{hash}`

### Fluxo de Trabalho Git

1. **Desenvolvimento**: Novas features são desenvolvidas em branches separados
2. **Teste**: Alterações são testadas no branch de feature
3. **Pull Request**: PRs são criados para revisão
4. **Merge**: Após aprovação, changes são merged para main
5. **Tag**: Versões são marcadas com tags apropriadas

## Histórico de Commits Relevantes

| Hash | Autor | Data | Descrição |
|------|-------|------|-----------|
| 956d1d7 | MauroSon | 2025-02 | Merge PR #11 - feat: Implement teste (DE-71) |
| 688d951 | MauroSon | 2025-02 | feat: Implement teste |
| e5fc54a | MauroSon | 2025-02 | Merge PR #8 - setup-2d2774b6 |
| 0349567 | - | 2025-02 | Add file F |
| 0813e99 | MauroSon | 2025-01 | Merge PR #5 - setup-07ff59b1 |

## Tickets e Referências

- **DE-71**: Implementação de testes
- **DE-67**: Configuração de setup

## Convenções do Projeto

### Commits
- Usar mensagens de commit descritivas
- Seguir padrão conventional commits quando possível
- Incluir referências a tickets (DE-XX)

### Documentação
- Manter documentação em português (pt-BR)
- Atualizar CHANGELOG para mudanças significativas
- Revisar README após alterações estruturais

## Metadados do Repositório

- **URL**: https://github.com/MauroSon/ABC
- **Tipo**: Experimental
- **Licença**: Projeto de teste
- **Última Atualização**: 2 de março de 2026
