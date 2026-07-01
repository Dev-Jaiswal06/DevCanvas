const lesson = {
  id: 19,
  slug: "flexbox-advanced",
  title: "Advanced Flexbox",
  description: "Master complex layouts: nested flexboxes, holy grail, responsive navigation, and card layouts",
  difficulty: "Advanced",
  duration: "50 min",
  heroImage: "https://images.unsplash.com/photo-1550681560-5c41e6b6e5b5?w=800",
  tags: ["CSS", "Flexbox", "Advanced", "Layout", "Responsive"],
  theory: [
    "Nested flexboxes ka matlab hai ek flex item ke andar ek aur flex container banana. Isse complex layouts bana sakte ho jahan parent row-based ho aur child column-based.",
    "Holy Grail Layout — ek classic layout pattern: header top par full-width, footer bottom par, center region me left sidebar, main content, right sidebar. Flexbox se aasani se banta hai.",
    "Responsive navigation ke liye media queries ke saath flex-direction change karte hain. Desktop pe row, mobile pe column with hamburger menu.",
    "Centering techniques — Flexbox ne centering ko bahut simple bana diya hai. Justify-content:center + align-items:center se perfect centering. Margin:auto bhi kaam aata hai.",
    "Card layouts me Flexbox ka biggest advantage equal height columns hai. Stretch (default align-items) automatically sab cards ki height equal kar deta hai.",
    "Flexbox me content-first approach hai — items ka size content ke according adjust hota hai. Lekin flex-basis se initial size control kar sakte ho.",
    "Auto margins (margin-left:auto, margin-right:auto) flexbox me bahut powerful hain — items ko push karne ke liye justify-content ka alternative.",
    "Media objects (Thumbnail + Content pattern) flexbox ke saath bahut easy hai — image flex-shrink:0 karo, content flex:1 do.",
    "Form layouts me flexbox kamaal kaam karta hai — labels aur inputs ko align karna, button groups, inline validation messages.",
    "Flexbox aur CSS Grid ka combination — complex layouts mein dono ka use karo. Grid for page-level, Flexbox for component-level layout.",
    "Flex-basis: 0 se items equally divided hote hain irrespective of content. Auto se items apne content ke hisaab se size lete hain.",
    "Align-content flex-wrap ke saath use hota hai — multiple rows ko cross axis par distribute karta hai."
  ],
  examples: [
    {
      title: "Holy Grail Layout",
      description: "Classic three-column layout with header and footer, all equal height.",
      code: ".container { display: flex; flex-direction: column; min-height: 100vh; }\n.content { display: flex; flex: 1; }\n.sidebar { width: 200px; }\nmain { flex: 1; }",
      result: "Header top, footer bottom, center mein left sidebar (200px), main (flex:1), right sidebar (200px)."
    },
    {
      title: "Media Object (Thumbnail + Content)",
      description: "Image left, content right — ek bahut common pattern.",
      code: ".media { display: flex; gap: 16px; }\n.media-img { flex-shrink: 0; }\n.media-body { flex: 1; }",
      result: "Image apni size par fixed (shrink nahi), content bachi hui jagah le leta hai."
    },
    {
      title: "Responsive Navigation",
      description: "Desktop se mobile responsive navbar.",
      code: "@media (max-width: 768px) {\n  nav { flex-direction: column; }\n  .nav-links { flex-direction: column; }\n}",
      result: "Desktop: horizontal navbar. Mobile: vertical stacked navbar."
    }
  ],
  syntax: [
    { property: "align-content", values: "stretch | flex-start | flex-end | center | space-between | space-around", example: "align-content: center;" },
    { property: "flex (advanced)", values: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]", example: "flex: 1 1 0;" },
    { property: "margin: auto (in flex)", description: "Auto margin flex items ko push karta hai", example: "margin-left: auto;" }
  ],
  diagram: [
    "HOLY GRAIL LAYOUT:",
    "┌──────────────────────────────┐",
    "│          HEADER              │",
    "├──────┬───────────────┬───────┤",
    "│ Nav  │   Main        │ Aside │",
    "│ 200px│   Content     │ 200px │",
    "│      │   (flex:1)    │       │",
    "├──────┴───────────────┴───────┤",
    "│          FOOTER              │",
    "└──────────────────────────────┘",
    "",
    "MEDIA OBJECT:",
    "┌─────────────────────────────────┐",
    "│ ┌────────┐ ┌────────────────┐   │",
    "│ │  IMG   │ │ Title           │   │",
    "│ │ fixed  │ │ Description that│   │",
    "│ │ width  │ │ wraps as needed │   │",
    "│ │ no     │ │ by flex:1       │   │",
    "│ │ shrink │ └────────────────┘   │",
    "│ └────────┘                      │",
    "└─────────────────────────────────┘",
    "",
    "CENTERING:",
    "  ┌─────────────────────────────┐",
    "  │                             │",
    "  │          ┌───────┐          │",
    "  │          │CENTER │          │",
    "  │          └───────┘          │",
    "  │     justify-content:center  │",
    "  │       align-items:center    │",
    "  └─────────────────────────────┘"
  ],
  code: [
    {
      title: "Holy Grail Layout with Flexbox",
      language: "html",
      code: "<div class=\"layout\">\n  <header class=\"header\">Header</header>\n  <div class=\"middle\">\n    <nav class=\"nav\">Left Sidebar</nav>\n    <main class=\"main\">\n      <h1>Main Content</h1>\n      <p>This is the main content area that takes up remaining space.</p>\n    </main>\n    <aside class=\"aside\">Right Sidebar</aside>\n  </div>\n  <footer class=\"footer\">Footer</footer>\n</div>\n\n<style>\n.layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  font-family: system-ui, sans-serif;\n}\n.header, .footer {\n  background: #2c3e50;\n  color: white;\n  text-align: center;\n  padding: 1rem;\n}\n.middle {\n  display: flex;\n  flex: 1;\n}\n.nav, .aside {\n  width: 200px;\n  background: #ecf0f1;\n  padding: 1rem;\n}\n.main {\n  flex: 1;\n  padding: 1rem;\n  background: #fff;\n}\n@media (max-width: 768px) {\n  .middle { flex-direction: column; }\n  .nav, .aside { width: auto; }\n}\n</style>"
    },
    {
      title: "Advanced Card Layout with Nested Flexbox",
      language: "html",
      code: "<div class=\"blog-grid\">\n  <article class=\"blog-card\">\n    <div class=\"card-image\">\n      <img src=\"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400\" alt=\"Travel\">\n    </div>\n    <div class=\"card-body\">\n      <span class=\"tag\">Travel</span>\n      <h2 class=\"card-title\">Exploring the Mountains</h2>\n      <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>\n      <div class=\"card-footer\">\n        <div class=\"author\">\n          <img src=\"https://i.pravatar.cc/40\" alt=\"Author\" class=\"avatar\">\n          <div class=\"author-info\">\n            <span class=\"name\">John Doe</span>\n            <span class=\"date\">May 15, 2025</span>\n          </div>\n        </div>\n        <span class=\"read-time\">5 min read</span>\n      </div>\n    </div>\n  </article>\n</div>\n\n<style>\n.blog-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  padding: 20px;\n  font-family: system-ui, sans-serif;\n}\n.blog-card {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 350px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  background: white;\n}\n.card-image {\n  flex-shrink: 0;\n}\n.card-image img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 16px;\n}\n.tag {\n  align-self: flex-start;\n  background: #3498db;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  margin-bottom: 8px;\n}\n.card-title {\n  margin: 0 0 8px;\n  color: #2c3e50;\n}\n.card-text {\n  flex: 1;\n  color: #666;\n  line-height: 1.5;\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid #eee;\n}\n.author {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.author-info {\n  display: flex;\n  flex-direction: column;\n}\n.name {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.date, .read-time {\n  font-size: 0.8rem;\n  color: #999;\n}\n</style>"
    }
  ],
  output: [
    "Holy Grail — header/footer fixed, middle section flex:1, sidebar fixed width, main content flexible",
    "Blog card — image fixed height, tag aligned left, text flex:1 se remaining space le raha",
    "Card footer — author info left, read time right with space-between",
    "Responsive breakpoint 768px par layout column me change ho gaya"
  ],
  commonMistakes: [
    "Holy Grail Layout mein middle section ka height 100% na dena — middle flex:1 dena bhoolna",
    "Nested flexboxes me axis confuse ho jaana — parent row, child column — yaad rakho har container ka apna axis system hota hai",
    "Media object mein image ko flex-shrink:0 na karna — image compress ho jaati hai",
    "Card layouts mein flex:1 1 300px ki jagah sirf flex:1 dena — responsive nahi hoga",
    "Align-content aur align-items me confusion — align-content sirf multi-line flex containers par kaam karta hai"
  ],
  bestPractices: [
    "Mobile-first approach lo — flex-direction column default, media query me row karo",
    "Nested flexboxes me hamesha axis ka dhyan rakho — parent aur child ke direction alag ho sakte hain",
    "Media objects (image+text) me image ko flex-shrink:0 do aur content ko flex:1",
    "Holy Grail layout ke middle section ko flex:1 do with min-height:100vh on parent",
    "Card layouts me card-body ko display:flex flex-direction:column do with flex:1 taki footer neeche rahe"
  ],
  tips: [
    "Margin-top:auto ka flex items me use — last item ya footer ko neeche push karne ke liye perfect",
    "Align-content:center se multi-line flex items vertically center ho jaate hain",
    "Gap property flex-wrap ke saath perfect kaam karta hai — padding aur negative margins ka jhamela nahi"
  ],
  practice: [
    "Holy Grail layout implement karo with responsive breakpoint jahan mobile par teeno columns stack ho",
    "Ek nested flexbox component banaiye — ek card jisme image top, content middle, action buttons bottom"
  ],
  exercise: {
    instruction: "Ek blog homepage layout banaiye jisme header, featured post (large), 3 card grid, aur footer ho. Nested flexbox ka use karein. Featured post me image left, content right (media object). Cards flex-wrap se responsive ho.",
    hint: "Main container flex-direction:column. Featured section display:flex with image flex:1 and content flex:1. Card grid flex-wrap:wrap. Har card flex-direction:column with flex:1 1 300px.",
    starterCode: "<div class=\"blog-page\">\n  <header class=\"blog-header\">\n    <h1>My Blog</h1>\n    <nav>\n      <a href=\"#\">Home</a>\n      <a href=\"#\">Posts</a>\n      <a href=\"#\">About</a>\n    </nav>\n  </header>\n\n  <section class=\"featured-post\">\n    <div class=\"featured-image\">\n      <img src=\"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600\" alt=\"Featured\">\n    </div>\n    <div class=\"featured-content\">\n      <h2>Featured Article Title</h2>\n      <p>This is the featured article description...</p>\n      <button>Read More</button>\n    </div>\n  </section>\n\n  <section class=\"post-grid\">\n    <article class=\"post-card\">Card 1</article>\n    <article class=\"post-card\">Card 2</article>\n    <article class=\"post-card\">Card 3</article>\n  </section>\n\n  <footer class=\"blog-footer\">Footer</footer>\n</div>\n\n<style>\n.blog-page {\n  /* Add flexbox styles */\n}\n</style>"
  },
  quiz: [
    {
      question: "Holy Grail layout ke middle section ko flex:1 kyun dete hain?",
      options: ["Styling ke liye", "Remaining vertical space lene ke liye", "Width set karne ke liye", "Koi zaroorat nahi"],
      answer: 1
    },
    {
      question: "Media object me image ko flex-shrink:0 kyun dete hain?",
      options: ["Image ko grow karne ke liye", "Image ko shrink hone se bachane ke liye", "Image ko center karne ke liye", "Opacity badhane ke liye"],
      answer: 1
    },
    {
      question: "Align-content aur align-items me kya difference hai?",
      options: ["Kuch nahi", "Align-content sirf single-line flex par kaam karta hai", "Align-content sirf multi-line flex (wrap) par kaam karta hai", "Align-content sirf column direction me kaam karta hai"],
      answer: 2
    },
    {
      question: "Card layout me card-body ko flex-direction:column kyun dete hain?",
      options: ["Color set karne ke liye", "Footer ko card ke bottom par rakhne ke liye", "Image ko top par rakhne ke liye", "Background lagane ke liye"],
      answer: 1
    },
    {
      question: "Mobile par flex-direction column kaise karte hain?",
      options: ["Sirf HTML change karke", "Media query mein flex-direction:column karke", "Flex-wrap:wrap se", "Align-items:center se"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "Holy Grail layout Flexbox se kaise implement karte hain?",
      answer: "Main container display:flex flex-direction:column min-height:100vh. Middle section display:flex flex:1. Sidebars ko fixed width (200px), main ko flex:1. Media query mobile par middle ko flex-direction:column."
    },
    {
      question: "Nested flexboxes kaise kaam karte hain? Example do.",
      answer: "Nested flexbox ka matlab flex item ke andar ek aur flex container. Example: Card component — outer flex container cards ko row me rakhta hai, har card inner flex container (flex-direction:column) image, content, footer ko stack karta hai."
    },
    {
      question: "Margin:auto flexbox me kaise kaam karta hai?",
      answer: "Margin:auto flex container me remaining space absorb kar leta hai. Jaise margin-left:auto item ko right push karta hai. Yeh justify-content par precedence leta hai — baaki items ke beech space distribute karna ho tab kaam aata hai."
    }
  ],
  assignment: [
    "Holy Grail layout banaiye jisme left sidebar navigation, main content, right sidebar ads ho, responsive ho",
    "Ek advanced blog card component banaiye jisme featured image, category tag, title, excerpt, author info, aur read more button ho — nested flexbox se",
    "Ek dashboard layout banaiye jisme header (logo + search + profile), sidebar (nav links), main area (stats cards grid), footer ho"
  ],
  resources: [
    { title: "CSS-Tricks - Holy Grail Layout", url: "https://css-tricks.com/the-holy-grail-layout-with-css-grid/" },
    { title: "MDN - Flexbox Advanced Concepts", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items" },
    { title: "Solved by Flexbox", url: "https://philipwalton.github.io/solved-by-flexbox/" }
  ],
  summary: "Advanced Flexbox se complex real-world layouts bana sakte ho. Nested flexboxes ka matlab flex item ke andar flex container — isse complex components (cards, media objects) bante hain. Holy Grail Layout (header, 3-column center, footer) flexbox se easily implement hota hai. Media Objects (image + text) flex-shrink:0 aur flex:1 se bante hain. Centering justify-content:center + align-items:center se. Card layouts me equal height columns stretch default behavior se milta hai. Align-content multi-line flex containers par kaam karta hai. Mobile-first approach aur media queries se responsive layouts bana sakte ho."
};

export default lesson;
