import SeachBar from "@/components/modules/Home/SeachBar";
import React from "react";

function HomeTitleContainer() {
  return (
    <div className="space-y-6 px-6">
      <h1 className="text-3xl">Delicious food. Superfast delivery.</h1>
      <SeachBar />
    </div>
  );
}

export default HomeTitleContainer;
