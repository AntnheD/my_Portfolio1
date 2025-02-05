"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import jsonData from "../data/aboute.json"; // Import JSON data

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  flex: "0 0 auto",
  marginRight: theme.spacing(2),
  borderRadius: "12px", // Rounded corners
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": { opacity: 0.15 },
    "& .MuiImageMarked-root": { opacity: 0 },
    "& .MuiTypography-root": { border: "4px solid currentColor" },
  },
}));

const ImageContainer = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: "12px", // Rounded corners
});

const Image = styled("img")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  margin: "auto",
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px", // Rounded corners
});

export default function ButtonBaseDemo() {
  const imageButtons = jsonData.imageButtons;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll || !containerRef.current) return;

    const container = containerRef.current;
    const scrollSpeed = 1;

    const scrollInterval = setInterval(() => {
      if (container) {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [autoScroll]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200;
    }
  };

  return (
    <Box sx={{ my: 8, px: 2, position: "relative", width: "100%" }}>
      {/* Scrollable container */}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          gap: 2,
          py: 2,
        }}
      >
        {imageButtons.map((image) => (
          <ImageButton focusRipple key={image.title} style={{ width: image.width }}>
            <ImageContainer style={{ backgroundImage: `url(${image.url})` }} />
            <Image src={image.url} alt={image.title} />
            <Link href={image.link} passHref legacyBehavior>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: 1,
                }}
              >
                {image.title}
              </Typography>
            </Link>
          </ImageButton>
        ))}
      </Box>

      {/* Navigation arrows */}
      <Box sx={{ position: "absolute", top: "50%", left: 16, transform: "translateY(-50%)", zIndex: 2 }}>
        <ButtonBase
          onClick={scrollLeft}
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "12px", // Rounded corners
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 30 }} />
        </ButtonBase>
      </Box>

      <Box sx={{ position: "absolute", top: "50%", right: 16, transform: "translateY(-50%)", zIndex: 2 }}>
        <ButtonBase
          onClick={scrollRight}
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "12px", // Rounded corners
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 30 }} />
        </ButtonBase>
      </Box>

      {/* Auto-scroll toggle button */}
      <Box sx={{ position: "absolute", bottom: 16, right: 16, zIndex: 1 }}>
        <ButtonBase
          onClick={() => setAutoScroll(!autoScroll)}
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "12px", // Rounded corners
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {autoScroll ? "❚❚" : "▶"}
        </ButtonBase>
      </Box>
    </Box>
  );
}
