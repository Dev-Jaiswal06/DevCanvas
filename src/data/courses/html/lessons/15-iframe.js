const lesson = {
  id: 15, slug: "iframe", title: "HTML Iframe",
  description: "Doosri website ya content ko embed kaise karein. Hinglish mein seekhein.",
  difficulty: "Intermediate", duration: "10 Minutes", heroImage: "",
  tags: ["HTML", "Iframe", "Embed"],
  theory: [
    "<iframe> tag se aap doosri website ya page ko apne webpage mein embed kar sakte hain.",
    "src attribute mein embed karne wali page ka URL dete hain.",
    "width aur height se iframe ka size control karte hain.",
    "allowfullscreen attribute se fullscreen mode enable kar sakte hain.",
    "sandbox attribute security ke liye important hai — isse scripts, forms, etc. restrict kar sakte hain."
  ],
  examples: [{
    title: "Embedded Webpage",
    description: "Doosri website ko iframe mein dikhana.",
    code: "<iframe src=\"https://example.com\" width=\"400\" height=\"300\" title=\"Example\"></iframe>",
    result: "[Embedded webpage in a frame]"
  }],
  syntax: [
    "<iframe",
    "  src=\"https://example.com\"",
    "  width=\"600\"",
    "  height=\"400\"",
    "  title=\"Description\"",
    "  allowfullscreen",
    "  sandbox=\"allow-scripts allow-same-origin\"",
    "></iframe>"
  ],
  diagram: [
    "<iframe> → Inline frame container",
    "  src → Source URL",
    "  width/height → Frame size",
    "  sandbox → Security restrictions",
    "  allowfullscreen → Fullscreen mode"
  ],
  code: [{
    title: "Embed YouTube Video",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<body>\n  <h2>YouTube Video</h2>\n  <iframe width=\"560\" height=\"315\"\n    src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\"\n    title=\"YouTube video\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>"
  }],
  output: ["[YouTube video embedded in iframe]"],
  commonMistakes: [
    "Sandbox attribute na lagana — security risk ho sakta hai",
    "Iframe ka responsive na banana — mobile pe overflow ho jata hai",
    "Title attribute na dena — accessibility issue",
    "http pages ko https site mein embed karna — mixed content warning"
  ],
  bestPractices: [
    "Security ke liye sandbox attribute hamesha use karo",
    "Responsive iframe ke liye CSS aspect-ratio ya wrapper div use karo",
    "Title attribute do accessibility ke liye",
    "HTTPS sources hi embed karo"
  ],
  tips: [
    "YouTube videos embed karne ke liye iframe best hai",
    "Google Maps bhi iframe se embed kar sakte hain",
    "Sandbox attribute mein sirf wahi permissions do jo zaroori hain"
  ],
  practice: [
    "YouTube ka ek video apne page mein embed karo",
    "Google Maps ka location iframe se dikhao",
    "Sandbox attribute ke saath doosri website embed karo"
  ],
  exercise: {
    instruction: "Ek YouTube video aur ek Google Maps location apne page mein iframe se embed karo. Dono responsive hone chahiye.",
    hint: "YouTube embed link ke liye share → embed option use karo.",
    starterCode: "<h2>My Embedded Content</h2>\n<iframe src=\"\" width=\"560\" height=\"315\"></iframe>"
  },
  quiz: [
    { question: "Iframe ka full form kya hai?", options: ["Inline Frame", "Internet Frame", "Internal Frame", "Image Frame"], answer: 0, explanation: "Iframe = Inline Frame. Ye doosri website ko apne page mein embed karta hai." },
    { question: "Iframe mein security ke liye kaunsa attribute?", options: ["secure", "sandbox", "protect", "safe"], answer: 1, explanation: "sandbox attribute external content ko restrict karta hai — scripts, forms, etc. block ho sakte hain." }
  ],
  interview: [
    { question: "Iframe kya hai aur kahan use hota hai?", answer: "Iframe (Inline Frame) doosri website ko apne page mein embed karta hai. YouTube videos, Google Maps, social media posts embed karne ke liye use hota hai." },
    { question: "Iframe ke security concerns kya hain?", answer: "Sandbox attribute ke bina iframe vulnerable ho sakta hai — malicious scripts run ho sakti hain, forms submit ho sakte hain. Hamesha sandbox attribute use karo with minimal permissions." }
  ],
  assignment: {
    title: "Embedded Content Page",
    description: "Ek page banayein jisme multiple iframes hon.",
    tasks: ["YouTube video embed karo", "Google Maps location dikhao", "Wikipedia ka article iframe mein dikhao", "Responsive banakar sabhi iframes ko adjust karo", "Sandbox attribute use karo"],
    submission: "Code ko GitHub pe push karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - Iframe Element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" },
    { title: "Iframe Security", url: "https://www.w3schools.com/tags/att_iframe_sandbox.asp" },
    { title: "Responsive Iframes", url: "https://css-tricks.com/responsive-iframes/" }
  ],
  summary: [
    "<iframe> se external content embed kar sakte hain.",
    "YouTube, Maps, doosri websites embed karne ke liye use hota hai.",
    "sandbox attribute security ke liye zaroori hai.",
    "Responsive banane ke liye CSS wrapper use karo."
  ]
};

export default lesson;
