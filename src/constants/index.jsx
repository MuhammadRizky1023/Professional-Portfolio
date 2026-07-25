const BASE = import.meta.env.BASE_URL;
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: `${BASE}images/ideas.svg` },
  { text: "Concepts", imgPath: `${BASE}images/concepts.svg`},
  { text: "Designs", imgPath: `${BASE}images/designs.svg` },
  { text: "Code", imgPath: `${BASE}images/code.svg `},
  { text: "Ideas", imgPath: `${BASE}images/ideas.svg` },
  { text: "Concepts", imgPath: `${BASE}images/concepts.svg` },
  { text: "Designs", imgPath: `${BASE}images/designs.svg` },
  { text: "Code", imgPath: `${BASE}/images/code.svg` },
];

const counterItems = [
  { value: 85, suffix: "%", label: "Web Application" },
  { value: 80, suffix: "%", label: "Mobile Application" },
  { value: 78, suffix: "%", label: "Mechine learnig" },
  { value: 75, suffix: "%", label: "AI ENGINEER" },
];



const abilities = [
  {
    imgPath: `${BASE}images/seo.png`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: `${BASE}images/chat.png`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${BASE}images/time.png`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: `${BASE}models/react_logo-transformed.glb`,
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: `${BASE}models/python-transformed.glb`,
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: `${BASE}models/node-transformed.glb`,
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: `${BASE}models/three.js-transformed.glb`,
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: `${BASE}models/git-svg-transformed.glb`,
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
{
  review: "During his internship at AICI, M. Rizky demonstrated strong analytical thinking and problem-solving skills in machine learning and robotics projects. His contributions helped improve model performance and streamline hardware preparation processes.",
  title: "Machine Learning Intern",
  date: "June 2024 - September 2024",
  responsibilities: [
    "Developed and evaluated machine learning models for educational robotics projects, improving model performance by 15%.",
    "Assembled, configured, and optimized robotic kits while ensuring seamless hardware and software integration.",
    "Proposed workflow improvements that increased hardware preparation efficiency by 10%.",
    "Contributed to the development of educational materials and documentation for robotics training programs."
  ],
},
];



const socialImgs = [
  {
    name: "insta",
    imgPath: `${BASE}images/insta.png`,
  },
  {
    name: "fb",
    imgPath: `${BASE}images/fb.png`,
  },
  {
    name: "x",
    imgPath: `${BASE}images/x.png`,
  },
  {
    name: "linkedin",
    imgPath: `${BASE}images/linkedin.png`,
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};