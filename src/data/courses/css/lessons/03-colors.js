const lesson = {
  id: 3,
  slug: "colors",
  title: "CSS Colors",
  description: "Learn about CSS colors - named colors, hex, rgb, rgba, hsl, hsla, opacity, and gradients",
  difficulty: "Beginner",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
  tags: ["CSS", "Colors", "Gradients", "Opacity"],
  theory: [
    "CSS mein colors define karne ke multiple tarike hain: named, hex, rgb, rgba, hsl, hsla",
    "Named colors: 140+ predefined color names jaise red, blue, green, tomato, dodgerblue",
    "Hex colors: # ke saath 6 digits (RRGGBB) ya 3 digits shorthand - jaise #ff0000 (red), #f00 (bhi red)",
    "RGB colors: rgb(red, green, blue) - har value 0 se 255 ke beech mein hoti hai",
    "RGBA colors: rgb mein alpha channel (transparency) add hota hai - rgba(255,0,0,0.5) means 50% transparent red",
    "HSL colors: hsl(hue, saturation, lightness) - hue 0-360 degree, saturation 0-100%, lightness 0-100%",
    "HSLA colors: hsl mein alpha channel add hota hai - hsla(0, 100%, 50%, 0.3)",
    "Opacity property: 0 (completely transparent) se 1 (completely opaque) tak values leta hai",
    "Gradients do ya zyada colors ke beech smooth transition create karte hain",
    "Linear-gradient: ek direction mein colors blend hota hai - to top, to right, 45deg, etc.",
    "Radial-gradient: center se bahar ki taraf circular gradient hota hai",
    "Color theory mein complementary colors, analogous colors ka concept hota hai jo achhi design ke liye zaroori hai"
  ],
  examples: [
    { title: "Named & Hex Colors", description: "Using named colors and hex codes", code: "h1 { color: tomato; }\np { color: #2c3e50; }", result: "Heading in tomato color, paragraph in dark blue-gray hex color" },
    { title: "RGBA Transparency", description: "Using RGBA for semi-transparent colors", code: "div { background-color: rgba(0, 0, 255, 0.3); }", result: "Blue background with 30% opacity, so content behind it shows through" },
    { title: "CSS Gradient", description: "Linear gradient from one color to another", code: "div { background: linear-gradient(to right, #ff6b6b, #4ecdc4); }", result: "Smooth gradient from coral pink on left to teal on right" }
  ],
  syntax: [
    "color: red;",
    "color: #ff0000;",
    "color: rgb(255, 0, 0);",
    "color: rgba(255, 0, 0, 0.5);",
    "color: hsl(0, 100%, 50%);",
    "background: linear-gradient(direction, color1, color2);"
  ],
  diagram: [
    "┌─────────────────────────────────────────────────────────────────┐",
    "│                    CSS COLOR FORMATS                            │",
    "│                                                                 │",
    "│  Named:  red     blue      green     tomato                     │",
    "│  Hex:    #FF0000  #0000FF  #00FF00   #FF6347                    │",
    "│  RGB:    (255,0,0) (0,0,255) (0,255,0) (255,99,71)            │",
    "│  RGBA:   (255,0,0,0.5) → 50% transparent red                   │",
    "│  HSL:    (0,100%,50%) → Hue=0(Red) S=100 L=50                  │",
    "│                                                                 │",
    "│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                       │",
    "│  │ RED  │  │GREEN │  │ BLUE │  │ALPHA│                       │",
    "│  │ 0-255│  │0-255 │  │0-255 │  │ 0-1  │                       │",
    "│  └──────┘  └──────┘  └──────┘  └──────┘                       │",
    "└─────────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "All Color Formats", language: "css", code: ".named-color {\n  color: red;\n}\n\n.hex-color {\n  color: #ff6347;\n}\n\n.hex-shorthand {\n  color: #f60; /* same as #ff6600 */\n}\n\n.rgb-color {\n  color: rgb(46, 204, 113);\n}\n\n.rgba-color {\n  background-color: rgba(52, 152, 219, 0.2);\n  border: 1px solid rgba(52, 152, 219, 0.8);\n}\n\n.hsl-color {\n  color: hsl(204, 70%, 53%);\n}\n\n.hsla-color {\n  background-color: hsla(204, 70%, 53%, 0.15);\n}" },
    { title: "Gradients Example", language: "css", code: "/* Linear Gradient - top to bottom */\n.linear-basic {\n  background: linear-gradient(red, yellow);\n}\n\n/* Linear Gradient - left to right */\n.linear-direction {\n  background: linear-gradient(to right, #667eea, #764ba2);\n}\n\n/* Linear Gradient - diagonal */\n.linear-diagonal {\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n}\n\n/* Radial Gradient */\n.radial-basic {\n  background: radial-gradient(circle, #ffecd2, #fcb69f);\n}\n\n/* Multiple Color Stops */\n.multi-stop {\n  background: linear-gradient(to right, #e74c3c, #f39c12, #2ecc71, #3498db);\n}\n\n/* Transparency with Gradient */\n.transparent-gradient {\n  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));\n}" },
    { title: "HTML Color Showcase", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .box {\n      width: 200px;\n      height: 100px;\n      margin: 10px;\n      display: inline-block;\n      text-align: center;\n      line-height: 100px;\n      color: white;\n      font-weight: bold;\n      border-radius: 8px;\n    }\n    .hex-box { background-color: #e74c3c; }\n    .rgb-box { background-color: rgb(46, 204, 113); }\n    .rgba-box { background-color: rgba(52, 152, 219, 0.7); }\n    .gradient-box { background: linear-gradient(135deg, #667eea, #764ba2); }\n  </style>\n</head>\n<body>\n  <div class=\"box hex-box\">#e74c3c</div>\n  <div class=\"box rgb-box\">rgb(46,204,113)</div>\n  <div class=\"box rgba-box\">rgba(52,152,219,0.7)</div>\n  <div class=\"box gradient-box\">Gradient</div>\n</body>\n</html>" }
  ],
  output: [
    "Named color 'red' applies red color to text",
    "Hex color #ff6347 gives tomato orange-red shade",
    "RGBA with alpha 0.2 creates a very transparent light blue background",
    "HSL with hue 204 gives a sky blue color with 70% saturation",
    "Gradient smoothly transitions from purple (#667eea) to dark purple (#764ba2)"
  ],
  commonMistakes: [
    "Hex color mein # bhool jana - #ff0000 likhna hai, sirf ff0000 nahi",
    "RGB values 255 se zyada dal dena - rgb(300, 0, 0) kaam nahi karega, max 255 hai",
    "RGBA ya HSLA mein alpha value 1 se zyada dal dena - alpha 0 se 1 ke beech hota hai",
    "Gradient mein comma ki jagah semicolon use karna - gradient colors comma se separate hote hain",
    "Color names case-sensitive nahi hain lekin consistency ke liye lowercase use karna better hai"
  ],
  bestPractices: [
    "Hex colors use karo jab precise colors chahiye - ye sabse common aur reliable format hai",
    "RGBA use karo jab transparency chahiye - isse backgrounds ya overlays ke liye perfect hai",
    "HSL use karo jab color adjustments ki zaroorat ho - hue change karna HSL mein easy hai",
    "Gradients mein at least 2 colors rakho aur direction specify karo",
    "Design system mein consistent color palette rakho - 5-7 primary colors ka set banao"
  ],
  tips: [
    "Color picker tools jaise Coolors, Adobe Color se color palette banao",
    "Browser DevTools mein color swatch pe click karke color picker khol sakte ho",
    "Hex shorthand use karo jab possible ho - #ffffff ki jagah #fff, #aabbcc ki jagah #abc"
  ],
  practice: [
    "Ek colorful card banao jisme hex, rgb, rgba colors ka use ho",
    "Ek gradient background banner banao jisme 3 different color stops ho"
  ],
  exercise: {
    instruction: "Create a pricing card with gradient background, semi-transparent overlays, and colored buttons",
    hint: "Use linear-gradient for card header, rgba for overlay effects, hex for text colors",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .pricing-card {\n      width: 300px;\n      margin: 50px auto;\n      border-radius: 15px;\n      overflow: hidden;\n      box-shadow: 0 10px 30px rgba(0,0,0,0.15);\n      font-family: Arial, sans-serif;\n    }\n    .card-header {\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      color: white;\n      text-align: center;\n      padding: 40px 20px;\n    }\n    .card-header h2 {\n      margin: 0;\n      font-size: 28px;\n    }\n    .card-header .price {\n      font-size: 48px;\n      font-weight: bold;\n      margin: 10px 0;\n    }\n    .card-body {\n      padding: 30px;\n      background-color: #ffffff;\n    }\n    .card-body ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n    .card-body ul li {\n      padding: 10px 0;\n      border-bottom: 1px solid rgba(0,0,0,0.08);\n      color: #555;\n    }\n    .card-body button {\n      width: 100%;\n      padding: 15px;\n      margin-top: 20px;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      color: white;\n      border: none;\n      border-radius: 25px;\n      font-size: 16px;\n      cursor: pointer;\n    }\n    .card-body button:hover {\n      opacity: 0.9;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"pricing-card\">\n    <div class=\"card-header\">\n      <h2>Pro Plan</h2>\n      <div class=\"price\">$29</div>\n      <p>per month</p>\n    </div>\n    <div class=\"card-body\">\n      <ul>\n        <li>50 GB Storage</li>\n        <li>100 Users</li>\n        <li>24/7 Support</li>\n        <li>Advanced Analytics</li>\n      </ul>\n      <button>Choose Plan</button>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "Hex color code #ff0000 kaunsa color represent karta hai?", options: ["Green", "Blue", "Red", "Yellow"], answer: 2 },
    { question: "RGBA mein 'A' ka kya matlab hai?", options: ["Alpha (transparency)", "Amount", "Addition", "Alignment"], answer: 0 },
    { question: "RGB value 0-255 ke beech mein hoti hai. rgb(0, 0, 0) kaunsa color hai?", options: ["White", "Black", "Gray", "Blue"], answer: 1 },
    { question: "HSL mein H ka full form kya hai?", options: ["Height", "Hue", "Heat", "Hardness"], answer: 1 },
    { question: "Linear gradient mein colors kaise separate hote hain?", options: ["Semicolon se", "Comma se", "Space se", "Colon se"], answer: 1 }
  ],
  interview: [
    { question: "CSS mein colors define karne ke different tarike kya hain?", answer: "Five main tarike hain: Named colors (red, blue), Hex codes (#ff0000, #f00 shorthand), RGB (rgb(255,0,0)), RGBA with alpha transparency (rgba(255,0,0,0.5)), HSL (hsl(0,100%,50%)), and HSLA with alpha. Har method ki apni use case hai - hex sabse common, RGBA transparency ke liye best, HSL adjustments ke liye easy." },
    { question: "Hex color code #FF6347 kaise kaam karta hai?", answer: "Hex code # ke baad 6 hexadecimal digits (0-9, A-F) hoti hain. Pehli do FF = Red (255), beech ki do 63 = Green (99), aakhri do 47 = Blue (71). Agar teen digits hain jaise #f60, toh ye shorthand hai jo #ff6600 expand hota hai - har digit double ho jaati hai." },
    { question: "CSS gradients kya hote hain aur kaise create karte hain?", answer: "Gradients do ya zyada colors ke beech smooth transition create karte hain. Linear-gradient ek direction mein blend hota hai (to right, 45deg), radial-gradient center se circular spread hota hai. Gradient background-image property ka value hota hai, color nahi. Multiple color stops bhi add kar sakte hain." }
  ],
  assignment: [
    "Create a color palette showcase page with 12 different colored boxes using various color formats (hex, rgb, rgba, hsl)",
    "Build a hero section with gradient overlay on background image and semi-transparent content card"
  ],
  resources: [
    { title: "Coolors - Color Palette Generator", url: "https://coolors.co/" },
    { title: "CSS Gradient Generator", url: "https://cssgradient.io/" },
    { title: "Adobe Color Wheel", url: "https://color.adobe.com/" }
  ],
  summary: "CSS colors ko named colors, hex codes, RGB, RGBA, HSL, aur HSLA formats mein likh sakte hain. Hex (#ff0000) sabse popular hai, RGBA transparency add karta hai, aur HSL color adjustments ke liye aasan hai. Gradients linear aur radial do colors ke beech smooth transition banate hain. Alpha channel 0 se 1 ke beech opacity control karta hai. Sahi color scheme website ki look aur feel bahut improve karta hai."
};

export default lesson;
