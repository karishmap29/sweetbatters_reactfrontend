import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



function AddProduct() {
    // const [show, setShow] = useState(true);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const location = useNavigate()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState('')

    useEffect(() => {
        setId(uuid().slice(0, 3))

    }, [])

    const addProduct = async (e) => {
        e.preventDefault()
        console.log(category);
        setId(uuid().slice(0, 3));
        const body = {
            id,
            name,
            description,
            price,
            image,
            category,
            quantity
        }

        console.log(body)

        const result = await axios.post('http://localhost:8000/addproduct', body)
        // alert(result.data.message)

        Swal.fire({

            text: `${result.data.name} added!`,
            imageUrl: `${result.data.image}`,
            imageWidth: 250,
            imageHeight: 250
        })
        location('/adminhome')
    }



    return (
        <div className='container w-50 text-center mt-3 p-4 border'>
            <h4 className='mb-5'>Product Details</h4>          

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dessert Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={(e) => setDescription(e.target.value)} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" onChange={(e) => setImage(e.target.value)} placeholder="" />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) => setCategory(e.target.value)} >
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
                    <Form.Control type="text" onChange={(e) => setQuantity(e.target.value)} placeholder="" />
                </Form.Group>
               

                <Button onClick={(e) => addProduct(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddProduct