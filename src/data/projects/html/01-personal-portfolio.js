const project = {
  id: 1,
  title: "Personal Portfolio Page",
  description: "Build a personal portfolio website to showcase your skills and projects",
  difficulty: "Beginner",
  category: "html",
  duration: "2 hours",
  order: 1,
  requirements: [
    "Header with navigation links (Home, About, Projects, Contact)",
    "Hero section with your name and tagline",
    "About section with bio and profile image",
    "Projects section with project cards",
    "Contact section with a contact form",
    "Footer with social media links"
  ],
  steps: [
    {
      title: "Setup HTML Structure",
      description: "Create basic HTML5 boilerplate with proper semantic tags including nav, main, section, and footer",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">John Doe</div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="hero"></section>
    <section id="about"></section>
    <section id="projects"></section>
    <section id="contact"></section>
  </main>
  <footer></footer>
</body>
</html>`
    },
    {
      title: "Build the Hero Section",
      description: "Add a hero section with your name, a tagline, and a call-to-action button",
      code: `<section id="hero">
  <div class="hero-content">
    <h1>Hi, I'm <span class="highlight">John Doe</span></h1>
    <p class="tagline">Full-Stack Developer | UI/UX Designer | Creative Thinker</p>
    <p class="sub-text">I build beautiful, responsive web applications that solve real problems.</p>
    <a href="#projects" class="btn">View My Work</a>
  </div>
</section>`
    },
    {
      title: "Create the About Section",
      description: "Add an about section with a profile image and a short bio describing your background and skills",
      code: `<section id="about">
  <h2>About Me</h2>
  <div class="about-content">
    <div class="about-image">
      <img src="https://via.placeholder.com/300x300" alt="Profile Picture">
    </div>
    <div class="about-text">
      <p>I'm a passionate web developer with 3 years of experience building modern web applications. I specialize in HTML, CSS, JavaScript, and React.</p>
      <p>When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing technical blog posts.</p>
      <div class="skills">
        <span class="skill-tag">HTML5</span>
        <span class="skill-tag">CSS3</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">React</span>
        <span class="skill-tag">Node.js</span>
      </div>
    </div>
  </div>
</section>`
    },
    {
      title: "Add Projects Section",
      description: "Create project cards with images, titles, descriptions, and links to live demos or GitHub repos",
      code: `<section id="projects">
  <h2>My Projects</h2>
  <div class="project-grid">
    <div class="project-card">
      <img src="https://via.placeholder.com/400x250" alt="Project 1">
      <h3>E-Commerce App</h3>
      <p>A full-stack e-commerce platform built with React and Node.js</p>
      <div class="project-links">
        <a href="#" class="btn-small">Live Demo</a>
        <a href="#" class="btn-small btn-secondary">GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <img src="https://via.placeholder.com/400x250" alt="Project 2">
      <h3>Weather Dashboard</h3>
      <p>Real-time weather dashboard using OpenWeather API</p>
      <div class="project-links">
        <a href="#" class="btn-small">Live Demo</a>
        <a href="#" class="btn-small btn-secondary">GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <img src="https://via.placeholder.com/400x250" alt="Project 3">
      <h3>Task Manager</h3>
      <p>A Kanban-style task management app with drag and drop</p>
      <div class="project-links">
        <a href="#" class="btn-small">Live Demo</a>
        <a href="#" class="btn-small btn-secondary">GitHub</a>
      </div>
    </div>
  </div>
</section>`
    },
    {
      title: "Build Contact Form and Footer",
      description: "Add a contact form with name, email, message fields and a footer with copyright and social links",
      code: `<section id="contact">
  <h2>Get In Touch</h2>
  <form class="contact-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn">Send Message</button>
  </form>
</section>
<footer>
  <div class="footer-content">
    <p>&copy; 2026 John Doe. All Rights Reserved.</p>
    <div class="social-links">
      <a href="#" aria-label="GitHub">GitHub</a>
      <a href="#" aria-label="LinkedIn">LinkedIn</a>
      <a href="#" aria-label="Twitter">Twitter</a>
    </div>
  </div>
</footer>`
    }
  ],
  starterCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">Your Name</div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="hero">
      <div class="hero-content">
        <h1>Hi, I'm <span class="highlight">Your Name</span></h1>
        <p class="tagline">Web Developer | Designer | Creator</p>
        <a href="#projects" class="btn">View My Work</a>
      </div>
    </section>
    <section id="about">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-image">
          <img src="https://via.placeholder.com/300x300" alt="Profile Picture">
        </div>
        <div class="about-text">
          <p>Write your bio here. Describe your background, skills, and what you're passionate about.</p>
        </div>
      </div>
    </section>
    <section id="projects">
      <h2>My Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <img src="https://via.placeholder.com/400x250" alt="Project">
          <h3>Project Title</h3>
          <p>Project description goes here</p>
        </div>
      </div>
    </section>
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 Your Name</p>
  </footer>
</body>
</html>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007bff;
}

section {
  padding: 5rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.highlight {
  color: #007bff;
}

.tagline {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.btn:hover {
  background: #0056b3;
}

#about {
  background: #f8f9fa;
}

.about-content {
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;
}

.about-image img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-card h3 {
  padding: 1rem;
}

.project-card p {
  padding: 0 1rem 1rem;
  color: #666;
}

.contact-form {
  max-width: 600px;
  margin: 2rem auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 2rem;
}

.social-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-links a {
  color: white;
  text-decoration: none;
}`,
    js: ""
  },
  completedCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe | Portfolio</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">John Doe</div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>

  <section id="hero">
    <div class="hero-content">
      <h1>Hi, I'm <span class="highlight">John Doe</span></h1>
      <p class="tagline">Full-Stack Developer | UI/UX Designer | Creative Thinker</p>
      <p class="sub-text">I build beautiful, responsive web applications that solve real problems.</p>
      <a href="#projects" class="btn">View My Work</a>
      <a href="#contact" class="btn btn-secondary">Contact Me</a>
    </div>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <div class="about-content">
      <div class="about-image">
        <img src="https://via.placeholder.com/300x300" alt="John Doe Profile Picture">
      </div>
      <div class="about-text">
        <p>I'm a passionate web developer with 3+ years of experience crafting modern, responsive web applications. I specialize in the MERN stack and love turning complex problems into simple, beautiful designs.</p>
        <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or writing technical articles on my blog.</p>
        <div class="skills">
          <span class="skill-tag">HTML5</span>
          <span class="skill-tag">CSS3</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">Python</span>
        </div>
      </div>
    </div>
  </section>

  <section id="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <img src="https://via.placeholder.com/400x250/007bff/ffffff" alt="E-Commerce App">
        <div class="card-content">
          <h3>E-Commerce Platform</h3>
          <p>A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.</p>
          <div class="project-links">
            <a href="#" class="btn-small">Live Demo</a>
            <a href="#" class="btn-small btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
      <div class="project-card">
        <img src="https://via.placeholder.com/400x250/28a745/ffffff" alt="Weather Dashboard">
        <div class="card-content">
          <h3>Weather Dashboard</h3>
          <p>Real-time weather dashboard that displays current conditions, 7-day forecasts, and interactive charts using the OpenWeather API.</p>
          <div class="project-links">
            <a href="#" class="btn-small">Live Demo</a>
            <a href="#" class="btn-small btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
      <div class="project-card">
        <img src="https://via.placeholder.com/400x250/ffc107/000000" alt="Task Manager">
        <div class="card-content">
          <h3>Task Manager Pro</h3>
          <p>A Kanban-style project management tool with drag-and-drop functionality, team collaboration, and real-time updates via WebSockets.</p>
          <div class="project-links">
            <a href="#" class="btn-small">Live Demo</a>
            <a href="#" class="btn-small btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Get In Touch</h2>
    <p class="contact-intro">Have a project in mind? Let's work together!</p>
    <form class="contact-form" id="contactForm">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="John Smith" required>
      </div>
      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Project Inquiry">
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
      </div>
      <button type="submit" class="btn">Send Message</button>
    </form>
  </section>

  <footer>
    <div class="footer-content">
      <p>&copy; 2026 John Doe. All Rights Reserved.</p>
      <div class="social-links">
        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i> GitHub</a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i> LinkedIn</a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i> Twitter</a>
        <a href="#" aria-label="Email"><i class="fas fa-envelope"></i> Email</a>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

header {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #007bff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #007bff;
  transition: width 0.3s;
}

.nav-links a:hover {
  color: #007bff;
}

.nav-links a:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

section {
  padding: 6rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  max-width: 100%;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;
}

.highlight {
  color: #ffd700;
}

.tagline {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s both;
}

.sub-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.8;
  animation: fadeInUp 1s ease 0.4s both;
}

.hero-content .btn {
  margin: 0.5rem;
  animation: fadeInUp 1s ease 0.6s both;
}

.btn {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #333;
}

#about {
  background: #f8f9fa;
  max-width: 100%;
}

#about h2, #projects h2, #contact h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
}

#about h2::after, #projects h2::after, #contact h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #007bff;
}

.about-content {
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.about-image img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 4px solid #007bff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-text p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #555;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.skill-tag {
  background: #007bff;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  background: white;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.card-content p {
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.7;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn-small {
  padding: 0.5rem 1.2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-small:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
}

.btn-secondary:hover {
  background: #545b62;
}

#contact {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  max-width: 100%;
}

.contact-intro {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  opacity: 0.9;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #ffd700;
}

#contact .btn {
  background: #ffd700;
  color: #333;
  width: 100%;
}

#contact .btn:hover {
  background: #ffed4a;
}

footer {
  background: #1a1a2e;
  color: white;
  text-align: center;
  padding: 3rem 5%;
}

.footer-content p {
  margin-bottom: 1rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-links a {
  color: white;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-image img {
    width: 200px;
    height: 200px;
  }

  .skills {
    justify-content: center;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
    gap: 1rem;
  }
}`,
    js: `document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  console.log('Form submitted:', data);
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
`
  },
  screenshots: [],
  demoUrl: "",
  resources: [
    { title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    { title: "CSS Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
  ],
  xp: 150
};

export default project;
