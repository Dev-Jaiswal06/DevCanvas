const lesson = {
  id: 9,
  slug: "fonts",
  title: "CSS Fonts",
  description: "Font family, sizing, weight, Google Fonts, and @font-face ka complete guide",
  difficulty: "Beginner",
  duration: "40 min",
  heroImage:
    "https://images.unsplash.com/photo-1527383418404-852f6e4424ff?w=800",
  tags: ["CSS", "Fonts", "Typography", "Google Fonts"],
  theory: [
    "CSS fonts properties se aap text ki font family, size, weight, style sab control kar sakte ho.",
    "font-family specify karta hai ki kaunsa font apply hoga. Multiple fonts comma se likho — pehla available font use hoga, nahi to next. Fallback font (serif/sans-serif) hamesha last mein rakho.",
    "font-size text ka size set karta hai. Units: px (fixed), em (parent font size ke relative), rem (root font size ke relative), % (percentage).",
    "font-weight text ki thickness control karta hai. Common values: normal (400), bold (700), bolder, lighter. 100 se 900 tak numeric values bhi use kar sakte ho agar font support karta hai.",
    "font-style text ko italic, oblique, ya normal set karta hai. Safari/Chrome mein italic aur oblique mostly same dikhte hain.",
    "font-variant small-caps effect deta hai — text lowercase rahega par capital letters jaise dikhega.",
    "Google Fonts free web fonts ka library hai. CSS mein @import se link karo ya HTML mein <link> tag se include karo.",
    "@font-face rule se aap apni custom font file (.woff, .ttf, .otf) use kar sakte ho. Yeh local ya server se load hoti hai.",
    "Web-safe fonts wo fonts hain jo har computer mein by default hote hain — Arial, Verdana, Times New Roman, Georgia, Courier New.",
    "Font shorthand ek line mein multiple font properties likhne ka tarika hai: font: style variant weight size/line-height family;",
    "em unit parent element ke font-size pe depend karta hai — isliye nested elements mein unpredictable ho sakta hai. rem unit sirf root (html) ke font-size pe depend karta hai, isliye zyada predictable hai.",
    "System fonts stack modern websites mein use hota hai: font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;",
  ],
  examples: [
    {
      title: "Google Fonts Usage",
      description: "Google Fonts ko HTML mein link kar ke use karna.",
      code: '/* HTML mein <head> mein add karo */\n<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">\n\n/* CSS mein */\nbody { font-family: "Roboto", sans-serif; }',
      result: "Roboto font apply ho jayega puri website pe",
    },
    {
      title: "Font Shorthand",
      description: "Ek hi property mein sari font settings.",
      code: 'p {\n  font: italic small-caps bold 16px/1.8 "Georgia", serif;\n}',
      result: "Italic, small-caps, bold, 16px size, 1.8 line-height, Georgia font",
    },
  ],
  syntax: [
    "font-family: 'Open Sans', Arial, sans-serif;",
    "font: italic small-caps bold 18px/1.6 'Segoe UI', sans-serif;",
    "@font-face { font-family: 'MyFont'; src: url('fonts/myfont.woff2'); }",
  ],
  diagram: [
    "┌────────────────── Font Shorthand ──────────────────┐",
    "│ font: style | variant | weight | size/line | family │",
    "│ font: italic  small-caps bold  16px/1.5   Arial;   │",
    "└─────────────────────────────────────────────────────┘",
    "┌─────────── Units ───────────┐",
    "│ px → Fixed size             │",
    "│ em → Relative to parent     │",
    "│ rem → Relative to root (16px)│",
    "│ % → Percentage of parent    │",
    "│ vw → 1% of viewport width   │",
    "└──────────────────────────────┘",
  ],
  code: [
    {
      title: "Google Fonts with Multiple Weights",
      language: "css",
      code: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
}

p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.7;
}

.small-text {
  font-weight: 300;
  font-size: 0.875rem;
}`,
    },
    {
      title: "@font-face Custom Font",
      language: "css",
      code: `@font-face {
  font-family: 'CustomFont';
  src: url('fonts/custom-font.woff2') format('woff2'),
       url('fonts/custom-font.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CustomFont';
  src: url('fonts/custom-font-bold.woff2') format('woff2');
  font-weight: bold;
}

body {
  font-family: 'CustomFont', Arial, sans-serif;
}`,
    },
    {
      title: "System Font Stack",
      language: "css",
      code: `body {
  font-family: -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Helvetica Neue', Arial, sans-serif;
}`,
    },
  ],
  output: [
    "h1 → Bold Poppins 2.5rem (40px approx)",
    "p → Normal Poppins 1rem (16px) with good spacing",
    "body → System fonts se fast loading, native feel",
  ],
  commonMistakes: [
    "font-family mein fallback font na dena — agar custom font load na ho to browser default dikhata hai jo ugly ho sakta hai",
    "Font weight numeric value dena jo actual font mein exist nahi karta — browser fake bold bana deta hai jo blurry lagta hai",
    "Google Fonts ka @import HTML ke <link> se slow hota hai — production mein <link> use karo ya preload karo",
    "em unit ka nested elements mein unpredictable behavior — prefer rem over em for font sizes",
    "@font-face mein sirf .ttf use karna — .woff2 zyada compressed hai, isko prefer karo",
  ],
  bestPractices: [
    "Hamesha fallback font family do — 'Google Font', Arial, sans-serif",
    "Performance ke liye woff2 format use karo, woff2 > woff > ttf in terms of compression",
    "Font-display: swap use karo @font-face mein — text jaldi dikhega, font baad mein load hoga",
    "Google Fonts mein sirf required weights select karo — har extra weight page load badhata hai",
    "Body ke liye 16px (1rem) minimum font size rakho readability ke liye",
  ],
  tips: [
    "Google Fonts mein 'family' parameter mein weights aur styles comma se append karo — Roboto:wght@400;700;700i",
    "font-display: swap se FOIT (Flash of Invisible Text) se bach sakte ho — text pehle fallback font mein dikhega",
    "Variable fonts ek hi file mein multiple weights provide karte hain — weight range 300-800 specify kar sakte ho",
  ],
  practice: [
    "Google Fonts se 'Poppins' font import karo aur heading bold 2rem rakho",
    "@font-face ka use karke ek custom font file (.woff2) load karo aur apply karo",
  ],
  exercise: {
    instruction:
      "CSS likho jo Poppins font Google Fonts se import kare, body pe apply kare, h1 ko 700 weight aur 2.5rem size de, paragraph ko 400 weight aur 1rem size de.",
    hint: "@import rule use karo, font-family Poppins set karo, font-weight aur font-size properties use karo.",
    starterCode: `@import url('');

body {
  font-family: ;
}

h1 {
  font-weight: ;
  font-size: ;
}

p {
  font-weight: ;
  font-size: ;
}`,
  },
  quiz: [
    {
      question: "rem unit kis element ke font-size pe depend karta hai?",
      options: ["Parent element", "Root element (html)", "Body element", "Container element"],
      answer: 1,
    },
    {
      question: "Web-safe fonts kya hote hain?",
      options: [
        "Fonts jo Google se download hote hain",
        "Fonts jo sabhi computers mein by default hote hain",
        "Fonts jo sirf web browsers mein work karte hain",
        "Fonts jo licensed hote hain",
      ],
      answer: 1,
    },
    {
      question: "@font-face mein sabse recommended font format kya hai?",
      options: [".ttf", ".otf", ".woff2", ".eot"],
      answer: 2,
    },
    {
      question: "Font shorthand mein sahi order kya hai?",
      options: [
        "family style weight size/line",
        "size family style weight/line",
        "style variant weight size/line family",
        "weight style variant family size/line",
      ],
      answer: 2,
    },
    {
      question: "Google Fonts ko include karne ka sabse fast tarika kya hai?",
      options: ["@import in CSS", "<link> in HTML", "@font-face", "download karke local serve karo"],
      answer: 1,
    },
  ],
  interview: [
    {
      question: "em aur rem mein kya difference hai?",
      answer:
        "em parent element ke font-size ke relative hota hai — nested elements mein compounding hoti hai. rem root (html tag) ke font-size ke relative hota hai, predictable aur consistent rehta hai.",
    },
    {
      question: "font-display: swap ka kya matlab hai?",
      answer:
        "Iska matlab hai ki browser text ko pehle fallback font mein display karega aur jab custom font load ho jayega to swap kar dega. Isse FOIT (text invisible rehna) prevent hota hai.",
    },
    {
      question: "Variable fonts kya hote hain?",
      answer:
        "Variable fonts ek hi file mein multiple font weights aur styles ko combine karte hain. Ek variable font file 10-20 regular font files ka kaam kar sakti hai, jisse page load time kam hota hai.",
    },
  ],
  assignment: [
    "Google Fonts ka use karke ek blog post style karo — Poppins headings aur Merriweather body text ke saath",
    "@font-face ka use karke ek local font file load karo aur usse navigation bar mein apply karo",
    "Responsive font sizes implement karo jahan mobile pe smaller fonts ho aur desktop pe larger",
  ],
  resources: [
    {
      title: "Google Fonts",
      url: "https://fonts.google.com/",
    },
    {
      title: "MDN - @font-face",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face",
    },
    {
      title: "CSS Font Shorthand Generator",
      url: "https://www.webfx.com/blog/web-design/font-shorthand-generator/",
    },
  ],
  summary:
    "CSS fonts se aap typography ko professional bana sakte ho. Hamesha fallback font do taki koi bhi browser aapka design barbaad na kare. font-size ke liye rem use karo — predictable aur accessible. Performance ke liye Google Fonts ka <link> method use karo, aur custom fonts ke liye woff2 format prefer karo. Font shorthand se code clean rakho: font: italic bold 16px/1.5 'Arial', sans-serif. System fonts stack website ko native feel deta hai. Variable fonts future hai — ek file, infinite possibilities.",
};

export default lesson;
