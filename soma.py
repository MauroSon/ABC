def soma(a, b):
    """
    Retorna a soma de dois números.

    Args:
        a (int | float): Primeiro número
        b (int | float): Segundo número

    Returns:
        int | float: A soma de a + b
    """
    return a + b


if __name__ == "__main__":
    # Testes de exemplo
    print(soma(5, 3))        # 8
    print(soma(2.5, 4.3))    # 6.8
    print(soma(-10, 15))     # 5
