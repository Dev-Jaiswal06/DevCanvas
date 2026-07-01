const lesson = {
  id: 14,
  slug: "width-height",
  title: "CSS Width & Height",
  description: "Element sizes, responsive units, min/max constraints, aur overflow ka complete guide",
  difficulty: "Beginner",
  duration: "35 min",
  heroImage:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  tags: ["CSS", "Width", "Height", "Units", "Responsive", "Overflow"],
  theory: [
    "CSS width aur height properties se aap elements ka size control kar sakte ho — fixed, relative, ya content-based.",
    "width: auto default value hai. Browser content aur parent ke hisaab se width automatically set karta hai. Block elements parent ki full width lete hain.",
    "% (percentage) width element ke parent ke width ke relative hoti hai. 50% matlab parent ki aadhi width. Parent ki width defined nahi to % work nahi karega.",
    "px (pixels) absolute unit hai — fixed size deta hai jo responsive nahi hota. Specific dimensions ke liye use karo jaise borders, small elements.",
    "vw (viewport width) — 1vw = viewport width ka 1%. 100vw matlab full screen width. Scrollbar ki width bhi include hoti hai isme.",
    "vh (viewport height) — 1vh = viewport height ka 1%. 100vh matlab full screen height. Hero sections ke liye common pattern hai.",
    "max-width element ki maximum width set karta hai. Responsive designs mein important hai — width: 100%; max-width: 1200px combination se element bada nahi hoga 1200px se.",
    "min-width element ki minimum width set karta hai. Element chhota nahi hoga specified value se, bada ho sakta hai.",
    "min-height element ki minimum height set karta hai. Content kam ho to bhi element utna tall rahega. max-height element ki maximum height set karta hai — content overflow ho sakta hai.",
    "overflow property control karti hai ki content element se bada ho to kya ho. Values: visible (default, overflow dikhega), hidden (overflow cut), scroll (hamesha scrollbar), auto (zarurat pe scrollbar).",
    "Box-sizing: border-box — padding aur border width/height ke andar include hote hain. Isse calculations easy hoti hain. content-box default hai jahan padding aladd se count hoti hai.",
    "Height: 100% parent ki height pe depend karta hai. Agar parent ki height defined nahi (auto), to 100% work nahi karega. Iss problem ke liye parent ko explicit height do ya viewport units use karo.",
  ],
  examples: [
    {
      title: "Responsive Container with Max-Width",
      description: "Container jo responsive ho lekin zyada bada na ho.",
      code: `<div class="container">
  <p>Yeh container responsive hai, lekin 1200px se bada nahi hoga.</p>
</div>
<style>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* center */
  padding: 20px;
  background: #f8f9fa;
}
</style>`,
      result: "Container full width mobile tak, 1200px tak limited desktop pe, center aligned",
    },
    {
      title: "Full Screen Hero Section",
      description: "Vh se full screen height hero section.",
      code: `<section class="hero">
  <h1>Welcome to My Site</h1>
  <p>100vh height ka hero section</p>
</section>
<style>
.hero {
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>`,
      result: "Section hamesha full screen height lega, viewport size ke hisaab se",
    },
  ],
  syntax: [
    "width: auto | 100% | 500px | 50vw | fit-content;",
    "max-width: 1200px; min-width: 300px;",
    "min-height: 100vh; max-height: 500px;",
    "overflow: visible | hidden | scroll | auto;",
    "box-sizing: border-box | content-box;",
  ],
  diagram: [
    "┌──────────── Width & Height Units ──────────────┐",
    "│                                                  │",
    "│  px → 500px   Fixed, not responsive             │",
    "│  % → 50%      Relative to parent                │",
    "│  vw → 100vw    1% of viewport width             │",
    "│  vh → 100vh    1% of viewport height            │",
    "│  auto →        Content/parent based             │",
    "│  fit-content →  Content ke hisaab se            │",
    "└──────────────────────────────────────────────────┘",
    "┌──────────── box-sizing ──────────────┐",
    "│  content-box:                        │",
    "│  width = content (padding + border +)│",
    "│                                      │",
    "│  border-box:                         │",
    "│  width = content + padding + border  │",
    "└──────────────────────────────────────┘",
  ],
  code: [
    {
      title: "Responsive Card Grid",
      language: "css",
      code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-height: 200px;
}

.card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-content {
  max-height: 300px;
  overflow-y: auto;
}`,
    },
    {
      title: "Overflow Examples",
      language: "css",
      code: `.box {
  width: 300px;
  height: 150px;
  border: 2px solid #333;
}

.hidden {
  overflow: hidden;
  /* Content cut ho jayega */
}

.scroll {
  overflow: scroll;
  /* Hamesha scrollbar dikhega */
}

.auto {
  overflow: auto;
  /* Sirf zarurat pe scrollbar */
}

.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* ... Dikhayega agar text bada hai */
}`,
    },
    {
      title: "Min/Max Height Usage",
      language: "css",
      code: `.expandable-section {
  min-height: 100px;
  max-height: 400px;
  overflow-y: auto;
  padding: 16px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* Content kam → 100px height maintain */
/* Content zyada → 400px tak expand, fir scroll */`,
    },
  ],
  output: [
    "Responsive card grid — cards auto adjust, max 1200px container",
    "Overflow boxes — hidden cuts, scroll always shows bar, auto shows when needed",
    "Expandable section — min 100px, max 400px, content zyada ho to scroll",
  ],
  commonMistakes: [
    "Box-sizing: content-box default bhool jana aur width + padding + border se actual width  calculate karna",
    "Height: 100% dena jab parent ki height defined nahi — element 0 height ka ho jayega",
    "Width: 100vw dena aur scrollbar ke extra width bhool jana — horizontal scroll aayega",
    "Min-height aur max-height ek saath use karna bina overflow handle kiye — content overflow ho sakta hai",
    "Images ko width: 100% dena par height: auto na dena — image stretch ho jayegi",
  ],
  bestPractices: [
    "Responsive containers ke liye width: 100%; max-width: [value] ka pattern use karo",
    "Hamesha box-sizing: border-box set karo — zyada predictable sizing ke liye",
    "Images ke liye width: 100%; height: auto; max-width: 100% — responsive images ka standard pattern",
    "Viewport height ke liye 100vh use karo hero sections mein, lekin mobile browsers mein 100vh issue ho sakta hai (address bar height)",
    "Text overflow ke liye text-overflow: ellipsis ke saath overflow: hidden aur white-space: nowrap use karo",
  ],
  tips: [
    "100vh mobile browsers mein address bar ki height include karta hai — min-height: 100svh (small viewport height) use karo modern browsers mein fix ke liye",
    "calc() function se units combine kar sakte ho: width: calc(100% - 40px); height: calc(100vh - 80px);",
    "Aspect-ratio property se width/height ratio preserve karo: aspect-ratio: 16/9 ke saath width set karo, height auto adjust hogi",
  ],
  practice: [
    "Ek hero section banao with height: 100vh, background image, aur center aligned content",
    "Ek container banao width: 100%, max-width: 1200px, margin: 0 auto ke saath, andar 3 columns flex/grid se",
  ],
  exercise: {
    instruction:
      "CSS likho jo ek container ko width: 100% aur max-width: 1100px de, center align kare (margin: 0 auto). Container ke andar do columns ho — sidebar 300px width, main content remaining width. Box-sizing border-box use karo.",
    hint: "Container ke liye width, max-width, margin. Columns ke liye display: flex ya grid-template-columns: 300px 1fr.",
    starterCode: `.container {
  width: ;
  max-width: ;
  margin: ;
  box-sizing: ;
  display: ;
  gap: 24px;
}

.sidebar {
  width: ;
  background: #f0f0f0;
  padding: 20px;
}

.main-content {
  flex: ;
  background: white;
  padding: 20px;
}`,
  },
  quiz: [
    {
      question: "100vw ka kya matlab hai?",
      options: [
        "100% of parent width",
        "100% of viewport width (including scrollbar)",
        "100 pixels wide",
        "100% of document width",
      ],
      answer: 1,
    },
    {
      question: "box-sizing: border-box kya karta hai?",
      options: [
        "Padding aur border ko width mein include karta hai",
        "Box ke bahar border lagata hai",
        "Width aur height ko double karta hai",
        "Margin include karta hai",
      ],
      answer: 0,
    },
    {
      question: "Overflow: hidden aur overflow: scroll mein kya difference hai?",
      options: [
        "Donon same hain",
        "Hidden content cut karta hai, scroll hamesha scrollbar dikhata hai",
        "Scroll content cut karta hai",
        "Hidden scrollbar dikhata hai",
      ],
      answer: 1,
    },
    {
      question: "Responsive container ke liye standard pattern kya hai?",
      options: [
        "width: 100%; max-width: 1200px",
        "width: 1200px; max-width: 100%",
        "width: auto; max-width: none",
        "width: fit-content",
      ],
      answer: 0,
    },
    {
      question: "height: 100% kab kaam nahi karega?",
      options: [
        "Jab parent ki height defined nahi ho",
        "Jab content chhota ho",
        "Jab overflow hidden ho",
        "Hamesha kaam karta hai",
      ],
      answer: 0,
    },
  ],
  interview: [
    {
      question: "100vw aur 100% mein kya antar hai?",
      answer:
        "100vw viewport ki total width leta hai including scrollbar. 100% parent element ki width leta hai. Agar parent container limited width ka hai to 100% limited width hogi, jabki 100vw full viewport width legi (jo scrollbar ki width ki wajah se horizontal scroll create kar sakti hai).",
    },
    {
      question: "box-sizing: border-box kyun use karte hain?",
      answer:
        "Isse padding aur border width/height ke andar include ho jate hain. Default content-box mein width sirf content area ki hoti hai — padding aur border extra add hote hain. border-box se calculations simple hoti hain — 50% width hamesha 50% hi rahegi chahe padding kitni bhi ho.",
    },
    {
      question: "100vh mobile browsers mein problem kyu deta hai?",
      answer:
        "Mobile browsers ka address bar dynamic hide/show hota hai. 100vh set karne par element viewport ke hisaab se height leta hai, lekin jab address bar hide hota hai to height suddenly badh jati hai jisse layout shift hota hai. Modern browsers mein 100svh (small viewport height) iska solution hai.",
    },
  ],
  assignment: [
    "Ek full-page landing page hero section banao with 100vh height, background image, centered content overlay",
    "Ek pricing cards section banao jisme 3 cards ho, each with min-width: 280px, responsive grid layout, max-width: 1100px container",
    "Ek scrollable content panel banao with max-height: 300px, overflow-y: auto, aur custom scrollbar styling",
  ],
  resources: [
    {
      title: "MDN - Width and Height",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS",
    },
    {
      title: "CSS Units Guide",
      url: "https://css-tricks.com/the-lengths-of-css/",
    },
  ],
  summary:
    "CSS width aur height properties se elements ka size control karte hain. Pixels fixed size dete hain, percentage parent ke relative hota hai, vw/vh viewport ke relative hota hai. Responsive designs ke liye max-width (saath width: 100%) standard pattern hai. Box-sizing: border-box se padding/border width mein include ho jate hain jo sizing ko predictable banata hai. Overflow property (hidden, scroll, auto) control karti hai ki content element se bada ho to kya ho. Yaad rakho: height: 100% ke liye parent ki height defined honi chahiye, vw mein scrollbar ki width bhi include hoti hai, aur images ke liye width: 100%; height: auto; max-width: 100% ka pattern use karo.",
};

export default lesson;
