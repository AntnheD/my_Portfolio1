"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const categories = ["Frontend", "Backend", "Full-Stack", "Other"];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Submitted successfully!");
        setFormData({ name: "", email: "", category: "", message: "" });
      } else {
        setStatus("Submission failed!");
      }
    } catch (error) {
      setStatus("Error occurred!");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 p-4">
      <div className="w-full max-w-md bg-gray-700 p-6 rounded-xl shadow-lg">
        <p className="text-gray-400 italic mb-4">Interested in collaborating?</p>
        {status && <p className="text-center text-white">{status}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Your Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="filled"
            InputProps={{ style: { backgroundColor: "#333", color: "white" } }}
          />
          <TextField
            fullWidth
            label="Your Email *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="filled"
            inputProps={{ autoComplete: "email" }}
            InputProps={{ style: { backgroundColor: "#333", color: "white" } }}
          />
          <TextField
            fullWidth
            select
            label="Select Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            variant="filled"
            InputProps={{ style: { backgroundColor: "#333", color: "white" } }}
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Leave a message..."
            name="message"
            multiline
            rows={3}
            value={formData.message}
            onChange={handleChange}
            variant="filled"
            InputProps={{ style: { backgroundColor: "#333", color: "white" } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="bg-white text-black hover:bg-gray-200"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  );
}
