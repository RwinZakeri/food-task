import { Suspense } from "react";
// components
// fetchData
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api", {
//     cache: "no-store",
//   });
//   if (!res) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };
import ProductBar from "@/components/modules/Home/ProductBar/ProductBar";
import db from "@/db/product.json";
async function ProductContainer() {
  // const data = await getData();
  return (
    <div className="w-full">
      <Suspense fallback={"waiting..."}>
        <ProductBar data={db} />
      </Suspense>
    </div>
  );
}

export default ProductContainer;
