const lesson = {
  id: 16,
  slug: "float-clear",
  title: "CSS Float & Clear",
  description: "Legacy layout techniques: float, clear, overflow, clearfix, and text wrapping",
  difficulty: "Intermediate",
  duration: "35 min",
  heroImage: "https://images.unsplash.com/photo-1550681560-5c41e6b6e5b5?w=800",
  tags: ["CSS", "Float", "Clear", "Layout"],
  theory: [
    "Float property originally images ke around text wrap karane ke liye bani thi (newspaper style). Baad mein iska use layout ke liye ho gaya.",
    "Float ki values hain: left, right, none (default). Element ko left ya right push karta hai aur baaki content uske around flow karta hai.",
    "Jab element float hota hai, to wo document flow se partially nikal jaata hai. Parent container uski height consider nahi karta — isse collapse problem hoti hai.",
    "Clear property float ke effect ko rokne ke liye use hoti hai. Values: left, right, both, none. Clear:both dono side ka float effect khatam kar deta hai.",
    "Clearfix hack — jab parent container collapsed ho (saare children float hain), to parent ki height zero ho jaati hai. Clearfix is problem ko solve karta hai.",
    "Classic clearfix: .clearfix::after { content: ''; display: table; clear: both; }. Ye pseudo-element parent ke andar ek invisible clearing agent create karta hai.",
    "Overflow: hidden ya auto bhi parent collapse problem solve kar sakta hai — ye parent ko float children ki height consider karne par majboor karta hai.",
    "Text wrapping images ke around — float ka original use case. Image ko float:left dekar text uske right side aur neeche flow kar sakta hai.",
    "Legacy layouts: float-based layouts mein columns banane ke liye floated divs use hote the. Lekin Flexbox aur Grid aa gaye hain to ab float layout legacy hai.",
    "Float neeche ki element par bhi asar daalta hai — neighbouring elements float ke neeche aa sakte hain. Isliye clear property zaroori hoti hai.",
    "Modern CSS me float ka use sirf text wrapping ke liye karna chahiye — layout ke liye Flexbox ya Grid use karo.",
    "Float aur clear grid/flexbox ke comparison me limited hai — columns equal height nahi bana sakte, centering nahi kar sakte, responsive banana mushkil hai."
  ],
  examples: [
    {
      title: "Image with Text Wrapping",
      description: "Float ka asli use — image ke around text wrap karna.",
      code: "img { float: left; margin-right: 15px; margin-bottom: 10px; }",
      result: "Image left par hai, text uske right side aur neeche flow ho raha hai."
    },
    {
      title: "Clear Both",
      description: "Float effect ko rokne ke liye clear use karna.",
      code: ".box1 { float: left; width: 45%; }\n.box2 { float: right; width: 45%; }\n.footer { clear: both; }",
      result: "Do columns float hain, footer unke neeche properly display ho raha hai."
    },
    {
      title: "Clearfix Hack",
      description: "Parent collapse problem ko clearfix se solve karna.",
      code: ".parent { border: 2px solid red; }\n.child { float: left; width: 100px; height: 100px; }\n.parent::after { content: ''; display: table; clear: both; }",
      result: "Parent ki border float children ko properly enclose kar rahi hai."
    }
  ],
  syntax: [
    { property: "float", values: "left | right | none", example: "float: left;" },
    { property: "clear", values: "left | right | both | none", example: "clear: both;" },
    { property: "overflow (as clearfix)", values: "hidden | auto", example: "overflow: hidden;" }
  ],
  diagram: [
    "TEXT WRAPPING WITHOUT FLOAT:",
    "[Image][ Text goes below ]",
    "",
    "TEXT WRAPPING WITH FLOAT:LEFT:",
    "┌────────┐ ┌──────────────────────┐",
    "│ Image  │ │ Text wraps around    │",
    "│ float  │ │ the image on right   │",
    "│ left   │ │ and continues below  │",
    "└────────┘ └──────────────────────┘",
    "",
    "CLEARFIX HACK:",
    "Before (collapsed):",
    "┌───── Parent ─────┐",
    "│ (no height!)     │",
    "│ ┌──┐ ┌──┐       │",
    "│ │  │ │  │       │",
    "│ └──┘ └──┘       │",
    "└──────────────────┘",
    "",
    "After clearfix::after:",
    "┌───── Parent ─────┐",
    "│ ┌──┐ ┌──┐       │",
    "│ │  │ │  │       │",
    "│ └──┘ └──┘       │",
    "│ (clearfix)      │",
    "└──────────────────┘"
  ],
  code: [
    {
      title: "Float Layout with Clearfix",
      language: "html",
      code: "<div class=\"container clearfix\">\n  <div class=\"sidebar\">Sidebar (30%)</div>\n  <div class=\"main\">Main Content (70%)</div>\n</div>\n<div class=\"footer\">Footer - clear both</div>\n\n<style>\n.container { border: 2px solid #333; padding: 5px; }\n.sidebar {\n  float: left;\n  width: 30%;\n  height: 200px;\n  background: #3498db;\n  color: white;\n  padding: 10px;\n}\n.main {\n  float: right;\n  width: 68%;\n  height: 200px;\n  background: #2ecc71;\n  color: white;\n  padding: 10px;\n}\n.footer {\n  clear: both;\n  background: #333;\n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  text-align: center;\n}\n.clearfix::after {\n  content: '';\n  display: table;\n  clear: both;\n}\n</style>"
    },
    {
      title: "Text Wrap Around Image",
      language: "html",
      code: "<div class=\"article\">\n  <img src=\"https://via.placeholder.com/150\" alt=\"Sample\" class=\"float-img\">\n  <p class=\"first-para\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>\n</div>\n\n<style>\n.float-img {\n  float: left;\n  margin: 0 20px 10px 0;\n  border-radius: 8px;\n}\n.article {\n  max-width: 600px;\n  font-family: Georgia, serif;\n  line-height: 1.6;\n}\n.first-para::first-letter {\n  font-size: 3em;\n  float: left;\n  margin-right: 8px;\n  color: #c0392b;\n  font-weight: bold;\n}\n</style>"
    }
  ],
  output: [
    "Floated sidebar left par, main content right par — do column layout",
    "Footer clear:both se dono columns ke neeche properly display",
    "Image float left hone se text uske right aur neeche wrap hota hai"
  ],
  commonMistakes: [
    "Float elements ke baad clear lagaana bhool jana — neeche ka content upar aa jaata hai",
    "Parent container ka collapse — float children ko parent properly enclose nahi karta",
    "Float ko layout tool ki tarah use karna (ab Flexbox/Grid better hai)",
    "Floated elements ka width percentage me na dena — responsive break ho jaata hai",
    "Float and absolute position ek saath use karna — float ka effect khatam ho jaata hai"
  ],
  bestPractices: [
    "Float ka use sirf text wrapping ke liye karo, layout ke liye nahi",
    "Clearfix hack hamesha parent container par lagao jab saare children float ho",
    "Float elements ko width dena mat bhoolo — otherwise default behavior unexpected ho sakta hai",
    "Overflow: hidden se parent collapse avoid ho sakta hai lekin content clip ho sakta hai — clearfix safer hai",
    "Naye projects mein Flexbox ya Grid use karo, float layout legacy hai"
  ],
  tips: [
    "Clearfix bahut purani problem hai — .clearfix class apne CSS framework me ready rakho",
    "Drop cap effect banane ke liye ::first-letter ko float:left karo",
    "Float ke saath margin hamesha do — text aur floated element ke beech gap acha lagta hai"
  ],
  practice: [
    "Ek blog post banaiye jisme image float:left ho aur text wrap ho",
    "Ek 3-column float layout banaiye aur clearfix apply kariye"
  ],
  exercise: {
    instruction: "Ek article page banaiye jisme ek floated image ho, uske around text wrap ho, aur article ke baad ek clear:both footer ho. Isme drop cap effect bhi add karein.",
    hint: "Image ko float:left do, margin:0 15px 10px 0 rakho. ::first-letter ko bhi float:left kar ke drop cap banao. Article ke end mein clear:both div rakhna na bhoolo.",
    starterCode: "<article>\n  <h1>My Travel Diary</h1>\n  <img src=\"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400\" alt=\"Travel\" width=\"250\">\n  <p>Exploring the mountains was an incredible experience...</p>\n  <p>The crisp air and scenic views made every step worth it...</p>\n  <p class=\"author\">— Written by Alex</p>\n</article>\n\n<style>\n/* Add float and clear styles */\n</style>"
  },
  quiz: [
    {
      question: "Float property ka original purpose kya tha?",
      options: ["Layout banane ke liye", "Text wrapping ke liye", "Images align karne ke liye", "Responsive design ke liye"],
      answer: 1
    },
    {
      question: "Clear property ki value 'both' ka kya matlab hai?",
      options: ["Left side clear", "Right side clear", "Dono side clear", "Kuch clear nahi"],
      answer: 2
    },
    {
      question: "Clearfix hack kya problem solve karta hai?",
      options: ["Image alignment", "Parent collapse", "Text color", "Margin collapse"],
      answer: 1
    },
    {
      question: "Float ke baad clear na lagane se kya hota hai?",
      options: ["Kuch nahi hota", "Element disappear ho jaata hai", "Neeche ka content float ke neeche aa sakta hai", "Float element bada ho jaata hai"],
      answer: 2
    },
    {
      question: "Modern CSS me float ka use kahan karna chahiye?",
      options: ["Full page layout", "Columns banane ke liye", "Sirf text wrapping ke liye", "Kahan bhi nahi"],
      answer: 2
    }
  ],
  interview: [
    {
      question: "Float property kaise kaam karti hai aur iski problems kya hain?",
      answer: "Float element ko left ya right push karta hai aur content uske around flow karta hai. Main problems: parent collapse, equal height columns nahi bana sakte, centering mushkil hai, responsive banana difficult hai."
    },
    {
      question: "Clearfix hack kya hai aur kaise kaam karta hai?",
      answer: "Clearfix ek technique hai jo floated elements ke parent collapse problem solve karti hai. Pseudo-element ::after ka use karke content: '' with display: table aur clear: both se parent apne floated children ki height recognise kar leta hai."
    },
    {
      question: "Float-based layout aur Flexbox/Grid me kya difference hai?",
      answer: "Float layout bahut limited hai — equal height columns nahi, centering nahi, responsive banana mushkil. Flexbox aur Grid zyada powerful hain — alignment, spacing, order, responsive design easily handle karte hain."
    }
  ],
  assignment: [
    "Ek newspaper-style article banaiye jisme image float, drop cap, aur multiple paragraphs with proper clear ho",
    "Ek 2-column float layout banaiye jisme left side navigation aur right side content ho, with clearfix",
    "Ek intro paragraph banaiye jisme ek icon float left ho, text wrap ho, aur neeche clear both button ho"
  ],
  resources: [
    { title: "MDN - Float", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/float" },
    { title: "CSS-Tricks - Clearfix", url: "https://css-tricks.com/snippets/css/clear-fix/" },
    { title: "All About Floats", url: "https://css-tricks.com/all-about-floats/" }
  ],
  summary: "Float property CSS ki purani layout technique hai jo originally text wrapping ke liye bani thi. Element ko left ya right push karta hai aur baaki content uske around flow hota hai. Lekin float se parent collapse problem hoti hai jise clearfix hack se solve karte hain. Clear property float effect ko rokne ke liye use hoti hai. Ab modern CSS mein Flexbox aur Grid zyada powerful hain isliye float ka use sirf text wrapping (images ke around) ke liye karna chahiye."
};

export default lesson;
