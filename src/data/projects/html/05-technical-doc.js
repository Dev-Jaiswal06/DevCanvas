const project = {
  id: 5,
  title: "Technical Documentation Page",
  description: "Create a responsive technical documentation page with a sidebar navigation, code snippets, and multiple content sections",
  difficulty: "Intermediate",
  category: "html",
  duration: "2.5 hours",
  order: 4,
  requirements: [
    "Fixed sidebar navigation with links to all sections",
    "Main content area with multiple technical sections",
    "Code blocks with syntax highlighting (CSS styled)",
    "Responsive design that collapses sidebar on mobile",
    "Smooth scroll to sections when clicking nav links",
    "Table of contents for each section"
  ],
  steps: [
    {
      title: "Create Basic Layout Structure",
      description: "Set up the HTML with a fixed nav sidebar and main content area using semantic HTML elements",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Documentation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav id="navbar">
    <header>JS Documentation</header>
    <a class="nav-link" href="#Introduction">Introduction</a>
    <a class="nav-link" href="#Variables">Variables</a>
    <a class="nav-link" href="#Data_Types">Data Types</a>
    <a class="nav-link" href="#Functions">Functions</a>
    <a class="nav-link" href="#Objects">Objects</a>
    <a class="nav-link" href="#Arrays">Arrays</a>
    <a class="nav-link" href="#Loops">Loops</a>
    <a class="nav-link" href="#Conditionals">Conditionals</a>
    <a class="nav-link" href="#ES6_Features">ES6 Features</a>
  </nav>
  <main id="main-doc">
  </main>
</body>
</html>`
    },
    {
      title: "Add Introduction and Variables Sections",
      description: "Create the first content sections with proper headings, paragraphs, and inline code elements",
      code: `<section class="main-section" id="Introduction">
  <header>Introduction</header>
  <article>
    <p>JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based, and multi-paradigm.</p>
    <p>JavaScript enables interactive web pages and is an essential part of web applications. The majority of websites use it, and modern web browsers have a dedicated JavaScript engine to execute it.</p>
    <p>This documentation covers the fundamental concepts of JavaScript programming.</p>
    <h3>What you should already know</h3>
    <ul>
      <li>Basic understanding of HTML and CSS</li>
      <li>Familiarity with programming concepts</li>
      <li>A text editor and web browser</li>
    </ul>
  </article>
</section>
<section class="main-section" id="Variables">
  <header>Variables</header>
  <article>
    <p>Variables are containers for storing data values. In JavaScript, variables can be declared using <code>var</code>, <code>let</code>, or <code>const</code>.</p>
    <div class="code-block">
      <pre><code>let name = "John";
const age = 25;
var isStudent = true;</code></pre>
    </div>
  </article>
</section>`
    },
    {
      title: "Add Data Types and Functions Sections",
      description: "Document JavaScript data types and functions with code examples and detailed explanations",
      code: `<section class="main-section" id="Data_Types">
  <header>Data Types</header>
  <article>
    <p>JavaScript has several built-in data types:</p>
    <ul>
      <li><strong>String</strong> - Textual data (<code>"hello"</code>)</li>
      <li><strong>Number</strong> - Numeric values (<code>42</code>, <code>3.14</code>)</li>
      <li><strong>Boolean</strong> - True/false values</li>
      <li><strong>Null</strong> - Intentional absence of value</li>
      <li><strong>Undefined</strong> - Unassigned value</li>
      <li><strong>Object</strong> - Complex data structures</li>
      <li><strong>Symbol</strong> - Unique identifiers</li>
    </ul>
    <div class="code-block">
      <pre><code>let str = "Hello World";
let num = 42;
let bool = true;
let empty = null;
let notDefined;
let obj = { key: "value" };</code></pre>
    </div>
  </article>
</section>
<section class="main-section" id="Functions">
  <header>Functions</header>
  <article>
    <p>Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.</p>
    <div class="code-block">
      <pre><code>function greet(name) {
  return "Hello, " + name + "!";
}
// Arrow function
const greet = (name) => "Hello, " + name + "!";
console.log(greet("World"));</code></pre>
    </div>
  </article>
</section>`
    },
    {
      title: "Add Objects and Arrays Sections",
      description: "Document JavaScript objects and arrays with practical code examples showing common operations",
      code: `<section class="main-section" id="Objects">
  <header>Objects</header>
  <article>
    <p>Objects are collections of key-value pairs used to store related data and functionality.</p>
    <div class="code-block">
      <pre><code>const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());</code></pre>
    </div>
  </article>
</section>
<section class="main-section" id="Arrays">
  <header>Arrays</header>
  <article>
    <p>Arrays are ordered lists of values. They can hold any type of data and have many built-in methods.</p>
    <div class="code-block">
      <pre><code>const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.forEach(fruit => console.log(fruit));
const filtered = fruits.filter(f => f.startsWith("a"));</code></pre>
    </div>
  </article>
</section>`
    },
    {
      title: "Add Loops, Conditionals, and ES6 Features",
      description: "Complete the documentation with control flow and modern JavaScript features",
      code: `<section class="main-section" id="Loops">
  <header>Loops</header>
  <article>
    <p>Loops allow you to execute code repeatedly. JavaScript provides several loop constructs.</p>
    <div class="code-block">
      <pre><code>// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}</code></pre>
    </div>
  </article>
</section>
<section class="main-section" id="Conditionals">
  <header>Conditionals</header>
  <article>
    <p>Conditional statements perform different actions based on different conditions.</p>
    <div class="code-block">
      <pre><code>const age = 18;
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}</code></pre>
    </div>
  </article>
</section>
<section class="main-section" id="ES6_Features">
  <header>ES6 Features</header>
  <article>
    <p>ES6 introduced many powerful features including arrow functions, template literals, destructuring, and modules.</p>
    <div class="code-block">
      <pre><code>// Template literals
const greet = name => \`Hello, \${name}!\`;
// Destructuring
const { name, age } = person;
const [first, ...rest] = array;
// Spread operator
const newArray = [...oldArray, newItem];</code></pre>
    </div>
  </article>
</section>`
    },
    {
      title: "Add Navigation Toggle for Mobile",
      description: "Implement a hamburger menu toggle for mobile devices with JavaScript",
      code: `const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function() {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});`
    }
  ],
  starterCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Technical Documentation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav id="navbar">
    <header>Documentation</header>
    <a class="nav-link" href="#Getting_Started">Getting Started</a>
    <a class="nav-link" href="#Installation">Installation</a>
    <a class="nav-link" href="#Usage">Usage</a>
    <a class="nav-link" href="#API_Reference">API Reference</a>
    <a class="nav-link" href="#Examples">Examples</a>
  </nav>
  <main id="main-doc">
    <section class="main-section" id="Getting_Started">
      <header>Getting Started</header>
      <p>Introduction content goes here...</p>
    </section>
    <section class="main-section" id="Installation">
      <header>Installation</header>
      <p>Installation instructions go here...</p>
    </section>
    <section class="main-section" id="Usage">
      <header>Usage</header>
      <p>Usage instructions go here...</p>
    </section>
    <section class="main-section" id="API_Reference">
      <header>API Reference</header>
      <p>API details go here...</p>
    </section>
    <section class="main-section" id="Examples">
      <header>Examples</header>
      <p>Examples go here...</p>
    </section>
  </main>
