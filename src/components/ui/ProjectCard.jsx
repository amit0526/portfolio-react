import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-3xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="text-slate-400 mt-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 my-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {project.status === "completed" ? (
          <div className="flex gap-4">
            <a
              href={project.demo}
              className="flex-1 bg-linear-to-r from-blue-500 to-violet-600 py-3 rounded-xl text-center"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              className="w-12 h-12 rounded-xl border border-slate-600 flex items-center justify-center"
            >
              <FaGithub />
            </a>
          </div>
        ) : (
          <button className="w-full py-3 rounded-xl bg-slate-700 cursor-not-allowed">
            Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
