import React from "react";

const ItemProduct = ({ id }) => {
  return (
    <div className="p-5 border border-gray-200 rounded-md w-[200px] mx-auto">
      <h1>Name Product...</h1>
      <p>{id}</p>
      <p>Product details...</p>
    </div>
  );
};

export default ItemProduct;
