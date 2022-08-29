import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import Button from './components/Button'
// import Counter from './components/Counter'
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Page404 from "./pages/Page404";
import "./App.css";

const App = () => {
  // let val1 = 2;
  // let val2 = 4;

  // const handleClick=()=>{
  //      alert("helo")
  // }

  return (
    <div>
      {/* <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sint.</p> */}
      {/* <Counter/> */}
      {/* <Counter></Counter>
      <Button color="black" valSatu={val1} valDua={val2} alert={handleClick}>Edit</Button> */}
      {/* <ProductList/> */}
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product-list">Product List</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/product/1">Product Detail</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
