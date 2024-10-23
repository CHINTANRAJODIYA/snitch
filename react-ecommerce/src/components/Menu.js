import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiMenuBurger } from "react-icons/ci";
import Image from 'react-bootstrap/Image';
import { TfiUser } from "react-icons/tfi";
import { TfiSearch } from "react-icons/tfi";
import { TfiHeart ,TfiBag } from "react-icons/tfi";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiMiniUserCircle } from "react-icons/hi2";

import { FaInstagram, FaFacebook , FaYoutube , FaTwitter , FaPinterest , FaLinkedinIn} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const options = [
  {
    // name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
];


function Menu({ name, ...props }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);


  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home"><div className='menu-icon' onClick={toggleShow}><CiMenuBurger /></div></Navbar.Brand>
        <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className='canvas-icon'>
            <HiMiniUserCircle />
            </div>
            <div className='canvas-login'>
            LOG IN
            </div>
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li className='canvas-list'>New Arrivals</li>
            <li className='canvas-list'>Best selling</li>
            <li className='canvas-list'>snitch luxe</li>
            <li className='canvas-list'>suits & blazer</li>
            <li className='canvas-list'>shop</li>
            <li className='canvas-list'>track order</li>
            <li className='canvas-list'>place a return / exchange request</li>
            <li className='canvas-list'>become our brand ambassador</li>
            <li className='canvas-list'>affiliate program</li>
            <li className='canvas-list'>customer support</li>
            <li className='canvas-list'>visit store</li>
            <li className='border-bottom canvas-list' >revolve</li>
          </ul>
          <ul>
            <li className='canvas-float-left'><FaInstagram /></li>
            <li className='canvas-float-left'><FaFacebook /></li>
            <li className='canvas-float-left'><FaYoutube /></li>
            <li className='canvas-float-left'><FaTwitter /></li>
            <li className='canvas-float-left'><FaPinterest /></li>
            <li className='canvas-float-left'><FaLinkedinIn /></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Image src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" height={60}></Image></Nav.Link>
          </Nav>
           <div className='menu-icons'>
           <Link to='/login'> <div className='menu-btn'><TfiUser /></div></Link>
              <div className='menu-btn'><TfiSearch /></div>
             <Link to='/cart'> <div className='menu-btn'><TfiHeart /></div></Link>
              <div className='menu-btn'><TfiBag /></div>
           </div>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Menu