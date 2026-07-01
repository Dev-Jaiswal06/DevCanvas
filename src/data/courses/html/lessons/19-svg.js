const lesson = {
  id: 19, slug: "svg", title: "HTML SVG",
  description: "SVG graphics jo bina quality loss ke scale hote hain. Hinglish mein seekhein.",
  difficulty: "Advanced", duration: "15 Minutes", heroImage: "",
  tags: ["HTML", "SVG", "Graphics"],
  theory: [
    "SVG = Scalable Vector Graphics. Ye vector-based graphics format hai.",
    "<svg> tag se vector graphics banate hain jo bina quality loss ke resize ho sakte hain.",
    "Basic shapes: <circle>, <rect> (rectangle), <line>, <ellipse>, <polygon>, <path>.",
    "SVG ke fayde: quality loss ke bina resize, small file size, CSS se style kar sakte hain, interactive bana sakte hain.",
    "SVG icons, logos, illustrations, charts ke liye best hai.",
    "Canvas ke opposite, SVG DOM-based hota hai — har element accessible hai JavaScript se."
  ],
  examples: [{
    title: "Basic SVG Shapes",
    description: "SVG ke saath circle aur rectangle draw karna.",
    code: "<svg width=\"200\" height=\"150\">\n  <circle cx=\"50\" cy=\"75\" r=\"40\" fill=\"cyan\" />\n  <rect x=\"110\" y=\"35\" width=\"60\" height=\"60\" fill=\"purple\" rx=\"10\" />\n</svg>",
    result: "[Cyan circle and purple rounded rectangle]"
  }],
  syntax: [
    "<svg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\">",
    "  <circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"blue\" />",
    "  <rect x=\"20\" y=\"20\" width=\"80\" height=\"80\" fill=\"red\" />",
    "  <path d=\"M10 10 L100 10 L100 100 Z\" fill=\"green\" />",
    "  <text x=\"50\" y=\"150\" fill=\"white\">SVG Text</text>",
    "</svg>"
  ],
  diagram: [
    "<svg> → SVG canvas container",
    "  <circle> → Circle shape (cx, cy, r)",
    "  <rect> → Rectangle (x, y, width, height)",
    "  <path> → Custom path (d attribute)",
    "  <text> → Text element",
    "  viewBox → Coordinate system"
  ],
  code: [{
    title: "SVG Graphic with Multiple Shapes",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<body>\n  <h2>SVG Graphics</h2>\n  <svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\">\n    <rect x=\"10\" y=\"10\" width=\"280\" height=\"180\" fill=\"#1e293b\" rx=\"15\" />\n    <circle cx=\"80\" cy=\"100\" r=\"45\" fill=\"#06b6d4\" />\n    <rect x=\"160\" y=\"55\" width=\"100\" height=\"90\" fill=\"#a855f7\" rx=\"10\" />\n    <line x1=\"50\" y1=\"170\" x2=\"250\" y2=\"170\" stroke=\"white\" stroke-width=\"2\" />\n    <text x=\"100\" y=\"185\" fill=\"white\" font-size=\"12\">SVG is scalable!</text>\n  </svg>\n</body>\n</html>"
  }],
  output: ["[SVG with circle, rectangle, line and text]"],
  commonMistakes: [
    "Complex designs ke liye SVG mein directly code karna (vector editing tools use karo)",
    "Bitmap images (JPG/PNG) ko SVG samajh lena — dono different hain",
    "viewBox attribute na dena — SVG responsive nahi banega",
    "SVG inline CSS ko external CSS se override karna bhool jana"
  ],
  bestPractices: [
    "Simple icons aur logos ke liye SVG use karo",
    "viewBox attribute do responsive SVG ke liye",
    "CSS styles se SVG ko customize kar sakte hain (fill, stroke, etc.)",
    "Accessibility ke liye <title> aur <desc> tags SVG ke andar do"
  ],
  tips: [
    "SVG icons sirf HTML mein copy-paste karo — external file load karne ki zaroorat nahi",
    "CSS animations SVG elements pe laga sakte hain — rotate, pulse, etc.",
    "Figma ya Illustrator se SVG export kar sakte hain"
  ],
  practice: [
    "SVG se ek simple logo banao",
    "Circle, rect, line teeno shapes ka use karke ek illustration banao",
    "SVG text element ka use karke styled heading banao"
  ],
  exercise: {
    instruction: "Ek SVG graphic banao jisme ek circle, rectangle, line aur text ho. viewBox attribute use karo responsive banane ke liye.",
    hint: "viewBox=\"0 0 300 200\" se coordinate system set hota hai.",
    starterCode: "<svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\">\n  <circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"cyan\" />\n</svg>"
  },
  quiz: [
    { question: "SVG ka full form kya hai?", options: ["Simple Vector Graphics", "Scalable Vector Graphics", "Standard Visual Graphics", "Scalable Visual Grid"], answer: 1, explanation: "SVG = Scalable Vector Graphics. Vector graphics jo bina quality loss ke scale ho sakte hain." },
    { question: "SVG aur Canvas mein kya antar hai?", options: ["Dono same hain", "SVG vector hai (resizable), Canvas pixel hai (not resizable)", "Canvas vector hai, SVG pixel hai", "SVG sirf images ke liye"], answer: 1, explanation: "SVG vector-based hai (quality loss ke bina scale hota hai), Canvas pixel-based hai (resolution dependent)." }
  ],
  interview: [
    { question: "SVG kya hai?", answer: "SVG (Scalable Vector Graphics) XML-based vector image format hai. Ye shapes, lines, curves, text ko code mein define karta hai. Bina quality loss ke resize ho sakta hai." },
    { question: "SVG aur Canvas mein kya antar hai?", answer: "SVG vector-based hai — infinite resolution, DOM accessible, small file size. Canvas pixel-based hai — large files, fast rendering, DOM accessible nahi. SVG logos/icons ke liye, Canvas games/charts ke liye best hai." }
  ],
  assignment: {
    title: "SVG Illustration Assignment",
    description: "SVG se ek creative illustration banayein.",
    tasks: ["Minimum 5 different SVG shapes use karo", "CSS se SVG ko style karo (fill, stroke, hover effects)", "Animation add karo using CSS keyframes", "Responsive SVG banakar viewBox use karo", "Accessibility ke liye title aur desc tags do"],
    submission: "Code aur screenshot submit karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - SVG Guide", url: "https://developer.mozilla.org/en-US/docs/Web/SVG" },
    { title: "SVG Tutorial", url: "https://www.w3schools.com/graphics/svg_intro.asp" },
    { title: "SVG Animation", url: "https://css-tricks.com/svg-animation-guide/" }
  ],
  summary: [
    "SVG vector graphics hai jo bina quality loss ke scale hote hain.",
    "Circle, rect, path jaise shapes SVG mein bana sakte hain.",
    "viewBox attribute se responsive SVG banate hain.",
    "CSS se SVG ko style aur animate kar sakte hain."
  ]
};

export default lesson;
