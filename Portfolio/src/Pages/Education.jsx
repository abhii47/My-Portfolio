import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institute: 'Parul University, Vadodara, Gujarat',
    year: '2024 - Present',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institute: 'SDJ International College, Surat, Gujarat',
    year: '2021 - 2024',
  },
  {
    degree: 'HSC (12th Commerce + Maths)',
    institute: 'Modern Defence School, Sheoganj, Rajasthan',
    year: '2019 - 2021',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-16 bg-slate-800 text-white px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-sky-400 mb-10 text-center"
          variants={fadeUp}
          custom={0}
        >
          Education
        </motion.h2>
        <div className="space-y-6 border-l-2 border-sky-400 pl-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={fadeUp}
              custom={index + 1}
            >
              <div className="absolute -left-8.5 top-1.5 w-4 h-4 bg-sky-400 rounded-full border-2 border-slate-900" />
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-slate-300">{edu.institute}</p>
              <p className="text-sm text-slate-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
