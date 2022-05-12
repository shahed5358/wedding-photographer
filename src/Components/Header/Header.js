import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="header-container">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/blogs">Blogs</Link>
                {
                    user ? 
                    <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                    : 
                    <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;