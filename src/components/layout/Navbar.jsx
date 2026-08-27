import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

import navLinks from "../../data/navLinks";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 flex justify-between items-center px-6">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          {/* Logo Box */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
            <span className="text-lg font-bold text-white">AA</span>

            {/* Glow */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-500 to-violet-600 opacity-40 blur-md -z-10"></div>
          </div>

          {/* Text */}
          <div className="hidden sm:block leading-tight">
            <h1 className="text-xl font-bold tracking-wide">
              Amit <span className="text-blue-400">Anand</span>
            </h1>

            <p className="text-xs text-slate-400">MERN Stack Developer</p>
          </div>
        </motion.a>

        {/* Desktop */}

        <ul className="hidden md:flex gap-10">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                spy
                duration={500}
                offset={-70}
                activeClass="text-blue-500"
                className="cursor-pointer hover:text-blue-400 transition font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume */}

        <a
          href="/Amit-Anand-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-linear-to-r from-blue-500 to-violet-600 hover:scale-105 transition"
        >
          <FaDownload />
          Resume
        </a>

        {/* Mobile */}

        <button onClick={() => setMenu(true)} className="text-3xl md:hidden">
          <HiOutlineMenuAlt3 />
        </button>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 h-screen w-72 bg-slate-900 border-l border-slate-800 p-8"
          >
            <button onClick={() => setMenu(false)} className="text-3xl mb-10">
              <HiX />
            </button>

            <ul className="space-y-8">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth
                    duration={500}
                    offset={-70}
                    onClick={() => setMenu(false)}
                    className="text-xl cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
