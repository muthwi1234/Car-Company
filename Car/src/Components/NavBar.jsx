import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-semibold text-white no-underline hover:text-gray-400">Car Company</Link>
                <ul className="flex space-x-10">
                    <li><Link to="/about" className="text-white no-underline hover:text-gray-400">About</Link></li>
                    <li><Link to="/cars" className="text-white no-underline hover:text-gray-400">Cars</Link></li>
                    <li><Link to="/cart" className="text-white no-underline hover:text-gray-400">Cart</Link></li>
                    <li><Link to="/signup" className="text-white no-underline hover:text-gray-400">Sign Up</Link></li>
                    <li><Link to="/login" className="text-white no-underline hover:text-gray-400">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
