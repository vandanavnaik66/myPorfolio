import type { Profile, Project } from "./types";

// Update these defaults to your real details.
export const profile: Profile = {
  name: "Vandana Naik",
  title: "Frontend Developer · Software Engineer",
  heroTitle: "Frontend Developer · Software Engineer",
  location: "Bengaluru, India",
  photo: { src: "/images/introPicAnimated.png", alt: "Profile photo" },
  greeting: "Hi - I’m Vandana  :)",
  summary: [
    "I'm a frontend/software developer based in Bengaluru, India. With a passion for crafting exceptional digital experiences, I specialize in translating design into seamless web applications. My toolkit includes HTML, CSS, JavaScript, React.js, Next js and Redux Toolkit, with a touch of Bootstrap and tailwind for added finesse.",
    "Currently i am working as an Software Engineer at Mphasis Ltd, where I've crafted responsive web applications from the ground up. Collaborating with fellow code artists, I've tamed bugs and woven seamless screens, crafting digital tapestries that sing with user satisfaction and satisfies client needs. Also I have tapped into backend working on Java Spring Boot applications, resolving bugs and developing new services to meet evolving client requirements.",
    "During my free time, I find joy in a colorful array of activities that bring out my creativity. Whether I'm engrossed in drawing , designing or digital art, my love for art is a constant source of inspiration. As a dedicated cricket player, I relish the thrill of the game, both as a player and a captain sometimes, where teamwork and strategy intertwine. Beyond the sporting field, my curiosity leads me to explore the latest technologies, keeping me at the forefront of innovation.",
  ],
  heroSummary: [
    "Currently working as a Software Engineer.",
    "I like to take up challenges, observe, learn and build solutions through which try to make people’s life easier and beautiful.",
  ],
  skills: [
    "Next.js (App Router)",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Accessibility",
    "Design Systems",
    "API Integration",
  ],
  skillGroups: [
    {
      title: "Core",
      items: [
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Sass (SCSS)",
      ],
    },
    {
      title: "Libraries & Frameworks",
      items: [
        "React.js",
        "Redux (Toolkit)",
        "Next.js",
        "Material UI",
        "Tailwind",
      ],
    },
    {
      title: "State Management",
      items: ["Redux", "React Context API", "Thunk/Saga"],
    },
    {
      title: "DevOps & Tools",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "CI/CD Pipeline",
        "VS Code",
        "Postman",
        "npm/yarn",
        "Chrome DevTools",
        "Jira",
      ],
    },
    {
      title: "Testing",
      items: [
        "Jest",
        "React Testing Library",
        "JUnit",
        "Unit Testing",
        "Integration Testing",
      ],
    },
    {
      title: "Methodologies",
      items: [
        "Agile Development",
        "Scrum",
        "Code Review",
        "UI/UX Design",
        "Responsive Design",
        "Web Accessibility",
        "Mobile-First Development",
      ],
    },
  ],
  education: [
    {
      school: "BMS College of Engineering | Bengaluru, India",
      degree: "B.E in Electrical and Electronics Engineering",
      period: "2017 — 2021",
      details: "8.6 CGPA",
    },
  ],
  interests: ["Yoga", "Reading books", "Walking", "Watching movies"],
  socials: [
    { label: "GitHub", href: "https://github.com/vandanavnaik66" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vandana-naik" },
  ],
};

