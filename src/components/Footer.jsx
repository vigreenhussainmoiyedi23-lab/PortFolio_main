import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white backdrop-blur-2xl py-6 flex flex-col md:flex-row justify-between items-center px-6">
      <p>© {new Date().getFullYear()} Hussain Moiyedi. All rights reserved.</p>
      <SocialIcons/>
      <p>Photo by <a href="https://unsplash.com/@alvarordesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvaro Reyes</a> on <a href="https://unsplash.com/photos/person-working-on-blue-and-white-paper-on-board-qWwpHwip31M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </footer>
  );
};

export default Footer;
