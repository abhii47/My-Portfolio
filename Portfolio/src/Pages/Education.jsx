import React from 'react';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'Parul University, Vadodara',
    year: '2023 - Present',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institute: 'SDJ International College, Surat',
    year: '2020 - 2023',
  },
  {
    degree: 'HSC (12th Science)',
    institute: 'Vidhyabharti School, Surat',
    year: '2019 - 2020',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-slate-800 text-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-sky-400 mb-10 text-center">Education</h2>
        <div className="space-y-6 border-l-2 border-sky-400 pl-6">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-8.5 top-1.5 w-4 h-4 bg-sky-400 rounded-full border-2 border-slate-900" />
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-slate-300">{edu.institute}</p>
              <p className="text-sm text-slate-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
