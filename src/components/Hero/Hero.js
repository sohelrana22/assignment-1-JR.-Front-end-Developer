import React from 'react';
import './Hero.css';
import hero from './../../images/download (1).jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-title'>
                <h3>We Provide Good Services</h3>
                <h6>The act of bringing a legal writ, process, or summons to notice as prescribed by law.</h6>
            </div>
            <img className='hero-img' src={hero} alt="" />
        </div>
    );
};

export default Hero;