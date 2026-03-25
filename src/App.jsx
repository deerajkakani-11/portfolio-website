import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [active, setActive] = useState("home");

  // EMAIL
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_iqo080r",
        "template_npbwm8h",
        form.current,
        "HxKzO0DZV-0R0-lXz"
      )
      .then(() => {
        setStatus("Message Sent 🚀");
        form.current.reset();
      })
      .catch(() => setStatus("Failed ❌"));
  };

  // ACTIVE NAV
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  // PARTICLES
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-black via-[#0f172a] to-black">

      {/* GLOW BG */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-orange-500 blur-3xl opacity-20 top-20 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500 blur-3xl opacity-20 bottom-20 right-10"></div>
      </div>

      {/* PARTICLES */}
      <Particles
        init={particlesInit}
        className="absolute -z-10"
        options={{
          particles: {
            color: { value: "#ffffff" },
            number: { value: 50 },
            size: { value: 2 },
            move: { speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: "#f97316",
              opacity: 0.4,
            },
          },
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-orange-500">Deeraj</h1>

          <ul className="flex gap-8">
            {["home", "about", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative capitalize ${
                    active === item ? "text-orange-500" : ""
                  }`}
                >
                  {item}
                  {active === item && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-40 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Deeraj Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-orange-400 mt-4 text-xl"
        >
          Software Engineer | AI Student 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a href="/deeraj-resume.pdf" target="_blank"
            className="border px-6 py-2 rounded-lg mr-4 hover:bg-orange-500 transition">
            View Resume
          </a>

          <a href="/deeraj-resume.pdf" download
            className="bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Download
          </a>
        </motion.div>

      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="mt-40 text-center px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-orange-400 mb-6">About Me</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Pre-final year Computer Engineering & AI student passionate about building scalable software solutions using Java, Python, and modern web technologies.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        className="mt-40 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-orange-400 text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "AI-based Crop Recommendation System Using ML",
            "Online Exam System",
            "Stock Management System"
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
              hover:shadow-orange-500/30 transition duration-300"
            >
              <h3 className="text-xl font-bold">{p}</h3>
              <p className="text-gray-400 mt-2">
                Modern scalable web application.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="mt-40 px-6 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-orange-400 mb-8">Contact Me</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input name="name" placeholder="Name" className="p-3 bg-black border rounded" required />
          <input name="email" placeholder="Email" className="p-3 bg-black border rounded" required />
          <textarea name="message" placeholder="Message" className="p-3 bg-black border rounded" required />

          <button className="bg-orange-500 p-3 rounded-lg hover:bg-orange-600">
            Send 🚀
          </button>
        </form>

        <p className="mt-4 text-orange-400">{status}</p>

        <div className="flex justify-center gap-8 mt-6">
          <a href="https://github.com/deerajkakani-11" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/deeraj-kakani-a4933a311" target="_blank">LinkedIn</a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center mt-20 p-6 text-gray-500">
        © 2026 Deeraj Kumar
      </footer>
    </div>
  );
}