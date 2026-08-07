import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-5"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <p className="text-center text-slate-400 mb-16">
          A selection of projects that showcase my skills and learning journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://project-showcase-gamma-woad.vercel.app/"
            className="inline-block px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 hover:scale-105 transition"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
