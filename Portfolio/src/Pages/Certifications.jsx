import React from 'react';

const certifications = [
  {
    title: 'Java Servlet Basics and JSP 101',
    issuer: 'Simplilearn',
    link: 'https://simpli-web.app.link/e/NZQ9ccKACSb',
    date: '!5 Feb 2025',
  },
  {
    title: 'Introduction to Selenium',
    issuer: 'Simplilearn',
    link: 'https://simpli-web.app.link/e/H7NRFCWACSb',
    date: '5 April 2025',
  },
  {
    title: 'Information Technology Specialist in HTML and CSS',
    issuer: 'Certiport',
    link: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=468&psize=1',
    date: '24 March 2025',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-slate-900 text-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">Certifications</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform">
              <h3 className="text-2xl font-semibold text-white">{cert.title}</h3>
              <p className="text-slate-300 mt-1">{cert.issuer}</p>
              <p className="text-slate-400 text-sm mt-1">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sky-400 hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
