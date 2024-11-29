import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogDashboard from "./components/BlogDashboard";
import BlogForm from "./components/BlogForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogDashboard />} />
        <Route path="/add-blog" element={<BlogForm />} />
      </Routes>
    </Router>
  );
};

export default App;
