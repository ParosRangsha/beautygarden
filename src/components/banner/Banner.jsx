import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className="banner">
        <Container>
          <Row>
            <Col lg={6} className='bannerThumb'>
              <h5>Welcome to</h5>
              <h2 id='mainhead'>Beauty Garden</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt laborum omnis nobis vitae pariatur molestiae doloremque, voluptatum rerum, impedit voluptates quis! Aperiam, corporis. Suscipit odio, nobis possimus repudiandae optio, commodi sit doloribus blanditiis eaque laborum ullam velit nesciunt labore, sapiente impedit esse aspernatur! Alias cumque ut quos? Quis, cum?</p>
            </Col>
            <Col lg={6} className='bannerDetails'>
              
            </Col>
            
          </Row>
        </Container>
    </div>
  )
}

export default Banner