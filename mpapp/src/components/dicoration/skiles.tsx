'use client';
import { useState } from "react";
import { FaPaintBrush, FaPalette, FaFilter, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiMui } from "react-icons/si";
import { ArrowRight } from "@mui/icons-material";

export default function Skill() {
  return (
    <div className="bg-black text-white p-6 rounded-3xl h-full flex flex-col justify-center shadow-lg">
      <p className="italic text-gray-400">My skills</p>
      <div className="mt-4 space-y-4">
        <SkillItem icon={<FaFilter />} label="FRONTEND" technologies={[
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Material UI", icon: <SiMui /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss /> }
        ]} />
        <SkillItem icon={<FaPaintBrush />} label="BACKEND" technologies={[
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "Express.js", icon: <SiExpress /> },
          { name: "MongoDB", icon: <SiMongodb /> }
        ]} />
        <SkillItem icon={<FaPalette />} label="FULL-STACK" technologies={[
          { name: "React.js", icon: <FaReact /> },
          { name: "Node.js", icon: <FaNodeJs /> },
          { name: "Database", icon: <FaDatabase /> }
        ]} />
      </div>
    </div>
  );
}

function SkillItem({ icon, label, technologies }: { icon: React.ReactNode; label: string, technologies: { name: string, icon: React.ReactNode }[] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex flex-col items-start bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:bg-gray-700 hover:scale-105 cursor-pointer ${isHovered ? 'z-50' : 'z-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4 w-full">
        <span className="text-xl">{icon}</span>
        <span className="text-lg font-semibold">{label}</span>
        <ArrowRight className="ml-auto text-gray-400" />
      </div>

      {isHovered && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 p-3 rounded-lg shadow-md z-50">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 text-white p-2 hover:bg-gray-700 rounded-md">
              <span className="text-xl">{tech.icon}</span>
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
