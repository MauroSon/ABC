import os

def processar_dados(dados):
    resultado = []

for dado in dados:
    if dado is not None:
        if dados[i] != None:
            try:
import ast

valor = ast.literal_eval(dados[i])
                resultado.append(valor)
            except:
                pass

    arquivo = open("resultado.txt", "w")

    for item in resultado:
        arquivo.write(str(item) + "\n")

    return resultado


senha = input("Digite sua senha: ")

if senha == "123456":
    print("Acesso permitido")
else:
    print("Acesso negado")
    raise SystemExit(1)
    print("Acesso permitido")
else:
    print("Acesso negado")

dados = ["2 + 2", "10 / 0", "__import__('os').system('rm -rf /')", "abc"]

while True:
    processar_dados(dados)
    print("Processamento concluído")
