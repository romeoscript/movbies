import React from "react";

const Homepage = () => {
  return (
    <div className="flex min-h-[100vh] bg-[#7B7B7B]">
      <div className="w-[160px] bg-[#212121] text-white  rounded-r-[45px] fixed h-full">
        sidebar
      </div>
      <div className="w-[calc(100%_-_160px)] ml-[160px] ">
        mainbar
      </div>
    </div>
  );
};

export default Homepage;
