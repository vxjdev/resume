export const profile = {
  name: "Vithuran Jeyasingham",
  title: "Senior Software Engineer",
  email: "vithuran.jeyasingham@gmail.com",
  phone: "0401 047 973",
  location: "Melbourne, Australia",
  summary:
    "I am a senior software engineer with 5 years of experience. I currently work as a contractor within the Department of Defence. I have strong leadership skills and experience leading agile teams in delivering high quality projects on time using scrum. I have a strong technical background as a full stack developer and devops engineer.",
};

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "TypeScript (React, Angular)",
      ".NET (Core & Framework)",
      "Java",
      "Python (PyTorch, Machine Learning)",
    ],
  },
  {
    title: "Containers & Orchestration",
    items: ["Docker", "Kubernetes (OpenShift, Rancher)", "GitHub Actions"],
  },
  {
    title: "Databases & Tools",
    items: ["Microsoft SQL Server", "Elastic Stack", "Keycloak", "Atlassian Suite"],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS", "Microsoft Azure"],
  },
  {
    title: "AI Tools",
    items: ["Claude Code", "Model Context Protocol (MCP)", "GitHub Copilot"],
  },
  {
    title: "System Administration",
    items: ["Red Hat Enterprise Linux"],
  },
];

export const certifications = [
  { name: "Scrum Master Certified (SCM)", date: "February 2025" },
  { name: "AWS Cloud Compute Certified", date: null },
  { name: "Emerging Leaders Course", date: null },
  { name: "Ethics of AI – Ethics awareness certification", date: "April 2025" },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "University of Canberra",
    location: "Canberra, ACT",
    period: "2019 – 2022",
  },
  {
    degree: "Bachelor of Advanced Computing",
    school: "Australian National University",
    location: "Canberra, ACT",
    period: "2017 – 2019",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  groups: {
    heading: string;
    bullets: string[];
  }[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Contractor – Senior Software Engineer/Systems Administrator",
    company: "Keane Consulting (for Department of Defence)",
    location: "Docklands, Victoria",
    period: "April 2026 – Present",
    groups: [
      {
        heading: "Software Engineer",
        bullets: [
          "Designed and implemented microservices to provide quality assurance for large data storage systems.",
        ],
      },
      {
        heading: "Systems Administrator",
        bullets: [
          "Responded to support queries from customers using the system.",
          "Monitored multiple complex systems and responded to live issues and outages.",
          "Addressed tech debt issues on complex systems with various applications and services across different tech stacks.",
        ],
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Leidos Australia",
    location: "Scoresby, Victoria",
    period: "August 2024 – April 2026",
    groups: [
      {
        heading: "Lead Developer",
        bullets: [
          "Communicated with project stakeholders to define requirements.",
          "Designed initial mock-ups and created prototypes based on project requirements, iterating after feedback.",
          "Created Jira tasks from user stories derived from requirements.",
        ],
      },
      {
        heading: "Team Leadership & Mentorship",
        bullets: [
          "Led junior developers in delivering projects.",
          "Provided technical mentorship and guidance.",
          "Allocated tasks to graduate engineers to build their skillset.",
        ],
      },
      {
        heading: "Deployment & Integration",
        bullets: [
          "Led deployment and integration of new applications.",
          "Deployed frontend and backend Docker containers to the Rancher Kubernetes platform.",
          "Deployed Keycloak and Elasticsearch supporting service containers to Rancher Kubernetes.",
          "Integrated new applications with existing systems in test and production networks.",
        ],
      },
      {
        heading: "Operations & Risk Management",
        bullets: [
          "Maintained up-to-date and accurate reporting to project managers.",
          "Supported live production systems while coordinating development of new applications.",
          "Led risk assessment discussions with managers, principal engineers, and key stakeholders to prioritise work across the development team.",
        ],
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Leidos Australia",
    location: "Scoresby, Victoria",
    period: "January 2022 – August 2024",
    groups: [
      {
        heading: "DevOps Engineer",
        bullets: [
          "Deployed containerised applications into OpenShift and Rancher Kubernetes container platforms.",
          "Integrated new applications with existing systems and microservices such as Elasticsearch and Keycloak.",
          "Provided continued support for applications hosted on Kubernetes platforms and IIS servers.",
        ],
      },
      {
        heading: "Ongoing Application Support",
        bullets: [
          "Prepared and deployed bug hotfixes for live applications.",
          "Troubleshot and debugged issues raised by end users for live applications.",
          "Led meetings with key stakeholders to plan future releases and support work for applications.",
        ],
      },
      {
        heading: "Full-Stack Developer",
        bullets: [
          "Frontend development using React and Angular frameworks (TypeScript).",
          "Backend development using Microsoft .NET (Framework and Core).",
          "Database design with Microsoft SQL Server.",
          "Containerised applications using Docker.",
        ],
      },
    ],
  },
  {
    role: "ICT Digital Cadet",
    company: "Department of Defence",
    location: "Canberra, ACT",
    period: "March 2020 – January 2022",
    groups: [
      {
        heading: "ICT Security Engineer (March 2021 – January 2022)",
        bullets: [
          "Followed security playbooks to ensure the Essential 8 framework was applied to the system.",
          "Investigated security incidents.",
        ],
      },
      {
        heading: "Frontend Developer (March 2020 – March 2021)",
        bullets: ["Developed application frontend using React framework (JavaScript)."],
      },
    ],
  },
];

export type OtherEntry = {
  title: string;
  description: string;
  bullets?: string[];
};

export const otherExperience: OtherEntry[] = [
  {
    title: "Leidos Innovation Challenge 2024 — 2nd Place",
    description:
      "An initiative allowing engineers to work on a project of their choosing outside of Leidos' existing business, encouraging innovative solutions and new technologies. My team built an image classification solution using machine learning and placed second in the challenge.",
    bullets: [
      "Developed a machine-learning model in Python using PyTorch to classify and tag images.",
      "Developed an API in Python using OpenAPI to allow image tagging models to be integrated into other applications.",
      "Integrated the API and models into the Amazon EKS Kubernetes platform, using AWS S3 to store images for classification.",
      "Assisted teammates with integrating the API and models with a Microsoft Exchange plug-in.",
      "Planned the final presentation to the judges.",
    ],
  },
  {
    title: "Leidos ML/AI Working Group — Founding Member",
    description:
      "Helped establish the working group following the success of the 2024 Innovation Challenge, contributing to discussions and facilitating the sharing of ML/AI solutions across teams.",
  },
  {
    title: "Mentor — Leidos Mentorship Program",
    description:
      "Mentored graduate software engineers placed within the team as part of Leidos' graduate program, providing ongoing guidance and technical teaching. Mentees currently work within the team I lead.",
  },
];
