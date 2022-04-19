import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, events} = service;
    return (
        <div>
            <img src={img} alt=""/>
            <h2> {name}</h2>
        </div>
    );
};

export default Service;