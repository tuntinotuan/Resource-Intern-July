import React from "react";
import ItemProduct from "./ItemProduct";
import { useParams } from "react-router-dom";

const ProductDisplay = () => {
  const { id } = useParams();
  return (
    <div>
      <ItemProduct id={id}></ItemProduct>
    </div>
  );
};

export default ProductDisplay;
