import React from "react";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4">
      {/* Image Section */}
      <div className="w-full flex justify-center mb-6">
        <Image 
          src="/images/grayimage1.jpeg" 
          alt="Laptop on a circuit board"
          width={640}
          height={256}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      {/* Info Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full text-center flex-auto">
        <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">FILTER</h2>
          <p className="text-gray-400">Categories Available</p>
          <h3 className="text-3xl font-bold mt-2">1229</h3>
          <p className="text-gray-400">Github contributions</p>
        </div>

        <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">PROJECT</h2>
          <p className="text-gray-400">Software Projects</p>
          <h3 className="text-3xl font-bold mt-2">39</h3>
          <p className="text-gray-400">Repositories</p>
        </div>
      </div>
    </div>
  );
}
