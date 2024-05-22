import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaInstagram, FaFacebook , FaYoutube , FaTwitter , FaPinterest , FaLinkedinIn} from "react-icons/fa6";
import { ImGift } from "react-icons/im";

function Footer() {
  return (
    <>
    <div className='container-all'>
        <hr></hr>
        <div className='mt-5'>
            <Row className='footer-font mb-4'>
                <Col lg={3}>OFFLINE STORE</Col>
                <Col lg={2}>GET TO KNOW US</Col>
                <Col>TRACK OR RETURN/EXCHANGE ORDER</Col>
                <Col>CUSTOMER CARE</Col>
            </Row>
            <Row className='footer-font2 mb-3'>
                <Col lg={3}>Find Stores Near Me</Col>
                <Col lg={2}>Contact Us</Col>
                <Col>TRACK ORDER</Col>
                <Col>Timings: 10 AM - 7 PM (Mon - Sat)</Col>
            </Row>
            <Row className='footer-font2 mb-3'>
                <Col lg={3}></Col>
                <Col lg={2}>FAQ's</Col>
                <Col>PLACE RETURN/EXCHANGE REQUEST</Col>
                <Col>Whatsapp : +91 6366966283</Col>
            </Row>
            <Row className='footer-font2 mb-3'>
                <Col lg={3}></Col>
                <Col lg={2}>Blogs</Col>
                <Col>RETURN/EXCHANGE POLICY</Col>
                <Col>Instagram: @snitch.co.in</Col>
            </Row>
            <Row className='footer-font2'>
                <Col lg={3}></Col>
                <Col lg={2}>Terms & Conditions</Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col lg={12} className='mt-5 footer-font'>SIGN UP AND SAVE</Col>
                <Col lg={12} className='mt-3 footer-font2'>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</Col>
                <Col lg={12} className='mt-3'><input placeholder='Enter Your Email'></input><button>Subscribe</button></Col>
                <Col lg={3} className='mt-3 d-flex'>
                    <div className=' footer-icon me-3'><FaInstagram /></div>
                    <div className=' footer-icon me-3'><FaFacebook /></div>
                    <div className=' footer-icon me-3'><FaYoutube /></div>
                    <div className=' footer-icon me-3'><FaTwitter /></div>
                    <div className=' footer-icon me-3'><FaPinterest /></div>
                    <div className=' footer-icon me-3'><FaLinkedinIn /></div> 
                    </Col>
            </Row>
            <Row className='mt-3 mb-5'>
                <Col lg={12} className='footer-font2 text-center'>© 2024 SNITCH</Col>
                <Col lg={12} className='footer-font2 text-center mb-2  font-weight-bold'>Made in India, for the World 🌍</Col>
                <Col lg={12} className=' d-flex justify-content-end mb-4'><button className='reward-btn'><ImGift /> &nbsp;Rewards</button></Col>
            </Row>
        </div>
        </div>
    </>
  )
}

export default Footer