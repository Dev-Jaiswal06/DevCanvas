export default {
  name: "Todo App",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo App</title>
</head>
<body>
  <div class="container">
    <h1>Todo App</h1>
    <div class="input-group">
      <input id="todoInput" type="text" placeholder="Add a new task...">
      <button onclick="addTodo()">Add</button>
    </div>
    <ul id="todoList"></ul>
  </div>
</body>
</html>`,
  css: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui; background: #f0f0f0; display: flex; justify-content: center; padding-top: 4rem; }
.container { background: white; padding: 2rem; border-radius: 12px; width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
h1 { margin-bottom: 1rem; }
.input-group { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
input { flex: 1; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; }
button { padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer; }
ul { list-style: none; }
li { display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid #eee; }
li button { background: #e74c3c; padding: 0.25rem 0.5rem; font-size: 0.8rem; }`,
  javascript: `function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.innerHTML = text + ' <button onclick="this.parentElement.remove()">X</button>';
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}`
};
