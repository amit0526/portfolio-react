import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
            My Work
          </span>

          <h2 className="text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            Here are some of the projects I've built while learning and
            improving my frontend and full stack development skills.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <a
            href="https://project-showcase-gamma-woad.vercel.app/projects/"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 hover:scale-105 transition"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-2 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
