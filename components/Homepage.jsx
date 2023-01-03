import React from "react";
import Image from "next/image";
import profile from "../images/profile_image.png";
import { NotificationsOutlined } from "@mui/icons-material";
import Sidebar from "./Sidebar";

const Homepage = () => {
  return (
    <div className="flex min-h-[100vh] bg-[#7B7B7B]">
     <Sidebar />
      <div className="w-[calc(100%_-_226px)] ml-[226px] ">

        <div className="flex justify-between p-[1rem]">
          <aside className="basis-[70%] ">
            <input type="search" placeholder="Search for movies, TV shows..." className="w-full p-[0.4rem] rounded-[30px] outline-none " />
          </aside>
          <aside className="flex items-center">
            <span className="w-[40px] h-[40px] flex items-center justify-center mx-4 bg-[#212121] rounded-full"><NotificationsOutlined /></span>
            <Image
              src={profile}
              alt="Picture of the author"
              width={60}
              height={60}
              className="object-cover"
            />
          </aside>
        </div>
        mainbar
      </div>
    </div>
  );
};

export default Homepage;
