import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Seasonfavs() {
    var [category,setcategory] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/viewallcategory')

        .then((res) => {
            setcategory(res.data.category)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const getImageUrl = (imageName) => {
        return `http://localhost:3001/images/${imageName}`;
      };


  return (
    <div className='container-all'>
        <Row>
            <Col>
                <div className='season-fav mt-3 mb-4'>SEASONAL FAV'S🌤️</div>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex mb-5 justify-content-between'>
                {
                    category.map((item,ind)=>{
                        return(
                            <> 
                            {ind <4 &&
                            <Card style={{ width: '21rem' }} className='season-fav-cate'>
                            <Card.Img variant="top" src={getImageUrl(item.category_img)} />
                            
                            <div className='season-fav-cate-name'>{item.categoryname}</div>
                          </Card>
                          }</>
                        )
                    })
                }
            </Col>
        </Row>

    </div>
  )
}

export default Seasonfavs