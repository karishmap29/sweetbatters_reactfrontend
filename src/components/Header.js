import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light ms-5">
                <div className="container-fluid text-dark">
                    <Link className="navbar-brand" to='/' ><img src='https://i.postimg.cc/cJn1d1J3/Whats-App-Image-2023-05-11-at-08-43-50.jpg' height={'60px'} alt=''></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <Link to={'/admin'}>
                    <button className=' btn btn-outline-dark btn-sm m-2 text-end'>Admin</button>
                    </Link>
                    <Link to={'/login'}>
                    <button className=' btn btn-outline-dark btn-sm m-2 text-end'>Login</button>
                    </Link>

                </div>
            </nav>
        </div>
    )
}

export default Header