const lesson = {
  id: 17, slug: "meta", title: "Meta Tags",
  description: "Meta tags jo search engines ko page ke baare mein batate hain. Hinglish mein seekhein.",
  difficulty: "Intermediate", duration: "12 Minutes", heroImage: "",
  tags: ["HTML", "Meta", "SEO"],
  theory: [
    "<meta> tags <head> section mein aate hain aur page ke baare mein information (metadata) provide karte hain.",
    "charset — Character encoding define karta hai (UTF-8 sabse common).",
    "viewport — Mobile responsiveness ke liye zaroori hai. content=\"width=device-width, initial-scale=1.0\"",
    "description — Google search result mein dikhta hai. Click-through rate improve karta hai.",
    "keywords — SEO ke liye (ab utna important nahi hai, lekin kuch search engines use karte hain).",
    "og:title, og:description, og:image — Open Graph tags social media preview ke liye (Facebook, WhatsApp, etc.)."
  ],
  examples: [{
    title: "Essential Meta Tags",
    description: "Har webpage ke liye zaroori meta tags.",
    code: "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"Free HTML course for beginners.\">\n<title>HTML Course - DevCanvas</title>",
    result: "[Meta tags in head section]"
  }],
  syntax: [
    "<meta charset=\"UTF-8\">",
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
    "<meta name=\"description\" content=\"Page description for search results\">",
    "<meta name=\"keywords\" content=\"html, css, javascript, tutorial\">",
    "<meta property=\"og:title\" content=\"Page Title for Social Media\">"
  ],
  diagram: [
    "<head> → Page metadata",
    "  <meta charset> → Encoding type",
    "  <meta viewport> → Mobile responsive",
    "  <meta description> → Search result text",
    "  <meta og:title> → Social preview",
    "  <title> → Browser tab title"
  ],
  code: [{
    title: "Complete Head Section",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Learn HTML, CSS, JavaScript and React for free.\">\n  <meta name=\"keywords\" content=\"HTML, CSS, JavaScript, React, Tutorial\">\n  <meta property=\"og:title\" content=\"DevCanvas - Learn to Code\">\n  <meta property=\"og:description\" content=\"Free coding tutorials in Hinglish.\">\n  <meta property=\"og:image\" content=\"https://devcanvas.com/og-image.jpg\">\n  <title>DevCanvas - Learn to Code</title>\n</head>\n<body>\n  <h1>Welcome to DevCanvas</h1>\n</body>\n</html>"
  }],
  output: ["[Page with complete meta tags for SEO and social sharing]"],
  commonMistakes: [
    "Meta tags na lgana — page search engines mein properly index nahi hoga",
    "Duplicate meta description dalna — search engines confuse ho jate hain",
    "Viewport tag miss karna — mobile pe page zoom out dikhega",
    "Open Graph tags na dena — social media sharing pe random preview dikhega"
  ],
  bestPractices: [
    "Har page ke liye unique meta description likho (150-160 characters)",
    "Viewport tag mobile responsiveness ke liye zaroori hai",
    "Open Graph tags do taake social media sharing attractive lage",
    "Charset UTF-8 set karo special characters ke liye"
  ],
  tips: [
    "Meta description mein target keywords include karo naturally",
    "og:image ka size 1200x630 pixels recommended hai",
    "Twitter ke liye twitter:card, twitter:title bhi add kar sakte hain"
  ],
  practice: [
    "Apne page mein charset, viewport aur description meta tags lagao",
    "Open Graph tags ke saath social media preview optimize karo",
    "Har page ke liye unique meta description likho"
  ],
  exercise: {
    instruction: "Ek HTML page ka <head> section likho jisme charset, viewport, description, keywords, aur Open Graph tags ho.",
    hint: "Open Graph tags ke liye property attribute use karo: <meta property=\"og:title\" content=\"...\">",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My Page</title>\n</head>\n<body></body>\n</html>"
  },
  quiz: [
    { question: "Mobile responsiveness ke liye kaunsa meta tag important hai?", options: ["<meta charset>", "<meta viewport>", "<meta keywords>", "<meta author>"], answer: 1, explanation: "viewport meta tag mobile devices pe proper rendering ke liye zaroori hai." },
    { question: "Social media preview ke liye kaun se tags use hote hain?", options: ["SEO tags", "Open Graph tags", "Meta keywords", "Header tags"], answer: 1, explanation: "Open Graph (og:) tags Facebook, WhatsApp, LinkedIn pe link preview control karte hain." }
  ],
  interview: [
    { question: "Meta tags kya hote hain?", answer: "Meta tags <head> section mein aate hain aur page ke baare mein data provide karte hain — charset, description, viewport, keywords, etc. Ye search engines aur browsers ko page samajhne mein help karte hain." },
    { question: "Viewport meta tag kyun important hai?", answer: "Viewport tag mobile responsiveness ke liye important hai. Iske bina mobile browser page ko desktop view mein show karta hai jisme zoom out karna padta hai. content=\"width=device-width, initial-scale=1.0\" mobile-friendly rendering ensure karta hai." }
  ],
  assignment: {
    title: "Meta Tags Optimization",
    description: "Ek page ke liye complete meta tags setup karein.",
    tasks: ["5 different meta tags lagaao (charset, viewport, description, keywords, author)", "Open Graph tags add karo (og:title, og:description, og:image)", "Twitter card tags bhi add karo", "Har meta tag ka unique content likho", "Page ko validate karo using Google Rich Results Test"],
    submission: "Code GitHub pe push karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - Meta Tags", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" },
    { title: "Open Graph Protocol", url: "https://ogp.me/" },
    { title: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }
  ],
  summary: [
    "<meta> tags page ke baare mein metadata provide karte hain.",
    "charset, viewport, description sabse important meta tags hain.",
    "Open Graph tags social media preview control karte hain.",
    "Har page ke liye unique meta description likhna chahiye."
  ]
};

export default lesson;
