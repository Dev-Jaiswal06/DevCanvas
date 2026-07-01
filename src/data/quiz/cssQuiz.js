const cssQuiz = [
  {
    id: 1,
    question: "CSS ka full form kya hai?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: 0,
    explanation: "CSS stands for Cascading Style Sheets."
  },
  {
    id: 2,
    question: "CSS external file link karne ke liye kaunsa tag use hota hai?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    answer: 2,
    explanation: "<link> tag external CSS file ko HTML se link karta hai."
  },
  {
    id: 3,
    question: "Text ko center align karne ke liye kaunsa property use hoti hai?",
    options: ["text-align: center", "align: center", "center: true", "text: center"],
    answer: 0,
    explanation: "text-align: center text ko horizontally center karta hai."
  },
  {
    id: 4,
    question: "Background color set karne ke liye kaunsa property?",
    options: ["bgcolor", "color", "background-color", "bg-color"],
    answer: 2,
    explanation: "background-color property element ka background color set karti hai."
  },
  {
    id: 5,
    question: "Padding kya hoti hai?",
    options: ["Content ke bahar ki space", "Content ke andar ki space", "Element ke beech ki space", "None"],
    answer: 1,
    explanation: "Padding content aur border ke beech ki space hoti hai."
  },
  {
    id: 6,
    question: "Border radius se kya hota hai?",
    options: ["Border color change", "Border style change", "Rounded corners", "Border width change"],
    answer: 2,
    explanation: "border-radius element ke corners ko round karta hai."
  },
  {
    id: 7,
    question: "Flexbox mein items ko center karne ke liye kya use hoga?",
    options: ["justify-content: center", "align-items: center", "Dono", "Koi nahi"],
    answer: 2,
    explanation: "justify-content: center (horizontal) aur align-items: center (vertical) dono lagte hain."
  },
  {
    id: 8,
    question: "CSS mein z-index kya karta hai?",
    options: ["Zoom level", "Stacking order", "Font size", "Opacity"],
    answer: 1,
    explanation: "z-index elements ke stacking order ko control karta hai."
  },
  {
    id: 9,
    question: "Responsive design ke liye kaunsa unit recommended hai?",
    options: ["px", "cm", "rem", "in"],
    answer: 2,
    explanation: "rem relative unit hai jo responsive design ke liye best hai."
  },
  {
    id: 10,
    question: "CSS variable define karne ke liye kya use hota hai?",
    options: ["$var", "@var", "--var", "#var"],
    answer: 2,
    explanation: "CSS variables -- se start hote hain, jaise --primary-color."
  }
];

export default cssQuiz;
