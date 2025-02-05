"use client";

import { 
  FaTwitter, FaLinkedin, FaReact, FaPython, 
  FaJs, FaHtml5, FaCss3Alt, FaCuttlefish, FaGithub, FaTelegram 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiMui, SiDjango, 
  SiOpencv, SiArduino, SiTypescript, SiExpress, SiC 
} from "react-icons/si";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Footer() {
  const supportLinks = [
    { label: "FAQs", href: "#" },
    { label: "Client Support", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const skills = [
    { icon: <FaHtml5 className="inline text-orange-500" />, label: "HTML" },
    { icon: <FaCss3Alt className="inline text-blue-600" />, label: "CSS" },
    { icon: <FaReact className="inline text-blue-400" />, label: "React" },
    { icon: <FaReact className="inline text-blue-400" />, label: "React Native" },
    { icon: <SiTailwindcss className="inline text-blue-500" />, label: "Tailwind CSS" },
    { icon: <SiMui className="inline text-blue-700" />, label: "Material-UI" },
    { icon: <SiDjango className="inline text-green-700" />, label: "Django" },
    { icon: <SiNextdotjs className="inline text-black" />, label: "Next.js" },
    { icon: <SiExpress className="inline text-gray-600" />, label: "Express.js" },
    { icon: <SiC className="inline text-blue-700" />, label: "C" },
    { icon: <FaPython className="inline text-yellow-500" />, label: "Python" },
    { icon: <FaJs className="inline text-yellow-400" />, label: "JavaScript" },
    { icon: <SiTypescript className="inline text-blue-500" />, label: "TypeScript" },
    { icon: <FaCuttlefish className="inline text-blue-700" />, label: "C++" },
    { icon: <SiOpencv className="inline text-blue-400" />, label: "OpenCV" },
    { icon: <SiArduino className="inline text-green-500" />, label: "Arduino" },
  ];

  return (
    <footer className="bg-gray-300 p-6 w-full text-black">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Section - Title & Social Icons */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Skuch Portfolio</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" aria-label="Twitter" className="text-black text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/antnhe-d-2a03552a2/" aria-label="LinkedIn" className="text-black text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="text-black text-2xl">
              <FaGithub />
            </a>
            <a href="#" aria-label="Telegram" className="text-black text-2xl">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:grid grid-cols-2 gap-8 text-sm w-full max-w-3xl">
          {/* Support Section */}
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 mt-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-blue-600">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section (Wrapped after every 5 items) */}
          <div>
            <h3 className="font-semibold">Skills</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {skill.icon} <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden w-full">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Support</AccordionSummary>
            <AccordionDetails>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-blue-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Skills</AccordionSummary>
            <AccordionDetails>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {skill.icon} <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-700 text-xs mt-6">
        © {new Date().getFullYear()} Antnhe s Portfolio. All Rights Reserved.
      </div>
    </footer>
  );
}
