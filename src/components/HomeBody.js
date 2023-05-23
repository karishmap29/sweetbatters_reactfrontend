import axios from 'axios';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './HomeBody.css'
import Modal from 'react-bootstrap/Modal';


function HomeBody() {

  const [allDesserts, setAllDesserts] = useState([])
  const [titlename, setTitlename] = useState('')
  
  const viewcategory = async (category, heading) => {

    setTitlename(heading)

    const result = await axios.get('http://localhost:8000/getAcategory/' + category)
    setAllDesserts(result.data.desserts);

  }
  console.log(titlename);
  console.log(allDesserts);


  return (
    <>
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
            {allDesserts?.map(item => (

                <div className='each p-4 text-center'>
                  <img className='imagecol' src={item.image} >
                  </img>
                  <h6 className='p-2' style={{ color: '#562B08' }}>{item.name}</h6>
                </div>

            ))}
          </div>
        }
      </div>

     


    </>


  )
}

export default HomeBody