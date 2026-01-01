import { easeIn, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const skills = [
  "MERN",
  "bcrypt",
  "ImageKit",
  "MongoDB",
  "Express-validator",
  "GSAP",
  "Framer Motion",
  "Lenis",
  "More",
];

const Hero = () => {
  const birthday = new Date("2009-06-04");
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) age--;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-gray-100 relative px-4 py-10 bg-linear-to-br from-[#0a0f13] via-[#122c3d] to-[#1b3e4b]">
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-5xl w-full">
        {/* Left - Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/hussain.jpg" // Replace with your photo
          alt="Hussain Moiyedi"
          
          className="w-40 h-40 sm:w-48 brightness-90 saturate-125 hue-rotate-15 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-teal-400 shadow-[0_0_30px_rgba(20,230,230,0.3)]"
        />
        {/* Rigth - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
          >
            Hussain Moiyedi
          </motion.h1>

          <motion.p
            className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 flex flex-wrap justify-center md:justify-start gap-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Full Stack Web Developer</span>
            <span>| {age} years old</span>
            <span>| Ujjain (M.P.), India</span>
            <span>| 04 June 2009</span>
          </motion.p>

          <SocialIcons />
        </div>
      </div>

      {/* Skills */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-10 px-4 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-gray-800 text-teal-300 font-semibold text-sm sm:text-base shadow-md hover:shadow-teal-400/30 hover:bg-gray-700 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
