import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Categories2() {

    const [shorts, setshorts] = useState([]);
    const [id, setid] = useState('6628a254c349678e3e4b7d0a');
  
    useEffect(() => {
      axios.get(`http://localhost:3001/viewcategoryproduct/${id}`)
        .then((res) => {
          setshorts(res.data.category)
        })
        .catch((error) => {
          console.log(error);
        })
    }, [id]);
  
    const getImageUrl = (imageName) => {
      return `http://localhost:3001/images/${imageName}`;
    };
  
    const handleButtonClick = (buttonId) => {
      if (id === buttonId) {
        setid(null); 
      } else {
        setid(buttonId);
      }
    };

  return (
    <>
        <div className='container-all'>
        <Row className=' mb-5 mt-5'>
          <Col className='d-flex justify-content-center'>
            <button className={id === '6628a254c349678e3e4b7d0a' ? 'active-button me-3' : 'cate-btn me-3'} onClick={() => handleButtonClick('6628a254c349678e3e4b7d0a')}>SHORTS
            </button>
            <button className={id === '6628a25ec349678e3e4b7d0c' ? 'active-button me-3' : 'cate-btn me-3'} onClick={() => handleButtonClick('6628a25ec349678e3e4b7d0c')}>CO-ORDS
            </button>
            <button className={id === '6628a266c349678e3e4b7d0e' ? 'active-button me-3 ' : 'cate-btn me-3'} onClick={() => handleButtonClick('6628a266c349678e3e4b7d0e')}>PYJAMAS
            </button>
          </Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-between mb-4'>
                {
                    shorts.map((item)=>{
                        return (
                            <>
                             <Link to={`/product/${item._id}`}>
                              <Card style={{ width: '21rem' }} className='categories'>
                                <Card.Img variant="top" src={getImageUrl(item.product_img[0])} height={500} />
                                <Card.Body>
                                  <Card.Title className='new-drops-card-title'>{item.productname}</Card.Title>
                                  <Card.Text className='new-drops-card-price'>
                                    Rs. {item.price}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                              </Link>
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

export default Categories2