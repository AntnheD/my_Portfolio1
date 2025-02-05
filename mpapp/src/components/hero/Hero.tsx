'use client';
import RoomSharpIcon from '@mui/icons-material/RoomSharp';
import * as React from 'react';
import AnimatedText from '../dicoration/animatedtextes';
import WelcomePage from '../dicoration/welcompage';

export default function Home() {
  return (
    <div className="bg-black flex flex-col">
      {/* Addis Ababa Section */}
      <div className="bg-black text-center text-gray-400 mt-10 ">
        <RoomSharpIcon className="text-white" /> {/* Ensure the icon is visible */}
        <span className="text-white">Addis Ababa</span> {/* Ensure the text is visible */}
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 mt-0">
          <AnimatedText />
          <p className="text-center text-gray-400 mt-0">
            Welcome to my project showcase. Here you can see some of my projects that I have worked on. Feel free to reach
            out to me if you have any questions or want to collaborate on a project.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 mt-40">
          <WelcomePage />
        </div>
      </div>
    </div>
  );
}