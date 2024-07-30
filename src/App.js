import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ContactUs from './pages/contactus';
import Shop from './pages/shop';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/contact_us" element={<ContactUs/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
