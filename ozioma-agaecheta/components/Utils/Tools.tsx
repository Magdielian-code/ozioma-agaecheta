import {
  IconType,
  //  SiAmazonaws,
  SiAmazons3,
  SiAndroidstudio,
  SiApache,
  SiAsana,
  // SiAzuredevops,
  SiBootstrap,
  SiC,
  SiChakraui,
  SiCloudinary,
  SiCss3,
  SiDatadog,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiFrappe,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiGnuemacs,
  SiGooglecloud,
  SiGooglecolab,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJupyter,
  SiKubernetes,
  SiLinux,
  SiMake,
  SiMdx,
  SiMongodb,
  SiMysql,
  SiNeovim,
  // SiNextjs,
  SiNextdotjs,
  SiNginx,
  SiNgrok,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrecommit,
  SiPython,
  SiPythonanywhere,
  SiRailway,
  SiReact,
  SiRedis,
  SiRender,
  SiSentry,
  SiSocketdotio,
  SiSqlalchemy,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVagrant,
  SiVercel,
  SiVim,
  SiVirtualbox,
  // SiVisualstudio,
} from "@icons-pack/react-simple-icons";

export interface Tool {
  name: string;
  icon: IconType;
  type:
    | "Languages"
    | "Frameworks/Libraries"
    | "Databases"
    | "Cloud/DevOps"
    | "Tools";
  color?: string;
}

