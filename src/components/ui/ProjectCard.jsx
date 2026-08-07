import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl overflow-hidden bg-slate-900/70 backdrop-blur-xl border border-slate-700 hover:border-blue-500 transition-all duration-500 shadow-xl"
    >
      {/* Browser Frame */}

      <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>

        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>

        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Image */}

      <div className="relative overflow-hidden">
        {project.featured && (
          <span className="absolute top-4 left-4 z-20 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent opacity-70"></div>
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-slate-400 mt-4 leading-7">{project.description}</p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8">
          {project.featured ? (
            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 text-center font-medium hover:scale-105 transition"
              >
                Live Preview →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-xl border border-slate-600 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          ) : (
            <button
              disabled
              className="w-full py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 cursor-not-allowed"
            >
              🚧 Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
