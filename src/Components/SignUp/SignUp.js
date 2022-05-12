import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button, Form } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>Error : {error.message}</p>
      </div>
    );
  }

  return (
    <div className="w-50 mx-auto mt-5 mb-5 ">
      <Form onSubmit={handleFormSubmit}>
        <h2 className="text-primary">Please Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPasswordBlur}
            type="confirmPassword"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p style={{ color: "red" }}>{error?.message}</p>
        {loading && <p>Loading...</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>
          Alrady have an account ?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
        <p style={{ textAlign: "center" }}>or</p>
        <button className="btn btn-success"onClick={() => signInWithGoogle()}>
          Continue With Google
        </button>
      </Form>
    </div>
  );
};

export default SignUp;

