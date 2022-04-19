import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form>
                <div className="input-group">
                    <label className="email">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="input-group">
                    <label className="password">Password</label>
                    <input type="password" name="password" required/>
                </div>
                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Wedding Photographer ? <Link className="form-link" to="/signUp">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;