const lesson = {
  id: 7,
  slug: "box-model",
  title: "CSS Box Model",
  description: "Learn the CSS box model - content, padding, border, margin, width/height, box-sizing, and outline",
  difficulty: "Beginner",
  duration: "45 min",
  heroImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  tags: ["CSS", "Box Model", "Layout", "box-sizing"],
  theory: [
    "CSS Box Model har HTML element ko ek rectangular box ki tarah treat karta hai",
    "Box model chaar layers se milkar banta hai: content, padding, border, margin",
    "Content: sabse andar ki layer jahan actual text ya images rehti hain",
    "Padding: content aur border ke beech ka space - ye element ke background ko include karta hai",
    "Border: padding ke bahar ki line - solid, dashed, dotted, etc.",
    "Margin: sabse bahar ki layer - element aur doosre elements ke beech gap",
    "Width aur height by default sirf content area ki size hoti hai (content-box)",
    "box-sizing: border-box; se width/height padding aur border ko include karti hai - ye modern websites mein use hota hai",
    "Outline: border ke bahar ek aur line hoti hai jo element ke box size mein include nahi hoti",
    "Total width calculation (content-box): width + padding-left + padding-right + border-left + border-right + margin-left + margin-right",
    "Total width calculation (border-box): width + margin-left + margin-right (padding aur border width ke andar hi aate hain)",
    "Display property box model ko affect karti hai - block, inline, inline-block sab ka behavior thoda different hota hai"
  ],
  examples: [
    { title: "Box Model Visualization", description: "How content, padding, border, and margin stack", code: ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #333;\n  margin: 10px;\n  background: #f0f0f0;\n}", result: "Content is 200px wide, padding adds 40px (20+20), border adds 10px (5+5), total = 250px + 20px margin" },
    { title: "box-sizing: border-box", description: "How border-box changes width calculation", code: ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid #333;\n  box-sizing: border-box;\n}", result: "Width stays 200px - padding and border are inside that 200px, content area shrinks to 150px" },
    { title: "Outline vs Border", description: "Difference between outline and border", code: "button:focus {\n  outline: 2px solid blue;\n  outline-offset: 2px;\n}\ndiv {\n  border: 2px solid red;\n}", result: "Outline appears outside border, doesn't affect layout, and can be offset. Border takes space in box model." }
  ],
  syntax: [
    "box-sizing: content-box | border-box;",
    "outline: width style color;",
    "outline-offset: value;",
    "width: value;",
    "height: value;",
    "max-width: value;",
    "min-height: value;"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────────┐",
    "│                    CSS BOX MODEL                                 │",
    "│                                                                 │",
    "│  ╔═══════════════════ MARGIN (outside) ═══════════════════╗     │",
    "│  ║  ┌────────── BORDER (edge) ──────────────────────┐    ║     │",
    "│  ║  │  ┌────── PADDING (inside) ──────────────┐    │    ║     │",
    "│  ║  │  │                                         │    │    ║     │",
    "│  ║  │  │          CONTENT AREA                   │    │    ║     │",
    "│  ║  │  │     (width × height)                    │    │    ║     │",
    "│  ║  │  │                                         │    │    ║     │",
    "│  ║  │  └─────────────────────────────────────────┘    │    ║     │",
    "│  ║  │                                                 │    ║     │",
    "│  ║  └─────────────────────────────────────────────────┘    ║     │",
    "│  ║                                                         ║     │",
    "│  ╚═════════════════════════════════════════════════════════╝     │",
    "│                                                                 │",
    "│  content-box width = content only                                │",
    "│  border-box width = content + padding + border                  │",
    "│  outline is outside the margin, doesn't affect size             │",
    "└─────────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Box Model In Action", language: "css", code: ".box-model-demo {\n  width: 300px;\n  height: 150px;\n  padding: 20px;\n  border: 5px solid #e74c3c;\n  margin: 25px;\n  background-color: #ecf0f1;\n  /* Default box-sizing: content-box */\n  /* Total width = 300 + 40(padding) + 10(border) + 50(margin) = 400px */\n}\n\n.border-box-demo {\n  width: 300px;\n  height: 150px;\n  padding: 20px;\n  border: 5px solid #3498db;\n  margin: 25px;\n  background-color: #d5f5e3;\n  box-sizing: border-box;\n  /* Total width = 300 + 50(margin) = 350px */\n  /* Content area = 300 - 40(padding) - 10(border) = 250px wide */\n}\n\n/* Reset all elements to border-box */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n/* Max-width for responsive design */\n.responsive-container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n/* Min-height for ensuring minimum size */\n.hero-section {\n  min-height: 400px;\n  padding: 40px;\n}" },
    { title: "Outline Examples", language: "css", code: "/* Basic outline */\n.outline-basic {\n  outline: 2px solid #e74c3c;\n}\n\n/* Outline with offset - space between border and outline */\n.outline-offset {\n  border: 2px solid #333;\n  outline: 3px dashed #3498db;\n  outline-offset: 5px;\n}\n\n/* Outline for focus states - accessibility */\nbutton:focus {\n  outline: 3px solid #4A90D9;\n  outline-offset: 2px;\n}\n\n/* Remove outline but add alternative focus style */\n.custom-focus:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);\n}\n\n/* Outline vs border on hover */\n.hover-effect:hover {\n  outline: 2px solid #2ecc71;\n  /* Notice: no layout shift unlike border would cause */\n}" },
    { title: "HTML Box Model Demo", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n    body {\n      font-family: Arial, sans-serif;\n      background: #f5f6fa;\n      padding: 30px;\n    }\n    .container {\n      max-width: 800px;\n      margin: 0 auto;\n    }\n    h2 {\n      margin: 30px 0 15px;\n      color: #2c3e50;\n    }\n    .box-row {\n      display: flex;\n      gap: 30px;\n      margin-bottom: 30px;\n    }\n    .box {\n      width: 200px;\n      padding: 20px;\n      border: 5px solid #333;\n      margin: 10px;\n      background: #d5f5e3;\n      text-align: center;\n      font-size: 13px;\n    }\n    .box-label {\n      font-weight: bold;\n      margin-bottom: 5px;\n      color: #2c3e50;\n    }\n    .box.content-box {\n      box-sizing: content-box;\n      background: #fadbd8;\n      border-color: #e74c3c;\n    }\n    .box.border-box {\n      box-sizing: border-box;\n      background: #d5f5e3;\n      border-color: #2ecc71;\n    }\n    .info-table {\n      width: 100%;\n      border-collapse: collapse;\n      margin: 20px 0;\n      font-size: 14px;\n    }\n    .info-table th, .info-table td {\n      padding: 12px 15px;\n      border: 1px solid #ddd;\n      text-align: left;\n    }\n    .info-table th {\n      background: #2c3e50;\n      color: white;\n    }\n    .info-table tr:nth-child(even) {\n      background: #f8f9fa;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h1>CSS Box Model Demo</h1>\n\n    <h2>Content-Box vs Border-Box</h2>\n    <div class=\"box-row\">\n      <div class=\"box content-box\">\n        <div class=\"box-label\">content-box</div>\n        width: 200px<br>\n        padding: 20px<br>\n        border: 5px<br>\n        <strong>Total: 250px</strong>\n      </div>\n      <div class=\"box border-box\">\n        <div class=\"box-label\">border-box</div>\n        width: 200px<br>\n        padding: 20px<br>\n        border: 5px<br>\n        <strong>Total: 200px</strong>\n      </div>\n    </div>\n\n    <table class=\"info-table\">\n      <tr>\n        <th>Property</th>\n        <th>Description</th>\n        <th>Example</th>\n      </tr>\n      <tr>\n        <td>Content</td>\n        <td>Actual text/images area</td>\n        <td>width: 200px; height: 100px;</td>\n      </tr>\n      <tr>\n        <td>Padding</td>\n        <td>Space inside element</td>\n        <td>padding: 20px;</td>\n      </tr>\n      <tr>\n        <td>Border</td>\n        <td>Edge around padding</td>\n        <td>border: 5px solid #333;</td>\n      </tr>\n      <tr>\n        <td>Margin</td>\n        <td>Space outside element</td>\n        <td>margin: 15px;</td>\n      </tr>\n      <tr>\n        <td>Outline</td>\n        <td>Line outside border, no size effect</td>\n        <td>outline: 2px solid blue;</td>\n      </tr>\n    </table>\n  </div>\n</body>\n</html>" }
  ],
  output: [
    "Content-box: total width = 200px (content) + 40px (padding) + 10px (border) = 250px plus margin",
    "Border-box: total width = 200px (includes padding and border), content shrinks to 150px",
    "With box-sizing: border-box, adding padding doesn't increase element's total width",
    "Outline appears outside the border but doesn't affect element's layout or size",
    "Max-width: 1200px makes container responsive - it shrinks on smaller screens but never exceeds 1200px"
  ],
  commonMistakes: [
    "box-sizing: border-box use na karna - iski wajah se padding ya border add karne par layout bigad jaata hai",
    "Width 100% + padding dena - isse horizontal scrollbar aa jata hai kyunki 100% + padding parent se zyada ho jata hai",
    "Outline aur border mein farak na samajhna - outline element ka size nahi badhata, border badhata hai",
    "Height percentage ka galat istemal - parent ki height defined nahi hai toh percentage height kaam nahi karegi",
    "Margin in percentage (horizontal) parent ki WIDTH ke hisaab se calculate hota hai, height ke hisaab se nahi"
  ],
  bestPractices: [
    "Hamesha * { box-sizing: border-box; } use karo - isse layout predictable rehta hai",
    "Width aur height sirf content ke liye set karo, padding aur border ke liye nahi",
    "Responsive design ke liye width ki jagah max-width use karo",
    "Accessibility ke liye outline hatao toh alternative focus style (box-shadow) zaroor do",
    "Min-height use karo jab content kam ho tab bhi element ka minimum size maintain karna ho"
  ],
  tips: [
    "Browser DevTools mein computed tab pe jaake kisi element ka box model visually dekh sakte ho",
    "Box-sizing: border-box ko CSS reset mein sabse pehle likho - * selector ke saath",
    "Outline-offset negative value bhi le sakta hai - isse outline element ke andar aa jayega"
  ],
  practice: [
    "Do boxes banao - ek content-box ke saath aur ek border-box ke saath - aur unke sizes compare karo",
    "Ek responsive card layout banao jisme box-sizing: border-box use kiya ho aur cards proper spacing mein ho"
  ],
  exercise: {
    instruction: "Create a product listing page with multiple product cards using box-sizing: border-box, proper box model properties, and a responsive grid layout",
    hint: "Use box-sizing: border-box on all elements, max-width for container, padding for card content, margin for spacing between cards, and border for card edges",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: 'Segoe UI', Arial, sans-serif;\n      background: #f0f2f5;\n      padding: 30px;\n    }\n    .container {\n      max-width: 1200px;\n      margin: 0 auto;\n    }\n    h1 {\n      text-align: center;\n      color: #2c3e50;\n      margin-bottom: 10px;\n      font-size: 32px;\n    }\n    .subtitle {\n      text-align: center;\n      color: #7f8c8d;\n      margin-bottom: 40px;\n    }\n    .product-grid {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 30px;\n      justify-content: center;\n    }\n    .product-card {\n      width: 300px;\n      background: white;\n      border-radius: 12px;\n      overflow: hidden;\n      box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n      border: 1px solid #e8e8e8;\n      transition: transform 0.3s, box-shadow 0.3s;\n    }\n    .product-card:hover {\n      transform: translateY(-5px);\n      box-shadow: 0 8px 25px rgba(0,0,0,0.15);\n    }\n    .product-image {\n      width: 100%;\n      height: 200px;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      font-size: 48px;\n    }\n    .product-info {\n      padding: 20px;\n    }\n    .product-title {\n      font-size: 18px;\n      font-weight: 600;\n      color: #2c3e50;\n      margin-bottom: 8px;\n    }\n    .product-description {\n      font-size: 14px;\n      color: #7f8c8d;\n      line-height: 1.5;\n      margin-bottom: 15px;\n    }\n    .product-footer {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding-top: 15px;\n      border-top: 1px solid #eee;\n    }\n    .product-price {\n      font-size: 20px;\n      font-weight: bold;\n      color: #2ecc71;\n    }\n    .product-btn {\n      padding: 8px 20px;\n      background: #3498db;\n      color: white;\n      border: none;\n      border-radius: 6px;\n      cursor: pointer;\n      font-size: 14px;\n      transition: background 0.3s;\n    }\n    .product-btn:hover {\n      background: #2980b9;\n    }\n    .badge {\n      display: inline-block;\n      padding: 4px 12px;\n      margin-bottom: 10px;\n      background: #e8f8f5;\n      color: #27ae60;\n      border-radius: 20px;\n      font-size: 12px;\n      font-weight: 600;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h1>Our Products</h1>\n    <p class=\"subtitle\">Handpicked items just for you</p>\n    <div class=\"product-grid\">\n      <div class=\"product-card\">\n        <div class=\"product-image\">📱</div>\n        <div class=\"product-info\">\n          <span class=\"badge\">New</span>\n          <h3 class=\"product-title\">Wireless Headphones</h3>\n          <p class=\"product-description\">Premium noise-cancelling wireless headphones with 30-hour battery life.</p>\n          <div class=\"product-footer\">\n            <span class=\"product-price\">$199</span>\n            <button class=\"product-btn\">Add to Cart</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"product-card\">\n        <div class=\"product-image\">⌚</div>\n        <div class=\"product-info\">\n          <span class=\"badge\">Sale</span>\n          <h3 class=\"product-title\">Smart Watch Pro</h3>\n          <p class=\"product-description\">Advanced fitness tracking with heart rate monitor and GPS built-in.</p>\n          <div class=\"product-footer\">\n            <span class=\"product-price\">$299</span>\n            <button class=\"product-btn\">Add to Cart</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"product-card\">\n        <div class=\"product-image\">🎒</div>\n        <div class=\"product-info\">\n          <span class=\"badge\">Popular</span>\n          <h3 class=\"product-title\">Travel Backpack</h3>\n          <p class=\"product-description\">Spacious 40L backpack with USB charging port and waterproof design.</p>\n          <div class=\"product-footer\">\n            <span class=\"product-price\">$89</span>\n            <button class=\"product-btn\">Add to Cart</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "CSS Box Model mein chaar layers kaun si hain?", options: ["Content, Color, Border, Margin", "Content, Padding, Border, Margin", "Text, Padding, Outline, Margin", "Content, Padding, Outline, Space"], answer: 1 },
    { question: "box-sizing: border-box ka kya effect hota hai?", options: ["Width mein padding aur border include hota hai", "Width sirf content ka hota hai", "Margin width mein add hota hai", "Box invisible ho jata hai"], answer: 0 },
    { question: "Default box-sizing value kya hoti hai?", options: ["border-box", "padding-box", "content-box", "margin-box"], answer: 2 },
    { question: "Kaun si property element ka size badhaye bina box ke bahar line draw karti hai?", options: ["border", "margin", "outline", "padding"], answer: 2 },
    { question: "Border-box mein agar width: 200px, padding: 20px, border: 5px hai toh content area kitna hoga?", options: ["200px", "150px", "170px", "190px"], answer: 1 }
  ],
  interview: [
    { question: "CSS Box Model kya hai aur iski layers kaun si hain?", answer: "Box Model har HTML element ko ek rectangular box treat karta hai. Andar se bahar ki taraf chaar layers hain: Content (actual text/images), Padding (content aur border ke beech space, background include karta hai), Border (padding ke bahar ki line), Margin (border ke bahar ka transparent space). Width/height initially sirf content ko refer karte hain." },
    { question: "content-box aur border-box mein kya antar hai?", answer: "content-box default hai - isme width/height sirf content area ki size hoti hai. Padding aur border add karne se element ka total size badh jata hai. border-box mein width/height content + padding + border teeno ko include karti hai. Isse layout predictable rehta hai aur padding add karne par element ka size nahi badhta. Modern CSS mein border-box use karna standard practice hai." },
    { question: "Outline aur border mein kya farak hai?", answer: "Border box model ka part hai - ye element ke size mein add hota hai, space leta hai, aur border-radius follow karta hai. Outline box model mein count nahi hota - ye element ke upar draw hota hai, koi space nahi leta, aur layout affect nahi karta. Outline border-radius follow nahi karta. Outline-offset se outline ko border se door ya andar shift kar sakte hain. Outline mainly focus indicators aur debugging ke liye use hota hai." }
  ],
  assignment: [
    "Build a complete e-commerce product card component demonstrating all box model layers with box-sizing: border-box",
    "Create a blog layout with multiple posts where each post card demonstrates proper box model usage including outline on hover"
  ],
  resources: [
    { title: "MDN Box Model Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model" },
    { title: "MDN box-sizing Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing" },
    { title: "CSS Box Model Visualizer", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model" }
  ],
  summary: "CSS Box Model har element ko chaar layers mein divide karta hai: content (andar ka hissa), padding (content ke ird-gird gap), border (kinara), aur margin (bahar ka space). Default content-box mein width/height sirf content ko include karti hai. Border-box mein width/height padding aur border bhi include karti hai, jo layout ke liye better hai. Outline border ke bahar hoti hai aur element size mein include nahi hoti. Har element ka actual space in sab layers ke total se calculate hota hai."
};

export default lesson;
