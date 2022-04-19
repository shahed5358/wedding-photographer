import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div>
            <img src={img} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
    );
};

export default Service;