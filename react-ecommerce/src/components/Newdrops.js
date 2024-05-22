import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Newdrops() {
    const [product, setproduct] = useState([]);
    const [id,setid] = useState('1');

    const fetchData = async (apiUrl) => {
        try {
            const response = await axios.get(apiUrl);
            setproduct(response.data.product);
            // console.log(response.data.product);
          } catch (error) {
            console.error('Error fetching data:', error);
          } 
    }

    useEffect(() => {

        fetchData('http://localhost:3001/viewallproduct');

    }, []);

    const handleFirstButtonClick = () => {
        fetchData('http://localhost:3001/viewallproduct');
        setid('1');
      };
    
      const handleSecondButtonClick = () => {
        fetchData('http://localhost:3001/viewlatestproduct');
        setid('2');
      };


    const getImageUrl = (imageName) => {
        return `http://localhost:3001/images/${imageName}`;
      };

    return (
        <>
        
        <div className='container-all'>
            <Row className='mt-4 mb-5'>
                <Col className='d-flex justify-content-center'>
                            <button className={id === '1' ? 'active-button me-3' : 'cate-btn me-3'}  onClick={handleFirstButtonClick}>
                                NEW DROPS
                            </button>  
                    <button className={id === '2' ? 'active-button me-3' : 'cate-btn me-3'} onClick={handleSecondButtonClick}>
                        MOST TRENDING
                    </button>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-between'>
                    {
                        product.map((item,ind) => {
                            return (
                                <>
                                    {ind <5 &&
                                    <Link to={`/product/${item._id}`}>
                                    <Card style={{ width: '16.5rem' }}>
                                        <Card.Img variant="top" src={getImageUrl(item.product_img[0])} height={400} />
                                        <Card.Body>
                                            <Card.Title className='new-drops-card-title'>{item.productname}</Card.Title>
                                            <Card.Text className='new-drops-card-price'>
                                                {item.price}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Link>
                        }
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                    <Col>
                        <div className='new-drop-view-all-btn mt-5 mb-5'>VIEW ALL</div>
                    </Col>
            </Row>
            </div>
        </>
    )
}

export default Newdrops