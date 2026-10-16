export const profile = {
  name: "Sachin Mulge",
  email: "sachinmulge98@gmail.com",
  phone: "+91-7385950285",
  github: "https://github.com/SachinMulge18",
  location: "Pune, India",
  resume: "/Sachin_Mulge_FullStack_Resume.pdf",
  summary:
    "Full-stack MERN developer with 2.9+ years of experience building enterprise and government web applications. I work across React and Next.js interfaces, Node.js and Express APIs, geospatial workflows, and automated testing.",
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "React Native", "Next.js", "Redux Toolkit", "RTK Query", "React Router"],
  },
  {
    title: "Backend & databases",
    skills: ["Node.js", "Express.js", "RESTful API design", "WebSocket", "JWT authentication", "MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "UI & forms",
    skills: ["Material UI", "Tailwind CSS", "Bootstrap", "Formik", "Yup"],
  },
  {
    title: "Testing & automation",
    skills: ["Jest", "React Testing Library", "Playwright"],
  },
  {
    title: "DevOps & cloud",
    skills: ["Docker", "Linux", "Amazon EC2", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", "npm", "React DevTools", "GitHub Copilot", "Cursor"],
  },
  {
    title: "Engineering practices",
    skills: ["System design", "RBAC", "Component architecture", "State management", "Agile/Scrum", "Performance optimization"],
  },
];

export const metrics = [
  { value: 2.9, decimals: 1, prefix: "", suffix: "+", label: "Years building web applications" },
  { value: 35, decimals: 0, prefix: "~", suffix: "%", label: "Fewer redundant API calls through caching" },
  { value: 500, decimals: 0, prefix: "", suffix: "+", label: "Land parcels managed in the NGSP portal" },
  { value: 30, decimals: 0, prefix: "", suffix: "+", label: "REST APIs integrated into the Famark platform" },
];

export const projects = [
  {
    title: "Nagpur–Goa Shaktipeeth Land Acquisition System (NGSP)",
    summary:
      "A government land-acquisition monitoring system for village-level data collection, progress visibility, and district-to-village reporting across 500+ parcels.",
    frontend:
      "Built the React survey experience, including OTP sign-in, village data entry, progress dashboards, and summary/detail reports. Connected dependent district, taluka, and village selections; mapped nested survey data into editable forms; and added report drill-downs and PDF report requests.",
    backend:
      "Implemented OTP-based authentication and JWT-secured role-based access for three user roles. Integrated the survey and reporting flows with APIs, transforming hierarchical survey data and stage-completion results to match save and reporting payloads.",
    tags: ["React.js", "Redux Toolkit", "Formik", "Yup", "OTP", "JWT", "RBAC", "REST APIs", "Reporting"],
  },
  {
    title: "Property Surveyor Web Application (CIDCO)",
    summary:
      "A property-management and surveying application for administrative project and village management, property records, and map-based property assignment.",
    frontend:
      "Created structured Formik/Yup property forms for location, details, utilities, ownership, classifications, and documents, with draft-save support. Added Leaflet map inspection and KML/KMZ upload, extraction, GeoJSON conversion, progress feedback, and feature-fit behavior.",
    backend:
      "Connected project, village, property, and assignment workflows through RTK Query. Kept village choices in sync with the selected project, maintained per-property user assignments, supported bulk assignment with row-level edits, and grouped property IDs into the assignment API's expected payload.",
    tags: ["React.js", "Redux Toolkit", "RTK Query", "Formik", "Yup", "Leaflet.js", "KML/KMZ", "GeoJSON"],
  },
  {
    title: "Famark Agile Planner",
    summary:
      "A Jira-like project-management platform for projects, sprints, backlogs, stories, Kanban boards, and team workflows.",
    frontend:
      "Built reusable React/Next.js components, analytics, Kanban boards, drag-and-drop workflows, and optimistic updates with Redux Toolkit and Tailwind CSS.",
    backend:
      "Developed Node.js/Express REST APIs for platform workflows, with JWT authentication, RBAC, validation, pagination, filtering, and error handling. Improved API performance by up to 30%; containerized and deployed on AWS EC2 using GitHub Actions CI/CD.",
    tags: ["React.js", "Next.js", "Vite", "Node.js", "Express.js", "Redux Toolkit", "REST APIs", "JWT", "RBAC", "Docker", "AWS EC2"],
  },
  {
    title: "BaseRM Lead Management",
    summary:
      "Lead and solution management workflows covering entities, attributes, option sets, activities, search, and bulk operations.",
    frontend:
      "Automated end-to-end workflows for lead management, solution management, customization, CSV/Excel operations, activity tracking, search, and bulk deletion.",
    backend:
      "Built reusable Playwright utilities to exercise UI-to-API workflows and CSV-based execution/performance reporting to make automated test results easier to inspect.",
    tags: ["React.js", "Next.js", "Express.js", "Redux Toolkit", "Playwright", "CSV/Excel"],
  },
  {
    title: "Reliable Bulk Hiring Dashboard",
    summary:
      "A hiring-event dashboard for walk-in candidate registration, document verification, and review workflows.",
    frontend:
      "Built candidate registration and hiring-event interfaces, including QR-based registration, candidate counts, scheduling, and administrator instructions.",
    backend:
      "Connected candidate document-verification and approval/rejection workflows with backend services, keeping review outcomes and event data visible to administrators.",
    tags: ["React.js", "RTK Query", "Document verification", "QR registration", "REST APIs"],
  },
  {
    title: "VocoXp Document Verification & Payments",
    summary:
      "A document-verification and payment platform supporting wallet and direct payments.",
    frontend:
      "Developed multi-step verification and payment flows with reusable upload, pricing, and verification modules, plus Excel bulk upload/download.",
    backend:
      "Integrated Razorpay payments and added backend validation for Excel bulk-upload data through the platform's API workflows.",
    tags: ["React.js", "Razorpay", "RTK Query", "Express.js", "Excel", "Document verification"],
  },
  {
    title: "TravMobile Travel Dashboard",
    summary:
      "A responsive travel-management dashboard built around reusable interface components.",
    frontend:
      "Built responsive dashboard views with React, Redux Toolkit, RTK Query, and Tailwind CSS.",
    backend:
      "Integrated dashboard data through RTK Query, using cached server state to support responsive data loading.",
    tags: ["React.js", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
  },
];

export const experience = [
  {
    company: "Famark, Pune",
    role: "Frontend & Test Automation Developer",
    period: "May 2026 – Aug 2026",
    points: [
      "Developed an Agile project-management platform with React.js/Next.js, Vite, Tailwind CSS, Redux Toolkit, Node.js, and Express.js, integrating 30+ REST APIs.",
      "Designed REST APIs with JWT authentication, RBAC authorization, validation, pagination, filtering, and error handling.",
      "Improved API performance by up to 30% through query optimization, pagination, efficient payloads, and asynchronous processing.",
      "Built reusable Kanban and drag-and-drop workflows, wrote Playwright end-to-end tests, and created Grafana dashboards.",
      "Containerized the application with Docker and deployed it to AWS EC2 using GitHub Actions CI/CD.",
    ],
    stack: ["React.js", "Next.js", "Vite", "Node.js", "Express.js", "Playwright", "Docker", "AWS EC2"],
  },
  {
    company: "Mounarch Tech Solutions and Systems, Pune",
    role: "React.js / MERN Developer",
    period: "Apr 2025 – Dec 2025",
    points: [
      "Engineered role-based CRM dashboards and document-verification platforms for three user roles using React.js, Redux Toolkit, RTK Query, and Node.js/Express APIs.",
      "Built a nine-step Shaktipeeth land-acquisition workflow with Formik/Yup validation and P1/P2/P3 status tracking for 500+ parcels.",
      "Created Leaflet maps and KML/KMZ-to-GeoJSON workflows for district-, taluka-, and village-level progress tracking.",
      "Implemented OTP authentication, JWT-secured RBAC, and Razorpay payment integration through Express.js middleware.",
      "Containerized and deployed CRM and land-acquisition applications on Linux/AWS EC2 with Docker and GitHub Actions; trained 20+ field staff on the portal.",
    ],
    stack: ["React.js", "Redux Toolkit", "RTK Query", "Node.js", "Express.js", "Leaflet.js", "Docker", "Linux", "AWS EC2"],
  },
  {
    company: "Compumatrix Technologies Pvt. Ltd.",
    role: "React.js Developer",
    period: "Jun 2024 – Mar 2025",
    points: [
      "Led frontend architecture for the BBI project with React.js, Redux Toolkit, and RTK Query, reducing redundant API calls by approximately 35%.",
      "Converted 40+ Figma screens into responsive React components for desktop and mobile across four major browsers.",
      "Delivered a reusable UI library of 15+ components, improving feature-development velocity by approximately 25%.",
    ],
    stack: ["React.js", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Figma"],
  },
  {
    company: "Perspicientia Consultancy Private Limited",
    role: "React.js Developer",
    period: "Oct 2022 – Oct 2023",
    points: [
      "Integrated 10+ REST API endpoints for real-time data retrieval and improved application load time.",
      "Refactored legacy interfaces into modular, reusable components to improve maintainability and delivery speed.",
    ],
    stack: ["React.js", "JavaScript", "REST APIs"],
  },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "Savitribai Phule Pune University", period: "Graduated July 2022" },
  { degree: "Bachelor of Computer Applications (BCA)", institution: "Savitribai Phule Pune University", period: "Graduated April 2019" },
];

export const certifications = [
  {
    name: "React: The Complete Guide",
    provider: "Udemy",
    period: "Dec 2021 – Jun 2022",
    details: "React fundamentals, Hooks, Context API, advanced patterns, and modern web development practices.",
  },
  {
    name: "Full-Stack Generative & Agentic AI with Python",
    provider: "Udemy",
    period: "Mar 2026 – Present",
    details: "Currently learning Python, LLM applications, prompt engineering, RAG, AI agents, LangChain, LangGraph, FastAPI, Docker, vector databases, MCP, and multimodal AI.",
  },
];
