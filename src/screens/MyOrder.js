import { getByDisplayValue } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'


function MyOrder() {

    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [newArr, setnewArr] = useState({})


    // setUname(localStorage.getItem("username"))

    const location = useNavigate()
     
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        fetchMyOrder()
    }, [])

    const fetchMyOrder = async () => {
        let userEmail = localStorage.getItem("useremail")
        console.log(userEmail);
        const result = await axios.post('http://localhost:8000/myOrderData', { email: userEmail })
        // console.log(result.data);
        if(result.data.success=='true'){

            setOrderData(result.data.orderData.order_data);
            //  setOrderData(result.data["Order_data"]["order_data"]);
            trial(orderData);
        }
       
    
        
        else{
            return(
                <div className='m-5 w-100 text-center fs-3 text-dark'>You haven't ordered anything yet!</div>

            )
        }
       


        
    }
    const trial = (orderData) => {
        console.log(orderData);
    }
    



    const handlelogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("username");
        localStorage.removeItem("userorders");
        localStorage.removeItem("useremail")
        localStorage.removeItem("usercart")
        location('/')
    }

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container-fluid text-white">
                    <Link to={'/userhome/'+ localStorage.getItem("useremail")} className="Link"  ><img src='https://i.postimg.cc/cJn1d1J3/Whats-App-Image-2023-05-11-at-08-43-50.jpg' height={'60px'} alt=''></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link   to={'/userhome/'+ localStorage.getItem("useremail")} className="nav-link active ms-3" aria-current="page" href="">Home</Link>
                            </li>


                        </ul>
                    </div>

                    <h6 className=' text-center text-dark'>{uname}</h6>
                    <button className=' btn btn-outline-dark btn-sm m-2 text-end' onClick={(e) => { handlelogout(e) }}>Logout</button>


                </div>
            </nav>
            <div>
                <h2 className='text-center mt-5 bg-warning p-3' style={{ color: '#562B08', marginLeft: '', marginRight: '5%' }}>MY ORDERS</h2>

                <div className='container mt-5'>
                    <div className='row text-dark mt-5 mb-5'>
                        { 
                            orderData?.reverse().map(item => {
                                return (
                                    item.map(data => {
                                        return (
                                            data.Order_date ? <div>{item = data.Order_date}</div> : <div className='col-12 col-md-6 col-lg-3'>
                                                <hr></hr>
                                                <div className="card mt-3 mb-5" style={{ width: "16rem", maxHeight: "360px" }}>
                                                    <div className="card-body bg-warning ">
                                                        <span className='d-flex inline mb-2'>
                                                        <img src={data.image} style={{height:'50px'}}></img>
                                                        <h5 className="card-title ms-3">{data.name}</h5>
                                                        </span>
                                                       
                                                        <div className='container w-100 p-0  ' style={{ height: "38px" }}>
                                                            <span className='m-1'>{data.orderqty}</span>
                                                            {/* <span className='m-1'>{arrayData.size}</span> */}
                                                            {/* <span className='m-1'>{item}</span> */}
                                                            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                ₹{data.price}/-
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                )
                            })
                             }



                    </div>


                </div>


            </div>
            <div><Footer/></div>

        </div>
    )
}


export default MyOrder