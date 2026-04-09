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
        .counter-container {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .display {
            font-size: 72px;
            font-weight: bold;
            color: #333;
            margin: 20px 0;
        }
        button {
            font-size: 18px;
            padding: 15px 30px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #0056b3;
        }
        button:active {
            background-color: #004085;
        }
    </style>
</head>
<body>
    <div class="counter-container">
        <h1>Contador</h1>
        <div class="display" id="display">0</div>
        <button id="incrementBtn">Somar 1</button>
    </div>

    <script>
        let count = 0;
        const display = document.getElementById('display');
        const incrementBtn = document.getElementById('incrementBtn');

        incrementBtn.addEventListener('click', function() {
            count++;
            display.textContent = count;
        });
    </script>
</body>
</html>
