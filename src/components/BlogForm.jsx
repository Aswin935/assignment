import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const BlogForm = () => {
  const [blog, setBlog] = useState({
    name: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
    alert("Blog submitted successfully!");
    setBlog({ name: "", description: "", author: "" }); // Reset form
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add Blog
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Blog Name"
            variant="outlined"
            fullWidth
            name="name"
            value={blog.name}
            onChange={handleChange}
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={blog.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Author Name"
            variant="outlined"
            fullWidth
            name="author"
            value={blog.author}
            onChange={handleChange}
            required
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default BlogForm;