export const projects: Project[] = [
  {
    slug: "health-timeline",
    title: "Health Timeline",
    role: "Frontend + Database",
    summary:
      "A secure, AI-powered health data aggregator that transforms fragmented medical records into a chronological, actionable health journey.",

    description:
      "Built for patients managing chronic conditions or long-term health goals, this platform solves the problem of 'data silos' in healthcare. It uses OCR and LLMs to parse unstructured medical PDFs (like lab reports and visit summaries) into a structured Postgres database, visualizing trends over time and providing a unified clinical history that patients can share with providers.",

    stack: [
      "Next.js 15 (App Router)",
      "TypeScript",
      "Supabase (Auth/Postgres/RLS)",
      "Tailwind CSS",
      "Shadcn UI",
      "Vercel AI SDK",
      "Recharts",
    ],

    highlights: [
      "Implemented AI-driven OCR processing to extract structured medical metrics from unstructured PDF uploads with 95% accuracy.",
      "Engineered a dynamic, multi-axis timeline visualization to correlate disparate data points (e.g., blood pressure vs. medication changes).",
      "Architected a 'Privacy-First' security model using Supabase Row Level Security (RLS) and encrypted document storage.",
      "Optimized dashboard performance using React Server Components (RSC) and streaming to handle large datasets of historical health records.",
      "Developed a responsive 'Clinical-Chic' design system focused on high-legibility and accessibility for diverse patient demographics.",
    ],
    cardImage: {
      src: "/images/projects/health-timeline/health-timeline-thumbnail.png",
      alt: "Health timeline preview",
    },
    images: [
      {
        src: "/images/projects/health-timeline/health-timeline-thumbnail.png",
        alt: "Health timeline landing page",
      },
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/your-handle/motion-components",
      },
    ],
    year: "2026",
  },
  {
    slug: "study-notion",
    title: "Study Notion",
    role: "Full Stack",
    summary:
      "Study Notion: Empowering students and instructors with a MERN stack platform. Instructors list courses, students access quality education.",
    description:
      "Study Notion is a comprehensive MERN (MongoDB, Express.js, React, Node.js) stack project designed to bridge the gap between students and instructors in the world of online education. This dynamic platform provides a robust ecosystem where instructors can seamlessly list their courses, share their expertise, and engage with a global audience of eager learners. \n\n For instructors, Study Notion offers a user-friendly dashboard to effortlessly upload course content, set pricing, and manage their teaching materials. They can build their personal brand and reach a wider audience, all while benefiting from a convenient platform that handles transactions and student communication. \n\n On the student side, Study Notion ensures a hassle-free learning experience. Users can easily browse, discover, and purchase courses that match their interests and educational needs. The platform provides a variety of learning resources, from video lectures to downloadable materials, making it a versatile learning hub for students of all levels. \n\n With its intuitive interface, and secure payment processing, Study Notion fosters a thriving online learning community.",
    stack: ["MERN", "ReactJs", "Tailwind", "Redux", "ExpressJs", "MongoDB"],
    highlights: [
      "The Study Notion sign-up page is thoughtfully designed to cater to both students and instructors, offering separate forms tailored to their unique needs and roles within the educational ecosystem. This page provides a seamless and efficient onboarding experience for all users.\n\n Upon arriving at the sign-up page, users are presented with the choice to register as either a 'Student' or an 'Instructor'. Each option Captures the user role along with different details the user has to enter inorder to sign up into our application.\n\n Signup flow includes Form submission following with a OTP screen, only after successfully valid OTP submission the user will be registered.",
      "The Study Notion sign-in page simplifies access to our educational platform with a streamlined interface. Users can effortlessly log in by providing their email address and password. Additionally, there is a convenient 'Forgot Password' option to assist users in regaining access to their accounts.",
      "The Study Notion home page serves as the welcoming hub of our educational platform, offering a comprehensive overview of our services and features. Here, users can explore what we do, browse our diverse catalog of courses, read reviews from satisfied learners, and access quick navigation links via the footer.\n\n The home page provides a brief introduction to Study Notion, highlighting our mission and commitment to fostering a rich and engaging learning environment.\n\n Users can easily access our extensive catalog of courses, categorized by subject, skill level, and instructor. This section showcases the diverse array of learning opportunities available within our platform.\n\n Reviews and testimonials from our community of learners and instructors lend credibility to the platform, helping users make informed decisions about their educational journey.\n\n The footer is equipped with useful links, including 'About Us,' 'Contact,' 'FAQs,' and 'Privacy Policy.' This facilitates quick access to essential information and resources. Users can also navigate to key sections of the platform, such as the sign-in and sign-up pages, for seamless interaction.",
      "The Study Notion Contact Us page is a vital communication channel between our users and our management team, ensuring that inquiries, feedback, and support requests are addressed promptly and effectively. This page is designed to provide users with a seamless way to reach out to us and enhance their overall experience with our educational platform.",
      "After logging in, students are greeted with a dynamic and user-centric interface that offers easy access to essential features and information. Here's a breakdown of the key sections within the Student Dashboard:\n\n My Profile: This section provides a snapshot of your user profile, displaying your name, profile picture, and essential information. Users have the option to edit their profile by clicking on the 'Edit Profile' button. This action redirects them to the Settings page where they can modify their personal details, profile picture, and other preferences.\n\n Enrolled Courses: In this section, you'll find a comprehensive list of courses you've enrolled in. Each course is displayed with its title, instructor, and other details, allowing you to track your learning journey. Users can easily access their enrolled courses by clicking on the respective course cards, which will take them directly to the course content.\n\n Purchase History: The Purchase History section provides a record of all the courses you've purchased on the platform. It includes details such as the course title, instructor, date of purchase. This section offers a quick overview of your learning investments, making it easy to review past course purchases and access course materials.",
      "The Study Notion Instructor Dashboard is a powerful and user-centric space designed specifically for instructors to effectively manage their courses and engage with their students. Along with features similar to that of a student there are some personalized sections offers an array of features tailored to meet the needs of educators and course creators. Here's a detailed overview of the key sections within the Instructor Dashboard:\n\n My Courses: This section provides a comprehensive list of the courses you've created and are currently managing. Each course is displayed with its title, enrollment status, and key metrics, giving you insight into the performance of your offerings. Instructors can easily click on a specific course to access detailed management options.\n\n Add New Course: Instructors have the ability to create new courses directly from the dashboard. By clicking on 'Add New Course,' you can enter course details, upload course materials, set pricing, and define enrollment parameters. This intuitive feature streamlines the course creation process, allowing you to share your expertise with students in a few simple steps.",
    ],
    cardImage: {
      src: "/images/projects/studyNotion/study-notion-thumbnail.png",
      alt: "Study Notion preview",
    },
    images: [
      {
        src: "/images/projects/studyNotion/study1.png",
        alt: "Study Notion preview",
      },
      { src: "/images/projects/studyNotion/study2.png", alt: "Sign in" },
      { src: "/images/projects/studyNotion/study3.png", alt: "Course catalog" },
      { src: "/images/projects/studyNotion/study4.png", alt: "Course details" },
      { src: "/images/projects/studyNotion/study5.png", alt: "Dashboard" },
      {
        src: "/images/projects/studyNotion/study6.png",
        alt: "Responsive overview",
      },
    ],
    links: [
      {
        label: "Live App",
        href: "https://study-notion-project-mu.vercel.app/",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/Roshanlal02/study-notion-project",
      },
    ],
    year: "2026",
  },
  {
    slug: "share-o-prompt",
    title: "Share 'O' prompt",
    role: "Frontend + Backend",
    summary:
      "Next.js project: A platform dedicated to sharing AI prompts. This innovative endeavor harnesses the power of artificial intelligence to spark creativity and ignite inspiration. Explore a space where users can exchange and explore prompts, fostering a community driven by imaginative potential.",
    description:
      "Welcome to the AI Prompt Sharing Platform, a dynamic web application designed to ignite creativity and engagement through shared AI prompts. This full-stack project, meticulously crafted using Next.js, Tailwind CSS, MongoDB, and Next.js API routes, offers users a seamless experience to explore, contribute, and connect with a community of creative minds.",
    stack: ["NextJs", "Javascript", "Tailwind", "MongoDB", "API"],
    highlights: [
      "AI-Prompt Repository: Discover a treasure trove of intriguing AI-generated prompts that fuel your imagination. Users can browse through a diverse collection of prompts, each designed to spark unique and thought-provoking ideas",
      "Google Login Integration using next auth: Seamlessly log in using your Google account, ensuring a hassle-free onboarding process. This feature enhances user engagement and simplifies the sharing process.",
      "User Prompt Contributions: Once authenticated, users can contribute to the platform by submitting their AI prompts. This encourages a collaborative environment where individuals can showcase their creativity and share their AI-generated ideas with the community.",
      "Your Profile: A user-friendly profile page allows contributors to manage their shared prompts, providing an overview of their submissions. Also feature to edit or delete a prompt",
      "Advanced search: Search any prompt by user name, prompt text or using the tag.",
      "Responsive Design with Tailwind CSS: The platform offers a visually appealing and responsive design, ensuring a consistent and enjoyable experience across various devices and screen sizes.",
    ],
    cardImage: {
      src: "/images/projects/prompt/share-prompt-thumbnail.png",
      alt: "Share 'O' prompt preview",
    },
    images: [
      {
        src: "/images/projects/prompt/prompt1.png",
        alt: "Share 'O' prompt home page",
      },
      {
        src: "/images/projects/prompt/prompt2.png",
        alt: "Google sign-in",
      },
      {
        src: "/images/projects/prompt/prompt3.png",
        alt: "Dashboard page",
      },
      {
        src: "/images/projects/prompt/prompt4.png",
        alt: "Profile page",
      },
      {
        src: "/images/projects/prompt/prompt5.png",
        alt: "Search page",
      },
      {
        src: "/images/projects/prompt/prompt6.png",
        alt: "Responsive overview",
      },
    ],
    links: [
      { label: "Live App", href: "https://share-o-prompt.vercel.app/" },
      {
        label: "GitHub Repo",
        href: "https://github.com/Roshanlal02/share_o_prompt",
      },
    ],
    year: "2025",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
