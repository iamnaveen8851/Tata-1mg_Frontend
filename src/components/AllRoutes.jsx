import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./Products/AllProducts";
import Homepage from "./Homepage";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
// import SearchResults from "./SearchResults";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<AllProducts />} />
      {/* <Route path="/products?search" element={<SearchResults />} /> */}
      <Route path={`/products/:id`} element={<SingleProduct />} />

      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AllRoutes;
