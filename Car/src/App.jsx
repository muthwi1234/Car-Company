import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar'; // Ensure the correct path is set for your project structure
import About from './Components/About';
import Cars from './Components/Cars';
import Cart from './Components/Cart';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Updated to use the Home component */}
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
