import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-center">
          © {new Date().getFullYear()} Amit Anand. All Rights Reserved.
        </p>

        <div className="flex gap-5 text-2xl">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a
            href="#home"
            className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
