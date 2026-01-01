import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white backdrop-blur-2xl py-6 flex flex-col md:flex-row justify-between items-center px-6">
      <p>© {new Date().getFullYear()} Hussain Moiyedi. All rights reserved.</p>
      <SocialIcons/>
    </footer>
  );
};

export default Footer;
