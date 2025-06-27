import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-300" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  // Not needed yet
  // { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },

];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-slate-900 text-white px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-sky-400 mb-10"
          variants={fadeUp}
          custom={0}
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-slate-800 rounded-xl py-6 px-4 hover:scale-105 transition-transform shadow-md"
              variants={fadeUp}
              custom={index + 1}
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;




// without framer motion

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
// import { SiTailwindcss, SiMysql, SiExpress } from 'react-icons/si';

// const skills = [
//   { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
//   { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
//   { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-300" /> },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
//   { name: 'Java', icon: <FaJava className="text-red-500" /> },
//   { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   }),
// };

// const Skills = () => {
//   return (
//     <motion.section
//       id="skills"
//       className="py-16 bg-slate-900 text-white px-6 md:px-20"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-sky-400 mb-10"
//           variants={fadeUp}
//           custom={0}
//         >
//           Skills & Tools
//         </motion.h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center bg-slate-800 rounded-xl py-6 px-4 hover:scale-105 transition-transform shadow-md"
//               variants={fadeUp}
//               custom={index + 1}
//             >
//               <div className="text-4xl mb-3">{skill.icon}</div>
//               <p className="text-sm font-medium">{skill.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;

