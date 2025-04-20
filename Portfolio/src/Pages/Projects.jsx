import React from 'react';
import projects from '../Data/userData';

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
                <h3 
                  className="text-2xl font-semibold mb-2 text-white"> {project.title} 
                  <span 
                  className='px-2' >
                    {project.active ? (<span className='badge badge-soft badge-secondary'>On Process</span>) : 
                    (<span className='badge badge-soft badge-success'>Completed</span>) }
                  </span>
                </h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex gap-4 text-white">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-white px-4 py-2 rounded hover:bg-transparent hover:border hover:border-white transition"
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
                <div className="languages mt-8">
                    <ul className="flex gap-2 text-slate-300 flex-wrap">
                      {project.languages.map((language, index) => (
                        <li key={index} className='bg-sky-900 px-4 py-2 text-nowrap rounded-md text-white'>{language}</li>
                        ))}
                    </ul>
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
