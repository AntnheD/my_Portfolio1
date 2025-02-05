"use client"; // Mark this component as a Client Component

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link'; // Use next/link instead of react-router-dom
import { useEffect, useRef, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the arrow icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back arrow icon

// Import JSON data (adjust path if needed)
import jsonData from '../data/aboute.json'; // Import the combined JSON

// Styled components
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  flex: '0 0 auto', // Ensure buttons don't shrink
  marginRight: theme.spacing(2), // Add spacing between buttons
  [theme.breakpoints.down('sm')]: {
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageContainer = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('img')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: 'auto',
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

// Main component
export default function ButtonBaseDemo() {
  const imageButtons = jsonData.imageButtons; // Access the imageButtons array
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Automatic scrolling effect
  useEffect(() => {
    if (!autoScroll) return;

    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const scrollInterval = setInterval(() => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;

        // Reset scroll position when reaching the end
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
    }, 20); // Adjust interval for smoother or faster scrolling

    return () => clearInterval(scrollInterval);
  }, [autoScroll]);

  // Toggle auto-scroll
  const toggleAutoScroll = () => {
    setAutoScroll((prev) => !prev);
  };

  // Scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Scroll amount for left arrow
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Scroll amount for right arrow
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Scrollable container */}
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        {imageButtons.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageContainer style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image src={image.url} alt={image.title} />
            <Link href={image.link} passHref legacyBehavior>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Link>
          </ImageButton>
        ))}
      </Box>

      {/* Auto-scroll toggle button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          zIndex: 1,
        }}
      >
        <ButtonBase
          onClick={toggleAutoScroll}
          sx={{
            padding: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          {autoScroll ? 'Pause' : 'Play'}
        </ButtonBase>
      </Box>

      {/* Navigation arrows */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          zIndex: 2,
          transform: 'translateY(-50%)',
        }}
      >
        <ButtonBase onClick={scrollLeft}>
          <ArrowBackIcon sx={{ color: 'white', fontSize: 30 }} />
        </ButtonBase>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          zIndex: 2,
          transform: 'translateY(-50%)',
        }}
      >
        <ButtonBase onClick={scrollRight}>
          <ArrowForwardIcon sx={{ color: 'white', fontSize: 30 }} />
        </ButtonBase>
      </Box>
    </Box>
  );
}
