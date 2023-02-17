import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Coba from '../../pages/Coba';
import Detail from '../../pages/Detail';
import Home from '../../pages/Home';
import Page404 from '../../pages/Page404';
import RequireAuth from '../../components/RequireAuth'
import Login from '../../pages/Login';
 
 
const Router = () => {
  return (
    <div>
    <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coba">Coba</Link>
          </li>
          <li>
            <Link to="/produk/1">Detail</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Navigate to={'/home'} replace='true' />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coba" element={<Coba />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produk/:id" element={<RequireAuth><Detail/></RequireAuth>} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
 
export default Router