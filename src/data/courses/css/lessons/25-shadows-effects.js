const lesson = {
  id: 25,
  slug: "shadows-effects",
  title: "CSS Shadows & Effects",
  description: "Master box-shadow, text-shadow, filters, and modern depth effects",
  difficulty: "Intermediate",
  duration: "35 min",
  heroImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800",
  tags: ["CSS", "Shadows", "Effects", "Filters"],
  theory: [
    "Shadows CSS ke visual depth effects hain jo elements ko 3D feel dete hain — flat design ko realistic aur premium banate hain",
    "box-shadow element ke box ke around shadow create karta hai — isme offset-x, offset-y, blur-radius, spread-radius, color aur inset values hoti hain",
    "box-shadow syntax: box-shadow: offset-x offset-y blur-radius spread-radius color inset (sab optional except offset-x aur offset-y)",
    "Multiple shadows ek hi element pe comma se separate karke add kar sakte hain — isse complex layered effects milte hain",
    "text-shadow text ke characters ke peeche shadow daalta hai — isme offset-x offset-y blur-radius color hota hai (spread nahi hota text-shadow mein)",
    "drop-shadow() filter CSS filter hai jo image ke actual shape ke around shadow banata hai — box-shadow rectangle cut karta hai, drop-shadow image edges follow karta hai",
    "Inset shadow box-shadow mein inset keyword se andar ki taraf shadow daalta hai — depressed ya pressed effect ke liye use hota hai",
    "Glow effects shadow ko element ke color ke saath match karke ya bright color dekar banaya jaata hai — blur-radius zyada rakho aur color bright",
    "Neumorphism (Neo + Skeuomorphism) ek modern design trend hai jo soft shadows ka use karta hai — light source ek taraf se aata hai",
    "filter property mein drop-shadow ke alawa bhi effects hain: blur, brightness, contrast, grayscale, sepia, hue-rotate, invert, opacity, saturate"
  ],
  examples: [
    { title: "Elevated Card with Box Shadow", description: "Card ko lift karne wala realistic shadow", code: ".card {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n  transition: box-shadow 0.3s;\n}\n.card:hover {\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);\n}", result: "Card ka shadow hover pe aur zyada spread ho jayega, card upar utha hua lagega" },
    { title: "Neon Glow Text", description: "Text ke around neon glow effect", code: "h1 {\n  color: #fff;\n  text-shadow:\n    0 0 7px #fff,\n    0 0 10px #fff,\n    0 0 21px #fff,\n    0 0 42px #0fa,\n    0 0 82px #0fa,\n    0 0 92px #0fa,\n    0 0 102px #0fa,\n    0 0 151px #0fa;\n}", result: "White text ke around green neon glow dikhega jo multiple layers se bana hai" },
    { title: "Neumorphism Button", description: "Soft shadows se bana 3D button effect", code: ".neumorph-btn {\n  background: #e0e5ec;\n  border: none;\n  border-radius: 20px;\n  padding: 20px 40px;\n  box-shadow:\n    9px 9px 16px rgba(163, 177, 198, 0.6),\n    -9px -9px 16px rgba(255, 255, 255, 0.8);\n  transition: all 0.2s;\n}\n.neumorph-btn:active {\n  box-shadow:\n    inset 9px 9px 16px rgba(163, 177, 198, 0.6),\n    inset -9px -9px 16px rgba(255, 255, 255, 0.8);\n}", result: "Button pe bahar ki taraf shadow hai aur dabane pe andar ki taraf shadow ho jayega" }
  ],
  syntax: [
    "box-shadow: offset-x offset-y blur-radius spread-radius color inset;",
    "text-shadow: offset-x offset-y blur-radius color;",
    "filter: drop-shadow(offset-x offset-y blur-radius color);"
  ],
  diagram: [
    "┌────────────────────────────────────────────────────────────┐",
    "│                    CSS SHADOWS & EFFECTS                   │",
    "│                                                            │",
    "│  BOX-SHADOW:                    INSET:                     │",
    "│  ┌──────────────────┐          ┌──────────────────┐       │",
    "│  │  ┌────────────┐  │ ←shadow  │╔══════════════════╗│       │",
    "│  │  │  Element   │  │          │║   Element        ║│ ←inset│",
    "│  │  └────────────┘  │          │╚══════════════════╝│       │",
    "│  └──────────────────┘          └──────────────────┘       │",
    "│                                                            │",
    "│  DROP-SHADOW:                 NEUMORPHISM:                  │",
    "│  ┌──────────────────┐          ┌──────────────────┐        │",
    "│  │  ☆  (shape)      │          │ ╔══════════════╗  │        │",
    "│  │    ↓ drop-shadow │          │ ║ Soft raised   ║  │        │",
    "│  │  ☆  (shadow)     │          │ ╚══════════════╝  │        │",
    "│  └──────────────────┘          └──────────────────┘        │",
    "└────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "Layered Shadow Card with Hover Effect", language: "css", code: ".glass-card {\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  border-radius: 16px;\n  padding: 30px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow:\n    0 4px 6px rgba(0, 0, 0, 0.07),\n    0 10px 15px rgba(0, 0, 0, 0.1),\n    0 20px 40px rgba(0, 0, 0, 0.15);\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.glass-card:hover {\n  transform: translateY(-8px) scale(1.02);\n  box-shadow:\n    0 8px 12px rgba(0, 0, 0, 0.1),\n    0 20px 30px rgba(0, 0, 0, 0.15),\n    0 40px 60px rgba(0, 0, 0, 0.2);\n}" },
    { title: "Image with Drop-shadow Filter", language: "css", code: ".logo {\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));\n  transition: filter 0.3s;\n}\n\n.logo:hover {\n  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))\n          brightness(1.1);\n}\n\n/* Box-shadow vs Drop-shadow comparison */\n.box-shadow-example {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  /* Rectangular shadow on the box */\n}\n\n.drop-shadow-example {\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));\n  /* Shadow follows the actual shape (PNG with transparency) */\n}" },
    { title: "Filter Effects Gallery", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .gallery { display: flex; gap: 20px; flex-wrap: wrap; }\n    .gallery img {\n      width: 200px; height: 200px;\n      object-fit: cover;\n      border-radius: 12px;\n      transition: filter 0.3s;\n    }\n    .blur:hover { filter: blur(4px); }\n    .brightness:hover { filter: brightness(1.5); }\n    .contrast:hover { filter: contrast(200%); }\n    .grayscale { filter: grayscale(100%); }\n    .grayscale:hover { filter: grayscale(0%); }\n    .sepia { filter: sepia(100%); }\n    .sepia:hover { filter: sepia(0%); }\n    .hue:hover { filter: hue-rotate(180deg); }\n    .multi:hover { filter: contrast(150%) brightness(1.2) sepia(30%); }\n  </style>\n</head>\n<body>\n  <div class=\"gallery\">\n    <img class=\"blur\" src=\"https://picsum.photos/200?1\" alt=\"Blur\">\n    <img class=\"brightness\" src=\"https://picsum.photos/200?2\" alt=\"Bright\">\n    <img class=\"contrast\" src=\"https://picsum.photos/200?3\" alt=\"Contrast\">\n    <img class=\"grayscale\" src=\"https://picsum.photos/200?4\" alt=\"Grayscale\">\n    <img class=\"sepia\" src=\"https://picsum.photos/200?5\" alt=\"Sepia\">\n    <img class=\"hue\" src=\"https://picsum.photos/200?6\" alt=\"Hue Rotate\">\n    <img class=\"multi\" src=\"https://picsum.photos/200?7\" alt=\"Multi\">\n  </div>\n</body>\n</html>" }
  ],
  output: [
    "Glassmorphism card me blur background, layered shadows, aur hover pe lift effect dikhega",
    "PNG image ke actual shape ke around shadow hoga (transparent parts mein nahi), box-shadow se better",
    "Filter effects gallery mein hover karne par har image different filter effect dikhayegi"
  ],
  commonMistakes: [
    "Box-shadow mein comma bhoolna multiple shadows mein — har shadow ko comma se separate karna zaroori hai warna poori declaration fail ho jayegi",
    "Text-shadow ko box-shadow ki tarah use karna — text-shadow mein spread-radius nahi hota, sirf offset-x offset-y blur-radius color",
    "Drop-shadow filter ko box-shadow samajh lena — dono alag hain: box-shadow box ke rectangle pe shadow daalta hai, drop-shadow element ke actual shape pe",
    "Neumorphism mein sirf ek taraf shadow dena — neumorphism ke liye do shadows chahiye: ek light source side (white) aur ek dark side (gray)",
    "Shadow colors ke liye hamesha black use karna — context ke hisaab se shadow colors match karo, jaise card ke background ke hisaab se rgba use karo"
  ],
  bestPractices: [
    "Shadows ke liye rgba ya hsla colors use karo taaki transparency control ho sake — pure black shadow unnatural lagta hai",
    "Multiple shadows ka use karo realistic depth ke liye — ek chhota sharp shadow aur ek bada soft shadow",
    "Performance ka dhyan rakho — zyada shadows aur blur effects rendering slow kar sakte hain, khaas mobile pe",
    "Hover effects mein transitions add karo — shadow sudden change nahi hona chahiye, smooth transition better UX deta hai",
    "Dark mode mein shadow colors adjust karo — dark background pe light shadows use karo (white/light rgba)"
  ],
  tips: [
    "Box-shadow generator tools use karo jaise CSSmatic ya Neumorphism.io — complex shadows manually likhna mushkil hai",
    "filter: drop-shadow() ko PNG images ke saath use karo jisme transparency ho — isse shadow object ke exact shape aayegi",
    "backdrop-filter: blur() ke saath box-shadow combine karke glassmorphism effect banao — modern aur attractive UI ke liye"
  ],
  practice: [
    "Ek professional pricing card banaye jisme multiple layered shadows ho aur hover pe effect change ho",
    "Ek image gallery banaye jisme different filter effects (grayscale, sepia, blur, brightness) hover pe lagte ho"
  ],
  exercise: {
    instruction: "Create a neumorphism-inspired calculator button grid with inset shadows on press and a glassmorphism display panel",
    hint: "Use multiple box-shadows for neumorphism (light + dark), inset for pressed state, backdrop-filter for glass effect",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #e0e5ec;\n    }\n    .calculator {\n      background: #e0e5ec;\n      padding: 30px;\n      border-radius: 30px;\n      box-shadow:\n        12px 12px 24px rgba(163, 177, 198, 0.6),\n        -12px -12px 24px rgba(255, 255, 255, 0.8);\n    }\n    .display {\n      background: rgba(255, 255, 255, 0.2);\n      backdrop-filter: blur(10px);\n      padding: 20px;\n      border-radius: 16px;\n      margin-bottom: 20px;\n      text-align: right;\n      font-size: 32px;\n      font-weight: 600;\n      min-height: 80px;\n      border: 1px solid rgba(255, 255, 255, 0.3);\n    }\n    /* Add box-shadow to display here */\n    .buttons {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 15px;\n    }\n    .btn {\n      background: #e0e5ec;\n      border: none;\n      padding: 20px;\n      border-radius: 16px;\n      font-size: 18px;\n      font-weight: 600;\n      color: #333;\n      cursor: pointer;\n      transition: all 0.15s;\n    }\n    /* Add neumorphism box-shadow to .btn here */\n    /* Add :active inset shadow here */\n    .btn.operator {\n      color: #3498db;\n    }\n    .btn.equals {\n      background: #3498db;\n      color: white;\n    }\n    /* Add equal button shadow here */\n  </style>\n</head>\n<body>\n  <div class=\"calculator\">\n    <div class=\"display\">0</div>\n    <div class=\"buttons\">\n      <button class=\"btn\">7</button>\n      <button class=\"btn\">8</button>\n      <button class=\"btn\">9</button>\n      <button class=\"btn operator\">÷</button>\n      <button class=\"btn\">4</button>\n      <button class=\"btn\">5</button>\n      <button class=\"btn\">6</button>\n      <button class=\"btn operator\">×</button>\n      <button class=\"btn\">1</button>\n      <button class=\"btn\">2</button>\n      <button class=\"btn\">3</button>\n      <button class=\"btn operator\">−</button>\n      <button class=\"btn\">0</button>\n      <button class=\"btn\">.</button>\n      <button class=\"btn equals\">=</button>\n      <button class=\"btn operator\">+</button>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "box-shadow mein spread-radius kya karta hai?", options: ["Shadow ko blur karta hai", "Shadow ko failaata ya samet ta hai", "Shadow ka color set karta hai", "Shadow ko rotate karta hai"], answer: 1 },
    { question: "box-shadow mein shadow ko andar ki taraf daalne ke liye kaunsa keyword use hota hai?", options: ["inside", "inner", "inset", "internal"], answer: 2 },
    { question: "text-shadow aur box-shadow mein kya antar hai?", options: ["text-shadow mein spread nahi hota", "text-shadow mein blur nahi hota", "text-shadow mein offset nahi hota", "Dono ek jaise hain"], answer: 0 },
    { question: "drop-shadow() filter box-shadow se kaise different hai?", options: ["Koi difference nahi", "drop-shadow element ke actual shape pe shadow daalta hai", "drop-shadow sirf text pe kaam karta hai", "drop-shadow zyada fast hai"], answer: 1 },
    { question: "Neumorphism effect ke liye kitne shadows chahiye?", options: ["Sirf ek shadow", "Do shadows (light + dark)", "Teen shadows", "Chaare shadows"], answer: 1 }
  ],
  interview: [
    { question: "box-shadow aur drop-shadow filter mein kya fark hai?", answer: "box-shadow element ke bounding box ke rectangle shape pe shadow create karta hai, chahe element ka actual shape kuch bhi ho. drop-shadow() filter element ke actual alpha channel ke hisaab se shadow daalta hai — agar PNG image hai jisme transparency hai, toh shadow sirf image ke visible parts ke aaye gi, pure rectangle box ki nahi." },
    { question: "Multiple shadows kaise add karte hain aur yeh kyun useful hain?", answer: "Multiple shadows box-shadow mein comma-separated list se add ki jaati hain: box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1). Yeh realistic depth effects banane mein useful hain — ek chhota sharp shadow (nearby) aur ek bada soft shadow (far away) milakar realistic elevation ka illusion create hota hai." },
    { question: "filter property ke practical uses kya hain?", answer: "filter property ke multiple practical uses hain: hover effects (image hover pe grayscale se color), dark mode toggle (invert colors), image editing (brightness, contrast adjust), loading placeholders (blur), vintage effects (sepia), color branding (hue-rotate), aur performance optimization (will-change ke saath use karke GPU acceleration)." }
  ],
  assignment: [
    "Ek product showcase card banaye jisme glassmorphism effect, layered shadows, aur hover glow effect ho",
    "Ek image filter editor banaye jisme sliders ho brightness, contrast, blur, grayscale adjust karne ke liye",
    "Ek neumorphism form design banaye jisme inputs aur buttons ke soft shadows ho aur active states proper ho"
  ],
  resources: [
    { title: "CSS Shadow Generator", url: "https://www.cssmatic.com/box-shadow" },
    { title: "Neumorphism Generator", url: "https://neumorphism.io/" },
    { title: "MDN CSS Filter Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/filter" }
  ],
  summary: "CSS shadows aur effects elements ko depth aur realism dene ke liye use hote hain. box-shadow element ke box ke around shadow banata hai jisme offset, blur, spread, color aur inset options hote hain. text-shadow text ke characters ke peeche shadow daalta hai. drop-shadow() filter actual shape ke hisaab se shadow banata hai. Multiple shadows se layered realistic effects bana sakte hain. filter property mein drop-shadow ke alawa blur, brightness, contrast, grayscale, sepia, hue-rotate jaise effects hain. Neumorphism soft shadows ka modern design trend hai jisme light source ke hisaab se do shadows (light aur dark) use hoti hain."
};

export default lesson;
