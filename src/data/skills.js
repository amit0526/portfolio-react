import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiVisualstudiocode,
  SiNextdotjs,
  SiDocker,
  SiTypescript,
  SiAmazon,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-200",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
      },
    ],
  },

  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-white",
      },
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
        color: "text-blue-500",
      },
    ],
  },

  {
    category: "Currently Learning",
    items: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "text-sky-500",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "AWS",
        icon: SiAmazon,
        color: "text-orange-400",
      },
    ],
  },
];

export default skills;
