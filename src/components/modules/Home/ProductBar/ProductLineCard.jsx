import React from "react";
// next
import Image from "next/image";
// image
import peper from "../../../../../public/images/productBarImages/peper.png";
function ProductLineCard({ data }) {
  return (
    <div className="w-[192px] h-[230px] flex-shrink-0 shadow-xl relative bg-primeWhite rounded-xl">
      <div className="w-full h-[110px]">
        <div className="relative -top-[40px] left-[50%] -translate-x-[50%] w-[141px]  drop-shadow-md">
          <Image
            src={data.imgAddress}
            width={685}
            height={685}
            alt={data.title}
          />
        </div>
      </div>
      <div className="px-2 flex flex-col justify-between items-end  h-[57%]">
        <div className=" text-lg text-start text-primeText">{data.title}</div>
        <div className="w-full py-4  flex items-center justify-between ">
          <h3 className="text-2xl">${data.price}</h3>
          <Image className="w-fit h-8" src={peper} alt="peper" />
        </div>
      </div>
    </div>
  );
}

export default ProductLineCard;
