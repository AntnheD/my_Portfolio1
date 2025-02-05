'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface FeedbackItem {
  feedback: string;
  author: string;
  role: string;
  company: string;
  imageSrc: string;
}

// Default feedback data
const defaultFeedback: FeedbackItem = {
  feedback: "This is a default feedback message in case the data cannot be loaded.",
  author: "John Doe",
  role: "Software Engineer",
  company: "Example Inc.",
  imageSrc: "/images/avator1.jpeg", // Provide a default image path
};

export default function Feedback() {
  const [randomFeedback, setRandomFeedback] = useState<FeedbackItem>(defaultFeedback);

  useEffect(() => {
    // Fetch JSON data
    fetch('/data/feedback.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data: FeedbackItem[]) => {
        // Select a random feedback object
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomFeedback(data[randomIndex]);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
        // If fetching fails, keep the default feedback data
      });
  }, []);

  return (
    <div className="bg-gray-300 text-black p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <p className="italic text-gray-600">{/* Employer feedback... */}</p>
      <div className="flex items-center space-x-4 mt-4">
        <Image
          src={randomFeedback.imageSrc}
          alt="Employer feedback image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{randomFeedback.author}</p>
          <p className="text-sm text-gray-700">
            {randomFeedback.role} at {randomFeedback.company}
          </p>
        </div>
      </div>
      <p className="mt-4 text-lg">“{randomFeedback.feedback}”</p>
    </div>
  );
}