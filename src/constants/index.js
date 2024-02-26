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
    java,
    cpp,
    python,
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
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C ++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Decimal Technolgies",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Auguest 2021 - July 2022",
      points: [
        "Developed proof of concepts for web and mobile applications using Java Spring boot with core systems and REST APIs.",
        "Enhanced application safety by 13% within 8 months through collaborative risk analysis with a team of 7 professionals.",
        "Delivered 5 key milestones for major POCs prior to deadline, through assisting 4 teams with bugs and issues fixes, resulting in an increase of customer satisfaction ratings by a notable 20% from 4/5 to a perfect 5/5.",
        "Boosted software production by 7% in 2 months by educating freshman regarding cloud and core technology."
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "Illinois Institute of Technology",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Empowered students to grasp and apply object-oriented programming concepts, including Inheritance and Encapsulation, Interfaces, Polymorphism, and Object Analysis and Design (OOAD) in the Java Standard Edition platform.",
        "Transformed 200+ students into Java wizards, orchestrating a 30% surge in assignment scores through hands-on and engaging instructions.",
        "Slashed debugging time by 40% and improved code quality by 25% by implementing advanced IDE tools.",
        "Spearheaded practical sessions, propelling students to excel in packaging, deployment, debugging, and unit testing leading to a 30% decrease in bug rates and a 15% increase in code quality scores."
      ],
    },
    {
      title: "Project Manager Intern for Software Engineering",
      company_name: "Global Shala",
      icon: shopify,
      iconBg: "#383E56",
      date: "Apr 2022 - Jun 2022",
      points: [
        "Assimilated several project management artifacts - RACI charts, project charter, Risk matrix, work breakdown structure.",
        "Managed a team of 10 members from 6 countries in organizing a global event called Superhero U and completed 4 deliverables on-time & within budget, resulting in a 10% increase in customer satisfaction.",
        "Organized group kick off meetings and identified purpose and agenda for meetings to understand 3 major obstacles to eliminate for smooth functioning of event.",
        "Directed staff training program to ensure timely completion of all goals while adhering to budgetary constraints, yielding an average productivity improvement of 25%"
      ],
    },
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };