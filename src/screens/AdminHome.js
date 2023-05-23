import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './AdminHome.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';


function AdminHome() {




    const location = useNavigate()
    // const location1 = useNavigate()
    // const handlelogin = async (e) => {
    //     e.preventDefault()
    //     location('/addproduct')
    // }

    const [allDesserts, setAllDesserts] = useState([])

    const handleviewall = async () => {
        // e.preventDefault()
        const result = await axios.get('http://localhost:8000/viewalldessert')
        setAllDesserts(result.data.desserts);
        console.log(allDesserts);

    }

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [quantity,setQuantity] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    useEffect(()=>{
        handleviewall()
    },[])
    const handleShow = (itemid) => {
        setShow(true);
        console.log(itemid);
        fetchItem(itemid)
    }
    const fetchItem = async (id) => {
        const result = await axios.get('http://localhost:8000/getAnItem/' + id)
        setId(result.data.dessert.id)
        setName(result.data.dessert.name)
        setDescription(result.data.dessert.description)
        setPrice(result.data.dessert.price)
        setImage(result.data.dessert.image)
        setCategory(result.data.dessert.category)
        setQuantity(result.data.dessert.quantity)
    }

    const editProduct = async (e) => {
        e.preventDefault()
        const body = {
            id,
            name,
            description,
            price,
            image,
            category,
            quantity
        }

        const result = await axios.post('http://localhost:8000/editproduct', body)
        alert(result.data.message)
        setShow(false)


    }


    const handleDelete = async (id) => {
        const result = await axios.delete('http://localhost:8000/deleteproduct/' + id)
        //   alert(result.data.message)
        let timerInterval
        Swal.fire({
            title: 'Product deleted!',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })

 location('/adminhome')
    }






    return (
        <>
            <div className='main'>
                <Row >
                    <Col md={2} className='border text-white' style={{ backgroundColor: '#DAEAF1' }}>
                        <Row className='text-center' style={{ height: '200px' }}>

                            <Col style={{ justifyContent: 'center' }}>
                                <div className="p-2 icondiv1 text-center mt-5">
                                    <i class=" fa-solid fa-user-secret fs-1 mt-3 " style={{ color: '#1B2430' }}></i>
                                    <i class=""></i>
                                </div>
                            </Col>
                            <p style={{ color: '#1B2430' }}>Admin</p>
                        </Row>
                        <hr />
                        <Row className='ms-3 mt-5' style={{ height: '300px' }}>

                            <Link to={'/adminhome'} className='Link'> <p style={{ color: '#1B2430' }}> <i style={{ color: 'black' }} class="fa-solid fa-house"></i>  &nbsp;&nbsp;Home</p></Link >

                            <Link to={'/addproduct'} className='Link'><p style={{ color: '#1B2430' }}> <i class="fa-solid fa-square-plus mt-2 text-black"></i>&nbsp;&nbsp; Add New Dessert</p></Link >

                            <Link to={'/viewallorders'} className='Link'><p style={{ color: '#1B2430' }}> <i class="fa-solid fa-eye mt-2 text-black"></i>&nbsp;&nbsp; View All Orders</p></Link >

                            <Link to={'/'} className='Link'><p style={{ color: '#1B2430' }}><i class="fa-solid fa-right-from-bracket mt-2 text-black"></i>&nbsp;&nbsp; Logout</p></Link >
                        </Row>
                    </Col>
                    <Col md={10}>
                        <Row style={{ height: '200px' }} className='p-5'>
                            {allDesserts?.map(item => (
                                <Col md={3} className='mt-4 ' >
                                    <Link to={'/viewsingleproduct/' + item.id} style={{textDecoration:'none',color:'black'}}>
                                        <Card style={{ width: '10rem' }}>
                                            <Card.Img height={'150px'} variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    {item.price}/-
                                                </Card.Text>
                                                <Row>
                                                    <Col lg={6} md={12}>
                                                        <Button onClick={() => { handleShow(`${item.id}`) }} variant="" className=' btn-sm ' ><i class="fa-solid fa-pen-to-square fs-5 btnedit"></i></Button>

                                                    </Col>
                                                    <Col lg={6} md={12}>
                                                        <Button onClick={() => { handleDelete(`${item.id}`) }} variant="" className='btn-sm ' ><i class="fa-solid fa-trash-can fs-5 btndel "></i></Button>

                                                    </Col>
                                                </Row>




                                            </Card.Body>
                                        </Card>
                                    </Link>

                                </Col>
                            ))}



                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Edit</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Dessert Name</Form.Label>
                                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="" />
                                        </Form.Group>
                                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Select aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)} >
                                                <option>Select the category</option>
                                                <option value="1">Cookie</option>
                                                <option value="2">Brownie</option>
                                                <option value="3">Cupcake</option>
                                                <option value="4">Macaron</option>
                                                <option value="5">Cake</option>
                                                <option value="6">Entremet</option>
                                                <option value="7">Cheesecake</option>
                                                <option value="8">Arabic Dessert</option>
                                                <option value="9">Tres Leche</option>
                                                <option value="10">Hamper</option>

                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="" />
                                        </Form.Group>

                                        <Button onClick={(e) => editProduct(e)} variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Offcanvas>

                           
                        </Row>
                    </Col>
                </Row>

            </div>

        </>
    )
}

export default AdminHome