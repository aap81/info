// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aaron Alex Philip",
  title: "Hello, I'm Aaron",
  subTitle: emoji(
    "Full-stack Software Developer 🚀 experienced in backend microservices, cloud-native architecture, automation/CI-CD, and modern frontend development with React and TypeScript—delivering scalable, high-performance systems across enterprise environments."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aap81",
  linkedin: "https://www.linkedin.com/in/aaronalexphilip/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Scalable backends. Cloud microservices. Automation. Modern frontends. Full-stack done right",

  skills: [
    emoji("⚡ Build scalable backend services and microservices using Java, Ruby on Rails, Node.js, and Python"),
    emoji("⚡ Develop responsive, high-quality Frontend applications with React, JavaScript, and TypeScript"),
    emoji("⚡ Design automated CI/CD pipelines and deployment workflows for cloud-based systems"),
    emoji("⚡ Integration of third-party services and cloud platforms such as Firebase, AWS, and DigitalOcean"),
    emoji("⚡ Work with distributed systems, data pipelines, and optimized database architectures"),
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Ruby on Rails", fontAwesomeClassname: "fas fa-gem" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" }, 
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "SQL / Databases", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" }
  ],

  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Windsor",
      logo: require("./assets/images/uwindsor.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "2025",
      desc: "Conducted graduate-level research in anomaly detection, graph neural networks, and advanced machine learning systems.",
      descBullets: [
        "Thesis: RQPool – A Novel Multi-Branch Graph-Level Anomaly Detection framework",
        "Graduated with a 91/100 academic score",
        "Completed coursework in Machine Learning, Visual Processing, Big Data, Cyber Security, Cloud Computing, and Distributed Systems"
      ]
    },
    {
      schoolName: "University of Mumbai",
      logo: require("./assets/images/mu.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "2017",
      desc: "Developed a strong programming foundation in algorithms, systems, databases, distributed systems, and artificial intelligence.",
      descBullets: [
        "President – Computer Society of India (FCRIT)",
        "Built an AI-driven 8-Queens solving robot (1st Prize – Project Competition)",
        "Published research in IJCSN on a magnetic-manipulation–based puzzle-solving system",
        "Key coursework included: Applied Mathematics, Data Structures, Operating Systems, Computer Networks, Data Management, Warehousing & Mining, System Programming & Compiler Construction, Object-Oriented Programming, Web Technologies, Artificial Intelligence, Machine Learning, Cryptography & System Security, Computer Graphics",
      ],
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (React, TypeScript, JavaScript)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend (Java, Ruby on Rails, Node.js)",
      progressPercentage: "100%"
    },
    {
      Stack: "Data & Automation (ETL, Testing, Optimization)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Freelance Software Developer",
      company: "GoComet",
      companylogo: require("./assets/images/gocometLogo.png"),
      date: "Mar 2025 – Present",
      desc: "Working with GoComet to improve cloud deployments, optimize microservices, and lead CI/CD performance improvements.",
      descBullets: [
        "Consolidated shared core packages, reducing build times by 30%",
        "Led a 10-member team to optimize pipelines, cutting build time from 8 hours to 4 hours",
        "Re-engineered a critical client integration, improving performance by 70%"
      ]
    },
    {
      role: "Cloud Software / QA Developer Intern",
      company: "SAP",
      colorOverride: [78, 204, 249],
      companylogo: require("./assets/images/sapLogo.png"),
      date: "Sep 2023 – May 2024",
      desc: "Part of the SAP iXp program contributing to backend development, automation, and performance testing for cloud services.",
      descBullets: [
        "Implemented test procedures reducing production bugs by 80%",
        "Developed reusable automation scripts improving test efficiency by 30%",
        "Performed performance & stress testing reducing infrastructure issues by 20%"
      ]
    },
    {
      role: "Agile Developer Intern (HANA & Analytics)",
      company: "SAP",
      colorOverride: [78, 204, 249],
      companylogo: require("./assets/images/sapLogo.png"),
      date: "Jan 2023 – Aug 2023",
      desc: "Contributed to Analytics Cloud features, automation testing, and internal codebase improvements.",
      descBullets: [
        "Collaborated with senior developers on geospatial codebase enhancements",
        "Implemented automation test flows increasing product quality by 20%"
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "GoComet",
      companylogo: require("./assets/images/gocometLogo.png"),
      date: "Oct 2017 – Jun 2021",
      desc: "Developed and deployed large-scale backend services, analytics tools, and client integrations.",
      descBullets: [
        "Built analytical microservices reducing manual reporting effort by 98%",
        "Created and managed the GoComet Freight Index, increasing acquisition by 40% and engagement by 85%",
        "Led third-party API integrations using SFTP, OTM, and REST APIs, driving customer growth"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SIGNIFICANT RESEARCH & ENGINEERING PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/flairs38.png"),
      projectName: "RQPool – Graph-Level Anomaly Detection",
      projectDesc:
        "Master’s research thesis focused on designing a multi-branch neural network architecture for graph-level anomaly detection. Includes published work exploring multi-branch feature aggregation and performance improvements on graph datasets.",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://journals.flvc.org/FLAIRS/article/view/138971"
        }
      ]
    },
    {
      image: require("./assets/images/pcube.png"),
      projectName: "AI-Based 8-Queens Solving Robot",
      projectDesc:
        "An AI-driven robotic system built to solve the classic 8-Queens puzzle using magnetic manipulation and Arduino automation. Published in IJCSN and recognized for innovation in hardware + AI integration.",
      footerLink: [
        {
          name: "Published Paper",
          url: "http://ijcsn.org/articles/0505/Magnetic-Manipulation-Based-Arduino-Assisted-8-Queens-Puzzle-Solver.html"
        }
      ]
    },
    {
      image: require("./assets/images/gfi.png"),
      projectName: "GoComet Freight Index (GFI)",
      projectDesc:
        "Built the foundational version of the GoComet Freight Index (GFI), a production-scale analytics platform that tracks global freight rates in real time. Increased customer engagement by 85% and drove 40% customer acquisition. Built using microservices, automated data pipelines, and optimized database structures.",
      footerLink: [
        {
          name: "Company Website",
          url: "https://www.gocomet.com/freight-shipping-rates-index-calculator"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "President – CSI FCRIT",
      subtitle:
        "Led the Computer Society chapter, organizing coding competitions, workshops, hackathons, and tech seminars for 300+ students.",
      image: require("./assets/images/csi.png"),
      imageAlt: "CSI Logo",
      footerLink: []
    },
    {
      title: "National Project Competition – 3rd Prize",
      subtitle:
        "Awarded 3rd place at a national-level competition for developing an AI-driven 8-Queens solving robot as part of a team.",
      image: require("./assets/images/rait.png"),
      imageAlt: "Robot Icon",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {}
// {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {};
// {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

const podcastSection = {};
// {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
