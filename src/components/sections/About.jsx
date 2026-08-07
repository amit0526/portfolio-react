import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

import aboutImg from "../../assets/images/profile.jpeg";

const highlights = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Writing maintainable and scalable applications.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Responsive UI",
    desc: "Pixel-perfect interfaces for every device.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    desc: "I enjoy solving real-world coding challenges.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Always Learning",
    desc: "Currently learning Backend and Full Stack Development.",
  },
];

function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="About"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Frontend Developer & React Enthusiast
            </h3>

            <p className="text-slate-400 leading-8 mb-10">
              I'm passionate about creating beautiful, responsive and
              user-friendly web applications. I enjoy transforming ideas into
              interactive digital experiences while continuously learning modern
              technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-blue-500 transition"
                >
                  <div className="text-3xl text-blue-500 mb-3">{item.icon}</div>

                  <h4 className="font-semibold mb-2">{item.title}</h4>

                  <p className="text-sm text-slate-400">{item.desc}</p>
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
