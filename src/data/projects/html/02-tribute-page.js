const project = {
  id: 2,
  title: "Tribute Page",
  description: "Create a tribute page honoring a person you admire, featuring their biography, achievements, and legacy",
  difficulty: "Beginner",
  category: "html",
  duration: "1.5 hours",
  order: 2,
  requirements: [
    "Hero section with image and quote",
    "Timeline of key life events",
    "Biography section with paragraphs",
    "Achievements list with notable accomplishments",
    "Gallery section with image gallery",
    "Footer with tribute message and external links"
  ],
  steps: [
    {
      title: "Create HTML Boilerplate",
      description: "Set up the basic HTML5 structure with semantic elements and external stylesheet link",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tribute Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="main">
    <h1 id="title">Dr. Norman Borlaug</h1>
    <p>The man who saved a billion lives</p>
    <div id="img-div">
      <img id="image" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg" alt="Dr. Norman Borlaug">
      <div id="img-caption">Dr. Norman Borlaug, third from left, trains biologists in Mexico on how to increase wheat yields</div>
    </div>
    <section id="tribute-info">
      <h3>Here's a time line of Dr. Borlaug's life:</h3>
      <ul>
      </ul>
    </section>
    <a id="tribute-link" href="https://en.wikipedia.org/wiki/Norman_Borlaug" target="_blank">Learn more</a>
  </main>
</body>
</html>`
    },
    {
      title: "Add Timeline Section",
      description: "Create an unordered list timeline with key dates and events from the person's life",
      code: `<section id="tribute-info">
  <h3>Here's a time line of Dr. Borlaug's life:</h3>
  <ul>
    <li><strong>1914</strong> - Born in Cresco, Iowa</li>
    <li><strong>1933</strong> - Leaves his family's farm to attend the University of Minnesota</li>
    <li><strong>1935</strong> - Has to stop school and save up more money. Works in the Civilian Conservation Corps</li>
    <li><strong>1937</strong> - Finishes university and takes a job in the US Forestry Service</li>
    <li><strong>1938</strong> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts</li>
    <li><strong>1941</strong> - Tries to enroll in the military after the Pearl Harbor attack</li>
    <li><strong>1942</strong> - Receives a Ph.D. in Genetics and Plant Pathology</li>
    <li><strong>1944</strong> - Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico</li>
    <li><strong>1945</strong> - Develops a disease-resistant, high-yield wheat breed</li>
    <li><strong>1970</strong> - Receives the Nobel Peace Prize</li>
    <li><strong>1983</strong> - Helps seven African countries dramatically increase their maize and sorghum yields</li>
    <li><strong>2009</strong> - Dies at the age of 95</li>
  </ul>
</section>`
    },
    {
      title: "Build Biography Section",
      description: "Add detailed paragraphs describing the person's background, contributions, and lasting impact on the world",
      code: `<section id="biography">
  <h2>Biography</h2>
  <div class="bio-content">
    <p>Norman Ernest Borlaug was an American agronomist who led initiatives worldwide that contributed to the extensive increases in agricultural production termed the Green Revolution. Borlaug was awarded multiple honors for his work, including the Nobel Peace Prize, the Presidential Medal of Freedom, and the Congressional Gold Medal.</p>
    <p>Borlaug received his Ph.D. in plant pathology and genetics from the University of Minnesota in 1942. From 1944 to 1960, he worked as a microbiologist at the Cooperative Wheat Research and Production Program in Mexico, where he developed semi-dwarf, high-yield, disease-resistant wheat varieties.</p>
    <p>During the mid-20th century, Borlaug's work helped transform agriculture in Mexico, Pakistan, India, and other developing nations. The introduction of these high-yield crops, combined with improved agricultural techniques, is credited with saving over a billion people from starvation.</p>
  </div>
</section>`
    },
    {
      title: "Add Achievements and Gallery",
      description: "Create an achievements list and a simple image gallery with captions showcasing key moments",
      code: `<section id="achievements">
  <h2>Notable Achievements</h2>
  <div class="achievements-list">
    <div class="achievement-card">
      <div class="achievement-icon">&#127942;</div>
      <h3>Nobel Peace Prize</h3>
      <p>Awarded in 1970 for contributions to the world food supply</p>
    </div>
    <div class="achievement-card">
      <div class="achievement-icon">&#127891;</div>
      <h3>Presidential Medal of Freedom</h3>
      <p>Received the highest civilian honor in the United States</p>
    </div>
    <div class="achievement-card">
      <div class="achievement-icon">&#127758;</div>
      <h3>Green Revolution</h3>
      <p>Pioneered agricultural techniques that saved over a billion lives</p>
    </div>
  </div>
</section>
<section id="gallery">
  <h2>Gallery</h2>
  <div class="gallery-grid">
    <figure>
      <img src="https://via.placeholder.com/300x200" alt="Dr. Borlaug in the field">
      <figcaption>Dr. Borlaug examining wheat crops in Mexico</figcaption>
    </figure>
    <figure>
      <img src="https://via.placeholder.com/300x200" alt="Nobel Prize ceremony">
      <figcaption>Receiving the Nobel Peace Prize in 1970</figcaption>
    </figure>
    <figure>
      <img src="https://via.placeholder.com/300x200" alt="Borlaug with farmers">
      <figcaption>Training farmers in new agricultural techniques</figcaption>
    </figure>
  </div>
</section>`
    },
    {
      title: "Add Footer and Styling",
      description: "Complete the page with a footer containing a tribute message and links to learn more, plus comprehensive CSS styling",
      code: `<footer>
  <div class="footer-content">
    <blockquote>
      "The first essential component for social justice is adequate food for all mankind."
      <cite>- Norman Borlaug</cite>
    </blockquote>
    <p>If you have time, you should read more about this incredible human being on his <a id="tribute-link" href="https://en.wikipedia.org/wiki/Norman_Borlaug" target="_blank">Wikipedia entry</a>.</p>
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
  <title>Tribute Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="main">
    <div id="title">
      <h1>Person's Name</h1>
      <p class="subtitle">A brief description of who they are</p>
    </div>

    <figure id="img-div">
      <img id="image" src="https://via.placeholder.com/800x400" alt="Person's photo">
      <figcaption id="img-caption">Caption describing the image above</figcaption>
    </figure>

    <section id="tribute-info">
      <h2>Timeline</h2>
      <ul>
        <li><strong>Year</strong> - Event description</li>
      </ul>
    </section>

    <section id="biography">
      <h2>Biography</h2>
      <p>Write biography text here...</p>
    </section>

    <footer>
      <p>Learn more on <a id="tribute-link" href="#" target="_blank">Wikipedia</a></p>
    </footer>
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
  line-height: 1.6;
  color: #333;
  background: #f0f0f0;
}

#main {
  max-width: 900px;
  margin: 2rem auto;
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

#title {
  text-align: center;
  margin-bottom: 2rem;
}

#title h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

#img-div {
  text-align: center;
  margin-bottom: 2rem;
}

