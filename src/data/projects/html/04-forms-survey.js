const project = {
  id: 4,
  title: "Survey / Feedback Form",
  description: "Build a responsive survey form with various input types, validation, and a modern UI design",
  difficulty: "Beginner",
  category: "html",
  duration: "1.5 hours",
  order: 3,
  requirements: [
    "Form with multiple input types (text, email, number, radio, checkbox, select, textarea)",
    "Labels properly associated with each input field",
    "Form validation using HTML5 attributes (required, min, max, pattern)",
    "Responsive layout that works on mobile and desktop",
    "Progress indicator showing completion status",
    "Confirmation message on successful submission"
  ],
  steps: [
    {
      title: "Create Form Structure",
      description: "Set up the HTML5 form with a clean layout, proper grouping of fields, and a progress bar",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback Survey</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>Customer Feedback Survey</h1>
      <p>Your opinion matters! Please take a moment to share your experience.</p>
    </header>
    <div class="progress-bar">
      <div class="progress" id="progress" style="width: 0%"></div>
    </div>
    <form id="survey-form">
      <span id="step-indicator">Step 1 of 4</span>
    </form>
  </div>
  <script src="script.js"></script>
</body>
</html>`
    },
    {
      title: "Add Personal Information Fields",
      description: "Create input fields for name, email, age with proper labels and validation attributes",
      code: `<fieldset>
  <legend>Personal Information</legend>
  <div class="form-group">
    <label for="name" id="name-label">Full Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your full name" required>
  </div>
  <div class="form-group">
    <label for="email" id="email-label">Email Address</label>
    <input type="email" id="email" name="email" placeholder="you@example.com" required>
  </div>
  <div class="form-group">
    <label for="number" id="number-label">Age</label>
    <input type="number" id="number" name="age" min="10" max="120" placeholder="Your age">
  </div>
</fieldset>`
    },
    {
      title: "Add Rating and Satisfaction Fields",
      description: "Include radio buttons, dropdown select, and checkbox groups for detailed feedback collection",
      code: `<fieldset>
  <legend>Your Experience</legend>
  <div class="form-group">
    <label>How would you rate our service?</label>
    <div class="radio-group">
      <label><input type="radio" name="rating" value="excellent" checked> Excellent</label>
      <label><input type="radio" name="rating" value="good"> Good</label>
      <label><input type="radio" name="rating" value="average"> Average</label>
      <label><input type="radio" name="rating" value="poor"> Poor</label>
    </div>
  </div>
  <div class="form-group">
    <label for="dropdown">How did you hear about us?</label>
    <select id="dropdown" name="referral">
      <option value="">Select an option</option>
      <option value="social-media">Social Media</option>
      <option value="friend">Friend or Family</option>
      <option value="search">Search Engine</option>
      <option value="ad">Advertisement</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div class="form-group">
    <label>What services did you use? (Check all that apply)</label>
    <div class="checkbox-group">
      <label><input type="checkbox" name="services" value="web-dev"> Web Development</label>
      <label><input type="checkbox" name="services" value="design"> UI/UX Design</label>
      <label><input type="checkbox" name="services" value="mobile"> Mobile Apps</label>
      <label><input type="checkbox" name="services" value="consulting"> Consulting</label>
      <label><input type="checkbox" name="services" value="support"> Technical Support</label>
    </div>
  </div>
</fieldset>`
    },
    {
      title: "Add Comments and Submit Button",
      description: "Create a textarea for additional comments and style the submit button with proper form handling",
      code: `<fieldset>
  <legend>Additional Feedback</legend>
  <div class="form-group">
    <label for="comments">Any comments or suggestions?</label>
    <textarea id="comments" name="comments" rows="5" placeholder="Tell us what you think..."></textarea>
  </div>
  <div class="form-group">
    <label for="improvements">What could we improve?</label>
    <textarea id="improvements" name="improvements" rows="3" placeholder="Share your ideas for improvement..."></textarea>
  </div>
</fieldset>
<button type="submit" id="submit">Submit Feedback</button>`
    },
    {
      title: "Add JavaScript for Progress and Validation",
      description: "Implement real-time progress tracking and form submission handling with confirmation message",
      code: `const form = document.getElementById('survey-form');
const progress = document.getElementById('progress');
const stepIndicator = document.getElementById('step-indicator');
const totalFields = document.querySelectorAll('input, select, textarea').length;

form.addEventListener('input', updateProgress);
form.addEventListener('change', updateProgress);

function updateProgress() {
  const filled = Array.from(form.querySelectorAll('input, select, textarea')).filter(el => {
    if (el.type === 'radio') {
      const name = el.name;
      return form.querySelector(\`input[name="\${name}"]:checked\`);
    }
    if (el.type === 'checkbox') {
      const name = el.name;
      return form.querySelector(\`input[name="\${name}"]:checked\`);
    }
    return el.value.trim() !== '';
  }).length;
  const percentage = Math.min((filled / 10) * 100, 100);
  progress.style.width = percentage + '%';
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.innerHTML = '<div class="success-message"><h2>Thank You!</h2><p>Your feedback has been submitted successfully.</p></div>';
  progress.style.width = '100%';
});`
    }
  ],
  starterCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Survey Form</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 id="title">Survey Form</h1>
    <p id="description">Please fill out this survey</p>
    <form id="survey-form">
      <div class="form-group">
        <label id="name-label" for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label id="email-label" for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label id="number-label" for="number">Age</label>
        <input type="number" id="number" min="10" max="120" placeholder="Age">
      </div>
      <div class="form-group">
        <label for="dropdown">How did you hear about us?</label>
        <select id="dropdown">
          <option value="">Select</option>
          <option value="social">Social Media</option>
          <option value="friend">Friend</option>
        </select>
      </div>
      <div class="form-group">
        <p>Would you recommend us?</p>
        <label><input type="radio" name="recommend" value="yes"> Yes</label>
        <label><input type="radio" name="recommend" value="no"> No</label>
      </div>
      <div class="form-group">
        <p>What features do you like?</p>
        <label><input type="checkbox" value="design"> Design</label>
        <label><input type="checkbox" value="usability"> Usability</label>
      </div>
      <div class="form-group">
        <label for="comments">Comments</label>
        <textarea id="comments" placeholder="Add your comments"></textarea>
      </div>
      <button type="submit" id="submit">Submit</button>
    </form>
  </div>
</body>
</html>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  background: white;
  max-width: 700px;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 0.5rem;
}

#description {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label, p {
  display: block;
  margin-bottom: 0.5rem;
  color: #444;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #4a90d9;
  box-shadow: 0 0 5px rgba(74, 144, 217, 0.3);
}

.radio-group label,
.checkbox-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: normal;
}

input[type="radio"],
input[type="checkbox"] {
  margin-right: 0.5rem;
}

#submit {
  width: 100%;
  padding: 1rem;
  background: #4a90d9;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

#submit:hover {
  background: #357abd;
}`,
    js: `document.getElementById('survey-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your submission!');
});`
  },
  completedCode: {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Feedback Survey</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1 id="title">Customer Feedback Survey</h1>
      <p id="description">Your opinion matters! Please take a moment to share your experience with us.</p>
    </header>

    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" id="progress" style="width: 0%;"></div>
      </div>
      <span class="progress-text" id="progress-text">0% Complete</span>
    </div>

    <form id="survey-form">
      <div class="form-section" id="section-1">
        <fieldset>
          <legend>Personal Information</legend>
          <div class="form-group">
            <label id="name-label" for="name">Full Name <span class="required">*</span></label>
            <input type="text" id="name" name="name" class="form-input" placeholder="John Smith" required>
          </div>

          <div class="form-group">
            <label id="email-label" for="email">Email Address <span class="required">*</span></label>
            <input type="email" id="email" name="email" class="form-input" placeholder="john@example.com" required>
          </div>

          <div class="form-group">
            <label id="number-label" for="number">Age <span class="required">*</span></label>
            <input type="number" id="number" name="age" class="form-input" min="10" max="120" placeholder="Your age" required>
          </div>

          <div class="form-group">
            <label for="occupation">Occupation</label>
            <select id="occupation" name="occupation" class="form-input">
              <option value="">Select your occupation</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="freelancer">Freelancer</option>
              <option value="retired">Retired</option>
              <option value="other">Other</option>
            </select>
          </div>
        </fieldset>
      </div>

      <div class="form-section" id="section-2">
        <fieldset>
          <legend>Service Rating</legend>

          <div class="form-group">
            <label>How satisfied are you with our service?</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="satisfaction" value="very-satisfied" checked>
                <span class="radio-custom"></span>
                Very Satisfied
              </label>
              <label class="radio-label">
                <input type="radio" name="satisfaction" value="satisfied">
                <span class="radio-custom"></span>
                Satisfied
              </label>
              <label class="radio-label">
                <input type="radio" name="satisfaction" value="neutral">
                <span class="radio-custom"></span>
                Neutral
              </label>
              <label class="radio-label">
                <input type="radio" name="satisfaction" value="dissatisfied">
                <span class="radio-custom"></span>
                Dissatisfied
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="dropdown">How did you hear about us?</label>
            <select id="dropdown" name="referral" class="form-input">
              <option value="" disabled selected>Select an option</option>
              <option value="social-media">Social Media</option>
              <option value="friend">Friend or Family</option>
              <option value="search-engine">Search Engine</option>
              <option value="advertisement">Advertisement</option>
              <option value="blog">Blog or Article</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label>Which services have you used? (Check all that apply)</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="service" value="web-development">
                Web Development
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="service" value="ui-design">
                UI/UX Design
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="service" value="mobile-apps">
                Mobile Applications
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="service" value="consulting">
                Consulting
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="service" value="technical-support">
                Technical Support
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="form-section" id="section-3">
        <fieldset>
          <legend>Additional Feedback</legend>

          <div class="form-group">
            <label for="comments">Tell us about your experience</label>
            <textarea id="comments" name="comments" class="form-input" rows="5" placeholder="Share your thoughts about our service..."></textarea>
          </div>

          <div class="form-group">
            <label for="improvements">What could we do better?</label>
            <textarea id="improvements" name="improvements" class="form-input" rows="3" placeholder="Suggestions for improvement..."></textarea>
          </div>

          <div class="form-group">
            <label for="feature-request">What features would you like to see?</label>
            <input type="text" id="feature-request" name="feature-request" class="form-input" placeholder="e.g., Mobile app, Chat support">
          </div>
        </fieldset>
      </div>

      <div class="form-navigation">
        <button type="button" id="prev-btn" class="nav-btn" disabled>Previous</button>
        <button type="button" id="next-btn" class="nav-btn">Next</button>
        <button type="submit" id="submit" class="submit-btn">Submit Feedback</button>
      </div>
    </form>
  </div>

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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.container {
  background: white;
  max-width: 750px;
  width: 100%;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

#title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

#description {
  color: #7f8c8d;
  font-size: 1.05rem;
}

.progress-container {
  margin-bottom: 2rem;
}

.progress-bar {
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 0.85rem;
  color: #7f8c8d;
}

.form-section {
  display: block;
}

fieldset {
  border: 2px solid #ecf0f1;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

legend {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  padding: 0 0.5rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group:last-child {
  margin-bottom: 0;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.95rem;
}

.required {
  color: #e74c3c;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  background: #fafafa;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
  background: white;
}

.form-input::placeholder {
  color: #bdc3c7;
}

select.form-input {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.radio-group, .checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.radio-label, .checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 400;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.radio-label:hover, .checkbox-label:hover {
  background: #f0f2ff;
}

.radio-label input[type="radio"],
.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #667eea;
  cursor: pointer;
}

textarea.form-input {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.form-navigation {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.nav-btn, .submit-btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-btn {
  background: #ecf0f1;
  color: #2c3e50;
}

.nav-btn:hover:not(:disabled) {
  background: #dfe6e9;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: none;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.success-message {
  text-align: center;
  padding: 3rem;
  animation: fadeIn 0.5s ease;
}

.success-message .checkmark {
  font-size: 4rem;
  color: #27ae60;
  margin-bottom: 1rem;
}

.success-message h2 {
  color: #27ae60;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
}

.success-message p {
  color: #7f8c8d;
  font-size: 1.1rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  body {
    padding: 1rem;
  }

  .container {
    padding: 1.5rem;
  }

  #title {
    font-size: 1.5rem;
  }

  fieldset {
    padding: 1rem;
  }

  .form-navigation {
    flex-direction: column;
  }

  .nav-btn, .submit-btn {
    width: 100%;
  }
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('survey-form');
  const progress = document.getElementById('progress');
  const progressText = document.getElementById('progress-text');
  const sections = document.querySelectorAll('.form-section');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit');
  const inputs = form.querySelectorAll('input, select, textarea');

  let currentSection = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.style.display = i === index ? 'block' : 'none';
    });
    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === sections.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = index === sections.length - 1 ? 'inline-block' : 'none';
  }

  function updateProgress() {
    let filled = 0;
    let total = 0;
    inputs.forEach(input => {
      if (input.type === 'radio') {
        if (input.checked) filled++;
        total++;
        return;
      }
      if (input.type === 'checkbox') {
        total++;
        return;
      }
      total++;
      if (input.value.trim() !== '') filled++;
    });

    const radioGroups = new Set();
    const checkboxGroups = new Set();
    inputs.forEach(input => {
      if (input.type === 'radio') radioGroups.add(input.name);
      if (input.type === 'checkbox') checkboxGroups.add(input.name);
    });

    let adjustedFilled = filled;
    radioGroups.forEach(group => {
      const checked = form.querySelector(\`input[name="\${group}"]:checked\`);
      if (checked) adjustedFilled++;
    });

    const percentage = Math.min(Math.round((adjustedFilled / Math.max(total, 1)) * 100), 100);
    progress.style.width = percentage + '%';
    progressText.textContent = percentage + '% Complete';
  }

  inputs.forEach(input => {
    input.addEventListener('input', updateProgress);
    input.addEventListener('change', updateProgress);
  });

  nextBtn.addEventListener('click', function() {
    if (currentSection < sections.length - 1) {
      currentSection++;
      showSection(currentSection);
    }
  });

  prevBtn.addEventListener('click', function() {
    if (currentSection > 0) {
      currentSection--;
      showSection(currentSection);
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      if (data[key]) {
        if (!Array.isArray(data[key])) data[key] = [data[key]];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    console.log('Survey Data:', data);
    form.innerHTML = \`
      <div class="success-message">
        <div class="checkmark">&#10004;</div>
        <h2>Thank You!</h2>
        <p>Your feedback has been submitted successfully. We appreciate your time!</p>
      </div>
    \`;
    progress.style.width = '100%';
    progressText.textContent = '100% Complete';
  });

  showSection(0);
});`
  },
  screenshots: [],
  demoUrl: "",
  resources: [
    { title: "MDN Form Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" },
    { title: "MDN Input Types", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" },
    { title: "CSS Form Styling Guide", url: "https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/" }
  ],
  xp: 150
};

export default project;
