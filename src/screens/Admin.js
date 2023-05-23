import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css'
import Swal from 'sweetalert2'





function Admin() {

    const [mail, setMail] = useState('')
    const [pswd, setPswd] = useState('')
    const location= useNavigate()

    const handlelogin = async (e) => {
        e.preventDefault()
        console.log(mail);
    

    if (mail == "admin123@gmail.com") {
        if (pswd == "abc123") {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Admin Login',
                showConfirmButton: false,
                timer: 1500
            })
           location('/adminhome') 
            
        }
        else {
            alert('Wrong password!')
        }}
            else {
            alert('wrong mail id!')
        }
    }
    

    return (
        <div>
            <div className='backg'>
                <div>

                    <Row className='text-white' style={{ paddingTop: '160px' }}>
                        <Col md={4}></Col>
                        <Col md={4} className=' p-5 b' style={{ borderRadius: '20px' }}>
                            {/* <div className="p-3 icondiv text-center"> <i class="fa-solid fa-user fa-3x mt-2 text-white"></i></div> */}
                            <h6 className="mt-3 text-white text-center" id="login">Admin LOGIN</h6>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Email" onChange={(e) => setMail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPswd(e.target.value)} />
                                </Form.Group>
                                <div><Button onClick={(e) => handlelogin(e)} className='w-50' style={{ backgroundColor: '#a7cb00', border: 'none' }} type="submit">
                                    Login
                                </Button><span className="tex1 mt-4 text-white">  &nbsp;  &nbsp; Not an Admin?  &nbsp;  &nbsp;<Link to={'/'} style={{ color: '#a7cb00' }}>Go Back</Link ></span></div>
                            </Form>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default Admin