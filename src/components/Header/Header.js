import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='head'>
            <img src={logo} width="60" height="50" className="d-inline-block m-3 align-top" alt="React Bootstrap logo"/>
            <p className='tp m-2'><span className='top'>BN</span> / EN</p>
            </div>
            <div className='header-top'>
            <div className='mt-0'>
            <Navbar bg="#F2F2F2" variant="#644F9C">
    <Container>
    
    <Nav className="me-5">
      <Nav.Link to='/home' className='tp m-2 active'>HOME</Nav.Link>
      <Nav.Link to='/advertisers' className='tp m-2 active'>ADVERTISERS</Nav.Link>
      <Nav.Link to='/publichers' className='tp m-2 active'>PUBLICHERS</Nav.Link>
      <Nav.Link to='/influencer' className='tp m-2 active'>INFLUENCER</Nav.Link>
      <Nav.Link to='/formats' className='tp m-2 active'>AD FORMATS</Nav.Link>
      <Nav.Link to='/blog' className='tp m-2 active'>BLOG</Nav.Link>
      <Nav.Link to='/contact' className='tp m-2 active'>CONTACT US</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            </div>
            <div>
            <Button className='btn-1'>LOGIN</Button>
            <Button className='btn'>SIGN UP</Button>
            </div>
        </div>
        </div>
    );
};

export default Header;