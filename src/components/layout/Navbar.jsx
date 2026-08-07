import { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
          <FaCode className="text-blue-500" />
          Amit Anand
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.to}`}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/Amit-Anand-Resume.pdf"
          target="_blank"
          className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 rounded-xl font-medium hover:scale-105 duration-300"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.to}`}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="/Amit-Anand-Resume.pdf"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 rounded-xl"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
