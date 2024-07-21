"use client";
import React from "react";
// Next
import Image from "next/image";
// demo images
import MainImage from "../../../../../public/images/productBarImages/itemOne.png";
function ProductCard({ id, imgAddress, title, setSelected }) {
  return (
    <div
      className=" w-[77px] h-[77px] text-center"
      onClick={() => setSelected(id)}
    >
      <div className=" rounded-2xl shadow-lg p-4 bg-primeWhite">
        <Image src={imgAddress} alt="product" width={160} height={160} />
      </div>
      <div>
        <h2 className="capitalize p-1 opacity-30">{title}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
