import {
    rails,
    unity,
    dagster,
    postgres,
    vr,
    cve,
    vcity,
    resnet50,
    snowpro,
    thelastshow,
    lotion,
    bravry,
    swipe,
    ttg,
    wordle,
    mysql,
    aws,
    java,
    csharp,
    cpp,
    c,
    python,
    ignite,
    JA,
    shell,
    data,
    graphic,
    game,
    front,
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
      title: "Frontend Development",
      icon: front,
    },
    {
      title: "Backend Development",
      icon: backend,
    },
    {
      title: "Game Development",
      icon: game,
    },
    {
      title: "VR / XR Development",
      icon: vr,
    },
    {
      title: "Graphics and 3D Modelling",
      icon: graphic,
    },
    {
      title: "Data Science",
      icon: data,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "mySQL",
      icon: mysql,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "Dagster",
      icon: dagster,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Rails",
      icon: rails,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Co-op - Development and Production Data Solutions",
      company_name: "Cenovus Energy",
      icon: cve,
      iconBg: "#060040",
      date: "January 2024 - December 2024",
      points:
        [
          "Collaborate with Canadian Oil Sands and Thermal Heavy Oil Operations Development and Production teams to understand their data needs and challenges.",
          "Design and develop end-to-end data and analytics solutions tailored to the requirements of different teams.",
          "Implement full-stack development solutions, including full-stack frameworks such as Ruby on Rails.",
          "Perform data engineering tasks such as data ingestion, transformation, and storage optimization.",
          "Orchestrate data pipelines for efficient and reliable data processing using tools such as Dagster.",
          "Conduct analysis and reporting on large datasets to derive actionable insights.",
          "Apply machine learning and statistical inference techniques to solve complex business problems.",
          "Document processes, workflows, and technical implementations to ensure knowledge sharing and maintain accurate records.",
          "Participate in training sessions and workshops to enable teams in adopting and effectively utilizing data solutions."
        ]
      
    },
    {
      title: "Software Deployment Intern",
      company_name: "Vertical City",
      icon: vcity,
      iconBg: "#060040",
      date: "July 2023 - August 2023",
      points: [
        "Responsible for Ubuntu 20 software installation and maintenance for elevator and lobby screens.",
        "Responsible for documentation of installations, recording elevator details, and maintaining accurate records.",
        "Engaged in effective collaboration with the Lead of Property Support, ensuring smooth communication regarding screen updates and promptly addressing any technical issues.",
      ],
    },
    {
      title: "Liaison",
      company_name: "Junior Achievement Southern Alberta",
      icon: JA,
      iconBg: "#060040",
      date: "October 2021 - March 2024",
      points: [
        "In charge of overseeing student-run businesses across the city.",
        "Responsible for student engagement and business education.",
        "Contributed to financial organization, accounting, B2B, and B2C relations.",
      ],
    },
    {
      title: "Mentor",
      company_name: "Schulich Ignite",
      icon: ignite,
      iconBg: "#060040",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Taught students how to program in Python using the processing library.",
        "Debugged code and provided individualized project advice.",
        "Responsible for marking code and providing feedback and corrections.",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "Shell Canada",
      icon: shell,
      iconBg: "#060040",
      date: "April 2020 - November 2022",
      points: [
        "Responsible for all customer service duties and day-to-day store operation.",
        "Responsible for store merchandise, ordering, and inventory management.",
        "Performed routine inspections of the entire store.",
        "Collaborated with other employees to ensure targets were met.",
      ],
    },
  ];

  
  const projects = [
    {
      name: "BraVRy",
      description:
        "Virtual Reality exposure therapy to help relieve the millions of individuals suffering from anxiety. Won 2nd place at NatHacks 2023, Canada's largest Neurotech hackathon.",
      tags: [],
      image: bravry,
      source_code_link: "https://youtu.be/J--l6T3yhFQ",
    },
    {
      name: "Swipe-Talk Augmented Reality",
      description:
        "Created a swipe to talk hand-movement tracking application in mixed reality using the Microsoft HoloLens 2 and Unity Editor in less than 24 hours for non-speaking individuals with autism. Received 1st place at IEEE SIGHT ProjectVoice Hackathon.",
      tags:[],
      image: swipe,
      source_code_link: "https://www.youtube.com/watch?v=3G_DJazPcFc&feature=youtu.be&themeRefresh=1",

    },
    {
      name: "Lotion Plus",
      description:
        "Note-taking app coded in React with Google Authentication and DynamoDB backend, complete with Python lambda functions.",
      tags: [],
      image: lotion,
      source_code_link: "https://dancing-mousse-b4cb28.netlify.app/",
    },
    {
      name: "Wordle Clone",
      description:
        "Wordle clone with extra functionality (dark theme, hints) and customized words.",
      tags: [],
      image: wordle,
      source_code_link: "https://github.com/ucalgary-ensf381/assignment-05-wordle-bigz88",
    },
    {
      name: "The Last Show",
      description:
        "An obituary generator which uses Chat GPT completion API to generate text. Utilizes Python lambdas, AWS Polly and DynamoDB, and Cloudinary API.",
      tags: [],
      image: thelastshow,
      source_code_link: "https://github.com/bigz88/the-last-show",
    },
    {
      name: "TriageToGo",
      description:
        "An HTML and CSS website developed to triage patients in an ambulance to improve emergency department flow. Won 3rd place at the annual HackMedTech Hackathon.",
      tags: [],
      image: ttg,
      source_code_link: "https://youtu.be/E96-TarRJUk",
    },
    {
      name: "Snow Pro",
      description:
        "A 2D platforming game developed in Unity and C#. There are custom sprites, physics systems, and leaderboard.",
      tags: [],
      image: snowpro,
      source_code_link: "https://play.unity.com/mg/other/build-rr1-1",
    },
        {
      name: "ResNet-50 for Alzheimer's Diagnosis",
      description:
        "A first-of-its-kind experiment which determined that using MRI scans in addition to clinical data is more effective at predicting Alzheimer's disease progression. The algorithm resulted in a 90% accuracy.",
      tags: [],
      image: resnet50,
      source_code_link: "https://github.com/zaid-ahmed1/ResNet50-for-Alzheimers-Diagnosis",
    },
    
  ];
  
  export { services, technologies, experiences, projects };