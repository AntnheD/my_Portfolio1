'use client';
import * as React from 'react';
import  Signup from '../contact/page';
import ContactCard from '../contact/contact';

export default function Contact() {
  return (
    <div className="bg-gray-400 flex flex-col w-full min-h-screen">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-1 w-full">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 bg-transparent top-0 roounded">
          <Signup />
          
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 bg-gray-400">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}