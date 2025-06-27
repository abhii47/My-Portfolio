import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-slate-900 text-white px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-sky-400 mb-6 text-center"
          variants={fadeUp}
          custom={0}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg text-slate-300 mb-12 text-center"
          variants={fadeUp}
          custom={1}
        >
          I’d love to hear from you! Please fill out the form below to get in touch.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-xl shadow-md"
          variants={fadeUp}
          custom={2}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <motion.div variants={fadeUp} custom={3}>
                <label htmlFor="name" className="block text-lg font-semibold text-white">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border border-slate-700 rounded-md bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <label htmlFor="email" className="block text-lg font-semibold text-white">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 border border-slate-700 rounded-md bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
            </div>

            {/* Right column */}
            <motion.div variants={fadeUp} custom={5}>
              <label htmlFor="message" className="block text-lg font-semibold text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[175px] mt-2 p-4 border border-slate-700 rounded-md bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Enter your message"
                required
              />
            </motion.div>
          </div>

          <motion.div className="mt-6" variants={fadeUp} custom={6}>
            <button
              type="submit"
              className="w-full py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-500"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
