import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';
import logo from './../../images/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='container footer-container'>
               <div className='footer-row'>
                   <div className='footer-col'>
                        <h4 className='footer-head'>We are social</h4>
                        <h5 className='mt-3'>FOLLOW US</h5>
                    <div className='d-flex'>
                    <div className='instagram'><FaInstagram/></div>
                      <div className='mx-3 facebook'><FaFacebook/></div>
                      <div className='youtube'><FaYoutube/></div>
                    </div>
                    <div>
                        <img src={logo} width="60" height="50"
                         className='mt-3' alt="" />
                    </div>
                   </div>
                   <div className='footer-col'>
                       <h4 className='footer-head '>Link</h4>
                       <ul>
                            <li><h4>ADVERTISERS</h4></li>
                            <li><h4>PUBLICHERS</h4></li>
                            <li><h4>INFLUENCER</h4></li>
                            <li><h4>AD FORMATS</h4></li>
                       </ul>
                   </div>
                   <div className='footer-col'>
                       <h4 className='footer-head'>Documentation</h4>
                       <ul>
                            <li><h4>TERMS & CONDITIONS</h4></li>
                            <li><h4>PRIVACY POLICY</h4></li>
                            <li><h4>CANCELLATION POLICY</h4></li>
                            <li><h4>BLOG</h4></li>
                       </ul>
                   </div>
                   <div className='footer-col'>
                       <h4 className='footer-head'>Support</h4>
                       <ul>
                            <li><h5>FAQ</h5></li>
                            <li><h5>MEDIA KIT</h5></li>
                            <li><h5>CONTACT US</h5></li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;