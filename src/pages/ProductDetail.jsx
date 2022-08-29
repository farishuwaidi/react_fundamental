import React from "react";
import { useParams, useNavigate} from "react-router-dom";


const ProductDetail = () => {
  const {id} = useParams();
  const navigate =useNavigate()
  return (
    <div>
      <h1>Product Detail Page {id}</h1>
      <button onClick={()=>navigate('/')}>Kembali ke home</button>
    </div>
  );
};

export default ProductDetail;
