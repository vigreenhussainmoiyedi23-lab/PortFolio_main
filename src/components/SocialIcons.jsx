import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const iconVariants = {
  hidden: { opacity: 0, y: 10, scale: 0 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const SocialIcons = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.2, // each icon appears 0.2s apart
        delayChildren: 0.3, // wait before first icon starts
      }}
      className="flex gap-5 mt-5"
    >
      <motion.a
        variants={iconVariants}
        href="https://github.com/vigreenhussainmoiyedi23-lab"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 hover:bg-black transition-all duration-300 hover:scale-110"
      >
        <FaGithub size={22} />
      </motion.a>

      <motion.a
        variants={iconVariants}
        href="https://www.linkedin.com/in/hussain-moiyedi-552448383/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-gray-800 hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin size={22} />
      </motion.a>

      <motion.a
        variants={iconVariants}
        href="https://instagram.com/hussain._.moiyedi"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          background:
            "radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)",
        }}
        className="p-2 rounded-full bg-gray-800 transition-all duration-300 hover:scale-110"
      >
        <FaInstagram size={22} />
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons;
