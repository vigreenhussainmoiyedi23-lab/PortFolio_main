import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // Convert markdown bold to <strong>
  const formattedDescription = project.description.replace(
    /\*\*(.*?)\*\*/g,
    "<strong class='text-teal-400'>$1</strong>"
  );

  // Normalize live links (support string or array)
  const liveLinks = Array.isArray(project.live) ? project.live : [project.live];

  return (
    <motion.div
      className="bg-[#0e161a] text-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between transform transition-all duration-300 border  hover:border-slate-600 border-gray-800 w-full max-w-sm"
    >
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-3 left-4 text-xl font-semibold text-white drop-shadow-md">
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <div className="p-5 flex flex-col grow">
        <p
          className="text-gray-300 text-sm leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></p>

        {/* Links Section */}
        <div className="mt-auto flex flex-wrap gap-3 justify-between items-center">
          {/* Live Sites */}
          <div className="flex gap-2 flex-wrap">
            {liveLinks.map((link, index) => (
              <a
                key={index}
                href={link.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex capitalize items-center gap-1 px-3 py-1.5 rounded-md bg-linear-to-r from-teal-400 to-cyan-500 text-gray-900 font-semibold text-sm hover:scale-105 transition"
              >
                {link.name} <FaExternalLinkAlt size={12} />
              </a>
            ))}
          </div>

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 font-semibold text-sm transition"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
