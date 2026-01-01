import { motion } from "framer-motion";
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section 
    className="py-24 px-6 md:px-16 bg-linear-to-bl from-[#1b3e4b] via-[#122c3d] to-[#0a0f13] text-gray-200 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white drop-shadow-lg"
      >
        About Me
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
      >
        Hey there 👋, I'm <span className="text-teal-400 font-semibold">Hussain Moiyedi</span>,  
        a passionate <span className="text-teal-300 font-semibold">Full Stack Web Developer</span> currently in Class 11,  
        aspiring to pursue <span className="text-teal-400 font-semibold">BTech in Computer Science</span> with a focus on  
        <span className="text-teal-300 font-semibold"> Artificial Intelligence</span> and <span className="text-teal-300 font-semibold">Machine Learning</span>.  
        I love turning ideas into beautiful, functional web applications using technologies like  
        <span className="text-teal-400 font-semibold"> MERN, GSAP, Framer Motion</span>, and more.
      </motion.p>

      {/* Icons Row */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-8 mt-10 text-teal-400 text-3xl"
      >
        <div className="flex flex-col items-center gap-2">
          <FaLaptopCode className="hover:text-teal-300 transition" />
          <p className="text-sm text-gray-400">Developer</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaCode className="hover:text-teal-300 transition" />
          <p className="text-sm text-gray-400">Creator</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaBrain className="hover:text-teal-300 transition" />
          <p className="text-sm text-gray-400">Learner</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
