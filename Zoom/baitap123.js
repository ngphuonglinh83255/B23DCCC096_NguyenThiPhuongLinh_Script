const express = require('express');
const app = express();

// Route chính để trả về toàn bộ HTML, CSS, và JS
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            
            .calculator {
                width: 200px;
            }
            
            input#display {
                width: 100%;
                height: 40px;
                text-align: right;
                margin-bottom: 10px;
                font-size: 18px;
                padding: 5px;
            }
            
            button {
                width: 45px;
                height: 45px;
                margin: 5px;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div class="calculator">
            <input type="text" id="display" disabled>

            <div>
                <button onclick="clearDisplay()">C</button>
                <button onclick="deleteLast()">Del</button>
                <button onclick="appendToDisplay('/')">/</button>
                <button onclick="appendToDisplay('*')">*</button>
            </div>
            <div>
                <button onclick="appendToDisplay('7')">7</button>
                <button onclick="appendToDisplay('8')">8</button>
                <button onclick="appendToDisplay('9')">9</button>
                <button onclick="appendToDisplay('-')">-</button>
            </div>
            <div>
                <button onclick="appendToDisplay('4')">4</button>
                <button onclick="appendToDisplay('5')">5</button>
                <button onclick="appendToDisplay('6')">6</button>
                <button onclick="appendToDisplay('+')">+</button>
            </div>
            <div>
                <button onclick="appendToDisplay('1')">1</button>
                <button onclick="appendToDisplay('2')">2</button>
                <button onclick="appendToDisplay('3')">3</button>
                <button onclick="calculate()">=</button>
            </div>
            <div>
                <button onclick="appendToDisplay('0')">0</button>
            </div>
        </div>

        <script>
            function clearDisplay() {
                document.getElementById('display').value = '';
            }

            function deleteLast() {
                const display = document.getElementById('display');
                display.value = display.value.slice(0, -1);
            }

            function appendToDisplay(value) {
                document.getElementById('display').value += value;
            }

            function calculate() {
                const display = document.getElementById('display');
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            }
        </script>
    </body>
    </html>
    `);
});

// Khởi động server tại cổng 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
