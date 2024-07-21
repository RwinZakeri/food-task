import React, { Suspense } from "react";
// components
import HomeTitleContainer from "@/components/templates/Home/HomeTitleContainer";
import ProductContainer from "@/components/templates/Home/ProductContainer";
function Main() {
  return (
    <div className="w-full bg-primeColor font-Urbanist">
      <HomeTitleContainer />
      <Suspense fallback={"Loading..."}>
        <ProductContainer />
      </Suspense>
    </div>
  );
}

export default Main;
