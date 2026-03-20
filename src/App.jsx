import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 backdrop-blur-md bg-white/5 sticky top-0">
        <h1 className="text-xl font-bold text-orange-500">Deeraj Kumar</h1>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mt-20"
      >
        <h2 className="text-4xl font-bold text-orange-400">
          Software Engineer Intern
        </h2>

        <p className="mt-4 text-gray-400">
          Building intelligent and scalable solutions 🚀
        </p>
      </motion.section>

      {/* Skills */}
      <section className="mt-20 px-10">
        <h2 className="text-2xl font-bold text-orange-400 mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Java", "Python", "React", "AI/ML"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:shadow-orange-500/20 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-20 px-10">
        <h2 className="text-2xl font-bold text-orange-400 mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800 p-6 rounded-xl hover:shadow-orange-500/20 transition">
            <h3 className="text-xl font-bold">AI Resume Analyzer</h3>
            <p className="text-gray-400 mt-2">
              AI-based system to analyze resumes and give feedback.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800 p-6 rounded-xl hover:shadow-orange-500/20 transition">
            <h3 className="text-xl font-bold">Online Exam System</h3>
            <p className="text-gray-400 mt-2">
              Web-based platform for conducting online exams.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-slate-800 p-6 rounded-xl hover:shadow-orange-500/20 transition">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Personal portfolio built with React and Tailwind.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <section className="mt-20 px-10">
        <h2 className="text-2xl font-bold text-orange-400 mb-6">Contact</h2>

        <div className="max-w-xl mx-auto">
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-slate-800 border border-gray-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-slate-800 border border-gray-700"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-slate-800 border border-gray-700"
            ></textarea>

            <button className="bg-orange-500 p-3 rounded-lg hover:bg-orange-600">
              Send Message
            </button>

          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">

            <a 
              href="https://github.com/deerajkakani-11" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              🔗 GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/deeraj-kakani-a4933a311" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              💼 LinkedIn
            </a>

          </div>

        </div> {/* ✅ THIS WAS MISSING */}

      </section>

      {/* Footer */}
      <footer className="text-center mt-20 p-6 text-gray-500">
        © 2026 Deeraj Kumar
      </footer>

    </div>
  );
}