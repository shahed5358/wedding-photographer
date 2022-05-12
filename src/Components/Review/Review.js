import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, img, description} = review;
    return (
        <div className="review">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
            
        </div>
    );
};

export default Review;