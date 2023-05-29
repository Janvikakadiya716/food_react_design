import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Recipes from './Components/Recipes/Recipes';
import Blog from './Components/Blog/Blog';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact/Contact';
import About from './About/About';
function App() {
  return (
    <Router>
      <NavBar/> {/* Include the NavBar component */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
