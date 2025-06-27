import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Hi, I'm <span className="text-sky-400">Abhi Rajpurohit</span>
      </h1>
      <h2 className="text-xl md:text-3xl text-slate-300 mb-6">
          <span className="text-zinc-100">
            <Typewriter
              words={['Frontend Developer', 'MCA Student', 'Web Developer']}
              loop={0}
              cursor
              // cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
      </h2>

      <div className="flex gap-4 mb-6">
        <a
          href="https://github.com/abhii47"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-zinc-200 hover:text-zinc-50 text-2xl" />
        </a>
        <a
          href="https://linkedin.com/in/abhishek-singh-rajpurohit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-sky-600 hover:text-sky-400 text-2xl" />
        </a>
        <a
          href="https://leetcode.com/u/mr_abhii47/"
          target="_blank"
        >
          <SiLeetcode className="text-yellow-500 hover:text-yellow-400 text-2xl" />
        </a>
        <a
          href="mailto:abhishekrajpurohit@gmail.com"
          target="_blank"
        >
          <FaEnvelope className="text-red-400 hover:text-red-300 text-2xl"/>
        </a>
      </div>


{/* download my resume Button Created */}
      <div className="flex gap-4">
        <a
          href="../public/assets/abhi-web-developer.pdf"
          className="bg-zinc-50 text-white px-6 py-2 rounded-full hover:bg-zinc-300 transition"
          download
        >
          Download Resume
        </a>

{/* contact button created here */}
        <a
          href="#contact"
          className="border border-white px-6 py-2 rounded-full text-white hover:bg-zinc-300 hover:text-slate-900 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
