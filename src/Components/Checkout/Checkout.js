import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height:'70vh'}} className="px-2">
            <h1>Checkout your booking</h1>
            <button className="btn btn-primary"onClick={ () => navigate ('/booking')}>Booking</button>
        </div>
    );
};

export default Checkout;