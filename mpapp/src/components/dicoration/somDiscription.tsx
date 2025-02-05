'use client';
import React from 'react';
import Image from 'next/image';

export default function Feedback() {
  // Random values for feedback, author, role, company, and imageSrc
  const feedback = "This is a random feedback about the candidate's skills and performance.";
  const author = "John Doe";
  const role = "Senior Developer";
  const company = "Tech Corp";
  const imageSrc = "/path/to/random/image.jpg"; // Replace with actual image path

  return (
    <div className="bg-gray-300 text-black p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <p className="italic text-gray-600">{/* Employer feedback... */}</p>
      <div className="flex items-center space-x-4 mt-4">
        <Image
          src={imageSrc}
          alt="Employer feedback image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{author}</p>
          <p className="text-sm text-gray-700">
            {role} at {company}
          </p>
        </div>
      </div>
      <p className="mt-4 text-lg">“{feedback}”</p>
    </div>
  );
}