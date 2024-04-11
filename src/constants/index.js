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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  Wechat,
  threejs,
  Zaika,
  cloudsufi,
  freelance,
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: freelance,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining full-stack web applications using React.js and Next.js, with expertise in front-end technologies such as Tailwind CSS and Styled Components.",
      "Collaborating closely with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality products and solutions.",
      "Implementing responsive design principles and ensuring cross-browser compatibility for seamless user experiences across various devices.",
      "Contributing to code reviews and providing constructive feedback to enhance the overall code quality and maintainability.",
      "Utilizing Node.js, web sockets, and Web RTC for backend development and real-time communication functionalities within applications.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Cloud Sufi",
    icon: cloudsufi,
    iconBg: "#383E56",
    date: "",
    points: [
      "Utilized Cloud Build and bash scripts to automate end-to-end testing on CDF, ensuring thorough testing of Cloud Data Fusion release candidates.",
      "Employed a comprehensive stack of Google Cloud services, including Cloud Source Repository, Cloud Data Fusion, DataProc, Cloud Build, Secret Manager, Artifact Registry, Container Registry, IAM, Compute Engine, and schedulers.",
      "Implemented parallelization techniques, reducing cloud build execution time by 30% and making the release process more efficient.",
      "Implemented dynamic resource management to dynamically create and manage CDF instances and Dataproc clusters using REST APIs, optimizing resource utilization and reducing costs by 40% through provisioning resources only when needed.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Cloud Sufi",
    icon: cloudsufi,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed enterprise-grade plugins for CDF using Java and Hadoop map reduce, enhancing platform capabilities.",
      "Implemented Junit tests (Jmockit) and end-to-end testing (Selenium) for robust quality assurance.",
      "Streamlined development with GitHub Actions, automating processes and ensuring efficiency.",
      "Led the creation of GitHub Actions for critical P1 plugins, contributing to a more automated development process and efficient workflow.",
      "Addressed customer-reported bugs, focusing on enterprise plugins to ensure reliable solutions and customer satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zaika",
    description:
      "Web-based platform that allows users to order there faviourate food from various providers, providing a convenient and efficient solution for late night hungers.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "swiggy API",
        color: "blue-text-gradient",
      },
    ],
    image: Zaika,
    source_code_link: "https://github.com/",
  },
  {
    name: "WeChat",
    description:
      "Web application that enables users to chat and see each other one on one.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Wechat,
    source_code_link: "https://github.com/",
  },
  {
    name: "Thrift Store",
    description:
      "A comprehensive ecommerce platform that allows users to sell and buy things at cheap prices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs & express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Zaika",
    description:
      "Web-based platform that allows users to order there faviourate food from various providers, providing a convenient and efficient solution for late night hungers.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "swiggy API",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "WeChat",
    description:
      "Web application that enables users to chat and see each other one on one.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "WebRTC",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Thrift Store",
    description:
      "A comprehensive ecommerce platform that allows users to sell and buy things at cheap prices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs & express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
