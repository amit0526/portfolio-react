import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import personalInfo from "../../data/personalInfo";
import profile from "../../assets/images/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-3">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {personalInfo.name}
          </h1>

          <h2 className="text-2xl mt-5 text-blue-400 font-semibold">
            {personalInfo.title}
          </h2>

          <p className="mt-8 text-slate-400 leading-8 max-w-xl">
            {personalInfo.subtitle}
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 font-medium hover:scale-105 duration-300"
            >
              Hire Me
            </a>

            <a
              href={personalInfo.resume}
              className="px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500 duration-300"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-5 mt-10 text-2xl">
            <a href={personalInfo.github}>
              <FaGithub />
            </a>

            <a href={personalInfo.linkedin}>
              <FaLinkedin />
            </a>

            <a href={personalInfo.email}>
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}

            <div className="absolute inset-0 rounded-full blur-3xl bg-linear-to-r from-blue-500 via-cyan-500 to-violet-600 opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Amit Anand"
              className="relative w-80 h-80 md:w-105 md:h-105 rounded-full object-cover border-4 border-slate-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
