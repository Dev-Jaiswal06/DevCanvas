const lesson = {
  id: 17,
  slug: "css-overflow",
  title: "CSS Overflow",
  description: "Control content that spills outside its container: visible, hidden, scroll, auto, and text-overflow",
  difficulty: "Beginner",
  duration: "30 min",
  heroImage: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800",
  tags: ["CSS", "Overflow", "Scrolling", "Text"],
  theory: [
    "CSS overflow property control karti hai ki jab content container se bada ho to kya hoga. Bahut important property hai layout management ke liye.",
    "Visible (default) — content container ke bahar bhi dikhta hai. Overflow crop nahi hota, lekin ye layout tod sakta hai.",
    "Hidden — jo content container se bahar hai wo crop ho jaata hai aur scroll nahi ho sakta. Useful for clean layout but content loss risk.",
    "Scroll — hamesha scrollbar dikhta hai chahe content zyada ho ya nahi. Predictable layout ke liye useful.",
    "Auto — browser decide karta hai scrollbar kahan lage. Sirf zaroorat par scrollbar dikhta hai. Most commonly used value.",
    "Overflow-x aur overflow-y — horizontal aur vertical overflow alag-alag control karne ke liye. Jaise overflow-x: hidden; overflow-y: auto;",
    "Text-overflow — text ko ellipsis (...) se truncate karne ke liye. Iske liye teen properties chahiye: white-space: nowrap, overflow: hidden, text-overflow: ellipsis.",
    "Overflow sirf block-level elements par kaam karta hai jinki specified height ya width ho. Inline elements par kaam nahi karta.",
    "Overflow: hidden bhi parent collapse problem solve kar sakta hai (float se). Isse naya Block Formatting Context (BFC) banta hai.",
    "Scrollable containers mein focus management important hai — keyboard users tab navigation kar sakte hain.",
    "Overflow ko smooth scrolling ke saath use kar sakte ho — scroll-behavior: smooth se acha UX milta hai.",
    "Container queries ke saath overflow combine karke truly responsive components bana sakte ho."
  ],
  examples: [
    {
      title: "Overflow Values Comparison",
      description: "Ek hi text ko different overflow values ke saath dekho.",
      code: ".visible { overflow: visible; }\n.hidden { overflow: hidden; }\n.scroll { overflow: scroll; }\n.auto { overflow: auto; }",
      result: "Visible: content bahar dikhta hai. Hidden: crop ho jaata hai. Scroll: hamesha scrollbar. Auto: jab zaroorat ho tab scrollbar."
    },
    {
      title: "Text Truncation with Ellipsis",
      description: "Text overflow hone par dots (...) kaise lagaye.",
      code: ".card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
      result: "Long text 'This is a very long...' — dots se truncate ho gaya."
    },
    {
      title: "Custom Scrollable Box",
      description: "Limited height ka box jisme content scrollable ho.",
      code: ".scroll-box {\n  height: 150px;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n  padding: 10px;\n}",
      result: "150px height ka box, agar text zyada hai to vertical scrollbar aa gaya."
    }
  ],
  syntax: [
    { property: "overflow", values: "visible | hidden | scroll | auto", example: "overflow: auto;" },
    { property: "overflow-x / overflow-y", values: "visible | hidden | scroll | auto", example: "overflow-x: hidden; overflow-y: auto;" },
    { property: "text-overflow", values: "clip | ellipsis | <string>", example: "text-overflow: ellipsis;" }
  ],
  diagram: [
    "CONTAINER WITH CONTENT:",
    "┌────────────────────────────┐",
    "│  Normal content            │",
    "│  fits inside container     │",
    "└────────────────────────────┘",
    "",
    "OVERFLOW: VISIBLE (default):",
    "┌────────────────────────────┐",
    "│  Content overflows         │",
    "│  out of the box...         │",
    "│  ──────────────────────────┘",
    "│  This spills outside!",
    "└── but still visible",
    "",
    "OVERFLOW: HIDDEN:",
    "┌────────────────────────────┐",
    "│  Content is               │",
    "│  clipped here ────         │",
    "└────────────────────────────┘",
    "  (rest is invisible)",
    "",
    "OVERFLOW: SCROLL / AUTO:",
    "┌────────────────────────────┐",
    "│  ┌─ Scrollable ──────────┐ │",
    "│  │ Content that is        │ │",
    "│  │ too long for the       │ │",
    "│  │ box gets a scrollbar   │ │",
    "│  └─────────────────────── │ │",
    "│                      ░    │ │",
    "└────────────────────────────┘"
  ],
  code: [
    {
      title: "Overflow Showcase",
      language: "html",
      code: "<h2>Overflow: Visible</h2>\n<div class=\"box visible\">\n  Ye bahut lamba text hai jo container ke andar nahi samayega aur overflow visible ki wajah se bahar dikhega.\n</div>\n\n<h2>Overflow: Hidden</h2>\n<div class=\"box hidden\">\n  Ye bahut lamba text hai jo container ke bahar chala jaayega lekin hidden ki wajah se crop ho jayega.\n</div>\n\n<h2>Overflow: Scroll</h2>\n<div class=\"box scroll\">\n  Ye bahut lamba text hai. Hamesha scrollbar dikhega chahe content chhota ho ya bada.\n</div>\n\n<h2>Overflow: Auto</h2>\n<div class=\"box auto\">\n  Ye bahut lamba text hai. Sirf jab zaroorat hogi tab scrollbar aayega.\n</div>\n\n<style>\n.box {\n  width: 300px;\n  height: 80px;\n  border: 2px solid #333;\n  margin-bottom: 30px;\n  padding: 5px;\n}\n.visible { overflow: visible; background: #ffeaa7; }\n.hidden { overflow: hidden; background: #81ecec; }\n.scroll { overflow: scroll; background: #fab1a0; }\n.auto { overflow: auto; background: #55efc4; }\n</style>"
    },
    {
      title: "Text Truncation in Cards",
      language: "html",
      code: "<div class=\"card\">\n  <h3 class=\"card-title\">This is a very long title that should be truncated with ellipsis</h3>\n  <p class=\"card-desc\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>\n  <span class=\"card-meta\">3 hours ago · 5 min read</span>\n</div>\n\n<style>\n.card {\n  width: 250px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 16px;\n  font-family: system-ui, sans-serif;\n}\n.card-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1.1rem;\n  margin: 0 0 8px 0;\n}\n.card-desc {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  color: #666;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.card-meta {\n  font-size: 0.8rem;\n  color: #999;\n}\n</style>"
    }
  ],
  output: [
    "Visible: content container ke bahar spill ho gaya (default behavior)",
    "Hidden: extra content crop ho gaya, scroll nahi ho sakta",
    "Scroll: hamesha scrollbar (vertical + horizontal) visible hai",
    "Auto: sirf jab content zyada hai tab scrollbar aaya",
    "Ellipsis: long text '...' se truncate ho gaya"
  ],
  commonMistakes: [
    "Overflow hidden ka use karte waqt content loss ka dhyan na rakhna — important information crop ho sakti hai",
    "Text truncation ke liye sirf text-overflow: ellipsis dena — white-space aur overflow hidden bhi chahiye",
    "Overflow sirf block elements par kaam karta hai — inline elements par lagane se effect nahi milega",
    "Scroll value hamesha dono axes par scrollbar dikhati hai — sirf vertical scroll chahiye to overflow-y use karo",
    "Overflow hidden se float parent collapse toh solve ho jaata hai lekin absolute positioned elements crop ho sakte hain"
  ],
  bestPractices: [
    "Default overflow visible hai — important content overflow se bachane ke liye overflow hidden ya auto use karo",
    "Scrollable containers ki height ya width hamesha define karo nahi to overflow kaam nahi karega",
    "Text truncation ke liye teeno properties ek saath use karo: white-space, overflow, text-overflow",
    "Line clamping (multi-line truncation) ke liye -webkit-line-clamp use karo",
    "Overflow: hidden na use karo jab container me dropdowns ya tooltips ho — wo crop ho jayenge"
  ],
  tips: [
    "Smooth scrolling ke liye scroll-behavior: smooth use karo parent container par",
    "Custom scrollbar styling ke liye ::-webkit-scrollbar pseudo-element use karo",
    "Overflow: auto mobile devices par better hai kyunki native scroll touch hota hai"
  ],
  practice: [
    "Ek fixed-height card banaiye jisme text zyada ho to scroll aaye",
    "Ek product list banaiye jisme long product names ellipsis se truncate ho"
  ],
  exercise: {
    instruction: "Ek article preview card banaiye jisme title single-line ellipsis se truncate ho, description 3 lines ke baad truncated ho, aur poori card scrollable na ho balki fixed height ki ho.",
    hint: "Title ke liye white-space:nowrap + overflow:hidden + text-overflow:ellipsis. Description ke liye -webkit-line-clamp:3. Card ko max-height dekar overflow:hidden rakho.",
    starterCode: "<div class=\"article-card\">\n  <div class=\"article-image\">📷</div>\n  <div class=\"article-content\">\n    <h2 class=\"article-title\">10 Amazing CSS Tricks That Will Blow Your Mind in 2025</h2>\n    <p class=\"article-desc\">CSS has evolved dramatically over the years. From flexbox to grid, from custom properties to container queries, the possibilities are endless. In this comprehensive guide, we will explore ten mind-blowing CSS tricks that will transform the way you write stylesheets forever.</p>\n    <div class=\"article-footer\">\n      <span>John Doe</span>\n      <span>5 min ago</span>\n    </div>\n  </div>\n</div>\n\n<style>\n.article-card {\n  width: 350px;\n  border-radius: 12px;\n  /* Add overflow control here */\n}\n</style>"
  },
  quiz: [
    {
      question: "Overflow property ki default value kya hai?",
      options: ["hidden", "scroll", "visible", "auto"],
      answer: 2
    },
    {
      question: "Text truncation (ellipsis) ke liye kaun si property compulsory nahi hai?",
      options: ["overflow: hidden", "white-space: nowrap", "text-overflow: ellipsis", "font-size: 14px"],
      answer: 3
    },
    {
      question: "Agar sirf vertical scrollbar chahiye to kaunsa property istemal karenge?",
      options: ["overflow: scroll", "overflow-x: scroll", "overflow-y: auto", "overflow: auto"],
      answer: 2
    },
    {
      question: "Overflow hidden se kya problem ho sakti hai?",
      options: ["Kuch nahi", "Content loss ho sakta hai", "Page slow ho jaata hai", "Colors change ho jaate hain"],
      answer: 1
    },
    {
      question: "Multi-line truncation ke liye kaunsa technique use karte hain?",
      options: ["text-overflow: ellipsis", "white-space: nowrap", "-webkit-line-clamp", "overflow: visible"],
      answer: 2
    }
  ],
  interview: [
    {
      question: "CSS overflow properties kya hain aur unka use kya hai?",
      answer: "Overflow control karta hai jab content container ke size se bada ho. Visible (default) content bahar dikhata hai, Hidden crop karta hai, Scroll hamesha scrollbar dikhata hai, Auto sirf zaroorat par scrollbar dikhata hai."
    },
    {
      question: "Text-overflow: ellipsis kaise kaam karta hai?",
      answer: "Ye single-line text truncation ke liye use hota hai. Iske liye teen properties chahiye: white-space: nowrap (text ko ek line me rakhne ke liye), overflow: hidden (extra text crop karne ke liye), aur text-overflow: ellipsis (crop ki jagah dots lagane ke liye)."
    },
    {
      question: "Overflow: hidden ka Block Formatting Context se kya relation hai?",
      answer: "Overflow: hidden (except visible) naya Block Formatting Context (BFC) create karta hai. Isse float collapse problem solve hota hai, margins collapse nahi hote, aur element apne content ke around boundaries bana leta hai."
    }
  ],
  assignment: [
    "Ek FAQ accordion banaiye jisme answers overflow:auto se scrollable ho",
    "Ek product catalog banaiye jisme har product card ke titles ellipsis se truncated ho",
    "Ek chat interface banaiye jisme messages scrollable container me ho"
  ],
  resources: [
    { title: "MDN - Overflow", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow" },
    { title: "CSS-Tricks - Text-Overflow", url: "https://css-tricks.com/almanac/properties/t/text-overflow/" },
    { title: "Line Clampin", url: "https://css-tricks.com/line-clampin/" }
  ],
  summary: "CSS overflow property content ke container se bahar spill hone ko control karti hai. Visible (default) content bahar dikhata hai, Hidden crop karta hai, Scroll hamesha scrollbar dikhata hai, aur Auto sirf zaroorat par. Overflow-x aur overflow-y se axes alag control kar sakte ho. Text truncation ke liye text-overflow: ellipsis with white-space:nowrap aur overflow:hidden use hota hai. Multi-line ke liye -webkit-line-clamp use karte hain. Overflow:hidden naya BFC (Block Formatting Context) create karta hai jo float collapse solve karta hai."
};

export default lesson;
