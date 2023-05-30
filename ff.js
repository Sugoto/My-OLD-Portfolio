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
  ];
  
  const experiences = [
    {
      title: "Machine Learning Intern",
      company_name: "IIT Roorkee",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2022 - March 2023",
      points: [
        "Developed and implemented an efficient NLP pipeline that achieved an accuracy rate of 65% in transliterating documents from mixed Hinglish to pure languages.",
        "Used advanced encoder-decoder architecture with fine tuned Hugging Face transformers.",
        "Collaborated with a team comprising an eminent professor and mentors from IIT Roorkee, working with the National Informatics Centre (NIC), Government of India.",
      ],
    },
    {
      title: "GitHub Technical Manager",
      company_name: "DIVERSION 2K22 @ IEM, Kolkata",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - May 2022",
      points: [
        "Managed and coordinated the efforts of 5 teams, overseeing their GitHub repositories, driving successful and timely contributions to the event.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  // ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
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
      image: tidbtis,
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
      image: teejs,
      source_code_link: "https://github.com/Sugoto/TeeJS",
    },
    {
      name: "Shortenz",
      description:
        "A web application that leverages the power of OpenAI API from Rapid API to summarize articles from their links. It provides a convenient way to extract key information and insights from lengthy texts.",
      tags: [
        {
          name: "rapidapi",
          color: "blue-text-gradient",
        },
        {
          name: "browser-storage",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: summarize,
      source_code_link: "https://github.com/Sugoto/Shortenz-AI-Summarizer",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  