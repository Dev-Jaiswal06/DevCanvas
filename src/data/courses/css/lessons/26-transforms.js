const lesson = {
  id: 26,
  slug: "transforms",
  title: "CSS Transforms",
  description: "Manipulate element position, rotation, scale, and perspective with CSS transforms",
  difficulty: "Intermediate",
  duration: "40 min",
  heroImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  tags: ["CSS", "Transforms", "3D", "Animations"],
  theory: [
    "CSS transforms elements ko visually manipulate karne ka powerful tool hai — elements ko rotate, scale, skew, ya translate kar sakte hain bina document flow ko affect kiye",
    "translate(x, y) element ko uski original position se X aur Y axis pe shift karta hai — relative positioning ki tarah lekin better performance ke saath",
    "rotate(angle) element ko clockwise ya anticlockwise ghoomata hai — deg, rad, grad, turn units mein angle specify karte hain",
    "scale(factor) element ko X aur Y direction mein bada ya chhota karta hai — scale(2) double karega, scale(0.5) aadha karega",
    "skew(angle) element ko X ya Y axis pe tilt/twist karta hai — parallelogram effect banane ke liye use hota hai",
    "transform-origin property define karti hai ki transform ka center point kahan hai — default center hota hai lekin top-left, bottom-right bhi set kar sakte hain",
    "perspective 3D transforms ka essential part hai — isse depth aur distance ka illusion banta hai, jitni chhoti perspective value utna zyada dramatic effect",
    "transform-style: preserve-3d parent ke 3D space ko children tak propagate karta hai — otherwise children flat render hote hain",
    "3D transforms mein rotateX, rotateY, rotateZ, translateZ, scaleZ, aur perspective ka combination hota hai — true 3D space create karta hai",
    "Multiple transforms ek saath space-separated list se apply kiye ja sakte hain — jaise transform: translateX(50px) rotate(45deg) scale(1.2)"
  ],
  examples: [
    { title: "Card Flip Animation", description: "Card ko Y-axis pe 180 degree ghumana", code: ".card {\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.card:hover {\n  transform: rotateY(180deg);\n}", result: "Card hover pe Y-axis ke along ulta ho jayega — front side hide, back side show" },
    { title: "Scale on Hover", description: "Image hover pe zoom effect", code: "img {\n  transition: transform 0.3s ease;\n}\nimg:hover {\n  transform: scale(1.15);\n}", result: "Image hover karne par 15% badi ho jayegi smooth transition ke saath" },
    { title: "3D Perspective Tilt", description: "Mouse movement ke saath card tilt effect", code: ".perspective-card {\n  perspective: 1000px;\n}\n.perspective-card .card {\n  transition: transform 0.3s;\n}\n.perspective-card:hover .card {\n  transform: rotateX(10deg) rotateY(10deg);\n}", result: "Card hover pe 3D mein tilt ho jayega, depth ka illusion milega" }
  ],
  syntax: [
    "transform: translate(x, y) rotate(angle) scale(x, y) skew(x-angle, y-angle);",
    "transform-origin: x-position y-position z-position;",
    "perspective: distance;"
  ],
  diagram: [
    "┌────────────────────────────────────────────────────────────┐",
    "│                     CSS TRANSFORMS                         │",
    "│                                                            │",
    "│  2D TRANSFORMS:                                            │",
    "│  ┌──────┐   translate(30px)   ┌──────┐   rotate(45deg)    │",
    "│  │      │  ────────────────→  │      │  ──────────────→  │",
    "│  └──────┘                     └──────┘     (rotated)      │",
    "│                                                            │",
    "│  scale(1.5)  ┌──────────┐    skew(10deg)  ┌──────────┐   │",
    "│  ──────────→ │  Bigger  │   ────────────→ │ /Tilted/ │   │",
    "│              └──────────┘                 └──────────┘   │",
    "│                                                            │",
    "│  3D TRANSFORMS:                                            │",
    "│     ┌──────┐      ┌──────┐     ┌──────┐                   │",
    "│     │ Front│→persp│ Back │     │  Z   │                   │",
    "│     └──────┘      └──────┘     │ Axis │                   │",
    "└────────────────────────────────────────────────────────────┘"
  ],
  code: [
    { title: "3D Image Carousel", language: "css", code: ".carousel {\n  perspective: 1200px;\n  width: 300px;\n  height: 200px;\n  margin: 100px auto;\n}\n\n.carousel-inner {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform-style: preserve-3d;\n  animation: spin 15s infinite linear;\n}\n\n.carousel-item {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n}\n\n.carousel-item:nth-child(1) { transform: rotateY(0deg) translateZ(300px); }\n.carousel-item:nth-child(2) { transform: rotateY(60deg) translateZ(300px); }\n.carousel-item:nth-child(3) { transform: rotateY(120deg) translateZ(300px); }\n.carousel-item:nth-child(4) { transform: rotateY(180deg) translateZ(300px); }\n.carousel-item:nth-child(5) { transform: rotateY(240deg) translateZ(300px); }\n.carousel-item:nth-child(6) { transform: rotateY(300deg) translateZ(300px); }\n\n@keyframes spin {\n  from { transform: rotateY(0deg); }\n  to { transform: rotateY(360deg); }\n}" },
    { title: "Interactive Transform Controls", language: "html", code: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .transform-box {\n      width: 200px;\n      height: 200px;\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      border-radius: 20px;\n      margin: 50px auto;\n      transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n      cursor: pointer;\n    }\n    .transform-box:hover {\n      transform: translateX(30px) rotate(15deg) scale(1.1) skew(-5deg);\n    }\n    .transform-box:active {\n      transform: scale(0.9) rotate(0deg) translateX(0) skew(0deg);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"transform-box\"></div>\n  <p style=\"text-align: center; color: #666;\">Hover to see: translate + rotate + scale + skew</p>\n</body>\n</html>" },
    { title: "Transform Origin Variations", language: "css", code: ".container {\n  display: flex;\n  gap: 40px;\n  justify-content: center;\n}\n\n.box {\n  width: 100px;\n  height: 100px;\n  background: #3498db;\n  border-radius: 8px;\n  transition: transform 0.3s;\n}\n\n.box:hover {\n  transform: rotate(45deg);\n}\n\n.top-left { transform-origin: top left; }\n.top-right { transform-origin: top right; }\n.bottom-left { transform-origin: bottom left; }\n.bottom-right { transform-origin: bottom right; }\n.center { transform-origin: center; }\n.custom { transform-origin: 30% 70%; }" }
  ],
  output: [
    "3D carousel multiple images ko circular path mein ghumata hai with perspective depth",
    "Transform box hover pe 4 effects ek saath dikhayega: shift, rotate, scale, skew",
    "Transform-origin boxes alag-alag points se rotate hote hain — har box ka rotation center different hai"
  ],
  commonMistakes: [
    "Multiple transforms ek saath likhte time comma use karna — transforms space-separated jaate hain, comma nahi: transform: translateX(20px) rotate(45deg)",
    "Perspective bhoolna 3D effects mein — perspective ke bina rotateX/Y/Z ka 3D effect nahi dikhega, sirf 2D compression hoga",
    "transform-origin ka dhyan na rakhna — default center hota hai, lekin rotation aur scale ke center point ko change karke different effects mile sakte hain",
    "Performance ka dhyan na rakhna — transforms GPU-accelerated hote hain, lekin complex 3D scenes mobile pe lag kar sakte hain",
    "backface-visibility: hidden na dalna card flip mein — is property ke bina flip hone pe back side front side dikhegi overlapping"
  ],
  bestPractices: [
    "Animations aur interactions ke liye transforms ka use karo margin/padding/top/left ki jagah — transforms GPU pe render hote hain, isliye zyada smooth hain",
    "Perspective values experiment karo — 500px se 1000px ke beech realistic 3D effects dete hain, bahut chhoti value extreme distortion degi",
    "transform-style: preserve-3d parent element pe set karo jab 3D transforms children pe apply kar rahe ho",
    "Transforms ko transitions ya animations ke saath combine karo — smooth movement ke liye transition: transform 0.3s ease",
    "Mobile pe transforms test karo — kabhi kabhi overflow issues ya clipping ho sakti hai, overflow: visible set karo parent pe"
  ],
  tips: [
    "translate() ka use karo positioning ke liye — yeh element ko original position se shift karta hai bina layout affect kiye, margin se better hai",
    "scale(1.5) ke saath transform-origin: top left use karo agar element top-left corner se scale hona chahiye",
    "Rotate ke saath backface-visibility: hidden use karo agar do-sided elements bana rahe ho (jaise cards)"
  ],
  practice: [
    "Ek 3D cube banaye jisme 6 faces ho, har face rotate aur translate se positioned ho",
    "Ek product image gallery banaye jisme hover pe image scale ho aur slight rotation ho"
  ],
  exercise: {
    instruction: "Create a 3D flip card with a front and back face. The card should rotate on hover to reveal content on the back side",
    hint: "Use transform-style: preserve-3d on parent, rotateY(180deg) on hover, and backface-visibility: hidden on both faces",
    starterCode: "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: 'Segoe UI', sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    }\n    .flip-card {\n      width: 300px;\n      height: 400px;\n      perspective: 1000px;\n    }\n    .flip-card-inner {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    }\n    /* Add transform-style here */\n    .flip-card:hover .flip-card-inner {\n      /* Add transform here */\n    }\n    .flip-card-front, .flip-card-back {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: 16px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 30px;\n      text-align: center;\n    }\n    /* Add backface-visibility to both faces here */\n    .flip-card-front {\n      background: white;\n      color: #2c3e50;\n    }\n    .flip-card-front h2 {\n      margin-bottom: 15px;\n    }\n    .flip-card-front .icon {\n      font-size: 64px;\n      margin-bottom: 20px;\n    }\n    .flip-card-back {\n      background: linear-gradient(135deg, #667eea, #764ba2);\n      color: white;\n    }\n    /* Add transform to flip the back face here */\n    .flip-card-back h3 {\n      margin-bottom: 15px;\n      font-size: 24px;\n    }\n    .flip-card-back p {\n      line-height: 1.6;\n      margin-bottom: 20px;\n    }\n    .flip-card-back button {\n      background: white;\n      color: #667eea;\n      border: none;\n      padding: 12px 24px;\n      border-radius: 50px;\n      font-size: 16px;\n      font-weight: 600;\n      cursor: pointer;\n    }\n  </style>\n</head>\n<body>\n  <div class=\"flip-card\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <div class=\"icon\">🚀</div>\n        <h2>CSS 3D Transforms</h2>\n        <p>Hover over me to flip!</p>\n      </div>\n      <div class=\"flip-card-back\">\n        <h3>You Found Me!</h3>\n        <p>This is the back side of the card created entirely with CSS 3D transforms.</p>\n        <button>Learn More</button>\n      </div>\n    </div>\n  </div>\n</body>\n</html>"
  },
  quiz: [
    { question: "CSS transform property se kaunsa effect possible nahi hai?", options: ["translate (move)", "rotate (ghoomana)", "color change", "scale (bada/chhota)"], answer: 2 },
    { question: "Element ko 3D mein ghoomane ke liye kaunsa function use hota hai?", options: ["rotateZ(45deg)", "rotateY(180deg)", "skewX(45deg)", "translateZ(100px)"], answer: 1 },
    { question: "3D effect ke liye kaun si property necessary hai?", options: ["transform-style", "perspective", "backface-visibility", "Sare necessary hain"], answer: 1 },
    { question: "Multiple transforms ek saath kaise likhe jaate hain?", options: ["Comma se separate karke", "Space se separate karke", "Semicolon se separate karke", "Plus sign se"], answer: 1 },
    { question: "transform-origin property kya define karti hai?", options: ["Transform ka direction", "Transform ka center point", "Transform ki speed", "Transform ka color"], answer: 1 }
  ],
  interview: [
    { question: "CSS transforms kya hain aur yeh animation mein kyun important hain?", answer: "CSS transforms elements ko visually manipulate karne ke functions hain — translate (move), rotate (ghoomana), scale (bada/chhota), skew (tilt). Yeh animation mein isliye important hain kyunki yeh GPU-accelerated hote hain, matlab yeh CPU ko load nahi karte aur 60fps smooth animation dete hain. Agar margin ya position change karte hain toh browser repaint trigger hota hai jo slow hota hai." },
    { question: "transform-style: preserve-3d ka kya kaam hai?", answer: "transform-style property decide karta hai ki element apne children ko 3D space mein rakhta hai ya flat. preserve-3d se children apne parent ke 3D space mein participate karte hain. Iske bina (default flat), children apne plane pe flat render hote hain chahe parent pe koi 3D transform laga ho. 3D card flip jaise effects ke liye yeh property zaroori hai." },
    { question: "perspective property ko kab aur kahan lagate hain?", answer: "perspective parent element pe lagayi jaati hai jisme 3D transforms hote hain — yeh view distance ko define karti hai. Chhoti value (jaise 200px) bahut zyada distortion degi, badi value (jaise 2000px) kam distortion degi. perspective() function individual elements pe bhi lagaya ja sakta hai, lekin tab har element ka apna perspective hoga, shared space nahi." }
  ],
  assignment: [
    "Ek 3D cube banaye jisme 6 faces ho — har face different color/image ke saath, cube rotate hota rahe",
    "Ek interactive product card banaye jisme hover pe image zoom ho (scale), title slight slide kare (translate), aur shine effect ho (rotate + gradient)",
    "Ek 3D gallery slider banaye jisme images depth ke saath arrange ho aur navigation pe rotate ho"
  ],
  resources: [
    { title: "MDN CSS Transform Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform" },
    { title: "CSS 3D Transforms Guide", url: "https://3dtransforms.desandro.com/" },
    { title: "CSS Transform Generator", url: "https://www.cssportal.com/css-transform/" }
  ],
  summary: "CSS transforms elements ko 2D aur 3D mein manipulate karne ke powerful functions hain. translate() element ko move karta hai, rotate() ghoomata hai, scale() bada/chhota karta hai, skew() tilt/twist karta hai. transform-origin center point change karta hai jahan se transform apply hota hai. 3D transforms ke liye perspective (depth), transform-style: preserve-3d (3D space propagation), aur backface-visibility (hidden faces) zaroori hain. Multiple transforms ek saath space-separated list se apply hote hain. Transforms GPU-accelerated hote hain jo smooth 60fps animations ensure karte hain."
};

export default lesson;
