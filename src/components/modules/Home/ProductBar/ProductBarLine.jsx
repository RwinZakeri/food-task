import React from "react";
// components
import ProductCard from "./ProductCard";
function ProductBarLine({ data , setSelected }) {
  return (
    <>
      {data?.map((item) => (
        <ProductCard key={item.id} setSelected={setSelected} {...item} />
      ))}
    </>
  );
}

export default ProductBarLine;
