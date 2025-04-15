import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-slate-800 text-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 mb-6">About Me</h2>
        <p className="text-lg text-slate-200 leading-relaxed">
          Hey! I'm <span className="font-semibold text-white">Abhi Rajpurohit</span>, a passionate frontend developer
          and MCA student at <span className="text-sky-300">Parul University</span>. I hold a BCA degree from SDJ
          International College, Surat, and I'm always curious to learn new technologies and build beautiful user interfaces.
        </p>

        <p className="mt-4 text-lg text-slate-300">
          With a strong grip on <span className="text-white font-medium">React.js, Tailwind CSS, JavaScript</span>,
          and a deep interest in UI/UX, I bring ideas to life with interactive and responsive designs.
        </p>

        <p className="mt-4 text-lg text-slate-300">
          I’ve built multiple projects including <span className="text-white font-medium">KickCraze</span> and
          <span className="text-white font-medium"> Anime_cast</span>. My goal is to keep growing as a developer,
          contribute to meaningful products, and keep building things people love to use 💻✨
        </p>
      </div>
    </section>
  );
};

export default About;
