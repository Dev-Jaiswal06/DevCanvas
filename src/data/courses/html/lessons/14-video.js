const lesson = {
  id: 14, slug: "video", title: "HTML Video",
  description: "Website mein video files kaise add karein. Hinglish mein seekhein.",
  difficulty: "Intermediate", duration: "15 Minutes", heroImage: "",
  tags: ["HTML", "Video", "Multimedia"],
  theory: [
    "<video> tag website mein video play karne ke liye use hota hai.",
    "controls attribute se play/pause, volume, fullscreen controls aate hain.",
    "width aur height attributes se size control kar sakte hain.",
    "poster attribute se video play hone se pehle thumbnail dikha sakte hain.",
    "Supported formats: MP4 (sabse common), WebM, OGG."
  ],
  examples: [{
    title: "Video Player",
    description: "Ek simple video player with controls and poster.",
    code: "<video controls width=\"400\" poster=\"thumbnail.jpg\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  Your browser does not support video.\n</video>",
    result: "[Video player with controls and thumbnail]"
  }],
  syntax: [
    "<video controls width=\"640\" height=\"360\" poster=\"preview.jpg\">",
    "  <source src=\"movie.mp4\" type=\"video/mp4\">",
    "  <source src=\"movie.webm\" type=\"video/webm\">",
    "  Your browser does not support video.",
    "</video>"
  ],
  diagram: [
    "<video> → Video player container",
    "  controls → Player UI",
    "  width/height → Size",
    "  poster → Thumbnail image",
    "  autoplay → Auto start",
    "  loop → Repeat video"
  ],
  code: [{
    title: "Video with Multiple Sources",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Video Player</h2>\n  <video controls width=\"600\" poster=\"preview.jpg\">\n    <source src=\"tutorial.mp4\" type=\"video/mp4\">\n    <source src=\"tutorial.webm\" type=\"video/webm\">\n    <p>Your browser does not support video.</p>\n  </video>\n</body>\n</html>"
  }],
  output: ["[Video player with controls and poster image]"],
  commonMistakes: [
    "Poster (thumbnail) na dena — video load hone tak blank screen dikhti hai",
    "Video optimize na karna — large files slow loading ka karan ban sakti hain",
    "Multiple formats na dena — browser support nahi karne par video nahi chalegi",
    "Width/height na dena — layout shift hota hai jab video load hoti hai"
  ],
  bestPractices: [
    "MP4 format sabse safe choice hai — universal browser support",
    "Poster attribute se attractive thumbnail do",
    "Video compress karo (H.264 codec recommended)",
    "Responsive video ke liye CSS max-width: 100% use karo"
  ],
  tips: [
    "YouTube videos embed karne ke liye iframe use karo, <video> nahi",
    "Video ke liye preload=\"metadata\" attribute use karo fast loading ke liye",
    "Subtitles ke liye <track> tag use kar sakte hain"
  ],
  practice: [
    "Ek video player banao jisme controls aur poster ho",
    "Doosre format ka source add karo as fallback",
    "Ek YouTube video apne page mein embed karo using iframe"
  ],
  exercise: {
    instruction: "Ek video page banao jisme controls, poster image, 2 source formats (mp4, webm) aur fallback text ho.",
    hint: "poster attribute mein koi bhi image URL de sakte hain.",
    starterCode: "<video controls width=\"480\">\n  <source src=\"intro.mp4\" type=\"video/mp4\">\n</video>"
  },
  quiz: [
    { question: "Video ke thumbnail ke liye kaunsa attribute?", options: ["thumbnail", "poster", "image", "preview"], answer: 1, explanation: "poster attribute video load hone se pehle thumbnail dikhata hai." },
    { question: "Sabse compatible video format kaunsa hai?", options: ["AVI", "MP4", "WebM", "MOV"], answer: 1, explanation: "MP4 (H.264 codec) har browser aur device mein support hota hai." }
  ],
  interview: [
    { question: "HTML mein video kaise add karte hain?", answer: "<video> tag use karte hain. controls, poster, width, height important attributes hain. MP4 format sabse compatible hai." },
    { question: "Video aur iframe mein kya antar hai?", answer: "<video> apni khud ki video files ke liye hota hai. iframe YouTube, Vimeo jaise external platforms se video embed karne ke liye hota hai." }
  ],
  assignment: {
    title: "Video Gallery Assignment",
    description: "Ek video gallery page banayein with multiple videos.",
    tasks: ["3 videos ka gallery page banao", "Har video ke liye poster image do", "Responsive grid layout use karo", "Click karne par video play ho (lightbox style)", "Subtitles ke liye track tag add karo"],
    submission: "Code ko GitHub pe push karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - Video Element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" },
    { title: "HTML Video Guide", url: "https://www.w3schools.com/html/html5_video.asp" },
    { title: "Video Optimization", url: "https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-video-with-poster" }
  ],
  summary: [
    "<video> tag website mein video play karta hai.",
    "controls, poster, width, height important attributes hain.",
    "MP4 format sabse widely supported hai.",
    "Responsive videos ke liye max-width: 100% use karo."
  ]
};

export default lesson;
