import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

import codingBg from "../../assets/images/night-coding-workspace.jpg";

const highlights = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Writing scalable and maintainable applications.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Responsive UI",
    desc: "Creating beautiful interfaces for every screen.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    desc: "I enjoy solving real-world development challenges.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
    desc: "Currently learning Backend & Full Stack Development.",
  },
];

function About() {
  return (
    <section id="about" className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Passionate about building modern web applications with clean UI,
            smooth user experience and scalable code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden h-155 shadow-2xl">
              <img
                src={codingBg}
                alt="Coding Workspace"
                className="w-full h-full object-cover scale-110 blur-[3px]"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-slate-950/70"></div>

              {/* Glow */}

              <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

              <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl"></div>

              {/* Floating Card */}

              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Building Modern Web Applications
                </h3>

                <p className="text-slate-300">
                  I love creating fast, responsive and interactive websites
                  using React, JavaScript and modern frontend technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold leading-tight mb-6">
              Frontend Developer &
              <span className="text-blue-500"> React Enthusiast</span>
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm passionate about creating responsive, accessible and
              user-friendly web applications. I enjoy transforming ideas into
              modern digital experiences while continuously improving my skills
              in React, JavaScript and backend technologies to become a Full
              Stack Developer.
            </p>

            {/* Feature Cards */}

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => (
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  key={index}
                  className="bg-slate-800/60 backdrop-blur rounded-2xl p-5 border border-slate-700 hover:border-blue-500 transition"
                >
                  <div className="text-3xl text-blue-500 mb-4">{item.icon}</div>

                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>

                  <p className="text-slate-400 text-sm leading-6">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <h2 className="text-4xl font-bold text-blue-500">15+</h2>

                <p className="text-slate-400 mt-2">Projects</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-500">100%</h2>

                <p className="text-slate-400 mt-2">Dedication</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-500">Open</h2>

                <p className="text-slate-400 mt-2">To Work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
