import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, img, description} = review;
    return (
        <div className="review">
            <img src={img} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            
        </div>
    );
};

export default Review;