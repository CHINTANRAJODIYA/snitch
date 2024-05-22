import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

import { EffectCards } from 'swiper/modules';

import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Lastslider() {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/viewrecentlystalk')
            .then((res) => {
                setproduct(res.data.product)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const getImageUrl = (imageName) => {
        return `http://localhost:3001/images/${imageName}`;
    };


    return (
        <>
        
            <div className='container-all'>
                <div className='marginb-150'>
                <Row>
                    <Col className='recently-stalked-line d-flex justify-content-center mt-5 mb-5'>RECENTLY STALKED</Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={4}>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper center"
                            width={300} // Adjust the width as needed
                            height={300}
                        >
                            {
                                product.map((item, ind) => {
                                    return (
                                        <>
                                            {ind < 4 &&
                                                <SwiperSlide>
                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Img variant="top" src={getImageUrl(item.product_img[0])} />
                                                        <Card.Body>
                                                            <Card.Title>{item.productname}</Card.Title>
                                                            <Card.Text>
                                                                {item.price}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            }
                                        </>
                                    )
                                })
                            }
                                </Swiper>
                    </Col>
                    <Col lg={4}>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper center"
                            width={300} // Adjust the width as needed
                            height={300}
                        >
                            {
                                product.map((item, ind) => {
                                    return (
                                        <>
                                            {ind > 4 && ind < 9 &&
                                                <SwiperSlide>
                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Img variant="top" src={getImageUrl(item.product_img[0])} />
                                                        <Card.Body>
                                                            <Card.Title>{item.productname}</Card.Title>
                                                            <Card.Text>
                                                                {item.price}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            }
                                        </>
                                    )
                                })
                            }
                                </Swiper>
                    </Col>
                    <Col lg={4}>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper center"
                            width={300} // Adjust the width as needed
                            height={300}
                        >
                            {
                                product.map((item, ind) => {
                                    console.log(ind)
                                    return (
                                        <>
                                            {ind > 7 && ind < 13 &&
                                                <SwiperSlide>
                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Img variant="top" src={getImageUrl(item.product_img[0])} />
                                                        <Card.Body>
                                                            <Card.Title>{item.productname}</Card.Title>
                                                            <Card.Text>
                                                                {item.price}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            }
                                        </>
                                    )
                                })
                            }
                                </Swiper>
                    </Col>
                </Row>
                </div>
        </div>
        </>
    )
}

export default Lastslider