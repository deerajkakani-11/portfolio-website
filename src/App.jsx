import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 backdrop-blur-lg bg-white/5 border-b border-gray-800 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-orange-500">Deeraj Kumar</h1>
        <ul className="flex gap-6 text-gray-300">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">Skills</li>
          <li className="hover:text-orange-400 cursor-pointer">Projects</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-32 px-6"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          Software Engineer Intern
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Building intelligent and scalable solutions 🚀
        </p>
      </motion.section>

      {/* Skills */}
      <section className="mt-32 px-10">
        <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Java", "Python", "React", "AI/ML"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/5 backdrop-blur-lg border border-gray-800 p-6 rounded-xl text-center shadow-lg hover:shadow-orange-500/30 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-32 px-10">
        <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-gray-800 p-6 rounded-xl hover:shadow-orange-500/30 transition">
            <h3 className="text-xl font-bold">AI Resume Analyzer</h3>
            <p className="text-gray-400 mt-2">
              AI-based system to analyze resumes and give feedback.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-gray-800 p-6 rounded-xl hover:shadow-orange-500/30 transition">
            <h3 className="text-xl font-bold">Online Exam System</h3>
            <p className="text-gray-400 mt-2">
              Web-based platform for conducting online exams.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 border border-gray-800 p-6 rounded-xl hover:shadow-orange-500/30 transition">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Personal portfolio built with React and Tailwind.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section className="mt-32 px-10">
        <h2 className="text-3xl font-bold text-orange-400 mb-10 text-center">
          Contact
        </h2>

        <div className="max-w-xl mx-auto">

          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/5 border border-gray-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/5 border border-gray-700"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-white/5 border border-gray-700"
            ></textarea>

            <button className="bg-orange-500 p-3 rounded-lg hover:bg-orange-600 transition">
              Send Message
            </button>

          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">

            <a
              href="https://github.com/deerajkakani-11"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 px-4 py-2 rounded-lg hover:bg-orange-500 transition"
            >
              🔗 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/deeraj-kakani-a4933a311"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 px-4 py-2 rounded-lg hover:bg-orange-500 transition"
            >
              💼 LinkedIn
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-20 p-6 text-gray-500 border-t border-gray-800">
        © 2026 Deeraj Kumar
      </footer>

    </div>
  );
}