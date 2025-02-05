"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) return alert("Please enter a valid email!");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Subscribed successfully!");
        setEmail(""); // Clear input after submission
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 p-6">
      <div className="bg-gray-400 p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h2 className="text-lg font-bold">ANTNHE DEBEBE</h2>
        <a href="mailto:antnhe@email.com" className="text-blue-600 text-xl font-semibold block mt-2">
          antnhedebe19@gmail.com
          antnhe.debebe@aait.edu.et
        </a>
        <p className="text-lg mt-1">(+251) 965 602 001</p>

        <p className="mt-4 text-gray-600">Connect with me online!</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://www.instagram.com/natanhgiorgis/" className="text-black text-2xl"><FaInstagram /></a>
          <a href="https://github.com/AntnheD" className="text-black text-2xl"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/antnhe-d-2a03552a2/" className="text-black text-2xl"><FaLinkedin /></a>
        </div>

        <div className="border-t border-gray-500 mt-4 pt-4 text-gray-700 text-sm">
          Crafted with love - 2023
        </div>

        <p className="mt-4 text-gray-700">Stay updated! Subscribe to my newsletter for project updates!</p>
        <div className="flex items-center gap-2 mt-3">
          <TextField
            fullWidth
            variant="filled"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            slotProps={{
              input: {
                style: { backgroundColor: "transparent", color: "white" },
              },
            }}
          />
          <Button variant="contained" className="bg-white text-black hover:bg-gray-900" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
