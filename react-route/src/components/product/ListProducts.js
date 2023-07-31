import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ListProducts = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      {Array(3)
        .fill(null)
        .map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products/${index}`)}
          >{`Product ${index}`}</div>
        ))}
    </Fragment>
  );
};

export default ListProducts;
