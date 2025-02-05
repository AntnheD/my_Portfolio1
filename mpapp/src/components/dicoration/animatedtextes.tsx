'use client'; // For Next.js (if applicable)

import { Typography } from '@mui/material'; // Import MUI Typography for text styling
import * as React from 'react';


export default function AnimatedText() {
  return (

    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Animated Text Container */}
      <div className="flex flex-col items-center justify-center"><Typography
        variant="h2" // Large text size
        component="div" // Render as a div
        className="text-5xl font-bold text-white animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
        sx={{
          fontFamily: 'monospace', // MUI custom styling
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        I AM ANTNHE - A TALENTED SOFTWARE ENGINEERING STUDENT
      </Typography></div>
      
    </div>
  );
};

