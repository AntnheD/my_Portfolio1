'use client'; // For Next.js (if applicable)

import { Typography } from '@mui/material'; // Import MUI Typography for text styling
import * as React from 'react';

export default function AnimatedText() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Animated Text Container */}
      <div className="flex flex-col items-center justify-center">
        <Typography
          variant="h2" // Large text size
          component="div" // Render as a div
          sx={{
            fontFamily: 'monospace', // MUI custom styling
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          I AM ANTNHE - A TALENTED SOFTWARE ENGINEERING STUDENT
        </Typography>
      </div>
    </div>
  );
}
