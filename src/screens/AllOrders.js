import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'



function AllOrders() {

    const [allorderData, setAllOrderData] = useState([])


    useEffect(() => {
        fetchAllOrders()
    }, [])

    const fetchAllOrders = async () => {
        const result = await axios.post('http://localhost:8000/allOrderData')
        console.log(result.data.AllData);
        setAllOrderData(result.data.AllData);
        //  setOrderData(result.data["Order_data"]["order_data"]);





    }

    return (
        <div>
            <h2 className='text-center mt-5  p-3' style={{ color: '#562B08', marginLeft: '', marginRight: '' , backgroundColor: '#DAEAF1' }}>ALL ORDERS</h2>
            <div className='container mt-5'>
                <div className='row text-dark mt-5 mb-5'>
                    {
                        allorderData?.reverse().map(eachorder => {
                            return(
                                <div className='text-center  m-4'><div className='fs-3  mb-4' style={{ fontWeight : 'bold' }}>{eachorder.email}</div><div>
                                {
                                    eachorder.order_data?.reverse().map(item => {

                                        return (
                                            item.map(data => {
                                                return (
                                                    data.Order_date ?<> <hr></hr><div className='fs-4'>{item = data.Order_date}</div></> : <div className='col-12 col-md-6 col-lg-3 '>
                                                        
                                                        <div className="card mt-3 mb-5 " style={{ width: "26rem", maxHeight: "400px" }}>
                                                            <div className="card-body" style={{ backgroundColor: '#DAEAF1' }}>
                                                                <span className='d-flex inline mb-2'>
                                                                    <img src={data.image} style={{ height: '50px' }}></img>
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
                     


                            )
                            


                    })
                   }

                </div>
            </div>





            <div><Footer /></div>

        </div>
    )
}

export default AllOrders