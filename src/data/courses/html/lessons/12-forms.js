const lesson = {
  id: 12, slug: "forms", title: "HTML Forms",
  description: "Forms user se data lene ka sabse important tarika. Hinglish mein seekhein.",
  difficulty: "Intermediate", duration: "25 Minutes", heroImage: "",
  tags: ["HTML", "Forms", "Intermediate"],
  theory: [
    "HTML forms user se data collect karne ka primary tarika hai.",
    "<form> tag se form create hota hai. action attribute mein data bhejne ka URL aur method mein GET/POST define karte hain.",
    "<input> tag multiple types mein aata hai — text, email, password, number, date, file, radio, checkbox, etc.",
    "<textarea> multi-line text input ke liye, <select> dropdown menu ke liye use hota hai.",
    "<label> tag accessibility improve karta hai jab for attribute se input se connect ho.",
    "required, placeholder, min, max, pattern jaise validation attributes built-in hain."
  ],
  examples: [{
    title: "Login Form",
    description: "Ek simple login form jisme email aur password field hai.",
    code: "<form>\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" required><br>\n  <label for=\"password\">Password:</label>\n  <input type=\"password\" id=\"password\" required><br>\n  <button type=\"submit\">Login</button>\n</form>",
    result: "[Form with Email, Password inputs and Login button]"
  }],
  syntax: [
    "<form action=\"/submit\" method=\"POST\">",
    "  <label for=\"name\">Name:</label>",
    "  <input type=\"text\" id=\"name\" name=\"name\" required>",
    "  <button type=\"submit\">Submit</button>",
    "</form>"
  ],
  diagram: [
    "<form> → Form container",
    "  <label> → Input label (accessibility)",
    "  <input> → Input field (text, email, etc.)",
    "  <textarea> → Multi-line text",
    "  <select> → Dropdown options",
    "  <button> → Submit/Reset"
  ],
  code: [{
    title: "Complete Contact Form",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<body>\n  <form action=\"/submit\" method=\"POST\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" required><br>\n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" required><br>\n    <label for=\"message\">Message:</label>\n    <textarea id=\"message\" rows=\"4\"></textarea><br>\n    <button type=\"submit\">Send</button>\n  </form>\n</body>\n</html>"
  }],
  output: ["[Form with Name, Email, textarea inputs and Send button]"],
  commonMistakes: [
    "Label ko input se for attribute se na connect karna",
    "Form validation miss karna — required attribute bhool jana",
    "GET method mein sensitive data bhejna (URL mein dikh jata hai)",
    "Submit button ke type=\"submit\" bhool jana"
  ],
  bestPractices: [
    "Input ke saath hamesha <label> tag use karo accessibility ke liye",
    "Sensitive data ke liye POST method use karo",
    "Client-side validation ke liye required aur pattern attributes use karo",
    "Form submit ke baad user ko success/error message dikhao"
  ],
  tips: [
    "autofocus attribute se page load pe cursor input pe laga sakte hain",
    "datalist element se input ke saath suggestions de sakte hain",
    "Fieldset aur legend se related fields ko group kar sakte hain"
  ],
  practice: [
    "Ek signup form banao jisme name, email, password, confirm password ho",
    "Ek feedback form banao jisme rating (radio buttons) aur comment (textarea) ho",
    "Ek dropdown banakar usme 5 Indian cities add karo"
  ],
  exercise: {
    instruction: "Ek registration form banao jisme name, email, password, gender (radio), hobbies (checkbox), city (dropdown) aur submit button ho.",
    hint: "<fieldset> mein <legend> use karo sections ko group karne ke liye.",
    starterCode: "<form>\n  <fieldset>\n    <legend>Personal Info</legend>\n    <label>Name: <input type=\"text\" required></label><br>\n  </fieldset>\n</form>"
  },
  quiz: [
    { question: "Form mein email input ke liye kaunsa type use hota hai?", options: ["text", "email", "mail", "address"], answer: 1, explanation: "type=\"email\" email format validate karta hai." },
    { question: "GET aur POST mein kya antar hai?", options: ["GET secure hai, POST nahi", "POST secure hai, GET data URL mein dikhta hai", "Dono same hain", "GET form data encode nahi karta"], answer: 1, explanation: "GET mein data URL mein dikhta hai, POST mein request body mein jaata hai." }
  ],
  interview: [
    { question: "Form validation HTML mein kaise hoti hai?", answer: "HTML5 mein built-in validation hoti hai. required, minlength, maxlength, min, max, pattern jaise attributes se client-side validation hoti hai." },
    { question: "GET aur POST method mein kya antar hai?", answer: "GET — data URL mein append hota hai, limited data, bookmarkable. POST — data body mein jaata hai, unlimited, sensitive data ke liye safe." }
  ],
  assignment: {
    title: "Form Building Assignment",
    description: "Ek multi-section form banayein with validation.",
    tasks: ["Registration form with personal, address, payment sections", "Har section ke liye fieldset use karo", "Built-in validation apply karo", "Form ko CSS se style karo", "Success page pe redirect simulate karo"],
    submission: "Code ko GitHub pe push karein aur link submit karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - Forms Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" },
    { title: "W3Schools - Forms", url: "https://www.w3schools.com/html/html_forms.asp" },
    { title: "Form Validation", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" }
  ],
  summary: [
    "HTML forms user input collect karne ke liye use hote hain.",
    "<form>, <input>, <textarea>, <select>, <button> important elements hain.",
    "Label accessibility ke liye zaroori hai.",
    "Client-side validation ke liye required, pattern jaise attributes hain."
  ]
};

export default lesson;
