const lesson = {
  id: 22,
  slug: "pseudo-classes",
  title: "CSS Pseudo-classes",
  description: "Learn pseudo-classes for dynamic element styling",
  difficulty: "Intermediate",
  duration: "35 min",
  heroImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
  tags: ["CSS", "Pseudo-classes", "Selectors"],
  theory: [
    "Pseudo-classes CSS ki special keywords hain jo element ki khaasi state ya position ko target karte hain — yeh colon (:) se shuru hoti hain",
    ":hover tab apply hota hai jab user mouse element ke upar le jaata hai — buttons, links, cards sab mein use hota hai",
    ":focus tab apply hota hai jab element ko select kiya jaata hai jaise input field pe click karna ya Tab key se navigate karna",
    ":active tab apply hota hai jab element pe click kiya ja raha ho (mouse button pressed ho) — isse button press effect milta hai",
    ":link aur :visited links ki states hain — :link unvisited link ko style karta hai, :visited already clicked links ko",
    ":first-child selector us element ko target karta hai jo apne parent ka first child ho, :last-child last child ke liye",
    ":nth-child(n) powerful selector hai jo kisi bhi position ke child ko target kar sakta hai — 2n even children ke liye, 3n har teesre ke liye, odd/even bhi use kar sakte hain",
    ":nth-of-type() selector same type ke elements mein position check karta hai, jaise p:nth-of-type(2) doosre paragraph ke liye",
    ":not(selector) negation pseudo-class hai jo specified selector se match nahi hote unhe target karti hai",
    ":empty un elements ko select karta hai jinme koi content nahi hai (na text, na child elements)",
    ":checked input[type='checkbox'] aur input[type='radio'] ki checked state ko style karta hai",
    ":disabled aur :enabled form elements ki disabled/enabled state target karte hain — disabled inputs gray dikhaye ja sakte hain",
    ":target current URL ke hash fragment se match karne wale element ko style karta hai — single page navigation mein useful",
    ":root document ke root element ko target karta hai (HTML mein <html>), CSS variables define karne ke liye best place hai",
    ":is() aur :where() modern grouping pseudo-classes hain jo multiple selectors ko group karti hain — :where() ki specificity zero hoti hai"
  ],
  examples: [
    { title: "Hover Effect on Button", description: "Button ka color change karna hover karne pe", code: "button:hover {\n  background-color: #e74c3c;\n  transform: scale(1.1);\n}", result: "Button hover karne par red ho jayega aur thoda bada ho jayega" },
    { title: "Alternate Row Colors", description: "Table ki alternate rows ka color change", code: "tr:nth-child(even) {\n  background-color: #f2f2f2;\n}", result: "Table ki even rows light gray background ke saath highlight hongi" },
    { title: "Form Input States", description: "Focus aur disabled states ke saath form styling", code: "input:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 5px #3498db;\n}\ninput:disabled {\n  background-color: #eee;\n  cursor: not-allowed;\n}", result: "Focus pe input ko blue border milega, disabled input gray ho jayega" }
  ],
  syntax: [
    "selector:pseudo-class { property: value; }",
    "a:hover { color: red; }",
    "li:nth-child(odd) { background: #eee; }"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────┐",
    "│                   CSS PSEUDO-CLASSES                        │",
    "│                                                             │",
    "│  ┌──────────┐                                               │",
    "│  │ :hover   │ → Jab mouse hover kare                       │",
    "│  │ :focus   │ → Jab element focus mein ho                  │",
    "│  │ :active  │ → Jab element click ho raha ho              │",
    "│  │ :link    │ → Unvisited link                            │",
    "│  │ :visited │ → Visited link                              │",
    "│  │ :first-child → Parent ka first child                   │",
    "│  │ :last-child  → Parent ka last child                    │",
    "│  │ :nth-child(n) → Kisi bhi position ka child             │",
    "│  │ :not(x)   │ → X ko chhodkar sab                        │",
    "│  │ :checked  │ → Checked input                            │",
    "│  └──────────┘                                               │",
    "└─────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Interactive Button with Multiple States", language: "css", code: ".btn {\n  background-color: #3498db;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.btn:hover {\n  background-color: #2980b9;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n}\n\n.btn:active {\n  transform: translateY(0);\n  box-shadow: none;\n}\n\n.btn:focus {\n  outline: 3px solid #85c1e9;\n}" },
    { title: "Zebra Striped Table with nth-child", language: "css", code: "table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n\nth {\n  background-color: #2c3e50;\n  color: white;\n}\n\ntr:nth-child(even) {\n  background-color: #f8f9fa;\n}\n\ntr:hover {\n  background-color: #e8f4f8;\n}\n\ntr:first-child td {\n  font-weight: bold;\n}" },
    { title: "Form Styling with Pseudo-classes", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    input[type='text']:focus {\n      border: 2px solid #27ae60;\n      background-color: #f0fff0;\n      outline: none;\n    }\n    input:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n    input[type='checkbox']:checked + label {\n      color: #27ae60;\n      font-weight: bold;\n    }\n    .error:not(:empty) {\n      color: red;\n      padding: 8px;\n      border: 1px solid red;\n      border-radius: 4px;\n    }\n  </style>\n</head>\n<body>\n  <form>\n    <input type=\"text\" placeholder=\"Name\">\n    <input type=\"text\" placeholder=\"Email\">\n    <input type=\"text\" placeholder=\"Disabled\" disabled>\n    <input type=\"checkbox\" id=\"agree\">\n    <label for=\"agree\">I agree</label>\n    <div class=\"error\">This field is required</div>\n  </form>\n</body>\n</html>" }
  ],
  output: [
    "Buttons hover karne par 3D lift effect ke saath color change karenge",
    "Table ki even rows ko alag background color milega, hover pe highlight hoga",
    "Focus pe input fields green border aur light green background dikhayenge"
  ],
  commonMistakes: [
    "Colon ki jagah double colon (::) use karna pseudo-classes ke saath — pseudo-classes single colon (:) se likhi jaati hain, double colon pseudo-elements ke liye hai",
    ":hover ko mobile touch devices pe test nahi karna — mobile pe hover ka concept nahi hai, isliye mobile-friendly alternatives sochna",
    ":nth-child aur :nth-of-type mein confuse hona — :nth-child parent ke saare children count karta hai, :nth-of-type sirf same type ke elements",
    "Specificity ka dhyan nahi rakhna — pseudo-classes ki kuch combination high specificity create karti hain jo override karna mushkil ho jata hai",
    ":not() andar multiple selectors comma se separate nahi kar sakte (old browsers mein) — modern CSS mein :is() ka use karein"
  ],
  bestPractices: [
    "Order maintain karo CSS rules mein — LVHA order yaad rakho: :link, :visited, :hover, :active (LoVe HAte)",
    "Accessibility ke liye :focus state mat hatana outline hata kar — custom focus styles zaroor do taaki keyboard users ko pata chale",
    ":nth-child mein formulas use karo jaise 2n+1, 3n+2 — yeh complex patterns banane mein help karte hain",
    ":is() aur :where() ka use karo long selector lists avoid karne ke liye, code clean rahega",
    ":root mein CSS variables define karo global styling ke liye — isse maintainability badhti hai"
  ],
  tips: [
    ":nth-child(an+b) ka formula yaad rakhna — a = cycle size, b = starting point, jaise 3n+1 = first, fourth, seventh...",
    ":not() ko chaining kar sakte hain — div:not(.active):not(.disabled) dono classes ko exclude karega",
    ":empty ka use empty states ko hide/show karne mein karo jaise empty cart message ya notification badges"
  ],
  practice: [
    "Ek interactive card banaye jisme hover, active, aur focus states ho — card hover pe lift kare, active pe press ho",
    "Ek navigation menu banaye jisme links ki saari states (link, visited, hover, active) styled ho"
  ],
  exercise: {
    instruction: "Create a registration form with styled input states using pseudo-classes - focus, disabled, checked, and hover states should be implemented",
    hint: "Use :focus for input borders, :disabled for grayed out fields, :checked for checkbox labels, and :hover for buttons",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #f0f2f5;\n    }\n    .form-group { margin-bottom: 20px; }\n    label { display: block; margin-bottom: 5px; color: #333; font-weight: 500; }\n    input[type='text'],\n    input[type='email'],\n    input[type='password'] {\n      width: 100%;\n      padding: 10px 12px;\n      border: 2px solid #ddd;\n      border-radius: 6px;\n      font-size: 14px;\n      transition: all 0.3s ease;\n    }\n    /* Add focus styles here */\n    /* Add disabled styles here */\n    button {\n      background: #3498db;\n      color: white;\n      padding: 12px 24px;\n      border: none;\n      border-radius: 6px;\n      font-size: 16px;\n      cursor: pointer;\n      width: 100%;\n      transition: all 0.3s ease;\n    }\n    /* Add hover and active styles here */\n    .checkbox-group input:checked + label {\n      color: #27ae60;\n      font-weight: bold;\n    }\n  </style>\n</head>\n<body>\n  <form style=\"background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 400px;\">\n    <h2 style=\"margin-bottom: 30px; color: #2c3e50;\">Create Account</h2>\n    <div class=\"form-group\">\n      <label for=\"name\">Full Name</label>\n      <input type=\"text\" id=\"name\" placeholder=\"Enter your name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" placeholder=\"Enter your email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pass\">Password</label>\n      <input type=\"password\" id=\"pass\" placeholder=\"Create a password\">\n    </div>\n    <div class=\"form-group checkbox-group\">\n      <input type=\"checkbox\" id=\"terms\">\n      <label for=\"terms\" style=\"display: inline;\">I agree to Terms & Conditions</label>\n    </div>\n    <input type=\"text\" placeholder=\"Referral code (disabled)\" disabled style=\"width: 100%; padding: 10px; border-radius: 6px; font-size: 14px; margin-bottom: 20px;\">\n    <button type=\"submit\">Register</button>\n  </form>\n</body>\n</html>"
  },
  quiz: [
    { question: "Pseudo-class CSS mein kaise likhi jaati hai?", options: ["Single colon se (:)", "Double colon se (::)", "Dot se (.)", "Hash se (#)"], answer: 0 },
    { question: ":nth-child(odd) kya select karega?", options: ["Sirf first child", "Odd position wale elements", "Even position wale elements", "Last child"], answer: 1 },
    { question: "Kya CSS pseudo-class :empty select karti hai?", options: ["Elements with zero width", "Jin elements mein koi content nahi hai", "Empty class wale elements", "Hidden elements"], answer: 1 },
    { question: ":focus pseudo-class kab apply hoti hai?", options: ["Jab mouse hover kare", "Jab element click ho raha ho", "Jab element select ho (click ya tab se)", "Jab element visible ho"], answer: 2 },
    { question: "Links ke liye sahi pseudo-class order kya hai (LVHA)?", options: [":link, :visited, :hover, :active", ":hover, :link, :active, :visited", ":active, :hover, :link, :visited", ":link, :hover, :visited, :active"], answer: 0 }
  ],
  interview: [
    { question: "CSS pseudo-classes kya hoti hain aur yeh kyun useful hain?", answer: "Pseudo-classes keywords hain jo colon (:) se shuru hoti hain aur element ki khaasi state (jaise hover, focus) ya position (jaise first-child) ko target karti hain. Yeh dynamic styling ke liye useful hain kyunki yeh user interaction aur document structure ke hisaab se style karne deti hain." },
    { question: ":nth-child aur :nth-of-type mein kya antar hai?", answer: ":nth-child parent ke saare children mein position check karta hai chahe wo kisi bhi type ke hon, jabki :nth-of-type sirf same type ke elements count karta hai. Jaise div p:nth-child(2) tabhi kaam karega jab doosra child <p> ho, jabki p:nth-of-type(2) har type mein doosre <p> ko target karega." },
    { question: ":is() aur :where() mein kya difference hai?", answer: "Dono grouping pseudo-classes hain jo multiple selectors ko ek saath group karti hain. Fark yeh hai ki :is() apne arguments ki highest specificity leta hai, jabki :where() ki specificity hamesha zero hoti hai. Isliye :where() use karna safe hai agar baad mein override karna ho." }
  ],
  assignment: [
    "Ek product card grid banaye jisme hover pe card lift ho, shadow increase ho, aur ek overlay button appear kare",
    "Ek custom checkbox aur radio button design karein using :checked pseudo-class ke saath",
    "Ek navigation menu banaye jisme current page ko :target pseudo-class se highlight kiya jaaye"
  ],
  resources: [
    { title: "MDN Pseudo-classes Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" },
    { title: "CSS-Tricks nth-child Tester", url: "https://css-tricks.com/examples/nth-child-tester/" },
    { title: "Complete Guide to CSS Pseudo-classes", url: "https://www.w3schools.com/css/css_pseudo_classes.asp" }
  ],
  summary: "CSS pseudo-classes elements ki states aur positions ko target karne ka powerful tareeka hai. Yeh colon (:) se likhi jaati hain jaise :hover, :focus, :nth-child. :hover user interaction pe element style karta hai, :focus form elements ki focus state handle karta hai, :nth-child complex positioning patterns jaise even/odd rows banane mein help karta hai. :not() negation ke liye, :checked form states ke liye, aur :root CSS variables ke liye use hota hai. Modern pseudo-classes jaise :is() aur :where() grouping aur specificity management mein sahayak hain. Inki madad se aap dynamic aur interactive CSS bana sakte hain bina JavaScript ke."
};

export default lesson;
