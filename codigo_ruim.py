import ast

def processar_dados(dados):
    resultado = []

def processar_dados(dados):
    resultado = []

    for dado in dados:
        if dado is not None:
            try:
                valor = ast.literal_eval(dado)
                resultado.append(valor)
            except (ValueError, SyntaxError) as exc:
                print(f"falha ao avaliar: {exc}")

    return resultado
    if dado is not None:
if dado is not None:
            try:
import ast

import ast, operator

OPS = {ast.Add: operator.add, ast.Sub: operator.sub,
       ast.Mult: operator.mul, ast.Div: operator.floordiv}

def avaliar(expr):
    def _eval(node):
        if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
            return node.value
        if isinstance(node, ast.BinOp) and type(node.op) in OPS:
            return OPS[type(node.op)](_eval(node.left), _eval(node.right))
        raise ValueError(f"expressão não permitida: {expr}")
    return _eval(ast.parse(expr, mode="eval").body)
                resultado.append(valor)
            except:
                pass

with open("resultado.txt", "w") as arquivo:
    for item in resultado:
        arquivo.write(str(item) + "\n")

    for item in resultado:
        arquivo.write(str(item) + "\n")

    return resultado


def main():
    senha = input("Digite sua senha: ")
    ...

if __name__ == "__main__":
    main()

if senha == "123456":
    print("Acesso permitido")
else:
    print("Acesso negado")
    raise SystemExit(1)
    print("Acesso permitido")
if senha == "123456":
    print("Acesso permitido")
else:
    print("Acesso negado")
    raise SystemExit(1)
    print("Acesso negado")

dados = ["2 + 2", "10 / 0", "__import__('os').system('rm -rf /')", "abc"]

processar_dados(dados)
print("Processamento concluído")
    processar_dados(dados)
    print("Processamento concluído")
