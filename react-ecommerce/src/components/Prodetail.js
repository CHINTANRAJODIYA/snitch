import React, { useEffect, useState } from 'react'
import { Col, Image, Navbar, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import { RiDonutChartLine } from "react-icons/ri";
import { TfiHeart } from "react-icons/tfi";
import Navbarr from './Menu';
import Footerr from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addproduct } from '../cartslice/cartslice';

function Prodetail() {
    const dispatch = useDispatch();

    const [product, setproduct] = useState("");
    const [id, setid] = useState('0');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); 

    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/viewoneproduct/${params.id}`)
            .then((res) => {
                setproduct(res.data.product);
                setSelectedImageIndex(0); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params]);

    const watch = () => {
        setid('1');
    };

    const getImageUrl = (imageName) => {
        return `http://localhost:3001/images/${imageName}`;
    };

    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <>
            <Navbarr />
            <div className='container-all'>
                <Row className='mb-5'>
                    <Col lg={1} className='mt-5'>
                        <Row>
                            <Col lg={12} className='mb-3'>
                                {product.product_img && Array.isArray(product.product_img) && (
                                    <Col lg={12}>
                                        {product.product_img.map((item, index) => (
                                            <Image
                                                key={index}
                                                src={getImageUrl(item)}
                                                height={130}
                                                className='mb-3'
                                                onClick={() => handleThumbnailClick(index)} // Update selected image on click
                                                style={{ cursor: 'pointer' }} // Add cursor to indicate clickability
                                            />
                                        ))}
                                    </Col>
                                )}
                            </Col>
                        </Row>
                    </Col>
                    <Col className='mt-5'>
                        {product.product_img && product.product_img.length > 0 && (
                            <Image src={getImageUrl(product.product_img[selectedImageIndex])} height={900} />
                        )}
                    </Col>
                    <Col>
                        <Row className='mt-5'>
                            <Col lg={12} className='pro-detail-title'>{product.productname}</Col>
                            <Col lg={12}><FaStar color="orange" />&nbsp;<FaStar color="orange" />&nbsp;<FaStar color="orange" />&nbsp;<FaStar color="orange" />&nbsp;<FaStar color="orange" /></Col>
                            <Col lg={12} className='pro-detail-price mt-4'>Rs.{product.price}</Col>
                            <Col lg={12} className='pro-detail-tax'>(incl. of all taxes)</Col>
                            <Col lg={12} className='d-flex mt-4'>
                                <Image src='https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/' height={20} className='mt-2 me-2'></Image>
                                <div className='pro-detail-offer'>
                                    Get this for <b> Rs. 1,169</b> <br />
                                    Buy 2 & Get Flat 10% Off! Code: <b>BUY2</b>
                                </div>
                            </Col>
                            <Col lg={12} className='d-flex mt-2'>
                                <Image src='https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/' height={20} className='mt-2 me-2'></Image>
                                <div className='pro-detail-offer'>
                                    Get this for <b> Rs. 1,039</b> <br />
                                    Buy 2 & Get Flat 10% Off! Code: <b>BUY5</b>
                                </div>
                            </Col>
                            <Col lg={12} className='d-flex mt-2'>
                                <Image src='https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/' height={20} className='mt-2 me-2'></Image>
                                <div className='pro-detail-offer'>
                                    Get this for <b> Rs. 1,104</b> <br />
                                    Flat 15% Off on minimum purchase of 2699/- <br />
                                    Code: <b>FLAT15</b>
                                </div>
                            </Col>
                            <Col lg={12} className='d-flex mt-2 mb-4'>
                                <Image src='https://www.snitch.co.in/cdn/shop/files/offer_icon-1_20x.png?v=1615371278/' height={20} className='mt-2 me-2'></Image>
                                <div className='pro-detail-offer'>
                                    Get this for <b> Rs. 1,039</b> <br />
                                    Flat 20% Off on minimum purchase of 3999/- <br />
                                    Code: <b>FLAT20</b>
                                </div>
                            </Col>
                            <hr />
                            <Col lg={12} className='pro-detail-size mb-3'>SELECT A SIZE</Col>
                            {product.size && Array.isArray(product.size) && (
                                <Col lg={12}>
                                    {product.size.map((item, index) => (
                                        <button key={index} className='pro-detail-size-btn me-2'>{item}</button>
                                    ))}
                                </Col>
                            )}
                            <Col lg={12} className='d-flex justify-content-center pro-detail-size-chart mt-4'>
                                <RiDonutChartLine className='mt-1' />&nbsp;SIZE CHART
                            </Col>
                            <Col lg={12} className='d-flex justify-content-center pro-detail-size-select mt-5'>
                                SELECT A SIZE
                            </Col>
                            <button onClick={watch} className={id === '1' ? 'mt-3 d-flex justify-content-center  watchlist-hover' : 'mt-3 d-flex justify-content-center  pro-detail-watchlist'}>
                                <Col lg={12} onClick={() => dispatch(addproduct(product))}>
                                    <TfiHeart Color={id === '1' ? 'black' : 'red'} fontSize="1.5em" />&nbsp;&nbsp;ADD TO WATCHLIST
                                </Col>
                            </button>
                        </Row>
                    </Col>
                </Row>
                <Footerr />
            </div>
        </>
    );
}

export default Prodetail;
