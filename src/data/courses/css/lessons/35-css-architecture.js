const lesson = {
  id: 35,
  slug: "css-architecture",
  title: "CSS Architecture & Best Practices",
  description: "Write scalable, maintainable CSS with industry-standard methodologies",
  difficulty: "Advanced",
  duration: "50 min",
  heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  tags: ["CSS", "Architecture", "BEM", "Best Practices", "Performance"],
  theory: [
    "CSS architecture ka matlab hai CSS ko is tarah organize aur structure karna ki wo scalable, maintainable, aur predictable ho",
    "BEM (Block Element Modifier) ek popular naming convention hai jo CSS classes ko teen parts mein divide karta hai",
    "Block ek independent component hai (header, button, card), Element block ka part hai (card__title, button__icon), Modifier variation hai (button--primary, card--featured)",
    "BEM naming: .block {} .block__element {} .block--modifier {} - double underscore element ke liye, double dash modifier ke liye",
    "BEM ka fayda: specificity hamesha low rehti hai, naming conflicts nahi hote, code readable rehta hai",
    "SMACSS (Scalable and Modular Architecture for CSS) CSS ko 5 categories mein divide karta hai: Base, Layout, Module, State, Theme",
    "OOCSS (Object Oriented CSS) do main principles pe kaam karta hai: structure ko skin se separate karo, container ko content se separate karo",
    "CSS specificity calculator: inline styles > IDs > Classes/attributes/pseudo-classes > Elements/pseudo-elements",
    "Specificity issues avoid karne ke liye hamesha low specificity selectors use karo (classes), IDs aur !important se bacho",
    "CSS file organization: base/ (reset, typography), components/ (buttons, cards), layouts/ (header, footer), pages/ (home, about), utils/ (helpers, variables)",
    "CSS performance optimization: minification, unused CSS removal, critical CSS inline in head, efficient selectors",
    "Critical CSS wo styles hain jo above-the-fold content ke liye zaroori hain - inhe head mein inline karo, baaki async load karo",
    "CSS Reset (Eric Meyer, Josh Comeau) browser default styles hata deta hai, Normalize.css consistent defaults set karta hai",
    "Maintainable CSS ke liye: DRY principle follow karo, CSS variables use karo, comments do, consistent formatting rakho",
    "CSS preprocessors (SCSS, Less) mein nesting, mixins, functions jaise features hain jo organized code likhne mein help karte hain"
  ],
  examples: [
    { title: "BEM Naming Convention", description: "Block Element Modifier structure", code: ".card {} .card__image {} .card__title {} .card__button {} .card__button--primary {}", result: "Card component ka structure clear hai - block, elements, aur modifiers alag alag" },
    { title: "Low vs High Specificity", description: "Avoiding specificity wars", code: ".btn { color: blue; } .btn--danger { color: red; } /* Low specificity */ #submit-btn { color: green; } /* High specificity - avoid */", result: "Classes use karne se specificity low rehti hai, IDs se specificity wars hote hain" },
    { title: "CSS Custom Properties for Theming", description: "Centralized design tokens", code: ":root { --color-primary: #3498db; --spacing-md: 16px; }", result: "Ek jagah change karo, poore project mein reflect hota hai" }
  ],
  syntax: [
    "BEM: .block__element--modifier { property: value; }",
    "Specificity: .class < .class.class < #id < inline < !important",
    "@import vs link: <link rel=stylesheet href=styles.css> (avoid @import for performance)"
  ],
  diagram: [
    "+------------------------------------------------------------------+",
    "|                    CSS SPECIFICITY CALCULATOR                     |",
    "|                                                                  |",
    "|  Selector                    | Specificity | Rank                 |",
    "|  ----------------------------|-------------|--------------------- |",
    "|  * { }                       | 0,0,0,0    | Lowest               |",
    "|  h1 { }                      | 0,0,0,1    | Element              |",
    "|  .card { }                   | 0,0,1,0    | Class                |",
    "|  .card .title { }            | 0,0,2,0    | 2 Classes            |",
    "|  .card[data-active] { }      | 0,0,2,0    | Class + Attribute    |",
    "|  #header { }                 | 0,1,0,0    | ID                   |",
    "|  style=color:red             | 1,0,0,0    | Inline               |",
    "|  color: red !important       | override   | Never use            |",
    "|                                                                  |",
    "|  +--------------------------------------------+                 |",
    "|  | Keep specificity LOW and FLAT throughout!  |                 |",
    "|  | Use classes, avoid IDs and !important     |                 |",
    "|  +--------------------------------------------+                 |",
    "+------------------------------------------------------------------+"
  ],
  code: [
    { title: "BEM Component Example", language: "css", code: "/* Block: Independent component */\n.card {\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n/* Element: Part of block (double underscore) */\n.card__image {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n}\n\n.card__content {\n  padding: 1.5rem;\n}\n\n.card__title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n\n.card__description {\n  color: #666;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n\n/* Modifier: Variation of block (double dash) */\n.card--featured {\n  border: 2px solid #4361ee;\n}\n\n.card--compact .card__content {\n  padding: 0.75rem;\n}\n\n.card--compact .card__title {\n  font-size: 1rem;\n}\n\n/* Modifier on element */\n.card__button {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  background: #4361ee;\n  color: white;\n}\n\n.card__button--secondary {\n  background: transparent;\n  border: 1px solid #4361ee;\n  color: #4361ee;\n}" },
    { title: "File Organization Structure", language: "css", code: "/* Recommended folder structure */\n/*\nstyles/\n  base/\n    _reset.css        - CSS reset/normalize\n    _typography.css   - Font faces, type scale\n    _variables.css    - Design tokens (CSS vars)\n  components/\n    _buttons.css      - Button component\n    _cards.css        - Card component\n    _forms.css        - Form elements\n    _navigation.css   - Nav component\n  layouts/\n    _header.css       - Site header\n    _footer.css       - Site footer\n    _grid.css         - Layout grid system\n  pages/\n    _home.css         - Homepage specific styles\n    _about.css        - About page styles\n  utils/\n    _helpers.css      - Utility classes\n    _animations.css   - Keyframes\n  main.css            - @import all partials\n*/\n\n/* Example: main.css */\n@import 'base/variables.css';\n@import 'base/reset.css';\n@import 'base/typography.css';\n@import 'layouts/grid.css';\n@import 'components/buttons.css';\n@import 'components/cards.css';\n@import 'pages/home.css';\n@import 'utils/helpers.css';" },
    { title: "Performance Optimized CSS", language: "css", code: "/* 1. Efficient selectors - avoid deep nesting */\n/* Bad */\nheader nav ul li a { color: blue; }\n/* Good */\n.nav-link { color: blue; }\n\n/* 2. Avoid universal selectors in large lists */\n/* Bad */\n.sidebar * { margin: 0; }\n/* Good */\n.sidebar { }\n.sidebar > div { margin: 0; }\n\n/* 3. Use shorthand properties */\n/* Bad */\n.box {\n  margin-top: 10px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n}\n/* Good */\n.box { margin: 10px 20px; }\n\n/* 4. contain property for performance */\n.widget {\n  contain: layout style paint;\n}\n\n/* 5. will-change for animations */\n.animated-element {\n  will-change: transform, opacity;\n}\n\n/* 6. content-visibility for lazy rendering */\n.off-screen-section {\n  content-visibility: auto;\n  contain-intrinsic-size: 500px;\n}\n\n/* 7. Use currentColor */\n.icon {\n  color: inherit;\n  fill: currentColor;\n}\n\n/* 8. Critical CSS - inline in head */\n/* Above-the-fold styles only */\nheader, .hero { /* critical styles */ }\n\n/* Non-critical loaded async */\n<link rel=preload href=styles.css as=style onload=\"this.onload=null;this.rel=stylesheet\">" }
  ],
  output: [
    "BEM: Consistent naming convention that scales to large projects with hundreds of components",
    "File organization: Separate concerns into base, components, layouts, pages folders",
    "CSS performance: Efficient selectors + critical CSS + content-visibility for fast load times"
  ],
  commonMistakes: [
    "Speciality ko ignore karna aur !important har jagah use karna - !important specificity wars ka starting point hai, isse hamesha avoid karo",
    "ID selectors (#) ka zyada use karna - IDs ki specificity bahut high hoti hai, classes use karo",
    "BEM mein nesting bahut deep karna - .block__element1__element2 galat hai, BEM flat rehta hai",
    "Ek hi CSS file mein saara code daal dena - thousands of lines ki file maintain karna mushkil ho jata hai",
    "CSS ko mobile ke liye optimize na karna - mobile-first approach aur performance optimization dono zaroori hain"
  ],
  bestPractices: [
    "BEM ya kisi aur naming convention ko consistently follow karo poore project mein",
    "Specificity ko low aur flat rakho - hamesha classes use karo, IDs avoid karo",
    "CSS ko logical folders mein organize karo: base, components, layouts, pages",
    "CSS variables ka use karo design tokens ke liye - colors, spacing, fonts centrally defined",
    "Performance ke liye critical CSS inline karo, non-critical async load karo, unused CSS remove karo"
  ],
  tips: [
    "CSS specificity calculator tool use karo - specificity.keegan.st pe check kar sakte hain",
    "SCSS/SASS use karte ho to nesting ko 3 levels se zyada mat karo",
    "CSS stats tool (cssstats.com) se apne CSS ka analysis kar sakte ho - size, specificity, etc."
  ],
  practice: [
    "Apne kisi existing project mein BEM naming convention apply karein",
    "CSS file ko logical folders mein reorganize karein with proper imports"
  ],
  exercise: {
    instruction: "Create a styled navigation component using BEM methodology. The nav should have a logo, links, and a mobile hamburger toggle. Use proper BEM naming (.nav, .nav__logo, .nav__list, .nav__link, .nav__toggle, .nav--open modifier). Organize styles with low specificity. Include a responsive breakpoint.",
    hint: "Block = .nav, Elements = .nav__logo, .nav__list, .nav__item, .nav__link, .nav__toggle. Modifier = .nav--open for mobile menu. Keep all selectors as single classes. Mobile-first approach use karo.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* BEM: .nav (block) */\n    .nav {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 1rem 2rem;\n      background: #1a1a2e;\n      color: white;\n      font-family: Arial, sans-serif;\n      position: relative;\n    }\n\n    .nav__logo {\n      font-size: 1.5rem;\n      font-weight: 700;\n      color: #4cc9f0;\n      text-decoration: none;\n    }\n\n    .nav__list {\n      display: none;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      gap: 1.5rem;\n    }\n\n    .nav--open .nav__list {\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      right: 0;\n      background: #1a1a2e;\n      padding: 1rem 2rem;\n    }\n\n    .nav__link {\n      color: white;\n      text-decoration: none;\n      padding: 0.5rem 0;\n      transition: color 0.3s;\n    }\n\n    .nav__link:hover {\n      color: #4cc9f0;\n    }\n\n    .nav__link--active {\n      color: #4cc9f0;\n      font-weight: 600;\n    }\n\n    .nav__toggle {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n      cursor: pointer;\n      background: none;\n      border: none;\n      padding: 5px;\n    }\n\n    .nav__toggle-line {\n      display: block;\n      width: 25px;\n      height: 3px;\n      background: white;\n      border-radius: 2px;\n      transition: transform 0.3s;\n    }\n\n    .nav--open .nav__toggle-line:nth-child(1) {\n      transform: rotate(45deg) translate(5px, 6px);\n    }\n\n    .nav--open .nav__toggle-line:nth-child(2) {\n      opacity: 0;\n    }\n\n    .nav--open .nav__toggle-line:nth-child(3) {\n      transform: rotate(-45deg) translate(5px, -6px);\n    }\n\n    @media (min-width: 768px) {\n      .nav__list {\n        display: flex;\n        flex-direction: row;\n        position: static;\n        padding: 0;\n        background: transparent;\n      }\n\n      .nav__toggle {\n        display: none;\n      }\n\n      .nav--open .nav__list {\n        flex-direction: row;\n        position: static;\n        padding: 0;\n        background: transparent;\n      }\n    }\n  </style>\n</head>\n<body>\n  <nav class=\"nav\" id=\"navbar\">\n    <a href=\"#\" class=\"nav__logo\">Brand</a>\n    <ul class=\"nav__list\">\n      <li class=\"nav__item\"><a href=\"#\" class=\"nav__link nav__link--active\">Home</a></li>\n      <li class=\"nav__item\"><a href=\"#\" class=\"nav__link\">About</a></li>\n      <li class=\"nav__item\"><a href=\"#\" class=\"nav__link\">Services</a></li>\n      <li class=\"nav__item\"><a href=\"#\" class=\"nav__link\">Contact</a></li>\n    </ul>\n    <button class=\"nav__toggle\" id=\"navToggle\" aria-label=\"Toggle menu\">\n      <span class=\"nav__toggle-line\"></span>\n      <span class=\"nav__toggle-line\"></span>\n      <span class=\"nav__toggle-line\"></span>\n    </button>\n  </nav>\n\n  <div style=\"padding: 2rem; font-family: Arial; color: #333; max-width: 600px;\">\n    <h1>BEM Navigation Demo</h1>\n    <p>Yeh navigation BEM methodology follow karta hai. Block = .nav, Elements = .nav__logo, .nav__list, .nav__item, .nav__link, .nav__toggle, .nav__toggle-line. Modifier = .nav--open. Mobile pe hamburger menu, desktop pe horizontal navbar.</p>\n  </div>\n\n  <script>\n    const toggle = document.getElementById('navToggle');\n    const nav = document.getElementById('navbar');\n    toggle.addEventListener('click', () => {\n      nav.classList.toggle('nav--open');\n    });\n  </script>\n</body>\n</html>"
  },
  quiz: [
    { question: "BEM mein .card__title mein double underscore (__) kya represent karta hai?", options: ["Block", "Element", "Modifier", "Variable"], answer: 1 },
    { question: "CSS specificity sabse high kiska hota hai?", options: ["Element selectors (h1)", "Class selectors (.btn)", "ID selectors (#header)", "Universal selector (*)"], answer: 2 },
    { question: "CSS file organization mein components folder mein kya rakhte hain?", options: ["CSS reset", "Typography styles", "Reusable button, card styles", "Page-specific styles"], answer: 2 },
    { question: "Critical CSS kya hota hai?", options: ["Important wali CSS", "Above-the-fold content ke liye CSS", "Media queries", "CSS variables"], answer: 1 },
    { question: "OOCSS ka main principle kya hai?", options: ["Object-oriented programming", "Structure ko skin se separate karo", "Sirf IDs use karo", "Nesting avoid karo"], answer: 1 }
  ],
  interview: [
    { question: "BEM methodology kya hai aur iske kya fayde hain?", answer: "BEM (Block Element Modifier) ek naming convention hai jo CSS classes ko teen parts mein divide karta hai. Block independent component, Element block ka part, Modifier variation. Fayde: specificity low rehti hai, naming conflicts nahi hote, code readable aur maintainable rehta hai, team collaboration easy hota hai." },
    { question: "CSS specificity ko kaise manage karein?", answer: "Specificity manage karne ke liye: 1) Sirf classes use karo, IDs avoid karo 2) !important kabhi use mat karo 3) Nesting kam se kam rakho 4) BEM like consistent naming convention follow karo 5) Agar override karna ho to same specificity level ka selector use karo. Specificity calculator tools use karo." },
    { question: "CSS performance optimize karne ke kya tarike hain?", answer: "1) Minification - whitespace hatao 2) Unused CSS remove karo (PurgeCSS) 3) Critical CSS inline karo, non-critical async load karo 4) Efficient selectors use karo (avoid deep nesting, universal selectors) 5) contain property use karo 6) content-visibility for off-screen content 7) Shorthand properties use karo 8) CSS file split karo page-wise 9) HTTP caching enable karo." }
  ],
  assignment: [
    "Apne project ke saare CSS ko BEM methodology mein convert karein aur folder structure organize karein",
    "PurgeCSS ya UnCSS tool use karke apne production CSS mein se unused styles remove karein"
  ],
  resources: [
    { title: "BEM Methodology Official Site", url: "https://getbem.com/" },
    { title: "CSS Speficity Calculator", url: "https://specificity.keegan.st/" },
    { title: "Smashing Magazine - CSS Architecture", url: "https://www.smashingmagazine.com/2018/11/css-frameworks-css-architecture/" }
  ],
  summary: "CSS architecture scalable aur maintainable CSS likhne ka structured approach hai. BEM naming convention (.block__element--modifier) specificity issues solve karta hai aur code ko readable banata hai. SMACSS aur OOCSS additional methodologies hain jo CSS ko organized rakhti hain. File organization (base, components, layouts, pages) large projects mein help karta hai. CSS performance ke liye critical CSS, minification, efficient selectors, aur content-visibility important hain. CSS reset ya normalize browser inconsistencies handle karta hai. Specificity ko low aur flat rakhna best practice hai."
};

export default lesson;
