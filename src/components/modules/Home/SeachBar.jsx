import React from "react";
// Icon
import { SearchIco } from "../../../../public/icon/SvgReturner";

function SeachBar() {
  return (
    <div className=" w-full">
      <div className="w-full h-[54px] rounded-full overflow-hidden mx-auto bg-primeWhite flex items-center justify-between  shadow-lg">
        <input
          type="text"
          className="h-full bg-primeWhite placeholder:text-lg placeholder:font-[100] outline-none pl-4 rounded-l-full"
          placeholder="search"
          name=""
          id=""
        />
        <div className="w-11 h-11 flex items-center mr-1 rounded-full justify-center bg-primeOrange">
          <SearchIco />
        </div>
      </div>
    </div>
  );
}

export default SeachBar;
