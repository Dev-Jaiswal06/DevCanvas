const project = {
  id: 20,
  title: "React Counter App",
  description: "Build your first React app with a counter that increments, decrements, and resets using useState hook",
  difficulty: "Beginner",
  category: "react",
  duration: "1 hour",
  order: 19,
  requirements: [
    "Display a number on screen starting at 0",
    "Increment button that adds 1 to the counter",
    "Decrement button that subtracts 1 from the counter (cannot go below 0)",
    "Reset button that sets the counter back to 0",
    "Step size input to change increment/decrement amount",
    "Display a message when counter reaches specific milestones (10, 25, 50, 100)"
  ],
  steps: [
    {
      title: "Create Counter Component",
      description: "Build a functional Counter component using useState to manage the count state",
      code: 'import React, { useState } from "react";\nimport "./Counter.css";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  const [step, setStep] = useState(1);\n\n  const increment = () => setCount((c) => c + step);\n  const decrement = () => setCount((c) => Math.max(0, c - step));\n  const reset = () => setCount(0);\n\n  return (\n    <div className="counter-container">\n      <h1>React Counter</h1>\n      <div className="counter-display">{count}</div>\n      <div className="step-control">\n        <label>Step size:</label>\n        <input type="number" min="1" max="100" value={step} onChange={(e) => setStep(Number(e.target.value))} />\n      </div>\n      <div className="counter-actions">\n        <button onClick={decrement} disabled={count === 0}>-</button>\n        <button onClick={reset}>Reset</button>\n        <button onClick={increment}>+</button>\n      </div>\n      {count >= 100 && <p className="milestone gold">Amazing! You reached 100! 🏆</p>}\n    </div>\n  );\n}'
    },
    {
      title: "Style the Counter",
      description: "Add CSS to style the counter with a modern look, animated number changes, and milestone highlights",
      code: '.counter-container {\n  max-width: 400px;\n  margin: 4rem auto;\n  text-align: center;\n  background: #1a1a2e;\n  padding: 2rem;\n  border-radius: 16px;\n  color: white;\n}\n.counter-display {\n  font-size: 5rem;\n  font-weight: 800;\n  color: #667eea;\n  margin: 1rem 0;\n  transition: transform 0.1s;\n}\n.step-control { margin: 1rem 0; }\n.step-control label { margin-right: 0.5rem; color: #aaa; }\n.step-control input {\n  width: 80px;\n  padding: 0.4rem;\n  border-radius: 8px;\n  border: 1px solid #333;\n  background: #16213e;\n  color: white;\n  text-align: center;\n}\n.counter-actions { display: flex; gap: 1rem; justify-content: center; margin: 1.5rem 0; }\n.counter-actions button {\n  padding: 0.8rem 2rem;\n  border: none;\n  border-radius: 10px;\n  background: #667eea;\n  color: white;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.counter-actions button:hover { background: #764ba2; transform: translateY(-2px); }\n.counter-actions button:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }\n.milestone {\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 8px;\n  animation: fadeIn 0.5s;\n}\n.milestone.gold { background: rgba(255, 215, 0, 0.15); color: #ffd700; }\n@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }'
    },
    {
      title: "Render the App",
      description: "Set up the App component to render the Counter and add a simple layout wrapper",
      code: 'import Counter from "./components/Counter";\nimport "./App.css";\n\nexport default function App() {\n  return (\n    <div className="app">\n      <Counter />\n    </div>\n  );\n}\n\n// App.css\n.app {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);\n}'
    }
  ],
  starterCode: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>React Counter</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>',
    css: '',
    js: 'import React from "react";\nimport { createRoot } from "react-dom/client";\n\nfunction App() {\n  return <h1>Hello React</h1>;\n}\n\ncreateRoot(document.getElementById("root")).render(<App />);'
  },
  completedCode: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>React Counter App</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>',
    css: '* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: "Segoe UI", Tahoma, sans-serif; }',
    js: 'import React, { useState } from "react";\nimport { createRoot } from "react-dom/client";\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  const [step, setStep] = useState(1);\n\n  const increment = () => setCount((c) => c + step);\n  const decrement = () => setCount((c) => Math.max(0, c - step));\n  const reset = () => setCount(0);\n\n  const getMilestone = () => {\n    if (count >= 100) return { msg: "Amazing! You reached 100! 🏆", cls: "gold" };\n    if (count >= 50) return { msg: "Halfway there! 50! 🔥", cls: "silver" };\n    if (count >= 25) return { msg: "Keep going! 25! 💪", cls: "bronze" };\n    if (count >= 10) return { msg: "Nice! You hit 10! ⭐", cls: "blue" };\n    return null;\n  };\n\n  const milestone = getMilestone();\n\n  return (\n    <div style={{\n      minHeight: "100vh",\n      display: "flex",\n      justifyContent: "center",\n      alignItems: "center",\n      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",\n      fontFamily: "\'Segoe UI\', Tahoma, sans-serif",\n      padding: "1rem"\n    }}>\n      <div style={{\n        maxWidth: 400,\n        width: "100%",\n        textAlign: "center",\n        background: "rgba(255,255,255,0.05)",\n        backdropFilter: "blur(20px)",\n        padding: "2.5rem",\n        borderRadius: 24,\n        border: "1px solid rgba(255,255,255,0.1)"\n      }}>\n        <h1 style={{ color: "white", fontSize: "1.8rem", marginBottom: "0.5rem" }}>React Counter</h1>\n        <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>Click buttons to change the count</p>\n        <div style={{\n          fontSize: "5rem",\n          fontWeight: 800,\n          color: "#667eea",\n          margin: "1rem 0",\n          textShadow: "0 0 30px rgba(102,126,234,0.3)"\n        }}>\n          {count}\n        </div>\n        <div style={{ margin: "1rem 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>\n          <label style={{ color: "#aaa", fontSize: "0.9rem" }}>Step:</label>\n          <input\n            type="number"\n            min="1"\n            max="100"\n            value={step}\n            onChange={(e) => setStep(Math.max(1, Number(e.target.value)))}\n            style={{\n              width: 80,\n              padding: "0.4rem",\n              borderRadius: 8,\n              border: "1px solid rgba(255,255,255,0.2)",\n              background: "rgba(255,255,255,0.08)",\n              color: "white",\n              textAlign: "center",\n              fontSize: "1rem",\n              outline: "none"\n            }}\n          />\n        </div>\n        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", margin: "1.5rem 0" }}>\n          <button\n            onClick={decrement}\n            disabled={count === 0}\n            style={{\n              padding: "0.8rem 1.5rem",\n              border: "none",\n              borderRadius: 10,\n              background: count === 0 ? "rgba(255,255,255,0.05)" : "#e74c3c",\n              color: "white",\n              fontSize: "1.2rem",\n              cursor: count === 0 ? "not-allowed" : "pointer",\n              opacity: count === 0 ? 0.4 : 1,\n              transition: "all 0.2s",\n              fontWeight: 600\n            }}\n          >- Decrement</button>\n          <button\n            onClick={reset}\n            style={{\n              padding: "0.8rem 1.5rem",\n              border: "1px solid rgba(255,255,255,0.2)",\n              borderRadius: 10,\n              background: "transparent",\n              color: "white",\n              fontSize: "1rem",\n              cursor: "pointer",\n              transition: "all 0.2s"\n            }}\n          >Reset</button>\n          <button\n            onClick={increment}\n            style={{\n              padding: "0.8rem 1.5rem",\n              border: "none",\n              borderRadius: 10,\n              background: "#667eea",\n              color: "white",\n              fontSize: "1.2rem",\n              cursor: "pointer",\n              transition: "all 0.2s",\n              fontWeight: 600\n            }}\n          >+ Increment</button>\n        </div>\n        {milestone && (\n          <div style={{\n            padding: "0.8rem",\n            borderRadius: 12,\n            background: milestone.cls === "gold" ? "rgba(255,215,0,0.15)" :\n                        milestone.cls === "silver" ? "rgba(192,192,192,0.15)" :\n                        milestone.cls === "bronze" ? "rgba(205,127,50,0.15)" :\n                        "rgba(102,126,234,0.15)",\n            color: milestone.cls === "gold" ? "#ffd700" :\n                   milestone.cls === "silver" ? "#c0c0c0" :\n                   milestone.cls === "bronze" ? "#cd7f32" :\n                   "#667eea",\n            fontWeight: 600,\n            animation: "fadeIn 0.5s",\n            marginTop: "1rem"\n          }}>\n            {milestone.msg}\n          </div>\n        )}\n      </div>\n      <style>{@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }}</style>\n    </div>\n  );\n}\n\ncreateRoot(document.getElementById("root")).render(<App />);'
  },
  screenshots: [],
  demoUrl: "",
  resources: [
    { title: "React useState Hook", url: "https://react.dev/reference/react/useState" },
    { title: "React Conditional Rendering", url: "https://react.dev/learn/conditional-rendering" }
  ],
  xp: 100
};

export default project;
