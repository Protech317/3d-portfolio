import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  discover,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  kodif,
  shopify,
  fleetio,
  technika,
  chatGPT,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Engineer",
    icon: backend,
  },
  {
    title: "Debugger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "KODIF AI",
    icon: kodif,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Present",
    points: [
      "Advanced web application performance by using efficient algorithms and data structures, reducing page load times by 28% and improving overall user experience",
      "Developed 90+ reusable UI components and 10+ custom hooks, resulting in 30% reduction in development time for new features and improved consistency in the application’s design",
      "Improved test coverage by 35% by writing unit tests and integration tests using Jest and Enzyme, ensuring software quality and reducing the number of bugs in production.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Discover Financial Services",
    icon: discover,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Nov 2021",
    points: [
      "Reduced invalid form submissions by 25% using Formik and Yup libraries for improved form validation.",
      "Integrated REST APIs with front-end components using axios for consistent API requests and improved response error handling by 30%.",
      "Optimized page load speed, accessibility, and SEO ranking using tools such as Lighthouse and adhering to WCAG and WAI-ARIA standards.",
    ],
  },
  {
    title: "Digital Marketing Manager (Intern) ",
    company_name: "Tabylga TC",
    icon: fleetio,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jun 2020",
    points: [
      "Built 15+ user friendly web pages for partners using WordPress and Hostinger.",
      "Built email templates using HTML/CSS for Mandrill and Mailchimp to enhance email campaign visuals and effectiveness.",
      "Boosted website visibility and Search Engine Rankings through targeted SEO strategies, resulting in a 40% increase in organic traffic and significantly enhancing online presence.",
    ],
  },
  {
    title: "CEO && Founder",
    company_name: "Technika KG",
    icon: technika,
    iconBg: "#383E56",
    date: "Jan 2016 - Jul 2018",
    points: [
      "Established and maintained relationships with key partners, investors, and stakeholders.",
      "Managed product development and launch, including market research, product design, and customer feedback.",
      "Maintained a strong focus on innovation and creativity, driving the development of new products and services",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bekzat approaches challenges with a positive attitude, consistently striving to uncover innovative solutions. His passion for learning and dedication to staying current with the latest technologies in his field is genuinely inspiring.",
    name: "Eliza Kanzhar",
    designation: "WIFE",
    company: "Happy Family",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Bekzat is an exceptional team player, always ready to collaborate and tackle complex challenges. He has a knack for articulating technical concepts in an accessible manner to non-technical team members and stakeholders, enhancing team understanding and project cohesion.",
    name: "Baia Zhus",
    designation: "Frontend Developer",
    company: "Wells Fargo",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Bekzat's skill in analyzing market trends and consumer behavior has been crucial in creating campaigns that engage our audience effectively and yield significant results.",
    name: "Sam Okenov",
    designation: "CTO",
    company: "Technika KG",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "ChatGPT 3.5",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: chatGPT,
    iframe: carrent,
    source_code_link: "https://github.com/",
    iframe: "https://chat-ai-tawny.vercel.app",
  },
  {
    name: "Eliza's Web",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "context",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    iframe: "https://elizakanzhar.online",
  },
  {
    name: "Trip Guide",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "react router",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    iframe: "https://travel-to-kyrgyzstan.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
