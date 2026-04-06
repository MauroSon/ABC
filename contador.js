<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .contador {
            font-size: 72px;
            margin: 20px 0;
            font-weight: bold;
        }
        .botoes {
            display: flex;
            gap: 20px;
            justify-content: center;
        }
        button {
            padding: 15px 30px;
            font-size: 24px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #somar {
            background-color: #4CAF50;
            color: white;
        }
        #somar:hover {
            background-color: #45a049;
        }
        #subtrair {
            background-color: #f44336;
            color: white;
        }
        #subtrair:hover {
            background-color: #da190b;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contador</h1>
        <div class="contador" id="valor">0</div>
        <div class="botoes">
            <button id="subtrair">-</button>
            <button id="somar">+</button>
        </div>
    </div>

    <script>
        let contador = 0;
        const valorElemento = document.getElementById('valor');
        const botaoSomar = document.getElementById('somar');
        const botaoSubtrair = document.getElementById('subtrair');

        function atualizarDisplay() {
            valorElemento.textContent = contador;
        }

        botaoSomar.addEventListener('click', function() {
            contador++;
            atualizarDisplay();
        });

        botaoSubtrair.addEventListener('click', function() {
            contador--;
            atualizarDisplay();
        });
    </script>
</body>
</html>
