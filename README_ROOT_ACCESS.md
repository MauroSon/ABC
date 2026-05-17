# Acesso ao Diretório /root

## Restrição

O diretório `/root` não está acessível no ambiente Claude Code devido a restrições de segurança do sistema.

## Alternativas

### Opção 1: Usar o diretório do projeto atual
```bash
find /tmp/d20260210-96702-r3444o/repo -type f
```

### Opção 2: Usar diretório home do usuário
```bash
find /home/mauro -type f
```

### Opção 3: Usar diretório temporário
```bash
find /tmp -type f
```

### Opção 4: Executar no terminal do sistema
Para acessar `/root`, execute diretamente no terminal com privilégios apropriados:

```bash
sudo ls -la /root
```

## Diretórios Disponíveis no Ambiente Claude Code

- `/tmp/d20260210-96702-r3444o/repo` - Diretório principal do projeto
- `/home/mauro/.claude/projects/-tmp-d20260210-96702-r3444o-repo` - Diretório de configuração do Claude Code
