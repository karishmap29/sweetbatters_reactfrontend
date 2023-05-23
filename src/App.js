import React from 'react'
import Home from './screens/Home';
import { Routes, Route } from "react-router-dom"
import Login from './screens/Login';
import Admin from './screens/Admin';
import AdminHome from './screens/AdminHome';
import AddProduct from './screens/AddProduct';
import EditProduct from './screens/EditProduct';
import ViewSingleproduct from './screens/ViewSingleproduct';
import Signup from './screens/Signup'
import UserHome from './screens/UserHome';
import MyOrder from './screens/MyOrder';
import AllOrders from './screens/AllOrders';





function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/adminhome' element={<AdminHome />}></Route>
        <Route path='/addproduct' element={<AddProduct />}></Route>
        <Route path='/editproduct/:id' element={<EditProduct />}></Route>
        <Route path='/viewsingleproduct/:id' element={<ViewSingleproduct />}></Route>
        <Route path='/viewallorders' element={<AllOrders/>}></Route>

        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/userhome/:email' element={<UserHome />}></Route>
        <Route path='/userhome/myOrder' element={<MyOrder />}></Route>


      </Routes>
    </div>

  )
}

export default App


