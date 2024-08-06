import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './Products/AllProducts'
import Homepage from './Homepage'

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/products" element={<AllProducts/>}/>
    </Routes>
  )
}

export default AllRoutes