</body>
</html>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  line-height: 1.6;
  color: #333;
}

#navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  border-right: 2px solid #ddd;
  overflow-y: auto;
  background: #f8f9fa;
}

#navbar header {
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
}

.nav-link {
  display: block;
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  transition: background 0.3s;
}

.nav-link:hover {
  background: #e9ecef;
}

#main-doc {
  margin-left: 300px;
  padding: 2rem;
  max-width: 900px;
}

.main-section header {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

code {
  background: #f4f4f4;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  #navbar {
    width: 100%;
    height: auto;
    position: relative;
  }

  #main-doc {
    margin-left: 0;
  }
}`,
    js: ""
  },
  completedCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Technical Documentation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <button id="menu-toggle" aria-label="Toggle Navigation">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav id="navbar">
    <header>JavaScript Documentation</header>
    <div class="nav-links">
      <a class="nav-link" href="#Introduction">Introduction</a>
      <a class="nav-link" href="#Variables">Variables</a>
      <a class="nav-link" href="#Data_Types">Data Types</a>
      <a class="nav-link" href="#Functions">Functions</a>
      <a class="nav-link" href="#Objects">Objects</a>
      <a class="nav-link" href="#Arrays">Arrays</a>
      <a class="nav-link" href="#Loops">Loops</a>
      <a class="nav-link" href="#Conditionals">Conditionals</a>
      <a class="nav-link" href="#ES6_Features">ES6 Features</a>
    </div>
  </nav>

  <main id="main-doc">
    <section class="main-section" id="Introduction">
      <header>Introduction</header>
      <article>
        <p>JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based, and multi-paradigm.</p>
        <p>JavaScript enables interactive web pages and is an essential part of web applications. The majority of websites use it, and modern web browsers have a dedicated JavaScript engine to execute it.</p>
        <p>This documentation covers the fundamental concepts of JavaScript programming for beginners and intermediate developers.</p>
        <h3>Prerequisites</h3>
        <ul>
          <li>Basic understanding of HTML and CSS</li>
          <li>Familiarity with general programming concepts</li>
          <li>A modern web browser (Chrome, Firefox, Edge)</li>
          <li>A text editor or IDE</li>
        </ul>
      </article>
    </section>

    <section class="main-section" id="Variables">
      <header>Variables</header>
      <article>
        <p>Variables are containers for storing data values. In JavaScript, variables can be declared using three keywords: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
        <h3>var</h3>
        <p>The <code>var</code> keyword declares a function-scoped or globally-scoped variable, optionally initializing it to a value.</p>
        <div class="code-block">
          <div class="code-header">Example</div>
          <pre><code>var name = "John";
var age = 25;
console.log(name); // Output: John</code></pre>
        </div>
        <h3>let</h3>
        <p>The <code>let</code> keyword declares a block-scoped local variable, optionally initializing it to a value.</p>
        <div class="code-block">
          <pre><code>let count = 0;
if (true) {
  let count = 5;
  console.log(count); // 5
}
console.log(count); // 0</code></pre>
        </div>
        <h3>const</h3>
        <p>The <code>const</code> keyword declares a block-scoped constant. The value cannot be reassigned.</p>
        <div class="code-block">
          <pre><code>const PI = 3.14159;
const COLORS = ["red", "green", "blue"];
COLORS.push("yellow"); // Allowed - mutating array is ok</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="Data_Types">
      <header>Data Types</header>
      <article>
        <p>JavaScript has seven primitive data types and one complex data type:</p>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>String</td><td>Textual data</td><td><code>"hello"</code></td></tr>
              <tr><td>Number</td><td>Integer or floating point</td><td><code>42, 3.14</code></td></tr>
              <tr><td>Boolean</td><td>Logical true/false</td><td><code>true, false</code></td></tr>
              <tr><td>Null</td><td>Intentional absence of value</td><td><code>null</code></td></tr>
              <tr><td>Undefined</td><td>Variable not assigned</td><td><code>undefined</code></td></tr>
              <tr><td>Symbol</td><td>Unique identifier</td><td><code>Symbol("id")</code></td></tr>
              <tr><td>BigInt</td><td>Large integers</td><td><code>9007199254740991n</code></td></tr>
              <tr><td>Object</td><td>Key-value collections</td><td><code>{name: "John"}</code></td></tr>
            </tbody>
          </table>
        </div>
        <div class="code-block">
          <div class="code-header">Type Checking</div>
          <pre><code>typeof "hello";   // "string"
typeof 42;        // "number"
typeof true;      // "boolean"
typeof null;      // "object" (historical bug)
typeof undefined; // "undefined"</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="Functions">
      <header>Functions</header>
      <article>
        <p>Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.</p>
        <h3>Function Declaration</h3>
        <div class="code-block">
          <pre><code>function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("World")); // "Hello, World!"</code></pre>
        </div>
        <h3>Function Expression</h3>
        <div class="code-block">
          <pre><code>const square = function(x) {
  return x * x;
};
console.log(square(5)); // 25</code></pre>
        </div>
        <h3>Arrow Functions (ES6)</h3>
        <div class="code-block">
          <pre><code>const add = (a, b) => a + b;
const double = x => x * 2;
const sayHello = () => console.log("Hello!");

console.log(add(3, 4)); // 7</code></pre>
        </div>
        <h3>Default Parameters</h3>
        <div class="code-block">
          <pre><code>function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5));    // 5
console.log(multiply(5, 2)); // 10</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="Objects">
      <header>Objects</header>
      <article>
        <p>Objects are collections of key-value pairs used to store related data and functionality.</p>
        <h3>Creating Objects</h3>
        <div class="code-block">
          <pre><code>// Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName()); // "John Doe"

// Accessing properties
console.log(person.firstName);  // "John"
console.log(person["age"]);     // 30

// Adding properties
person.email = "john@example.com";</code></pre>
        </div>
        <h3>Object Methods</h3>
        <div class="code-block">
          <pre><code>const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);
console.log(keys); // ["firstName", "lastName", "age", ...]</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="Arrays">
      <header>Arrays</header>
      <article>
        <p>Arrays are ordered lists of values. They can hold any type of data and have many built-in methods.</p>
        <div class="code-block">
          <div class="code-header">Array Methods</div>
          <pre><code>const fruits = ["apple", "banana", "orange"];

// Add/Remove elements
fruits.push("grape");        // Add to end
fruits.pop();                // Remove from end
fruits.unshift("mango");     // Add to start
fruits.shift();              // Remove from start

// Find elements
const index = fruits.indexOf("banana");
const hasApple = fruits.includes("apple");

// Transform
const upper = fruits.map(f => f.toUpperCase());
const filtered = fruits.filter(f => f.length > 5);

console.log(fruits);  // ["apple", "banana", "orange"]</code></pre>
        </div>
        <h3>Array Destructuring</h3>
        <div class="code-block">
          <pre><code>const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="Loops">
      <header>Loops</header>
      <article>
        <p>Loops allow you to execute code repeatedly. JavaScript provides several loop constructs.</p>
        <h3>For Loop</h3>
        <div class="code-block">
          <pre><code>for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4</code></pre>
        </div>
        <h3>While Loop</h3>
        <div class="code-block">
          <pre><code>let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}
// Output: 0, 1, 2</code></pre>
        </div>
        <h3>For...of Loop</h3>
        <div class="code-block">
          <pre><code>const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
// Output: red, green, blue</code></pre>
        </div>
        <h3>For...in Loop</h3>
        <div class="code-block">
          <pre><code>const user = { name: "John", age: 30 };
for (const key in user) {
  console.log(key + ": " + user[key]);
}
// Output: name: John, age: 30</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="Conditionals">
      <header>Conditionals</header>
      <article>
        <p>Conditional statements perform different actions based on different conditions.</p>
        <h3>if/else if/else</h3>
        <div class="code-block">
          <pre><code>const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Grade:", grade); // "B"</code></pre>
        </div>
        <h3>Switch Statement</h3>
        <div class="code-block">
          <pre><code>const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  default:
    console.log("Midweek");
}</code></pre>
        </div>
        <h3>Ternary Operator</h3>
        <div class="code-block">
          <pre><code>const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"</code></pre>
        </div>
      </article>
    </section>

    <section class="main-section" id="ES6_Features">
      <header>ES6 Features</header>
      <article>
        <p>ES6 (ECMAScript 2015) introduced many powerful features that modernize JavaScript.</p>

        <h3>Template Literals</h3>
        <div class="code-block">
          <pre><code>const name = "World";
const greeting = \`Hello, \${name}! Welcome to ES6.\`;
console.log(greeting);</code></pre>
        </div>

        <h3>Destructuring</h3>
        <div class="code-block">
          <pre><code>// Object destructuring
const user = { name: "John", age: 30, city: "NYC" };
const { name, age, ...rest } = user;

// Array destructuring
const [a, b, ...remaining] = [1, 2, 3, 4, 5];</code></pre>
        </div>

        <h3>Spread Operator</h3>
        <div class="code-block">
          <pre><code>const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // {a:1, b:2, c:3}</code></pre>
        </div>

        <h3>Promises & Async/Await</h3>
        <div class="code-block">
          <pre><code>// Promise
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
        </div>
      </article>
    </section>

    <footer class="doc-footer">
      <p>Documentation created for educational purposes. All content references the MDN Web Docs.</p>
      <p>Last updated: 2026</p>
    </footer>
  </main>

  <script src="script.js"></script>
</body>
</html>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  color: #2c3e50;
  display: flex;
}

#navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  border-right: 2px solid #e9ecef;
  overflow-y: auto;
  background: #f8f9fa;
  z-index: 100;
  transition: transform 0.3s ease;
}

#navbar header {
  font-size: 1.4rem;
  padding: 1.2rem 1rem;
  border-bottom: 2px solid #dee2e6;
  font-weight: 700;
  color: #1a1a2e;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.nav-links {
  padding: 0.5rem 0;
}

.nav-link {
  display: block;
  padding: 0.8rem 1.2rem;
  text-decoration: none;
  color: #495057;
  border-left: 3px solid transparent;
  transition: all 0.3s;
  font-size: 0.95rem;
}

.nav-link:hover {
  background: #e9ecef;
  border-left-color: #667eea;
  color: #1a1a2e;
}

#main-doc {
  margin-left: 300px;
  padding: 3rem 4rem;
  max-width: 900px;
  flex: 1;
}

.main-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e9ecef;
}

.main-section:last-of-type {
  border-bottom: none;
}

.main-section header {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1a1a2e;
  font-weight: 700;
}

.main-section h3 {
  font-size: 1.2rem;
  margin: 1.5rem 0 0.8rem;
  color: #2c3e50;
}

.main-section p {
  margin-bottom: 1rem;
  color: #555;
}

.main-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.main-section li {
  margin-bottom: 0.5rem;
}

.main-section code {
  background: #f1f3f5;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
  color: #e74c3c;
}

.code-block {
  background: #1e1e2e;
  border-radius: 8px;
  margin: 1rem 0;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.code-header {
  background: #2d2d44;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: #a0a0c0;
  border-bottom: 1px solid #3d3d54;
  font-weight: 500;
}

.code-block pre {
  padding: 1.2rem;
  overflow-x: auto;
}

.code-block code {
  background: none;
  padding: 0;
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.6;
}

.table-wrapper {
  overflow-x: auto;
  margin: 1rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

table th, table td {
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  text-align: left;
}

table th {
  background: #f8f9fa;
  font-weight: 600;
}

table tr:nth-child(even) {
  background: #f8f9fa;
}

.doc-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
  text-align: center;
  color: #adb5bd;
  font-size: 0.9rem;
}

#menu-toggle {
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 200;
  background: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  gap: 4px;
}

#menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}

#menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

#menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

#menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  body {
    flex-direction: column;
  }

  #navbar {
    transform: translateX(-100%);
    width: 280px;
  }

  #navbar.active {
    transform: translateX(0);
  }

  #main-doc {
    margin-left: 0;
    padding: 1.5rem;
  }

  #menu-toggle {
    display: flex;
  }

  .main-section header {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  #main-doc {
    padding: 1rem;
  }

  .code-block pre {
    padding: 0.8rem;
    font-size: 0.8rem;
  }
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
    this.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('.main-section').forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('pre code').forEach(block => {
    block.textContent = block.textContent.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });
});`
  },
  screenshots: [],
  demoUrl: "",
  resources: [
    { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { title: "FreeCodeCamp Technical Documentation Project", url: "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page" },
    { title: "CSS Code Block Styling", url: "https://css-tricks.com/styling-code-in-css/" }
  ],
  xp: 200
};

export default project;
