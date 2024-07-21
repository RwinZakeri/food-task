import Main from "@/app/page";
import React from "react";
import {
  DocIco,
  LocationIco,
  OfferIco,
  SecureIco,
  TimeIco,
} from "../../../public/icon/SvgReturner";

function SideBar() {
  return (
    <div className="w-full h-[calc(100vh_-78px)]  bg-primeOrange">
      <div className="w-full  h-full pl-8">
        <ul className="flex flex-col gap-8">
          <li className="flex gap-2 text-primeColor">
            <OfferIco />
            <span>Offer and promo</span>
          </li>
          <li className="flex gap-2 text-primeColor">
            <TimeIco /> <span>Recent Orders</span>
          </li>
          <li className="flex gap-2 text-primeColor">
            <LocationIco />
            <span>Location</span>
          </li>
          <li className="flex gap-2 text-primeColor">
            <SecureIco />
            <span>Settings</span>
          </li>
          <li className="flex gap-2 text-primeColor">
            <DocIco />
            <span>Security</span>
          </li>
        </ul>
      </div>
      <iframe
        src="http://localhost:3000/"
        className="w-full h-full absolute scale-[50%] top-0 left-[25%] rounded-xl  shadow-[-50px_0px_0px_-20px_#FCA567]"
      ></iframe>
    </div>
  );
}

export default SideBar;
