import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import './Body.css'

function Body() {
  return (
    <div>
        <Container className='p-5 '>
                <Row>
                    <Col lg='6'>
                        <div className='hero_content'>
                            <div className='hero_subtitle d-flex align-items-center mb-5'>
                                <p className='quote fw-lighter fs-4 lh-large '>
                                The perfect dessert is like music that makes your taste buds dance.
                                </p>
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero_image-box'>
                            <img src='https://i.postimg.cc/vH5d4n9N/Whats-App-Image-2023-05-09-at-17-42-426.jpg' alt=''></img>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero_image-box mt-4'>
                            <img src='https://i.postimg.cc/tJGwHXkM/Whats-App-Image-2023-05-09-at-17-42-479.jpg' alt=''></img>
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className='hero_image-box mt-5'>
                            <img src='https://i.postimg.cc/8PK4RpWg/Whats-App-Image-2023-05-09-at-17-42-422.jpg' alt='' ></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        height="500px"
                        src=""
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
    </div>
  )
}

export default Body