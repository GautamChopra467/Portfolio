import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;