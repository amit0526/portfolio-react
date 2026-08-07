import { motion } from "framer-motion";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-xl p-6 border hover:border-blue-500 transition-all duration-300"
    >
      <div className="flex justify-center mb-5">
        <Icon
          className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform`}
        />
      </div>

      <h3 className="text-center font-semibold text-lg">{skill.name}</h3>
    </motion.div>
  );
}

export default SkillCard;
