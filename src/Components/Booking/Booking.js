import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Booking = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useAuthState(auth)
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const booking = {name, email, address, phone,};
    console.log(booking);
  };

  return (
    <div className="w-50 mx-auto mt-5 mb-5 ">
      <Form onSubmit={handleCreateUser}>
        <h2 className="text-primary">Booking Information</h2>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onBlur={handleNameBlur}
            type="text"
            placeholder="Enter your name"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            value= {user?.email} readOnly
            type="email"
            placeholder="Enter your email"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onBlur={handleAddressBlur}
            type="text"
            placeholder="Enter your address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onBlur={handlePhoneBlur}
            type="number"
            placeholder="Enter your number"
            required
          />
        </Form.Group>
        <Button className="btn btn-primary w-50 d-block mx-auto" variant="primary" type="submit">
          Add Booking
        </Button>
      </Form>
    </div>
  );
};

export default Booking;
