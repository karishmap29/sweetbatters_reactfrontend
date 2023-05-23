import { React, useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useCart, useDispatchCart } from '../screens/ContextReducer';



function DessertCard({ dessert }) {

  let dispatch = useDispatchCart()
  let data = useCart()

  const [orderqty, setorderqty] = useState(1)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddtoCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === dessert.id) {
        food = item
        break
      }
    }
    console.log(food);
    if (food.length !== 0) {
      {
        await dispatch({ type: "UPDATE", id: dessert.id, price: finalPrice, orderqty })
        return
      }

      
    }
    else {
      await dispatch({ type: "ADD", id: dessert.id, name: dessert.name, price: finalPrice, orderqty, image:dessert.image })

    }








    console.log(data);

  }

  let finalPrice = orderqty * dessert.price
  // console.log(finalPrice);
  return (
    <div>
      <div onClick={handleShow}>
        <img src={dessert.image} style={{ width: '150px', height: '150px' }}></img>
        <p className='fs-6 mb-0' style={{ color: '#562B08' }}>{dessert.name}</p>

      </div>
      <p style={{ color: '#562B08', fontSize: '12px' }}>Qty: {dessert.quantity}</p>
      <span className='d-flex inline ms-2' style={{ fontSize: '13px' }}>Qty
        <select value={orderqty} onChange={(e) => setorderqty(e.target.value)} class="form-select form-select-sm ms-1" style={{ fontSize: '12px' }} aria-label=".form-select-sm example">

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {/* <i class="fa-solid fa-cart-arrow-down fs-5 ms-3"></i> */}
        <Button className='btn-sm ms-4 btn-warning' onClick={handleAddtoCart} style={{ fontSize: '12px', letterSpacing: '1px' }} >Add</Button>
      </span>
      <p className='text-start m-2' style={{ color: '#562B08', fontSize: '14px' }}>Price: {dessert.price * orderqty}/-</p>





      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className=''>
          <Modal.Title style={{ marginLeft: '35%' }} >{dessert.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <img src={dessert.image} className='img-fluid' style={{ height: '320px' }}></img>
            <p className='m-3'>{dessert.description}</p>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default DessertCard