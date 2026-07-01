const lesson = {
  id: 13, slug: "audio", title: "HTML Audio",
  description: "Website mein audio files kaise add karein. Hinglish mein seekhein.",
  difficulty: "Intermediate", duration: "12 Minutes", heroImage: "",
  tags: ["HTML", "Audio", "Multimedia"],
  theory: [
    "<audio> tag website mein audio files play karne ke liye use hota hai.",
    "controls attribute se play/pause, volume, progress bar jaise controls aate hain.",
    "<source> tag se multiple audio formats specify kar sakte hain.",
    "Supported formats: MP3 (sabse common), WAV, OGG.",
    "autoplay, loop, muted jaise attributes bhi hain."
  ],
  examples: [{
    title: "Audio Player",
    description: "Ek simple audio player with controls.",
    code: "<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>",
    result: "[Audio player with play/pause controls]"
  }],
  syntax: [
    "<audio controls>",
    "  <source src=\"audio.mp3\" type=\"audio/mpeg\">",
    "  <source src=\"audio.ogg\" type=\"audio/ogg\">",
    "  Your browser does not support audio.",
    "</audio>"
  ],
  diagram: [
    "<audio> → Audio player container",
    "  controls → Play/pause UI",
    "  autoplay → Auto play (avoid)",
    "  loop → Repeat",
    "  muted → Start muted"
  ],
  code: [{
    title: "Audio with Fallback",
    language: "html",
    code: "<!DOCTYPE html>\n<html>\n<body>\n  <h2>Audio Player</h2>\n  <audio controls>\n    <source src=\"song.mp3\" type=\"audio/mpeg\">\n    <source src=\"song.ogg\" type=\"audio/ogg\">\n    <p>Your browser does not support audio.</p>\n  </audio>\n</body>\n</html>"
  }],
  output: ["[Audio player with controls displayed]"],
  commonMistakes: [
    "Multiple source formats na dena — ek format fail ho to backup nahi hota",
    "Fallback text bhool jana — agar browser support nahi kare to user ko pata nahi chalega",
    "Autoplay ka overuse — users ko control dena chahiye",
    "Agar koi source attribute diya hai to use karo, nahi to fallback dikhao"
  ],
  bestPractices: [
    "Hamesha multiple source formats do (MP3 + OGG)",
    "Controls attribute zaroor do taake user control kar sake",
    "Autoplay se bacho ya muted autoplay use karo",
    "Accessibility ke liye transcript provide karo"
  ],
  tips: [
    "MP3 format sabse widely supported hai",
    "Audio files compress karo (128kbps sufficient hai)",
    "Background music ke liye loop attribute use kar sakte ho"
  ],
  practice: [
    "Ek audio player banao jisme controls aur 2 source formats hon",
    "Ek podcast episode page banao with audio player and show notes",
    "Autoplay muted ke saath ek background audio add karo"
  ],
  exercise: {
    instruction: "Ek audio player banao jisme controls ho, 2 source formats (MP3, OGG) ho, aur fallback text ho.",
    hint: "<source> tags order mein rakho — pehle MP3, phir OGG.",
    starterCode: "<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n</audio>"
  },
  quiz: [
    { question: "Audio player ke controls ke liye kaunsa attribute?", options: ["show", "controls", "player", "ui"], answer: 1, explanation: "controls attribute play/pause, volume aur progress bar dikhata hai." },
    { question: "Sabse compatible audio format kaunsa hai?", options: ["WAV", "OGG", "MP3", "FLAC"], answer: 2, explanation: "MP3 har modern browser support karta hai." }
  ],
  interview: [
    { question: "HTML mein audio kaise add karte hain?", answer: "<audio> tag use karte hain. controls attribute se player UI aata hai. <source> tag se multiple formats specify kar sakte hain." },
    { question: "Audio ke supported formats kaun se hain?", answer: "MP3 (sabse common), WAV (uncompressed), OGG (open format). MP3 sabse safe choice hai kyunki ye sab browsers mein support hota hai." }
  ],
  assignment: {
    title: "Audio Page Assignment",
    description: "Ek music player page banayein jisme playlist ho.",
    tasks: ["3 audio files ka player banao with controls", "Playlist UI banakar next/previous buttons do", "Current song display karo", "Volume control implement karo", "Responsive design banao"],
    submission: "Code GitHub pe push karein", deadline: "1 week"
  },
  resources: [
    { title: "MDN - Audio Element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" },
    { title: "HTML Audio Guide", url: "https://www.w3schools.com/html/html5_audio.asp" },
    { title: "Web Audio API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API" }
  ],
  summary: [
    "<audio> tag se website mein audio play kar sakte hain.",
    "controls attribute player UI deta hai.",
    "Multiple source formats provide karo compatibility ke liye.",
    "Autoplay se bacho, users ko control do."
  ]
};

export default lesson;
