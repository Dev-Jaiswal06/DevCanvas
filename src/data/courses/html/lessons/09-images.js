const lesson = {
  id: 9,
  slug: "images",
  title: "HTML Images",
  description: "Images lagana, attributes, formats aur optimization.",
  difficulty: "Beginner",
  duration: "12 Minutes",
  heroImage: "",
  tags: ["HTML", "Images", "Media"],
  theory: [
    "<img> tag se images add ki jaati hain. Ye self-closing tag hai.",
    "Required attributes: src (image path) aur alt (alternative text).",
    "Alt text accessibility aur SEO ke liye important hai.",
    "Width aur height attributes dimensions set karte hain.",
    "loading='lazy' — browser image ko tab tak load nahi karega jab tak user scroll na kare.",
    "Image formats: JPEG (photos), PNG (graphics), GIF (animations), SVG (scalable), WebP (modern).",
    "Responsive images ke liye srcset attribute use hota hai."
  ],
  examples: [
    {
      title: "Image with Attributes",
      code: "<img src=\"https://picsum.photos/400/300\" alt=\"Random image\" width=\"400\" loading=\"lazy\">",
      result: "[Image: Random photo 400x300]"
    }
  ],
  syntax: ["<img src=\"photo.jpg\" alt=\"Description\">\n<img src=\"pic.png\" alt=\"Alt text\" width=\"500\" height=\"300\">\n<img src=\"photo.webp\" alt=\"Photo\" loading=\"lazy\">"],
  diagram: [
    "<img src='URL' alt='text' width='400' height='300' loading='lazy'>",
    "Required: src + alt",
    "Optional: width, height, loading, title"
  ],
  code: [
    {
      title: "Image Gallery",
      language: "html",
      code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Images</title>\n</head>\n<body>\n  <h1>My Gallery</h1>\n  <img src=\"https://picsum.photos/400/300\" alt=\"Random Image\" width=\"400\">\n  <br>\n  <img src=\"https://via.placeholder.com/150\" alt=\"Placeholder\" height=\"150\">\n  <p>Images with alt text for accessibility.</p>\n</body>\n</html>"
    }
  ],
  output: ["My Gallery\n[Image 400x300]\n[Image 150x150]\nImages with alt text for accessibility."],
  commonMistakes: [
    "Alt text na dena — accessibility aur SEO dono ke liye harmful",
    "Ginormous images use karna bina compress kiye — slow loading",
    "Width/height na dena — layout shift hota hai (CLS issue)"
  ],
  bestPractices: [
    "Hamesha alt text do — screen readers ke liye",
    "Images compress karo (TinyPNG use karo)",
    "Modern format WebP use karo with JPEG fallback",
    "Lazy loading lagao — loading='lazy'"
  ],
  tips: [
    "Responsive images ke liye srcset attribute use karo",
    "SVG format icons aur logos ke liye best hai",
    "Image dimensions CSS se mat do — height/width attributes do",
    "Content Delivery Network (CDN) se images serve karo"
  ],
  practice: [
    "3 different images lagao with alt text",
    "Ek image ko width-height ke saath set karo",
    "Ek image ko external URL se load karo"
  ],
  exercise: {
    instruction: "Ek image gallery banao jisme 3 images ho with alt text, aur lazy loading enabled ho.",
    hint: "loading='lazy' attribute add karo har <img> tag mein.",
    starterCode: "<h1>My Gallery</h1>\n<img src=\"photo1.jpg\" alt=\"Photo 1\" loading=\"lazy\">"
  },
  quiz: [
    {
      question: "Image tag ke required attributes kaunse hain?",
      options: ["src + alt", "src + width", "alt + height", "src + title"],
      answer: 0
    },
    {
      question: "Alt text kyu important hai?",
      options: ["Speed ke liye", "Accessibility + SEO", "Styling ke liye", "Animation ke liye"],
      answer: 1
    },
    {
      question: "Lazy loading kya karta hai?",
      options: ["Image compress karta hai", "Image ko tab load karta hai jab zaroorat ho", "Image resize karta hai", "Image delete karta hai"],
      answer: 1
    },
    {
      question: "Modern image format kaun sa hai?",
      options: ["JPEG", "PNG", "GIF", "WebP"],
      answer: 3
    },
    {
      question: "Self-closing tag kaun sa hai?",
      options: ["<img>", "<p>", "<h1>", "<div>"],
      answer: 0
    }
  ],
  interview: [
    {
      question: "Alt text kya hota hai aur kyu zaroori hai?",
      answer: "Alt text image ka textual description hota hai. Screen readers visually impaired users ko ye padhkar sunate hain. SEO ke liye bhi important hai."
    },
    {
      question: "Lazy loading kya hai?",
      answer: "loading='lazy' attribute browser ko batata hai ki image ko tab tak load mat karo jab tak user uske paas na scroll kare. Isse page loading speed improve hoti hai."
    },
    {
      question: "CLS (Cumulative Layout Shift) kya hai?",
      answer: "Jab images without dimensions load hoti hain, to page layout shift ho jata hai. Width/height attributes is problem ko solve karte hain."
    }
  ],
  assignment: [
    "Ek image gallery banao jisme 6 images ho",
    "Har image ke saath alt text aur caption do",
    "3 different image formats (.jpg, .png, .gif) use karo"
  ],
  resources: [
    { title: "MDN Images Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" },
    { title: "Image Optimization", url: "https://web.dev/fast/#optimize-your-images" }
  ],
  summary: "Images <img> tag se add hoti hain. src aur alt required attributes hain. Alt text accessibility aur SEO ke liye important hai. Images compress karna aur lazy loading use karna best practices hain."
};

export default lesson;
