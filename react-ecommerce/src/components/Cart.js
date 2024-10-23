import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Offerslider from './offerslider'
import Menu from './Menu'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { CiUser, CiLocationOn, CiBag1, CiBadgeDollar, CiHeart, CiSearch, CiLogout, CiClock1,CiCirclePlus,CiCircleMinus  } from "react-icons/ci";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { GiUnlocking } from "react-icons/gi";
import { PiHandshakeThin } from "react-icons/pi";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cart() {

  const [wish,setWish]= useState('');

  const cart = useSelector((state) => state.cart.cart)

  const getImageUrl = (imageName) => {
    return `http://localhost:3001/images/${imageName}`;
  };

  const [quantity,setquantity] = useState(1);
  const [time, setTime] = useState(new Date());

  const plus = () =>{
    setquantity(parseInt(quantity+1))
  }
  const minus = () =>{
    if(quantity>1){
    setquantity(parseInt(quantity-1))
    }
  }

  const updateWish = (currentTime) => {
    const hours = currentTime.getHours();
    console.log(hours)
    
    if (hours >= 0 && hours <= 5) {
      setWish('Good night');
    } else if (hours >= 6 && hours <= 11) {
      setWish('Good Morning');
    } else if (hours >= 12 && hours <= 16) {
      setWish('Good Afternoon');
    } else if (hours >= 17 && hours <= 24) {
      setWish('Good Evening');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    updateWish(time);

    return () => clearInterval(interval);
  }, []);


  const formattedTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };


  return (
    <>
      <Offerslider></Offerslider>
      <Menu></Menu>
      <div className='cart-container'>
        <Row>
          <Col lg={3} className='mt-3'>
            <Row className='cart-main-box'>
              <div className='cart-name-box d-flex'>
                <div className='name-logo '></div>
                <div className='user-name'>Chintan Rajodiya<br></br><CiClock1 className='mb-1 me-1' />{formattedTime()}</div>
              </div>
              <Col lg={12} className='cart-box-text-adjust mt-4'><CiUser fontSize='25px' className='me-2' />My Profile</Col>
              <Col lg={12} className='cart-box-text-adjust mt-2 mb-2'><CiLocationOn fontSize='25px' className='me-2' />Delivery Address</Col>
              <hr></hr>
              <Col lg={12} className='cart-box-text-adjust margin-extra'><CiBag1 fontSize='25px' className='me-2' />My Orders</Col>
              <hr></hr>
              <Col lg={12} className='cart-box-text-adjust margin-extra2'><CiBadgeDollar fontSize='25px' className='me-2' />My Credits</Col>
              <Col lg={12} className='cart-box-text-adjust mt-2'><GiReceiveMoney fontSize='25px' className='me-2' />How To Earn</Col>
              <Col lg={12} className='cart-box-text-adjust margin-extra mt-2'><GiPayMoney fontSize='25px' className='me-2' />How To Spend</Col>
              <hr></hr>
              <Col lg={12} className='cart-box-text-adjust margin-extra2'><CiHeart fontSize='25px' className='me-2' />My Wishlist</Col>
              <Col lg={12} className='cart-box-text-adjust mt-2 mb-2'><CiSearch fontSize='25px' className='me-2' />Recently Viewed</Col>
              <hr></hr>

              <Col lg={12} className='cart-box-text-adjust mb-2 margin-extra2'><PiHandshakeThin fontSize='25px' className='me-2' />Refer Friend</Col>
              <hr></hr>
              <Col lg={12} className='cart-box-text-adjust margin-extra2 mb-5'><GiUnlocking fontSize='25px' className='me-2' />Change Password</Col>
              <Col lg={12} className='cart-box-text-adjust mb-3'><CiLogout fontSize='25px' className='me-2' />Log Out</Col>
            </Row>
          </Col>
          <Col>
            <Row className='cart-Wish-line'>
              <Col className='d-flex justify-content-center mt-5'>{wish}! Chintan</Col>
            </Row>
            <Row className='mt-4 cart-product-box'>
              {cart.length > 0 ? (
                // Cart content
                cart.map((product, ind) => (
                  <div class="card mt-3 ms-3 mb-3" style={{ width: '16.5rem' }}>
                    <div className='mt-2 mb-2 text-center'>
                      <p class="card-text">{product.productname}</p>
                    </div>
                    <Image class="card-img-top image-center" src={getImageUrl(cart[ind].product_img[0])} height={90} width={60} alt="..."></Image>
                    <div className='d-flex justify-content-center mt-1 mb-1'>Rs. {product.price}</div>
                    {product.size && Array.isArray(product.size) && (
                      <Col lg={12}>
                        <select class="form-select mt-2" aria-label="Default select example">
                          {product.size.map((item, index) => (
                            <option value="1">{item}</option>
                          ))}
                        </select>
                      </Col>
                    )}
                      <div className='qty-btn mt-2 mb-2 d-flex justify-content-around align-items-center'>
                      <Button onClick={plus} className='plus'><CiCirclePlus /></Button>{quantity}<Button onClick={minus} className='minus'><CiCircleMinus /></Button>
                      </div>
                      <div className='add-bag-btn d-flex justify-content-center align-items-center mb-3'>
                        Add to bag
                      </div>
                  </div>
                ))
              ) : (
                // Other content
                <>
                  <Col className='d-flex justify-content-center' lg={12}><img src={require('../cart.jpg')} height={100} width={100} alt="Cart" /></Col>
                  <Col className='d-flex justify-content-center mt-3 spacing' lg={12}> &nbsp; &nbsp; Your wish is our command but<br />you haven’t wishlisted any products.</Col>
                  <Col className='d-flex justify-content-center mt-3 mt-4 spacing' lg={12}>You can wishlist products<br /> &nbsp; &nbsp;  and buy them later</Col>
                  <Col className='d-flex justify-content-center mt-4 mb-5'><button className='cart-btn'>View Products</button></Col>
                </>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cart
