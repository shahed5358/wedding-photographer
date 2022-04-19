import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './SignUp.css'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/home');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password did not match');
            return;
        }
        if(password.length < 6){
            setError('Password must be 6 characters or longer');
        }

        createUserWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        console.log('working');
    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label className="email">Email</label>
                    <input onBlur={handleEmailBlur} className="form-control"type="email" name="email" required/>
                </div>
                <div className="input-group">
                    <label className="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="password" required/>
                </div>
                <div className="input-group">
                    <label className="password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required/>
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Alrady have an account ? <Link className="form-link" to="/login">Login</Link>
                </p>
                <p style={{textAlign: 'center'}}>or</p>
                <button onClick={handleGoogleSignIn} className="form-btn">Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;