import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import Button from "./components/ButtonCoba";
// import Counter from "./components/Counter";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Page404 from "./pages/Page404";
import "./App.css";
// import TextFont from "./components/TextFont";
// import Formulir from "./components/Formulir";
// import Register from "./pages/Register";

const App = () => {
//   let val1 = 2;
//   let val2 = 4;

//   const handleClick = () => {
//     alert("helo");
//   };

  // inline
  // style={{fontSize :"100px"}}

  // interal
  // style={fontCustome}
  // const fontCustome = {
  //   fontSize :"100px",
  //   color : "red"
  // }

  // external

  // Global
  // di luar
  // namaFIle.css

  // Local
  // di luar
  // namaFIle.module.css
  // import namefile from 'lokasi';
  // className={namaFile.namaClass}


  return (
    <div>
      {/* <h1 className="fontCustome">Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sint.
      </p>
      <TextFont />
      <Counter/>
      <Counter></Counter>
      <Button color="black" valSatu={val1} valDua={val2} alert={handleClick}>
        Edit
      </Button>
      <Formulir/> */}

      {/* <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
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
            {/* <li>
              <Link to="/register">Register</Link>
            </li> */}
            <li>
              <Link to="/product/1">Product Detail</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/register" element={<Register />} /> */}
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
