import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const pricearray= []
function Viewcartsingle({ itemid, itemorderqty,email,ind,itemorderprice }) {

    const [dessert, setDessert] = useState([])
    const [itemqty, setItemqty] = useState(0)
    const [showy, setShow] = useState(true)
    const [singletotal,setsingletotal]=useState([])

    const [total,settotal] = useState(0)

    const fetchitemdetails = async (id) => {

        const result = await axios.get('http://localhost:8000/getAnItem/' + id)
        console.log(result.data.dessert);
        setDessert(result.data.dessert);
        console.log(itemorderprice);
        setsingletotal(singletotal=>[...singletotal,itemorderprice])
        
        // localStorage.push("pricearray",itemorderprice)
        console.log(singletotal);


        console.log(pricearray);

    }

const removefromcart = async (id) =>{
// setEmail(localStorage.getItem("useremail"))
console.log(email);
    const body={
        id,
        email
    }
    console.log(body);
    const result = await axios.post('http://localhost:8000/removefromcart',body)
    setShow(false)
}


    const handleminus = async () => {
        console.log(ind)
        console.log(itemid);
        console.log(itemqty);
        setItemqty(eval(itemqty-1))
        console.log(itemqty);
        console.log("in handleminus");
       
        // setEmail(localStorage.getItem("useremail"))
        console.log(email);
        console.log("in handleminus");
        const body={
           email,
           ind,
           cart:{
            "id":itemid,
            "orderqty":itemqty-1
           }
           
        }
        console.log(body);
        const result = await axios.post('http://localhost:8000/updatecart',body)
        if (itemqty <2) {
            removefromcart(itemid)
        }

    }

//    const updatepricearray=(itemorderprice)=>{
//         let oldarray=localStorage.getItem('pricearray')
//         console.log(oldarray);
//         oldarray.push(itemorderprice)
//         console.log(oldarray);
//     }



    useEffect(() => {
        setItemqty(itemorderqty)
        fetchitemdetails(itemid)
        // updatepricearray(itemorderprice)
        
    }, [])




    return (
        <div className={'m-2' +(showy?'show':'hidden') }>
            <Row >

                <Col lg={3} md={3}>
                    <img style={{ height: '90px', width: '90px' }} src={dessert.image}></img>
                </Col>
                <Col lg={3} md={3}>
                    <div style={{ color: 'black', fontSize: '14px', letterSpacing: '1px', paddingLeft: '8px' }} className='fw-bold'>{dessert.name}</div>
                </Col>
                <Col lg={3} md={3}>
                    <div>
                        <span className='d-flex-inline'><button onClick={(e) => { handleminus() }} className='btn btn-outline-light btn-sm'><i class="fa-solid fa-minus fa-2xs text-success"></i></button>{itemqty}<button className='btn btn-outline-light btn-sm'><i class="fa-solid fa-plus fa-2xs text-success"></i></button></span>
                    </div>
                </Col>
                <Col lg={3} md={3}>
                    <div className='mb-3 fw-semibold'>{dessert.price * itemqty} /-</div>
                   
                </Col>

            </Row>

        </div>
    )
}

export default Viewcartsingle