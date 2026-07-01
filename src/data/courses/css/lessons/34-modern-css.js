const lesson = {
  id: 34,
  slug: "modern-css",
  title: "Modern CSS Features",
  description: "Master container queries, :has(), subgrid, and other cutting-edge CSS features",
  difficulty: "Advanced",
  duration: "50 min",
  heroImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800",
  tags: ["CSS", "Modern", "Container Queries", "has()", "Advanced"],
  theory: [
    "Modern CSS mein bahut se powerful features aaye hain jo pehle JavaScript ya frameworks se achieve karte the",
    "Container Queries (@container) component ko uske parent container ke size ke hisaab se respond karne deti hain - viewport nahi, parent container ka size check hota hai",
    "container-type: inline-size define karta hai ki container query kaun si dimension listen karegi",
    "container-name se specific containers ko target kar sakte hain jab multiple containers ho",
    ":has() selector ko parent selector bhi kehte hain - ye parent element ko select karta hai agar uske andar koi specific child ho",
    ":has() examples: .card:has(img) card select karega jisme img ho; form:has(input:invalid) form highlight karega jisme invalid input ho",
    "subgrid grid-template-columns aur grid-template-rows ko parent grid se inherit karta hai - aligned nested grids ke liye",
    "accent-color property form elements (checkbox, radio, range, progress) ka color change karti hai - ek line mein custom styling",
    "scroll-snap-type aur scroll-snap-align smooth scroll snapping ke liye - image carousels aur section-based scrolling ke liye perfect",
    "overscroll-behavior control karta hai ki browser scroll boundary cross karne pe kya kare - overscroll-behavior: contain se scroll chains rok sakte hain",
    "aspect-ratio property element ka width/height ratio set karti hai - aspect-ratio: 16/9 se videos ka ratio maintain rahega",
    "Logical properties (block-start, inline-end, margin-inline, padding-block) writing direction ke hisaab se kaam karte hain - RTL languages ke liye best",
    "color-mix() function do colors ko mix karta hai specified percentage mein - color-mix(in srgb, red, blue 50%)",
    "@scope rule CSS ko specific subtree mein limit karta hai - better encapsulation without shadow DOM",
    "View Transitions API (.view-transition-old, .view-transition-new) se page transitions smooth ho jaate hain"
  ],
  examples: [
    { title: "Container Query", description: "Component responds to its container width", code: ".card-wrapper { container-type: inline-size; } @container (min-width: 400px) { .card { flex-direction: row; } }", result: "Jab container 400px+ ho, card horizontal layout mein aa jayega" },
    { title: "has() Selector", description: "Style parent based on child presence", code: ".card:has(img) { padding: 0; } form:has(:invalid) { border-color: red; }", result: "Jis card mein image hai usme padding hategi, invalid form ko red border milega" },
    { title: "Scroll Snap", description: "Smooth section-by-section scrolling", code: ".container { scroll-snap-type: y mandatory; } .child { scroll-snap-align: start; }", result: "Scroll karne pe har section apne aap snap ho jayega" }
  ],
  syntax: [
    "Container: container-type: inline-size; @container (min-width: 400px) { ... }",
    "has(): parent:has(child-selector) { ... }",
    "Scroll snap: scroll-snap-type: x mandatory; scroll-snap-align: center;"
  ],
  diagram: [
    "+------------------------------------------------------------------+",
    "|               MODERN CSS FEATURES TIMELINE                       |",
    "|                                                                  |",
    "|  2021    2022      2023        2024          2025                |",
    "|  -----------------------------------------------------------------|",
    "|  aspect  :has()    container  @scope       View                  |",
    "|  -ratio           queries    color-mix    Transitions            |",
    "|                   subgrid                 animations             |",
    "|  accent             scroll                  API                  |",
    "|  -color             snap                                         |",
    "|  logical                                                        |",
    "|  properties                                                    |",
    "|                                                                  |",
    "|  +--------------------------------------------+                |",
    "|  | Before: JS + hacky CSS  | Now: Native CSS  |                |",
    "|  | Media queries only      | Container queries|                |",
    "|  | JS for parent selection | :has() selector  |                |",
    "|  | JS carousels            | Scroll snap      |                |",
    "|  | Frameworks for gap      | Gap + subgrid    |                |",
    "|  +--------------------------------------------+                |",
    "+------------------------------------------------------------------+"
  ],
  code: [
    { title: "Container Queries", language: "css", code: "/* Define container */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card-container;\n}\n\n/* Default mobile styles */\n.card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.card-content h3 {\n  font-size: 1.2rem;\n  margin-bottom: 8px;\n}\n\n/* Container query - responds to container width, not viewport */\n@container card-container (min-width: 400px) {\n  .card {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .card img {\n    width: 200px;\n    height: 150px;\n    flex-shrink: 0;\n  }\n\n  .card-content h3 {\n    font-size: 1.5rem;\n  }\n}\n\n@container card-container (min-width: 600px) {\n  .card {\n    padding: 24px;\n  }\n\n  .card img {\n    width: 300px;\n    height: 200px;\n  }\n}" },
    { title: "has() Practical Examples", language: "css", code: "/* Parent selector - style card that contains an image */\n.card:has(img) {\n  padding: 0;\n  overflow: hidden;\n}\n\n.card:has(img) .card-content {\n  padding: 16px;\n}\n\n/* Form validation styling */\n.form-group:has(input:invalid) .error-message {\n  display: block;\n}\n\n.form-group:has(input:invalid) input {\n  border-color: #e74c3c;\n}\n\n/* Style a figure that contains a figcaption */\nfigure:has(figcaption) {\n  border: 1px solid #ddd;\n  padding: 8px;\n  border-radius: 8px;\n}\n\n/* Multiple conditions */\n.product:has(.price, .add-to-cart) {\n  background: #f8f9fa;\n}\n\n/* NOT with has() */\n.card:not(:has(img)) {\n  text-align: center;\n}\n\n/* Style previous sibling */\nli:has(+ .active) {\n  color: #666;\n}\n\n/* Check if any child is focused */\n.toolbar:has(:focus) {\n  outline: 2px solid blue;\n}" },
    { title: "Modern CSS Features Demo", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }\n    h1 { margin-bottom: 1.5rem; }\n    input[type=checkbox], input[type=radio] { accent-color: #6366f1; width: 20px; height: 20px; }\n    .video-placeholder {\n      width: 100%; max-width: 560px; aspect-ratio: 16/9;\n      background: #333; display: flex; align-items: center;\n      justify-content: center; color: white; border-radius: 8px;\n      margin-bottom: 1.5rem;\n    }\n    .scroll-container {\n      display: flex; overflow-x: auto; scroll-snap-type: x mandatory;\n      gap: 16px; padding: 16px 0; overscroll-behavior-x: contain;\n    }\n    .scroll-item {\n      min-width: 280px; height: 200px;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      border-radius: 12px; scroll-snap-align: start;\n      display: flex; align-items: center; justify-content: center;\n      color: white; font-size: 1.5rem; flex-shrink: 0;\n    }\n    .logical-box {\n      margin-inline: auto; padding-block: 2rem; padding-inline: 1.5rem;\n      border-inline-start: 4px solid #6366f1; max-width: 560px;\n      background: white; border-radius: 8px; margin-bottom: 1.5rem;\n    }\n    .color-mix-box {\n      width: 100px; height: 100px;\n      background: color-mix(in srgb, #ff6b6b, #4ecdc4 50%);\n      border-radius: 8px; margin-bottom: 1rem;\n    }\n  </style>\n</head>\n<body>\n  <h1>Modern CSS Features</h1>\n  <h2>1. accent-color</h2>\n  <label><input type=checkbox checked> Option A</label>\n  <label><input type=radio name=r checked> Radio 1</label>\n  <h2>2. aspect-ratio (16:9)</h2>\n  <div class=video-placeholder>Video Player</div>\n  <h2>3. scroll-snap</h2>\n  <div class=scroll-container>\n    <div class=scroll-item>Slide 1</div>\n    <div class=scroll-item>Slide 2</div>\n    <div class=scroll-item>Slide 3</div>\n    <div class=scroll-item>Slide 4</div>\n  </div>\n  <h2>4. Logical Properties</h2>\n  <div class=logical-box>margin-inline:auto centered. border-inline-start left border.</div>\n  <h2>5. color-mix()</h2>\n  <div class=color-mix-box></div>\n  <p>color-mix(in srgb, #ff6b6b, #4ecdc4 50%)</p>\n</body>\n</html>" },
    { title: "Subgrid Example", language: "css", code: "/* Parent grid */\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto 1fr auto;\n  gap: 20px;\n}\n\n/* Child element using subgrid */\n.card {\n  display: grid;\n  grid-row: span 3;\n  grid-template-rows: subgrid;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 16px;\n}\n\n.card img {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n.card h3 { font-size: 1.2rem; }\n.card p { color: #666; }\n\n/* Subgrid ensures all cards align row-by-row across the grid */" }
  ],
  output: [
    "Container queries: component viewport nahi, parent container ke size ke hisaab se respond karta hai",
    "has() selector: parent elements ko child elements ki presence ke hisaab se style kar sakte hain",
    "Scroll snap: smooth, native scrolling with snap points, no JS required for basic carousels"
  ],
  commonMistakes: [
    "Container query ko media query samajh lena - container query parent container size check karti hai, viewport nahi",
    "has() selector ke saath specificity issues - iski specificity uske argument ke hisaab se hoti hai",
    "subgrid ko grid-template-columns aur rows ke saath confuse karna - subgrid parent grid ki tracks inherit karta hai",
    "scroll-snap mein mandatory vs proximity difference na samajhna - mandatory hamesha snap karega, proximity tabhi jab close ho",
    "Logical properties ko RTL languages mein test na karna - inline/block directions LTR aur RTL mein change hote hain"
  ],
  bestPractices: [
    "Container queries use karo component-level responsiveness ke liye, media queries layout-level ke liye",
    "has() ke saath progressive enhancement - browsers jo support karte hain unke liye extra styles",
    "Scroll snap galleries ke liye use karo desktop aur mobile dono pe",
    "Logical properties use karo multi-language sites ke liye - RTL support automatic mil jaata hai",
    "aspect-ratio ke saath object-fit combine karo responsive media ke liye"
  ],
  tips: [
    "Can I Use website pe check karo browser support before using modern CSS features in production",
    "Container queries ko media queries ke saath combine karo for ultimate responsive design",
    "@supports (selector(:has(*))) rule se has() ko feature detection ke saath use karo"
  ],
  practice: [
    "Container query ka use karke ek responsive card component banayein jo parent width ke hisaab se layout change kare",
    "Scroll-snap ka use karke ek horizontal image carousel banayein bina JavaScript ke"
  ],
  exercise: {
    instruction: "Build a responsive product listing page that uses modern CSS features. Use container queries for responsive product cards, has() for styling cards with/without images, aspect-ratio for consistent product images, scroll-snap for a featured products carousel, and logical properties for proper spacing.",
    hint: "Product card container ko container-type: inline-size do. @container queries use karo mobile se desktop layout switch ke liye. :has(.product-image) se card styling differentiate karo. Featured products section mein scroll-snap-type: x mandatory use karo.",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: Arial, sans-serif; background: #f8f9fa; padding: 2rem; color: #333; }\n    .page-title { font-size: 2rem; margin-block-end: 2rem; }\n    .featured-section { margin-block-end: 3rem; }\n    .featured-section h2 { font-size: 1.5rem; margin-block-end: 1rem; }\n    .featured-carousel {\n      display: flex; gap: 1rem; overflow-x: auto;\n      scroll-snap-type: x mandatory; overscroll-behavior-x: contain;\n      padding-block-end: 1rem;\n    }\n    .featured-item {\n      min-width: 300px; aspect-ratio: 16/10;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      border-radius: 12px; scroll-snap-align: start;\n      display: flex; align-items: flex-end; padding: 1.5rem;\n      color: white; flex-shrink: 0;\n    }\n    .featured-item h3 { font-size: 1.3rem; }\n    .product-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n      gap: 1.5rem;\n    }\n    .product-card-wrapper { container-type: inline-size; container-name: product; }\n    .product-card {\n      background: white; border-radius: 12px; overflow: hidden;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n      display: flex; flex-direction: column;\n    }\n    .product-image {\n      width: 100%; aspect-ratio: 4/3;\n      object-fit: cover; display: block;\n    }\n    .product-info { padding: 1rem; flex: 1; display: flex; flex-direction: column; }\n    .product-info h3 { font-size: 1.1rem; margin-block-end: 0.5rem; }\n    .product-info .price { font-size: 1.25rem; font-weight: 700; color: #6366f1; margin-block-end: 0.5rem; }\n    .product-info p { font-size: 0.875rem; color: #666; flex: 1; margin-block-end: 1rem; }\n    .product-info button { background: #6366f1; color: white; border: none; padding: 0.625rem; border-radius: 6px; cursor: pointer; }\n    .product-card:not(:has(.product-image)) { border-top: 4px solid #6366f1; }\n    @container product (min-width: 350px) {\n      .product-card { flex-direction: row; }\n      .product-image { width: 160px; height: 100%; aspect-ratio: auto; flex-shrink: 0; }\n    }\n    @container product (min-width: 500px) {\n      .product-image { width: 220px; }\n      .product-info h3 { font-size: 1.3rem; }\n    }\n  </style>\n</head>\n<body>\n  <h1 class=page-title>Modern CSS Store</h1>\n  <section class=featured-section>\n    <h2>Featured Products</h2>\n    <div class=featured-carousel>\n      <div class=featured-item><h3>Summer Collection 2026</h3></div>\n      <div class=featured-item><h3>New Arrivals</h3></div>\n      <div class=featured-item><h3>Limited Edition</h3></div>\n      <div class=featured-item><h3>Best Sellers</h3></div>\n    </div>\n  </section>\n  <section>\n    <h2 style=margin-block-end:1.5rem;>All Products</h2>\n    <div class=product-grid>\n      <div class=product-card-wrapper>\n        <div class=product-card>\n          <img class=product-image src=https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400 alt=Product>\n          <div class=product-info>\n            <h3>Premium Watch</h3>\n            <span class=price>$299</span>\n            <p>Elegant timepiece with leather strap.</p>\n            <button>Add to Cart</button>\n          </div>\n        </div>\n      </div>\n      <div class=product-card-wrapper>\n        <div class=product-card>\n          <img class=product-image src=https://images.unsplash.com/photo-1546868871-af0de0ae72c8?w=400 alt=Product>\n          <div class=product-info>\n            <h3>Wireless Headphones</h3>\n            <span class=price>$149</span>\n            <p>Noise-cancelling with 30hr battery.</p>\n            <button>Add to Cart</button>\n          </div>\n        </div>\n      </div>\n      <div class=product-card-wrapper>\n        <div class=product-card>\n          <div class=product-info>\n            <h3>Gift Card</h3>\n            <span class=price>$50</span>\n            <p>The perfect gift for any occasion.</p>\n            <button>Add to Cart</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</body>\n</html>"
  },
  quiz: [
    { question: "Container query (@container) kis element ke size ke hisaab se respond karti hai?", options: ["Viewport ke hisaab se", "Parent container ke hisaab se", "Root element ke hisaab se", "Nearest positioned ancestor ke hisaab se"], answer: 1 },
    { question: "has() selector kya karta hai?", options: ["Element select jiska specific child ho", "Element select jiska specific parent ho", "Element select specific attribute se", "Element select specific class se"], answer: 0 },
    { question: "aspect-ratio: 16/9 se kya hota hai?", options: ["Width/height ratio 16:9 maintain", "Element 16x9 pixels ho jata hai", "Font-size 16/9 ho jata hai", "16 columns 9 rows mein divide"], answer: 0 },
    { question: "Checkbox ka color change karne ke liye kaunsa property?", options: ["color", "accent-color", "background-color", "border-color"], answer: 1 },
    { question: "Subgrid ka kya fayda hai?", options: ["Random arrange karta hai", "Parent grid ki tracks inherit karta hai", "Animations add karta hai", "Gap remove karta hai"], answer: 1 }
  ],
  interview: [
    { question: "Container queries aur media queries mein difference? Kab use karein?", answer: "Media queries viewport size ke hisaab se styles apply karti hain. Container queries parent container size ke hisaab se. Container queries component-level responsiveness ke liye use karo jab component different contexts mein reuse ho raha ho. Media queries page-level layout ke liye." },
    { question: "has() selector ke practical use cases kya hain?", answer: "Form validation styling (form:has(:invalid)), cards with/without images different styling, parent selection jo pehle possible nahi tha, style previous sibling (li:has(+ .active)), aur toolbar focus detection (toolbar:has(:focus))." },
    { question: "Scroll snap ki mandatory vs proximity mein kya antar hai?", answer: "mandatory hamesha snap point pe scroll ko rokega chahe user beech mein ho. proximity tabhi snap karega jab scroll naturally snap point ke paas ho. mandatory better UX for carousels, proximity better for long lists." }
  ],
  assignment: [
    "Apne project mein container queries use karke ek reusable card component banayein jo kisi bhi container mein kaam kare",
    "has() selector ka use karke form validation styling implement karein bina JavaScript ke"
  ],
  resources: [
    { title: "MDN - Container Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries" },
    { title: "CSS Tricks - Guide to has()", url: "https://css-tricks.com/the-css-has-selector/" },
    { title: "Modern CSS Features Overview", url: "https://moderncss.dev/" }
  ],
  summary: "Modern CSS mein powerful features hain jo pehle JavaScript ya frameworks se karna padta tha. Container queries component ko uske parent ke size ke hisaab se responsive banati hain. has() selector parent ko child ke hisaab se select karta hai. Subgrid nested grids ko align karta hai. accent-color form elements ka color change karta hai. Scroll snap smooth scrolling deta hai. Logical properties RTL support ke liye hain. color-mix() colors ko mix karta hai. @scope CSS ko scope karta hai. View Transitions page transitions smooth banata hai. Yeh saare features modern CSS ko aur bhi powerful banate hain."
};

export default lesson;
