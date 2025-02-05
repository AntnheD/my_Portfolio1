'use client';
import * as React from 'react';
import Feedback from '../dicoration/Feedback';
import Skill from '../dicoration/skiles';

export default function Home() {
  return (
    <div className="bg-gray-400 flex flex-col w-full min-h-screen">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-1 w-full">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 bg-transparent top-0">
          <Feedback />
          <Feedback />
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 bg-black">
          <Skill />
        </div>
      </div>
    </div>
  );
}