const tools: Tool[] = [
  // Languages
  {
    name: "Python",
    icon: SiPython,
    type: "Languages",
    color: "#3776AB",
  },
  {
    name: "C",
    icon: SiC,
    type: "Languages",
    color: "#A8B9CC",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    type: "Languages",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    type: "Languages",
    color: "#3178C6",
  },
  {
    name: "BashScript",
    icon: SiGnubash,
    type: "Languages",
    color: "#4EAA25",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    type: "Languages",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: SiCss3,
    type: "Languages",
    color: "#1572B6",
  },

  // Frameworks/Libraries
  {
    name: "ReactJS",
    icon: SiReact,
    type: "Frameworks/Libraries",
    color: "#61DAFB",
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
    type: "Frameworks/Libraries",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    type: "Frameworks/Libraries",
    color: "#38B2AC", 
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    type: "Frameworks/Libraries",
    color: "#7952B3",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    type: "Frameworks/Libraries",
  },
  {
    name: "Frappe",
    icon: SiFrappe,
    type: "Frameworks/Libraries",
    color: "#F4B042",
  },
  {
    name: "Django",
    icon: SiDjango,
    type: "Frameworks/Libraries",
    color: "#092E20",
  },
  {
    name: "Flask",
    icon: SiFlask,
    type: "Frameworks/Libraries",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    type: "Frameworks/Libraries",
    color: "#009688",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    type: "Frameworks/Libraries",
    color: "#339933",
  },
  {
    name: "ExpressJS",
    icon: SiExpress,
    type: "Frameworks/Libraries",
  },
  {
    name: "MDX",
    icon: SiMdx,
    type: "Frameworks/Libraries",
    color: "#F9AC00",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    type: "Frameworks/Libraries",
    color: "#E10098",
  },
  {
    name: "Socket.io",
    icon: SiSocketdotio,
    type: "Frameworks/Libraries",
    color: "#010101",
  },
  {
    name: "SQLAlchemy",
    icon: SiSqlalchemy,
    type: "Frameworks/Libraries",
    color: "#F9AC00",
  },

  // Databases
  {
    name: "MySQL",
    icon: SiMysql,
    type: "Databases",
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    type: "Databases",
    color: "#336791",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    type: "Databases",
    color: "#47A248",
  },
  {
    name: "Redis",
    icon: SiRedis,
    type: "Databases",
    color: "#DC382D",
  },

  // Cloud/DevOps
 
  {
    name: "Amazon S3",
    icon: SiAmazons3,
    type: "Cloud/DevOps",
    color: "#569A31",
  },
  {
    name: "AWS",
    icon: SiAmazons3,
    type: "Cloud/DevOps",
    color: "#232F3E",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    type: "Cloud/DevOps",
    color: "#F7F7F7",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    type: "Cloud/DevOps",
  },
  {
    name: "Render",
    icon: SiRender,
    type: "Cloud/DevOps",
    color: "#FF4D4F",
  },
  {
    name: "SiRailway",
    icon: SiRailway,
    type: "Cloud/DevOps",
    color: "#FF4D4F",
  },
  {
    name: "Pyhton Anywhere",
    icon: SiPythonanywhere,
    type: "Cloud/DevOps",
    color: "#3776AB",
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
    type: "Cloud/DevOps",
    color: "#4285F4",
  },
  {
    name: "Google Colab",
    icon: SiGooglecolab,
    type: "Cloud/DevOps",
    color: "#F9AB00",
  },
  {
    name: "Docker",
    icon: SiDocker,
    type: "Cloud/DevOps",
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    type: "Cloud/DevOps",
    color: "#326CE5",
  },
  {
    name: "Nginx",
    icon: SiNginx,
    type: "Cloud/DevOps",
    color: "#269539",
  },
  {
    name: "Apache",
    icon: SiApache,
    type: "Cloud/DevOps",
    color: "#D22128",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    type: "Cloud/DevOps",
    color: "#2088FF",
  },
  {
    name: "PreCommit",
    icon: SiPrecommit,
    type: "Cloud/DevOps",
    color: "#F9AB00",
  },
  {
    name: "Datadog",
    icon: SiDatadog,
    type: "Cloud/DevOps",
    color: "#632CA6",
  },

  // Tools
  {
    name: "Git",
    icon: SiGit,
    type: "Tools",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    type: "Tools",
  },
  {
    name: "Ngrok",
    icon: SiNgrok,
    type: "Tools",
  },

  {
    name: "Linux",
    icon: SiLinux,
    type: "Tools",
    color: "#FCC624",
  },
  {
    name: "Neovim",
    icon: SiNeovim,
    type: "Tools",
    color: "#57A143",
  },
  {
    name: "Emacs",
    icon: SiGnuemacs,
    type: "Tools",
    color: "#7F5AB6",
  },
  {
    name: "Vim",
    icon: SiVim,
    type: "Tools",
    color: "#019733",
  },
  {
    name: "Sentry",
    icon: SiSentry,
    type: "Tools",
    color: "#362D59",
  },
  {
    name: "Trello",
    icon: SiTrello,
    type: "Tools",
    color: "#0079BF",
  },
  {
    name: "Jira",
    icon: SiJira,
    type: "Tools",
    color: "#0052CC",
  },
  {
    name: "Asana",
    icon: SiAsana,
    type: "Tools",
    color: "#273347",
  },
  // {
  //   name: "Visual Studio",
  //   icon: SiVisualstudio,
  //   type: "Tools",
  // },
  
  {
    name: "Android Studio",
    icon: SiAndroidstudio,
    type: "Tools",
    color: "#3DDC84",
  },
  {
    name: "Postman",
    icon: SiPostman,
    type: "Tools",
    color: "#FF6C37",
  },
  {
    name: "VirtualBox",
    icon: SiVirtualbox,
    type: "Tools",
    color: "#2F61B4",
  },
  {
    name: "Vagrant",
    icon: SiVagrant,
    type: "Tools",
    color: "#1868F2",
  },
  {
    name: "GnuBash",
    icon: SiGnubash,
    type: "Tools",
    color: "#4EAA",
  },

  {
    name: "Jupyter Notebook",
    icon: SiJupyter,
    type: "Tools",
    color: "#F37626",
  },
  {
    name: "Make",
    icon: SiMake,
    type: "Tools",
    color: "#00A98F",
  },
];

export default tools;
