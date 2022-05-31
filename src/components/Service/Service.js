import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBullhorn, FaPaperPlane, FaUserFriends } from "react-icons/fa";
import './Service.css';

const Service = () => {
    return (
        <div className='service'>
            <h3 className='service-title'>AVAILABLE FOR EVERYONE</h3>
            <h6 className='service-sub-title'>This is our all Announcement</h6>
            <div className='service-container'>
            <div>
                <span className='service-icon'><FaBullhorn/></span>
                 <h6 className='text'>Announcement</h6>
                 <Button className='service-btn-1'>Announcement</Button>
            </div>
            <div>
                <span className='service-icon'><FaPaperPlane/></span>
                 <h6 className='text-2'>Media</h6>
                 <Button className='service-btn'>Media</Button>
            </div>
            <div>
                <span className='service-icon'><FaUserFriends/></span>
                 <h6 className='text-2'>Hotline</h6>
                 <Button className='service-btn'>Hotline</Button>
            </div>
            </div>
        </div>
    );
};

export default Service;