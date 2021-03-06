import React from 'react';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="top-banner">
                <div className="half-width">
                    <h1 style={{color: 'green'}}>BE THE PHOTOGRAPHER</h1>
                    <h1>OF WEDDING</h1>
                    <p>Wedding photography is a specialty in photography that is primarily focused on the photography of events and activities relating to weddings. It may include other types of portrait photography of the couple before the official wedding day, such as a pre-wedding engagement session (photographs are later used for the couple wedding invitations). </p>
                </div>
                <div className="half-width">
                    <img src={"https://th.bing.com/th/id/OIP.3NZBEDFZ0Cfl9O4thUXTTgHaLH?w=182&h=273&c=7&r=0&o=5&pid=1.7"}/>
                </div>
            </div>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;