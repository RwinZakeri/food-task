"use client";
import React, { useState } from "react";
// icons
import {
  Close,
  ShopBascket,
  BurgurMenu,
  HomeIco,
  LoveIco,
  CompassIco,
  UserIco,
} from "../../../public/icon/SvgReturner";
import SideBar from "./SideBar";

function Layout({ children }) {
  const [status, setStatus] = useState(false);
  return (
    <div className={`w-full ${status ? "bg-primeOrange" : ""}`}>
      <header className="w-full p-6 flex justify-between items-center">
        <span onClick={() => setStatus((e) => !e)}>
          {status ? <Close /> : <BurgurMenu />}
        </span>
        <span className={status ? "hidden" : undefined}>
          <ShopBascket />
        </span>
      </header>

      {status ? "" : <main>{children}</main>}
      {status ? (
        <SideBar />
      ) : (
        <footer className="w-full h-[80px] bg-primeWhite sticky bottom-0 rounded-t-2xl flex items-center justify-evenly">
          <div className="bg-primeOrange p-3 rounded-full">
            <HomeIco color={"white"} />
          </div>
          <div className="p-2 ">
            <LoveIco color={"black"} />
          </div>
          <div className="p-2 ">
            <CompassIco color={"black"} />
          </div>
          <div className="p-2 ">
            <UserIco color={"black"} />
          </div>
        </footer>
      )}
    </div>
  );
}

export default Layout;
