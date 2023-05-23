import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {

   const location=useNavigate()
    const [uname,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handlesignup = async (e) =>{
        e.preventDefault()
        console.log(uname,email,password);
       const body={uname,email,password}
        const result = await axios.post('http://localhost:8000/signup' , body)
        alert(result.data.message)
        location('/login')

    }

    return (
        <>
            <div>
                <div className='backg1'>
                    <div>

                        <Row className='text-white' style={{}}>
                            <Col md={4}></Col>
                            <Col md={4} className=' p-5 b1' style={{ borderRadius: '20px', height: '657px' }}>
                                {/* <div className="p-3 icondiv text-center"> <i class="fa-solid fa-user fa-3x mt-2 text-white"></i></div> */}
                                <p className='text-dark'>Welcome! <img style={{ height: '20px', marginLeft: '60%' }} src='https://i.postimg.cc/cJn1d1J3/Whats-App-Image-2023-05-11-at-08-43-50.jpg'></img> <br></br> Fill up the form to register.</p>
                                <div style={{ paddingTop: '20%' }}>
                                    {/* <h6 className="mt-3 text-white text-center" id="login">LOGIN</h6> */}
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicName">

                                            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">

                                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">

                                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <div><Button className='w-50' style={{ backgroundColor: '#a7cb00', border: 'none' }} onClick={(e)=>handlesignup(e)} type="submit">
                                            SignUp
                                        </Button><span className="tex1 mt-4 text-white">  &nbsp;  &nbsp; Already a member?  &nbsp;  &nbsp;<Link to={'/login'} style={{ color: '#a7cb00' }}>Login</Link ></span></div>
                                    </Form>
                                </div>

                            </Col>
                            <Col md={4}></Col>
                        </Row>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup