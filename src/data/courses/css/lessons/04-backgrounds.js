const lesson = {
  id: 4,
  slug: "backgrounds",
  title: "CSS Backgrounds",
  description: "Learn about CSS backgrounds - color, image, repeat, position, size, attachment, and shorthand",
  difficulty: "Beginner",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800",
  tags: ["CSS", "Backgrounds", "Images", "Styling"],
  theory: [
    "CSS backgrounds se hum elements ke background mein color, image, ya gradient laga sakte hain",
    "background-color: element ke background ka color set karta hai - solid color ke liye",
    "background-image: element ke background mein image URL lagata hai - url('image.jpg') se",
    "background-repeat: image ko repeat karne ka tareeka - repeat, no-repeat, repeat-x, repeat-y",
    "background-position: image ki position set karta hai - top, center, bottom, left, right, ya pixels mein",
    "background-size: image ka size control karta hai - auto, cover, contain, ya specific dimensions",
    "background-attachment: background image fixed rahega ya scroll ke saath move karega - scroll, fixed, local",
    "Background shorthand: ek hi line mein saari properties likh sakte hain - background: color image repeat position/size attachment",
    "Cover size: image ko element ke hisaab se stretch karta hai bina ratio bigade, lekin kuch part cut ho sakta hai",
    "Contain size: image ko poora dikhata hai lekin element mein empty space reh sakta hai",
    "Multiple backgrounds: comma se separate karke ek element pe multiple background images laga sakte hain",
    "Background blend modes: background-blend-mode se images aur colors ko mix kar sakte hain - multiply, screen, overlay"
  ],
  examples: [
    { title: "Background Color", description: "Simple background color on elements", code: "div { background-color: #3498db; }\np { background-color: rgba(255, 255, 0, 0.3); }", result: "Div with blue background, paragraph with semi-transparent yellow background" },
    { title: "Background Image with Properties", description: "Full background image setup", code: ".hero {\n  background-image: url('hero.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}", result: "Hero section with image centered, covering entire area, not repeating" },
    { title: "Multiple Backgrounds", description: "Two backgrounds on one element", code: ".banner {\n  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('bg.jpg');\n  background-size: cover;\n}", result: "Dark overlay gradient on top of background image for better text readability" }
  ],
  syntax: [
    "background-color: color;",
    "background-image: url('path/to/image.jpg');",
    "background-repeat: no-repeat | repeat | repeat-x | repeat-y;",
    "background-position: center | top left | 50% 50%;",
    "background-size: cover | contain | 100% auto | 200px 100px;",
    "background: color image repeat position / size attachment;"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────┐",
    "│                  BACKGROUND PROPERTIES                      │",
    "│                                                             │",
    "│  ┌──────────────────────────────────────────────────────┐  │",
    "│  │  Background Layers (front to back):                   │  │",
    "│  │                                                       │  │",
    "│  │  1. background-color (solid fill at bottom)            │  │",
    "│  │  2. background-image (layered on top)                  │  │",
    "│  │  3. background-repeat (controls tiling)               │  │",
    "│  │  4. background-position (places the image)             │  │",
    "│  │  5. background-size (scales the image)                 │  │",
    "│  │  6. background-attachment (scroll behavior)            │  │",
    "│  └──────────────────────────────────────────────────────┘  │",
    "└─────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Background Properties Overview", language: "css", code: "/* Simple background color */\n.card {\n  background-color: #f8f9fa;\n}\n\n/* Background image with all properties */\n.hero-section {\n  background-image: url('../images/hero-bg.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  background-attachment: fixed;\n  min-height: 400px;\n}\n\n/* Background shorthand - everything in one line */\n.banner {\n  background: #2c3e50 url('banner.jpg') no-repeat center / cover fixed;\n}\n\n/* Pattern with repeat */\n.pattern-bg {\n  background-image: url('pattern.png');\n  background-repeat: repeat;\n}\n\n/* Horizontal stripe */\n.stripes {\n  background-image: url('stripe.png');\n  background-repeat: repeat-x;\n  background-position: bottom;\n}\n\n/* Background position with pixels */\n.offset-bg {\n  background: url('icon.png') no-repeat 20px 15px;\n  padding-left: 60px;\n}" },
    { title: "Multiple Backgrounds & Gradients", language: "css", code: "/* Multiple background images */\n.multi-bg {\n  background-image: url('overlay.png'), url('main-bg.jpg');\n  background-repeat: no-repeat, repeat;\n  background-position: center, top left;\n  background-size: contain, auto;\n}\n\n/* Gradient as background */\n.gradient-bg {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n/* Gradient overlay on image */\n.overlay-bg {\n  background: linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.7)\n    ),\n    url('mountain.jpg');\n  background-size: cover;\n  background-position: center;\n}\n\n/* Background blend modes */\n.blend-bg {\n  background-image: url('texture.png'), linear-gradient(#e66465, #9198e5);\n  background-blend-mode: multiply;\n}" },
    { title: "HTML Background Examples", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body {\n      margin: 0;\n      font-family: Arial, sans-serif;\n    }\n    .hero {\n      background: linear-gradient(135deg, rgba(52,152,219,0.9), rgba(44,62,80,0.9)),\n                  url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200');\n      background-size: cover;\n      background-position: center;\n      background-attachment: fixed;\n      height: 400px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      font-size: 36px;\n      font-weight: bold;\n    }\n    .content {\n      padding: 40px;\n      background-color: #f5f6fa;\n    }\n    .card {\n      background-color: white;\n      background-image: url('https://images.unsplash.com/photo-1557683316-973673baf926?w=50');\n      background-repeat: repeat;\n      padding: 20px;\n      margin: 20px 0;\n      border-radius: 8px;\n      box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"hero\">Welcome to My Website</div>\n  <div class=\"content\">\n    <div class=\"card\">\n      <h2>About Us</h2>\n      <p>This card has a subtle repeating pattern background.</p>\n    </div>\n  </div>\n</body>\n</html>" }
  ],
  output: [
    "Hero section has a gradient overlay on top of a mountain background image that covers the full area",
    "Background image is fixed - it stays in place when page scrolls (parallax effect)",
    "Card uses a subtle repeating pattern from a small image",
    "Content section has light gray background color (#f5f6fa)",
    "Gradient background smoothly transitions from blue to dark blue-gray"
  ],
  commonMistakes: [
    "background-image mein url() ke andar quotes bhool jana - url('image.jpg') likho, url(image.jpg) bhi chalega lekin quotes recommended hain",
    "background-size: cover use karna bhool jana - jisse image repeat ho sakti hai aur small image jaise tile lagti hai",
    "background-position set nahi karna - isse image top-left se start hoti hai jo aksar galat lagti hai",
    "Background shorthand mein order bhool jana - size ke saath / lagana zaroori hai: position/size",
    "Background image ka path galat dena - relative path check karo, kyunki broken image kuch nahi dikhayega"
  ],
  bestPractices: [
    "Background images ke liye hamesha fallback background-color bhi set karo - image load na ho toh color dikhe",
    "Text readability ke liye background image pe gradient overlay ya dark overlay use karo",
    "Performance ke liye background images ko compress karo aur appropriate size mein use karo",
    "Background shorthand seekho kyunki isse code clean aur short rehta hai",
    "Multiple backgrounds ka use carefully karo - zyada layers performance effect kar sakti hain"
  ],
  tips: [
    "background-attachment: fixed se parallax scrolling effect bana sakte ho - image fixed rahegi, content scroll hoga",
    "Background image ke liye WebP format use karo - ye JPEG se 30% smaller hota hai similar quality mein",
    "CSS gradient as background use karo real image ki jagah jab simple color transition chahiye - ye faster load hota hai"
  ],
  practice: [
    "Ek hero section banao jisme gradient overlay ke saath background image ho aur text readable ho",
    "Ek card component banao jisme different background properties ka use ho - color, image pattern, gradient"
  ],
  exercise: {
    instruction: "Create a complete webpage with a hero section (gradient overlay on image), content cards with different backgrounds, and a parallax scrolling effect",
    hint: "Use fixed attachment for parallax, linear-gradient overlay for text readability, and multiple background types for variety",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    body {\n      font-family: 'Segoe UI', Tahoma, sans-serif;\n    }\n    .parallax-hero {\n      height: 100vh;\n      background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),\n                  url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600');\n      background-size: cover;\n      background-position: center;\n      background-attachment: fixed;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      text-align: center;\n    }\n    .parallax-hero h1 {\n      font-size: 64px;\n      margin-bottom: 20px;\n      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n    }\n    .parallax-hero p {\n      font-size: 24px;\n      opacity: 0.9;\n    }\n    .content-section {\n      padding: 80px 40px;\n    }\n    .section-1 {\n      background-color: #ffffff;\n    }\n    .section-2 {\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      color: white;\n    }\n    .section-3 {\n      background: #f5f6fa url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+');\n    }\n    .card {\n      background: white;\n      padding: 30px;\n      margin: 20px 0;\n      border-radius: 12px;\n      box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"parallax-hero\">\n    <h1>Explore the World</h1>\n    <p>Beautiful places await you</p>\n  </div>\n  <div class=\"content-section section-1\">\n    <div class=\"card\">\n      <h2>Mountains</h2>\n      <p>Majestic mountains with snow-capped peaks stretch across the horizon. The crisp mountain air and stunning views make every trek worthwhile.</p>\n    </div>\n    <div class=\"card\">\n      <h2>Oceans</h2>\n      <p>The vast blue ocean stretches endlessly, its waves crashing against ancient cliffs. Sunset paints the water in shades of gold and orange.</p>\n    </div>\n  </div>\n  <div class=\"content-section section-2\">\n    <h2>Adventure Awaits</h2>\n    <p>Every journey begins with a single step. Pack your bags and discover the unknown.</p>\n  </div>\n  <div class=\"content-section section-3\">\n    <h2>Plan Your Trip</h2>\n    <p>Use our interactive tools to plan the perfect adventure.</p>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Background image ko repeat hone se rokne ke liye kaun si property use karte hain?", options: ["background-repeat: no-repeat", "background-stop: true", "image-repeat: false", "repeat: none"], answer: 0 },
    { question: "Background image ko element ke hisaab se stretch karne ke liye kaun si value use hoti hai?", options: ["auto", "contain", "cover", "fill"], answer: 2 },
    { question: "Background shorthand mein position aur size ke beech mein kaunsa symbol aata hai?", options: ["Comma", "Colon", "Dash", "Slash (/)"], answer: 3 },
    { question: "Kaun si property background image ko fixed rakhti hai jab page scroll ho?", options: ["background-scroll", "background-attachment", "background-fixed", "background-position"], answer: 1 },
    { question: "Ek element pe multiple background images lagane ke liye kya use karte hain?", options: ["Semicolon", "Ampersand", "Comma", "Plus"], answer: 2 }
  ],
  interview: [
    { question: "CSS background-color aur background-image mein kya difference hai?", answer: "background-color solid color fill karta hai - ye fastest render hota hai. background-image URL se image load karta hai - isme network request hoti hai. Dono ek saath use kar sakte hain: image load na ho toh color dikhe. Background-image gradients bhi ho sakta hai." },
    { question: "Background-size: cover aur contain mein kya antar hai?", answer: "Cover: image element ko poora cover karti hai, aspect ratio maintain karte hue. Isme image ka kuch part cut ho sakta hai. Contain: image poora visible rehta hai, aspect ratio maintain karte hue. Isme element mein empty space reh sakti hai. Cover generally better hota hai hero sections ke liye." },
    { question: "CSS background shorthand property ka order kya hai?", answer: "Background shorthand ka order hai: color image repeat position / size attachment. Example: background: #fff url('img.jpg') no-repeat center / cover fixed. Agar koi property chhodni hai toh skip kar sakte hain, lekin position/size ke beech slash (/) zaroori hai. Multiple backgrounds comma se separate hote hain." }
  ],
  assignment: [
    "Create a landing page with parallax scrolling background, gradient sections, and pattern-based cards",
    "Build a photo gallery page where each image card has an overlay background with text on hover effect"
  ],
  resources: [
    { title: "MDN Backgrounds Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/background" },
    { title: "CSS Gradient Generator", url: "https://cssgradient.io/" },
    { title: "BGJar - Free SVG Backgrounds", url: "https://bgjar.com/" }
  ],
  summary: "CSS backgrounds element ke peeche color, image, ya gradient lagate hain. Properties hain: background-color (solid fill), background-image (URL ya gradient), background-repeat (tiling), background-position (placement), background-size (cover/contain), background-attachment (scroll/fixed). Shorthand 'background' mein ek line mein sab likh sakte hain. Cover se image element bhar leti hai, contain se image poora dikhta hai. Multiple backgrounds comma se separate karke lagaye ja sakte hain."
};

export default lesson;
