export default {
  name: "Calculator",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>
<body>
  <div class="calc">
    <input id="display" type="text" readonly>
    <div class="buttons">
      <button onclick="clearDisplay()">C</button>
      <button onclick="append('/')">/</button>
      <button onclick="append('*')">*</button>
      <button onclick="append('-')">-</button>
      <button onclick="append('7')">7</button>
      <button onclick="append('8')">8</button>
      <button onclick="append('9')">9</button>
      <button onclick="append('+')">+</button>
      <button onclick="append('4')">4</button>
      <button onclick="append('5')">5</button>
      <button onclick="append('6')">6</button>
      <button onclick="calculate()">=</button>
      <button onclick="append('1')">1</button>
      <button onclick="append('2')">2</button>
      <button onclick="append('3')">3</button>
      <button onclick="append('0')">0</button>
    </div>
  </div>
</body>
</html>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui; display: flex; justify-content: center; padding-top: 4rem; background: #f0f0f0; }
.calc { background: white; padding: 1rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
#display { width: 100%; padding: 1rem; font-size: 1.5rem; text-align: right; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem; }
.buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
button { padding: 1rem; font-size: 1.2rem; border: none; border-radius: 4px; background: #f4f4f4; cursor: pointer; }
button:active { background: #ddd; }`,
  javascript: `function append(val) {
  document.getElementById('display').value += val;
}
function clearDisplay() {
  document.getElementById('display').value = '';
}
function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}`
};
