import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss } from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    color: "text-cyan-400",
    top: "-30px",
    left: "45%",
  },

  {
    Icon: SiJavascript,
    color: "text-yellow-400",
    top: "25%",
    left: "-35px",
  },

  {
    Icon: SiTailwindcss,
    color: "text-sky-400",
    top: "25%",
    right: "-35px",
  },

  {
    Icon: FaNodeJs,
    color: "text-green-500",
    bottom: "20%",
    left: "-25px",
  },

  {
    Icon: FaGitAlt,
    color: "text-orange-500",
    bottom: "20%",
    right: "-25px",
  },

  {
    Icon: FaHtml5,
    color: "text-orange-600",
    bottom: "-20px",
    left: "35%",
  },

  {
    Icon: FaCss3Alt,
    color: "text-blue-500",
    bottom: "-20px",
    right: "35%",
  },
];

function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index,
          }}
          className={`absolute ${item.color} text-4xl bg-slate-900 p-3 rounded-full border border-slate-700 shadow-lg`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          <item.Icon />
        </motion.div>
      ))}
    </>
  );
}

export default FloatingIcons;
