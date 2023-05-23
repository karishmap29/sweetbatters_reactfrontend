import axios, { formToJSON } from 'axios'
import React, { useState } from 'react'
import { findDOMNode } from 'react-dom'
import Swal from 'sweetalert2'
import { useCart, useDispatchCart } from './ContextReducer'



function Cart() {


    let data = useCart()
    let dispatch = useDispatchCart()
    if (data.length == 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3 text-light'>The Cart is Empty!</div>
            </div>
        )
    }
    console.log(data);




    //   let totalPrice = data.reduce((a,b) =>a.price+b.price )
    let totalPrice = data.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice);
 

    const handleCheckOut= async()=>{
        let userEmail=localStorage.getItem("useremail")
        console.log(userEmail);
        let response = await axios.post('http://localhost:8000/orderData',{email:userEmail,order_data:data,order_date:new Date().toDateString()})
       console.log(("Order Response",response));
        if(response.status===200){
            Swal.fire({
                position: 'top-centre',
                icon: 'success',
                title: 'Order Placed Successfully!',
                showConfirmButton: false,
                timer: 1500
              })
            dispatch({type:"DROP"})
        }
    }





    return (
        <div style={{overflowX :'hidden'}} >
            <div className='container m-auto mt-5 table-responsive-sm table-responsive-md ' >
                <table className='table table-hover'>
                    <thead className='text-success fs-4'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>

                        </tr>
                    </thead>

                    <tbody className='text-success '>
                        {data.map((dessert, index) => (
                            <tr >
                                <th scope='row'>{index + 1}</th>
                                <td> <img style={{height:'70px' }} src={dessert.image}></img></td>
                                <td>{dessert.name}</td>
                                <td>{dessert.orderqty}</td>
                                <td>{dessert.price}</td>
                                <td><button type="button" className='btn p-0 text-danger' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}><i class="fa-solid fa-trash"></i></button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='text-center'><h1 className='fs-2 mt-4' style={{color:'#C07F00'}}>Total Price : {totalPrice} /-</h1></div>
                <div className='text-center'>
                    <button className='btn bg-warning mt-5 mb-5' onClick={handleCheckOut}>Check out</button>
                </div>



            </div>
        </div>
    )
}

export default Cart