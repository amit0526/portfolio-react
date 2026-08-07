import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import personalInfo from "../../data/personalInfo";

function Info({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-slate-400 wrap-break-word">{value}</p>
      </div>
    </div>
  );
}

function Social({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition"
    >
      {icon}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 md:p-8">
              <h3 className="text-3xl font-bold mb-10">Contact Information</h3>
              <div className="space-y-8">
                <Info
                  icon={<FaEnvelope />}
                  title="Email"
                  value={personalInfo.email}
                />
                <Info
                  icon={<FaPhoneAlt />}
                  title="Phone"
                  value={personalInfo.phone}
                />
                <Info
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  value={personalInfo.location}
                />
                <Info
                  icon="💼"
                  title="Availability"
                  value={personalInfo.availability}
                />
                <Info
                  icon="⚡"
                  title="Response Time"
                  value={personalInfo.response}
                />
              </div>
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-4">
                  <Social href={personalInfo.github} icon={<FaGithub />} />
                  <Social href={personalInfo.linkedin} icon={<FaLinkedin />} />
                  <Social
                    href={personalInfo.instagram}
                    icon={<FaInstagram />}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 md:p-8 space-y-6"
          >
            <input
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 focus:border-blue-500 outline-none"
              placeholder="Your Name"
            />
            <input
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 focus:border-blue-500 outline-none"
              placeholder="Your Email"
            />
            <input
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 focus:border-blue-500 outline-none"
              placeholder="Subject"
            />
            <textarea
              rows="6"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 resize-none focus:border-blue-500 outline-none"
              placeholder="Write your message..."
            />
            <button className="w-full bg-linear-to-r from-blue-500 to-violet-600 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold hover:scale-[1.02] transition">
              <FaPaperPlane />
              Let's Connect
            </button>
            <p className="text-center text-sm text-slate-400">
              I'll usually reply within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
