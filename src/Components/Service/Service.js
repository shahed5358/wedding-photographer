import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className="service">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <h4 style={{color:"red"}}>{price}</h4>
            <p>{description}</p>
            <button className="btn btn-primary">Check Out</button>
            
        </div>
    );
};

export default Service;