import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

function Offerbanner() {
  return (
    <div style={{ overflow: 'hidden' }}>
        <Row className='mb-5'>
            <Col>
                <Image className='banner-width' src='https://www.snitch.co.in/cdn/shop/files/Wow50-web_1400x.webp?v=1711451977' fluid />
            </Col>
        </Row>
    </div>
  )
}

export default Offerbanner