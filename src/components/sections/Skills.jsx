import { motion } from "framer-motion";
import skills from "../../data/skills";
import SkillCard from "../ui/SkillCard";

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {skills.map((group) => (
          <div key={group.category} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {group.items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
