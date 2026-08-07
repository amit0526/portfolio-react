import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="bg-slate-800/60 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
    >
      <Icon className={`text-5xl ${skill.color} mb-4`} />

      <h3 className="font-semibold text-lg">{skill.name}</h3>
    </motion.div>
  );
}

export default SkillCard;
