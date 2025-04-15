import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Hi, I'm <span className="text-sky-400">Abhi Rajpurohit</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
        Frontend Developer | MCA Student | UI/UX Explorer
      </h2>

      <div className="flex gap-4 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-400 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-400 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-white hover:text-sky-400 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="/Abhi_Raj_Resume.pdf"
          className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition"
          download
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-slate-900 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
