import React from 'react';

const projects = [
  {
    title: 'KickCraze',
    description:
      'An e-commerce website for sneakers, built with React.js and Tailwind CSS. Features responsive UI, product listings.',
    live: 'https://kickcraze-abhi.netlify.app/',
    code: 'https://github.com/abhii47/KickCraze',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sSaWGjKfR_e94-u9R9Yit5vJ76IaNkRKvw&s'// Add this image to your public/assets folder
  },
  {
    title: 'Anime_cast',
    description:
      'An anime Character Details concept site using HTML, CSS, and JavaScript. Includes genre filters and a smooth interface.',
    live: 'https://anime-cast.netlify.app/',
    code: 'https://github.com/abhii47/Anime_cast',
    image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/06/muichiro-tokito-in-front-of-hashira-demon-slayer.jpg', // Add this image to your public/assets folder
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-slate-800 text-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-slate-900 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
