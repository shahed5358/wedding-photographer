import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form>
                <div className="input-group">
                    <label className="email">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="input-group">
                    <label className="password">Password</label>
                    <input type="password" name="password" required/>
                </div>
                <div className="input-group">
                    <label className="password">Confirm Password</label>
                    <input type="password" name="confirm-password" required/>
                </div>
                <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Alrady have an account ? <Link className="form-link" to="/login">Login</Link>
                </p>
                <p>or</p>
                <button className="form-btn">Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;