import React from 'react';
import './Counter.css';

const Counter = () => {
    return (
        <div className='counter'>
            <div className='daily mx-auto'>
                <h3 className='service-title'>1 BN+</h3>
                <h6 className='service-title'>Daily Impressions</h6>
            </div>
            <div className='paid mx-auto'>
                <h3 className='service-title'>$500K+</h3>
                <h6 className='service-title'>Paid</h6>
            </div>
            <div className='mx-auto global'>
                <h3 className='service-title'>8K+</h3>
                <h6 className='service-title'>Global Publishers</h6>
            </div>
        </div>
    );
};

export default Counter;