#image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

#img-caption {
  margin-top: 0.5rem;
  color: #666;
  font-style: italic;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  border-left: 3px solid #3498db;
}

footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}`,
    js: ""
  },
  completedCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dr. Norman Borlaug - Tribute Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main id="main">
    <div id="title">
      <h1>Dr. Norman Borlaug</h1>
      <p class="subtitle">The man who saved a billion lives</p>
    </div>

    <figure id="img-div">
      <img id="image" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg" alt="Dr. Norman Borlaug standing in a wheat field">
      <figcaption id="img-caption">
        Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.
      </figcaption>
    </figure>

    <section id="tribute-info">
      <h2>Timeline of Dr. Borlaug's Life</h2>
      <ul>
        <li><span class="year">1914</span> - Born in Cresco, Iowa</li>
        <li><span class="year">1933</span> - Leaves his family's farm to attend the University of Minnesota, thanks to a Depression-era program known as the "National Youth Administration"</li>
        <li><span class="year">1935</span> - Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans</li>
        <li><span class="year">1937</span> - Finishes university and takes a job in the US Forestry Service</li>
        <li><span class="year">1938</span> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school to study under Stakman</li>
        <li><span class="year">1941</span> - Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria, disinfectants, and other applied science</li>
        <li><span class="year">1942</span> - Receives a Ph.D. in Genetics and Plant Pathology</li>
        <li><span class="year">1944</span> - Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program</li>
        <li><span class="year">1945</span> - Discovers a way to grow wheat twice each season, doubling wheat yields</li>
        <li><span class="year">1953</span> - Crosses a short, sturdy dwarf breed of wheat with a high-yielding American breed, creating a strain that yields 70% more wheat</li>
        <li><span class="year">1963</span> - Mexico becomes a net exporter of wheat for the first time in history</li>
        <li><span class="year">1970</span> - Receives the Nobel Peace Prize for his contributions to the world food supply</li>
        <li><span class="year">1983</span> - Helps seven African countries dramatically increase their maize and sorghum yields</li>
        <li><span class="year">2009</span> - Dies at the age of 95, leaving behind a legacy that continues to save lives</li>
      </ul>
    </section>

    <section id="biography">
      <h2>Biography</h2>
      <div class="bio-content">
        <p>Norman Ernest Borlaug was an American agronomist who led initiatives worldwide that contributed to the extensive increases in agricultural production termed the Green Revolution. Borlaug was awarded multiple honors for his work, including the Nobel Peace Prize, the Presidential Medal of Freedom, and the Congressional Gold Medal.</p>
        <p>Borlaug received his Ph.D. in plant pathology and genetics from the University of Minnesota in 1942. From 1944 to 1960, he worked as a microbiologist at the Cooperative Wheat Research and Production Program in Mexico, where he developed semi-dwarf, high-yield, disease-resistant wheat varieties.</p>
        <p>During the mid-20th century, Borlaug's work helped transform agriculture in Mexico, Pakistan, India, and other developing nations. The introduction of these high-yield crops, combined with improved agricultural techniques, is credited with saving over a billion people from starvation.</p>
        <p>Borlaug was often called "the father of the Green Revolution," and is credited with saving more lives than any other person who has ever lived. His work serves as a testament to the power of science and determination in solving humanity's greatest challenges.</p>
      </div>
    </section>

    <section id="achievements">
      <h2>Notable Achievements</h2>
      <div class="achievements-grid">
        <div class="achievement-card">
          <div class="icon">&#127942;</div>
          <h3>Nobel Peace Prize</h3>
          <p>Awarded in 1970 for his contributions to the world food supply</p>
        </div>
        <div class="achievement-card">
          <div class="icon">&#127891;</div>
          <h3>Presidential Medal of Freedom</h3>
          <p>Received the highest civilian honor in the United States in 1977</p>
        </div>
        <div class="achievement-card">
          <div class="icon">&#127758;</div>
          <h3>Congressional Gold Medal</h3>
          <p>Awarded by the U.S. Congress in 2006 for his lifetime of service</p>
        </div>
      </div>
    </section>

    <blockquote class="tribute-quote">
      <p>"The first essential component for social justice is adequate food for all mankind."</p>
      <cite>- Dr. Norman Borlaug</cite>
    </blockquote>

    <footer>
      <p>Learn more about this incredible human being on</p>
      <a id="tribute-link" href="https://en.wikipedia.org/wiki/Norman_Borlaug" target="_blank">Wikipedia Entry</a>
    </footer>
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
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
}

#main {
  max-width: 950px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

#title {
  text-align: center;
  margin-bottom: 2rem;
}

#title h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  font-style: italic;
}

#img-div {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2.5rem;
  text-align: center;
}

#image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

#img-caption {
  margin-top: 1rem;
  color: #7f8c8d;
  font-style: italic;
  font-size: 0.95rem;
}

h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3498db;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #e74c3c;
}

#tribute-info ul {
  list-style: none;
  padding: 0;
}

#tribute-info li {
  margin-bottom: 1rem;
  padding: 0.8rem 1rem 0.8rem 2rem;
  border-left: 4px solid #3498db;
  background: #f8f9fa;
  border-radius: 0 8px 8px 0;
  transition: all 0.3s;
}

#tribute-info li:hover {
  border-left-color: #e74c3c;
  transform: translateX(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.year {
  font-weight: 700;
  color: #3498db;
}

#biography {
  margin-top: 2.5rem;
}

.bio-content p {
  margin-bottom: 1rem;
  font-size: 1.05rem;
  color: #555;
}

#achievements {
  margin-top: 2.5rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.achievement-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
  border: 1px solid #eee;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.achievement-card h3 {
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.achievement-card p {
  color: #7f8c8d;
  font-size: 0.95rem;
}

.tribute-quote {
  margin: 2.5rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  text-align: center;
}

.tribute-quote p {
  font-size: 1.3rem;
  font-style: italic;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.tribute-quote cite {
  font-size: 1rem;
  opacity: 0.9;
}

footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #eee;
}

footer p {
  margin-bottom: 0.5rem;
  color: #7f8c8d;
}

#tribute-link {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;
}

#tribute-link:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

@media (max-width: 768px) {
  body {
    padding: 1rem;
  }

  #main {
    padding: 1.5rem;
  }

  #title h1 {
    font-size: 2rem;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .tribute-quote p {
    font-size: 1.1rem;
  }
}`,
    js: ""
  },
  screenshots: [],
  demoUrl: "",
  resources: [
    { title: "FreeCodeCamp Tribute Page Challenge", url: "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page" },
    { title: "MDN HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
    { title: "CSS Gradient Generator", url: "https://cssgradient.io/" }
  ],
  xp: 100
};

export default project;
