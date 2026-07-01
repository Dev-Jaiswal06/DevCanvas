import html01 from "./html/01-personal-portfolio";
import html02 from "./html/02-tribute-page";
import html04 from "./html/04-forms-survey";
import html05 from "./html/05-technical-doc";
import html06 from "./html/06-landing-page";
import html07 from "./html/07-event-invite";

import css01 from "./css/01-css-art";
import css02 from "./css/02-animated-loader";
import css03 from "./css/03-navigation-menu";
import css04 from "./css/04-css-grid-gallery";
import css05 from "./css/05-glassmorphism-card";
import css06 from "./css/06-dark-light-toggle";

import js01 from "./javascript/01-todo-app";
import js02 from "./javascript/02-weather-app";
import js03 from "./javascript/03-calculator";
import js04 from "./javascript/04-quiz-app";
import js05 from "./javascript/05-countdown-timer";
import js06 from "./javascript/06-color-picker";

import react01 from "./react/01-counter-app";
import react02 from "./react/02-weather-dashboard";
import react03 from "./react/03-todo-app";
import react04 from "./react/04-expense-tracker";
import react05 from "./react/05-github-profile";
import react06 from "./react/06-memory-game";

const projects = [
  html01, html02, html04, html05, html06, html07,
  css01, css02, css03, css04, css05, css06,
  js01, js02, js03, js04, js05, js06,
  react01, react02, react03, react04, react05, react06,
];

export default projects;

export const getProjectsByCategory = (category) => {
  return projects.filter((p) => p.category === category).sort((a, b) => a.order - b.order);
};

export const getProjectById = (id) => {
  return projects.find((p) => p.id === id);
};

export const categories = [
  { id: "html", title: "HTML Projects", icon: "🌐", count: 6 },
  { id: "css", title: "CSS Projects", icon: "🎨", count: 6 },
  { id: "javascript", title: "JavaScript Projects", icon: "⚡", count: 6 },
  { id: "react", title: "React Projects", icon: "⚛️", count: 6 },
];
