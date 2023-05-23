import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col,  Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from 'sweetalert2';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import './ViewSingleproduct.css'

function ViewSingleproduct() {
 
    const location = useNavigate()
    const [dessert,setDessert]=useState([])
    const params = useParams()
    console.log(params.id);
    
  const fetchdata = async (id)=>{
    const result = await axios.get('http://localhost:8000/getAnItem/'+id)
    setDessert(result.data.dessert)
    
   
  }
 useEffect(()=>{
fetchdata(params.id)
 },[])

 const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


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

location('/adminhome')
    }


 const handleDelete = async (id) => {
    const result = await axios.delete('http://localhost:8000/deleteproduct/' + id)
    // alert(result.data.message)
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
     {
                dessert ? (
                    <div className='overflow-hidden mt-5'>
 <Row>
                        
                        <Col lg={5} md={5}  className=' pt-5 pb-5 ms-5  text-lg-end text-md-end text-sm-center '>
                            <img style={{ height: '350px' }} src={dessert.image}></img>

                        </Col>
                        <Col lg={5} md={5}  className=' mt-5 text-center text-lg-start text-md-start text-sm-center'>

                            <ListGroup variant="flush">
                                <ListGroup.Item><h1>{dessert.name}</h1>
                                </ListGroup.Item>
                                <ListGroup.Item><h2>{dessert.description}</h2></ListGroup.Item>
                                <ListGroup.Item><span>Quantity : <strong>{dessert.quantity}</strong></span></ListGroup.Item>

                                <ListGroup.Item><span>Price : <strong>{dessert.price}/-</strong></span></ListGroup.Item>
                                <Row className='mt-5 p-4' >
                                                    <Col lg={2} md={4} sm={4} className='text-center'>
                                                        <Button onClick={() => {  handleShow(`${dessert.id}`)  }} variant="" className=' btn-sm ' ><i class="fa-solid fa-pen-to-square fs-5 btnedit"></i></Button>

                                                    </Col>
                                                    <Col lg={2} md={4} sm={4}  className='text-center'>
                                                        <Button onClick={() => {handleDelete(`${dessert.id}`)  }} variant="" className='btn-sm ' ><i class="fa-solid fa-trash-can fs-5 btndel "></i></Button>

                                                    </Col>
                                                    
                                                    <Col lg={2} md={4} sm={4}  className='text-center'>
                                                    <Link to={'/adminhome'}  >
                                                        <Button  variant="" className='btn-sm ' ><i class="fa-solid fa-circle-arrow-left backicon fs-5"></i></Button>
                                                        </Link>
                                                    </Col>
                                                   
                                                   
                                                </Row>
                            </ListGroup>
                        </Col>
                    </Row>
                    </div>
                   
                ) : ""

            }
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
            
            
            
            
            </>
  )
}

export default ViewSingleproduct