const lesson = {
  id: 8,
  slug: "links",
  title: "HTML Links (Anchor Tags)",
  description: "Anchor tag <a> se links banana, target, attributes aur best practices.",
  difficulty: "Beginner",
  duration: "12 Minutes",
  heroImage: "",
  tags: ["HTML", "Links", "Navigation"],
  theory: [
    "<a> tag (anchor) se hum links banate hain.",
    "href attribute link ki destination specify karta hai.",
    "target attribute define karta hai ki link kaise open hoga: _self (same tab), _blank (new tab).",
    "Relative URLs: /about, ./contact.html (same domain)",
    "Absolute URLs: https://example.com/page (full address)",
    "Mailto links: <a href=\"mailto:email@example.com\">",
    "Download links: <a href=\"file.pdf\" download>",
    "Security: target='_blank' ke saath hamesha rel='noopener noreferrer' do."
  ],
  examples: [
    {
      title: "Different Link Types",
      code: "<a href=\"https://google.com\" target=\"_blank\">Google</a><br>\n<a href=\"/about\">About</a><br>\n<a href=\"mailto:hello@site.com\">Email</a><br>\n<a href=\"notes.pdf\" download>Download</a>",
      result: "Google About Email Download"
    }
  ],
  syntax: ["<a href=\"https://example.com\">Visit Example</a>\n<a href=\"/page\" target=\"_blank\">New Tab</a>\n<a href=\"mailto:hi@test.com\">Email</a>\n<a href=\"file.pdf\" download>Download</a>"],
  diagram: [
    "<a href='URL' target='_blank' rel='noopener'>",
    "  |-- href → destination",
    "  |-- target → _blank, _self",
    "  |-- download → file download",
    "  |-- rel → security",
    "</a>"
  ],
  code: [
    {
      title: "Links Demo",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Links</title>\n</head>\n<body>\n  <h1>Useful Links</h1>\n  <a href=\"https://google.com\" target=\"_blank\">Google</a><br>\n  <a href=\"/about\">About Us</a><br>\n  <a href=\"mailto:hello@site.com\">Send Email</a><br>\n  <a href=\"notes.pdf\" download>Download Notes</a>\n</body>\n</html>"
    }
  ],
  output: ["Useful Links\nGoogle\nAbout Us\nSend Email\nDownload Notes"],
  commonMistakes: [
    "target='_blank' ke saath rel='noopener' na dena — security risk",
    "Broken links — href mein galat URL",
    "Link text ke jagah 'click here' likhna — SEO harmful",
    "Absolute URL mein http:// bhoolna"
  ],
  bestPractices: [
    "target='_blank' ke saath hamesha rel='noopener noreferrer' do",
    "Descriptive link text do — 'click here' ki jagah 'read more about HTML'",
    "Internal links ke liye relative URLs use karo"
  ],
  tips: [
    "Link text meaningful rakho — screen readers ise padhte hain",
    "External links ko icon ya indicator se dikhao",
    "Links ki styling CSS se karo (color, underline, hover)"
  ],
  practice: [
    "5 different types ke links banakar dekho",
    "Ek link ko new tab mein open karo",
    "Mailto link banao jo email client open kare"
  ],
  exercise: {
    instruction: "Ek navigation bar banao jisme 4 links ho — Home, About, Contact (mailto), aur Resume (download).",
    hint: "<nav> tag aur <a> tags ka use karo.",
    starterCode: "<nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/about\">About</a>\n</nav>"
  },
  quiz: [
    {
      question: "Link new tab mein open karne ke liye kaunsa attribute?",
      options: ["target='_self'", "target='_blank'", "target='_new'", "open='new'"],
      answer: 1
    },
    {
      question: "target='_blank' ke saath kaunsa attribute security ke liye?",
      options: ["rel='noopener'", "secure='true'", "safe='yes'", "protect='on'"],
      answer: 0
    },
    {
      question: "Absolute URL ka example kya hai?",
      options: ["/about", "contact.html", "https://example.com", "./page"],
      answer: 2
    },
    {
      question: "Email link ke liye kya use karte hain?",
      options: ["mail:", "email:", "mailto:", "send:"],
      answer: 2
    },
    {
      question: "File download ke liye kaunsa attribute?",
      options: ["save", "download", "file", "dl"],
      answer: 1
    }
  ],
  interview: [
    {
      question: "target='_blank' se security risk kya hai?",
      answer: "Isse new page window.opener property ke through original page ko access kar sakta hai. rel='noopener' is risk ko block karta hai."
    },
    {
      question: "Absolute vs Relative URL me kya antar hai?",
      answer: "Absolute URL (https://example.com/page) complete address hota hai. Relative URL (/page) current domain ke relative hota hai."
    },
    {
      question: "Anchor tag me hash (#) links kya hote hain?",
      answer: "Ye page ke specific section ko point karte hain. Jaise <a href='#section'> to same page ke section mein scroll karega."
    }
  ],
  assignment: [
    "Ek navigation bar banao jisme 5 links ho",
    "Ek link new tab mein, ek email, ek download link banao",
    "Internal aur external links ka difference practical karo"
  ],
  resources: [
    { title: "MDN Anchor Tag", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" },
    { title: "Link Security Guide", url: "https://web.dev/external-anchors-use-rel-noopener/" }
  ],
  summary: "Anchor tags (<a>) se links banaye jaate hain. href destination specify karta hai, target decide karta hai kaise open karna hai. Security ke liye rel='noopener' important hai."
};

export default lesson;
