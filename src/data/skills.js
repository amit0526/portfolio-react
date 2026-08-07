import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
    ],
  },
];

export default skills;
