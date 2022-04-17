import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;