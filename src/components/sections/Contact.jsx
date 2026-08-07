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

function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Let's <span className="text-blue-500">Connect</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind, collaboration opportunity, or just want to
            say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
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
                  icon={"💼"}
                  title="Availability"
                  value={personalInfo.availability}
                />

                <Info
                  icon={"⚡"}
                  title="Response Time"
                  value={personalInfo.response}
                />
              </div>

              {/* Social */}

              <div className="mt-12">
                <h4 className="font-semibold mb-5">Follow Me</h4>

                <div className="flex gap-5">
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

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 focus:border-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 focus:border-blue-500 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 resize-none focus:border-blue-500 outline-none"
              />

              <button className="w-full bg-linear-to-r from-blue-500 to-violet-600 py-4 rounded-xl flex justify-center items-center gap-3 font-semibold hover:scale-[1.02] transition">
                <FaPaperPlane />
                Let's Connect
              </button>

              <p className="text-center text-sm text-slate-400">
                I'll usually reply within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex justify-center items-center text-blue-400 text-xl">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-slate-400">{value}</p>
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
      className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex justify-center items-center text-xl hover:bg-blue-500 hover:border-blue-500 transition"
    >
      {icon}
    </a>
  );
}

export default Contact;
