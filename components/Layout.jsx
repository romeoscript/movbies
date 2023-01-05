import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-[100vh] bg-[#191919]">
      <Sidebar />
      <div className="w-[calc(100%_-_226px)] ml-[226px] ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
