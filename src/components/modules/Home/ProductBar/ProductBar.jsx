"use client";
import React, { useEffect, useState } from "react";
// components
import ProductBarLine from "./ProductBarLine";
import axios from "axios";
import ProductLineCard from "./ProductLineCard";

function ProductBar({ data }) {
  // selected
  const [selected, setSelected] = useState(1);
  // data
  const [dataBarLine, setDataBarLine] = useState([]);
  // fetchData
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/api");

      setDataBarLine(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mt-6">
      <div className="flex gap-4 px-6 items-center justify-center md:justify-start ">
        <ProductBarLine setSelected={setSelected} data={data} />
      </div>
      <div className="mt-8 pt-2 ">
        <h2 className="text-2xl px-6">Popular now</h2>
        <div className="w-full h-[350px] flex gap-4 items-center  overflow-x-auto">
          {dataBarLine
            ?.filter((item) => item.id == selected)
            .map(
              (item) =>
                item?.items
                  ? item?.items?.map((item) => (
                      <ProductLineCard key={item.id} data={item} />
                    ))
                  : ""
              // (
              //   <div className="w-full text-center">
              //     <p>No Data Found</p>
              //   </div>
              // )
            )}
        </div>
        <div className="w-full h-[350px] flex gap-4 items-center  overflow-x-auto">
          {dataBarLine
            ?.filter((item) => item.id == selected)
            .map(
              (item) =>
                item?.items
                  ? item?.items?.map((item) => (
                      <ProductLineCard key={item.id} data={item} />
                    ))
                  : ""
              // (
              //   <div className="w-full text-center">
              //     <p>No Data Found</p>
              //   </div>
              // )
            )}
        </div>
      </div>
    </div>
  );
}

export default ProductBar;
