import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../Body/LandingPage'
import AddToCart from '../Header/Login'
import Signin from '../Header/Signin'
import AllProduct from '../Menu/AllProduct'
import Deals from '../Menu/Deals'

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/menu' element={<AllProduct />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/addtocart' element={<AddToCart />}></Route>
        <Route path='/deals' element={<Deals />}></Route>
      </Routes>
    </div>
  )
}

export default Navigation
