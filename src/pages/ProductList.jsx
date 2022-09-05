/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./product.module.css";

const productList = () => {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    setProduct(e.target.value);
  };
  const handleSimpan = () => {
    setProducts([...products, product])
    setProduct("")
  };
  return (
    <div>
      <h2>Product</h2>
      <div className={styles.wrapperInput}>
        <div className="input-group mb-3">
          <Input
            type="text"
            // placeholder="Product"
            id="product1"
            name="product1"
            value={product}
            onChange={handleChange}
          />
          <Button
            type="button"
            id="button-addon2"
            title="save"
            onClick={handleSimpan}
          />
        </div>
      </div>
    </div>
  );
};

export default productList;
