import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './UserHome.css'
import Viewcartsingle from './Viewcartsingle'
import { useDispatchCart, useCart } from './ContextReducer'
import DessertCard from '../components/DessertCard'
import Badge from 'react-bootstrap/Badge';
import Modal from './Modal'
import Cart from './Cart'
import Footer from '../components/Footer'




function UserHome() {



  const [cartView, setcartView] = useState(false)

  const location = useNavigate()
  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [orders, setOrders] = useState('')
  const [pricearray, setpricearray] = useState([])

  const params = useParams()


  useEffect(() => {
    console.log(params.email);
    setEmail(params.email)
    setUname(localStorage.getItem("username"))
    // localStorage.setItem("pricearray", [])
    viewalldessert()



  }, [])

  const [allcategDesserts, setallcategDesserts] = useState([])
  const [orderqty, setOrderqty] = useState(0)
  const [allDesserts, setAllDesserts] = useState([])
  const [titlename, setTitlename] = useState('')
  const [total, setTotal] = useState(0)
  // const [singleprice,setSingleprice]= useState(0)
  // const [orderprice, setOrderprice] = useState(1)

  const viewcategory = async (category, heading) => {

    setTitlename(heading)

    const result = await axios.get('http://localhost:8000/getAcategory/' + category)
    setAllDesserts(result.data.desserts);

  }
  // console.log(titlename);
  // console.log(allDesserts);

  const viewalldessert = async () => {
    const result = await axios.get('http://localhost:8000/viewalldessert')
    console.log(result.data.desserts);
    setallcategDesserts(result.data.desserts)



  }


  const [cart, setCart] = useState([])
  const [qtyarray, setqtyarray] = useState([])
  const [newarray, setNewarray] = useState([])






  const onopenfnc = async (email) => {
    const result = await axios.post('http://localhost:8000/getusercart', { email })
    console.log(result.data.user.cart);
    if (result.data.user.cart) {
      setCart(result.data.user.cart)

    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handlelogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("userorders");
    localStorage.removeItem("useremail")
    location('/')
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <div className="container-fluid ps-5">
          <Link className="navbar-brand" to='' ><img src='https://i.postimg.cc/cJn1d1J3/Whats-App-Image-2023-05-11-at-08-43-50.jpg' height={'60px'} alt=''></img></Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/userhome/myOrder'} className="nav-link" href="#">My Orders</Link>
              </li>

            </ul>
          </div>

          <h6 className=' text-center text-dark'>{uname}</h6>
          <div > <button className=' btn  btn-md m-0 text-end text-dark' onClick={() => { setcartView(true) }}><i class="fa-solid fa-cart-shopping fs-4 cart"></i></button></div>
          {cartView ? <Modal onClose={() => setcartView(false)}><Cart /></Modal> : null}
          <button className=' btn btn-outline-dark btn-sm m-2 text-end' onClick={(e) => { handlelogout(e) }}>Logout</button>


        </div>
      </nav>
      <div>
        <div className='movierow '>
          <img onClick={() => { viewcategory('1', "Cookies") }} className='movie p-2' style={{ backgroundColor: '#D25380' }} src='https://i.postimg.cc/13sPkxnm/clipart-cookies-food-4.png'>

          </img>
          <img onClick={() => { viewcategory('2', "Brownie") }} className='movie p-2' style={{ backgroundColor: '#27E1C1' }} src='https://i.postimg.cc/fWVn3c0h/6964164.png'>

          </img>
          <img onClick={() => { viewcategory('3', "Cupcake") }} className='movie p-4' style={{ backgroundColor: '#E7B10A' }} src='https://i.postimg.cc/JzxM317w/clipart-cookies-cupcake-2.png'>

          </img>
          <img onClick={() => { viewcategory('4', "Macaron") }} className='movie p-3' style={{ backgroundColor: '#FFACAC' }} src='https://i.postimg.cc/wB93HfMz/macaron-clipart-transparent-2.png'>

          </img>
          <img onClick={() => { viewcategory('5', "Cakes") }} className='movie p-3' style={{ backgroundColor: '#E9EDC9' }} src='https://i.postimg.cc/xCYZ6m6t/cake-clipart-3.png'>

          </img>
          <img onClick={() => { viewcategory('6', "Entremet") }} className='movie ' style={{ backgroundColor: '#FEBE8C' }} src='https://i.postimg.cc/ZqY73mnM/ENTREMET-MAGIC-1-min.png'>

          </img>
          <img onClick={() => { viewcategory('7', "Cheesecakes") }} className='movie p-3' style={{ backgroundColor: '#82CD47' }} src='https://i.postimg.cc/9Q9VSGBh/521-5216985-strawberry-cream-cake-strawberry-pie-cheesecake-strawberry-cheese.png'>

          </img>
          <img onClick={() => { viewcategory('8', "Arabic Desserts") }} className='movie ' style={{ backgroundColor: '#F6C6EA' }} src='https://i.postimg.cc/KYVWyVcp/Baklava.png'>

          </img>
          <img onClick={() => { viewcategory('9', "Tres Leches") }} className='movie p-2' style={{ backgroundColor: '#F8F988' }} src='https://i.postimg.cc/zvS5v5VG/tres-leches-cake.png'>

          </img>
          <img onClick={() => { viewcategory('10', "Hampers") }} className='movie p-4' style={{ backgroundColor: '#F94A29' }} src='https://i.postimg.cc/8PcNN8TN/54b5af82ac019b67492b23c9ee62dc0d.png'>

          </img>

        </div>

        <div>
          <h2 className='text-center mt-5 bg-warning p-3' style={{ color: '#562B08', marginLeft: '6%', marginRight: '5%' }}>{titlename}</h2>{
            <div style={{ marginLeft: '6%' }} className='movierow'>
              {allDesserts?.map(dessert => {
                return <div className='each p-4 text-center'>
                  <div>
                    <DessertCard dessert={dessert}></DessertCard>
                  </div>

                </div>

              }
              )
              }

            </div>}

        </div>
      </div>



      <h2 className='text-center mt-5 bg-warning p-3' style={{ color: '#562B08', marginLeft: '6%', marginRight: '5%' }}>All Desserts</h2>

      <div style={{ marginLeft: '6%' }} className='movierow'>
        {allcategDesserts?.map(dessert => {
          return <div className='each p-4 text-center'>
            <div>
              <DessertCard dessert={dessert}></DessertCard>
            </div>

          </div>


        })}
      </div>





      <div><Footer/></div>

    </>





  )
}

export default UserHome