import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import FloatingIcons from "../ui/FloatingIcons";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
  FaDownload,
} from "react-icons/fa";

import profile from "../../assets/images/profile.png";
import personalInfo from "../../data/personalInfo";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-4">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {personalInfo.name}
          </h1>

          <div className="mt-5">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Full Stack Learner",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-semibold text-blue-400"
            />
          </div>

          <p className="mt-8 max-w-xl leading-8 text-slate-400">
            {personalInfo.subtitle}
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 hover:scale-105 transition"
            >
              Let's Talk
            </a>

            <a
              href="/Amit-Anand-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-3 px-5 py-3 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 hover:scale-105 transition"
            >
              <FaDownload />
              Resume
            </a>
          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex justify-center items-center hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex justify-center items-center hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex justify-center items-center hover:bg-pink-500 hover:border-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <FloatingIcons />

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-violet-600 blur-3xl opacity-40 animate-pulse"></div>

            {/* Rotating Ring */}

            <div className="absolute -inset-2 rounded-full bg-linear-to-r from-blue-500 via-cyan-500 to-violet-600 animate-spin [animation-duration:12s]"></div>

            {/* Image */}

            <div className="relative p-2 rounded-full bg-slate-950">
              <motion.img
                src={profile}
                alt="Amit Anand"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-80 h-80 md:w-107.5 md:h-107.5 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaArrowDown className="text-2xl text-blue-400" />
      </motion.div>
    </section>
  );
}

export default Hero;
