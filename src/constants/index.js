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
  threejs,
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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Technical Content Writer",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company_name: "IIT Roorkee",
    icon: redux,
    iconBg: "#383E56",
    date: "Nov 2022 - March 2023",
    points: [
      "Accomplished a 65% accuracy in transliterating mixed Hinglish documents to pure English and native languages by designing and developing an efficient NLP pipeline, thereby streamlining language conversion processes.",
      "Collaborated with an eminent professor and mentors from IIT Roorkee, working with the National Informatics Centre (NIC) of the Government of India, fostering a synergistic team approach.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "PHOTOGPT AI",
    icon: git,
    iconBg: "#E6DEDD",
    date: "July 2023 – September 2023",
    points: [
      "Improved user functionality by integrating Large Language Models (LLMs) into Python applications with chatbots, and by deploying 7+ backend RESTful API endpoints.",
      "Enhanced AI image quality by 15% through the implementation of Stable Diffusion and ControlNet in an end-to-end image generation pipeline and enabling the parallel creation of 5-10 images.",
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
    name: "TidBits",
    description:
      "Tidbits is an open-source sharing platform that empowers individuals to explore, develop, and exchange their creative thoughts and ideas. Join our community and unlock a world of inspiration.",
    tags: [
      {
        name: "next13",
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
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sugoto/Tidbits-Share-your-Ideas",
  },
  {
    name: "TeeJS",
    description:
      "Design & personalize your own t-shirts with vibrant colors, captivating logos, and AI-generated designs! Unleash your creativity and stand out with our intuitive interface and 3D rendering.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Sugoto/TeeJS",
  },
  {
    name: "Algorithmic Trading",
    description:
      "An innovative unsupervised learning trading strategy using Python and Machine Learning, to analyze the S&P 500 market, resulting in optimized portfolio management and increased market performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "finance",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sugoto/Algorithmic-Trading-Using-Unsupervised-Learning",
  },
  {
    name: "Cloud Resource Monitoring App",
    description:
      "A Cloud Resource Monitoring Application utilizing Docker, Kubernetes, Amazon ECR, and Amazon EKS to measure system resource usage of a server.",
    tags: [
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "linux-server",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sugoto/Cloud-Resource-Monitoring",
  },
];

export { services, technologies, experiences, testimonials, projects };
