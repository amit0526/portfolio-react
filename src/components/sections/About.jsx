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
    title: "Responsive Design",
    desc: "Creating pixel-perfect experiences across devices.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    desc: "Turning ideas into real-world solutions.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
    desc: "Always improving with modern technologies.",
  },
];

function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-slate-900">
      <div className="absolute -left-32 top-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-112.5 h-112.5 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5">
            About Me
          </span>
          <h2 className="text-5xl font-bold">
            Passionate About Building{" "}
            <span className="text-blue-500">Modern Web Apps</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-8">
            I'm a passionate Frontend Developer focused on creating beautiful,
            responsive and user-friendly web experiences.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="relative h-155 rounded-3xl overflow-hidden">
              <img
                src={codingBg}
                alt="Coding"
                className="w-full h-full object-cover scale-110 blur-[3px]"
              />
              <div className="absolute inset-0 bg-slate-950/70" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-6">
                <h3 className="text-2xl font-semibold">
                  Building Modern Experiences
                </h3>
                <p className="mt-3 text-slate-300">
                  Passionate about React, JavaScript and responsive web
                  applications.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-4xl font-bold mb-6">
              Frontend Developer &{" "}
              <span className="text-blue-500">React Enthusiast</span>
            </h3>
            <p className="text-slate-400 leading-8 mb-10">
              I enjoy turning ideas into interactive digital experiences while
              continuously learning backend technologies.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 hover:border-blue-500 transition-all"
                >
                  <div className="text-3xl text-blue-500 mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
              {[
                ["15+", "Projects"],
                ["100%", "Dedication"],
                ["Open", "To Work"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border border-slate-700 bg-slate-800/50 p-5 text-center"
                >
                  <h3 className="text-3xl font-bold text-blue-500">{v}</h3>
                  <p className="mt-2 text-sm text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default About;
