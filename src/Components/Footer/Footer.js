import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright  2022 || All rights reserved</p>
            <ul>
                 <li> <Link to="/contact">Contact</Link></li>
                 <li><Link to="/blogs">Blogs</Link></li>
            </ul>
        </div>
    );
};

export default Footer;