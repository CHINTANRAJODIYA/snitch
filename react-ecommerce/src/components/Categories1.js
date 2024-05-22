import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Categories1() {

  const [shirt, setshirt] = useState([]);
  const [id, setid] = useState('6627471caee391231cb3bb6c');

  useEffect(() => {
    axios.get(`http://localhost:3001/viewcategoryproduct/${id}`)
      .then((res) => {
        setshirt(res.data.category)
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
      setid(null); // Toggle off if the same button is clicked again
    } else {
      setid(buttonId);
    }
  };

  return (
    <>
      <div className='container-all'>
        <Row className= 'mb-5 mt-5'>
          <Col className='d-flex justify-content-center'>
            <button className={id === '6627471caee391231cb3bb6c' ? 'active-button me-3' : 'cate-btn me-3'} onClick={() => handleButtonClick('6627471caee391231cb3bb6c')}>SHIRTS
            </button>
            <button className={id === '662764ef01680b3b63b0e357' ? 'active-button me-3' : 'cate-btn me-3'} onClick={() => handleButtonClick('662764ef01680b3b63b0e357')}>T-SHIRTS
            </button>
            <button className={id === '662764f501680b3b63b0e359' ? 'active-button me-3' : 'cate-btn me-3'} onClick={() => handleButtonClick('662764f501680b3b63b0e359')}>JEANS
            </button>
            <button className={id === '6627650b01680b3b63b0e35b' ? 'active-button me-3' : 'cate-btn me-3'} onClick={() => handleButtonClick('6627650b01680b3b63b0e35b')}>TROUSERS
            </button>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-between mb-4'>
            {
              shirt.map((item) => {
                return (
                  <>
                   <Link to={`/product/${item._id}`}>
                    <Card style={{ width: '21rem' }} className='categories'>
                      <Card.Img variant="top" src={getImageUrl(item.product_img[0])} height={500} />
                      <Card.Body>
                        <Card.Title className='new-drops-card-title'>{item.productname}</Card.Title>
                        <Card.Text className='new-drops-card-price'>
                          {item.price}
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

export default Categories1