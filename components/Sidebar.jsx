import React from "react";
import Image from "next/image";
import logo from "../images/Vector.png";
import { CgHome } from "react-icons/cg";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaTicketAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[226px] bg-[#212121] flex flex-col items-center text-white  rounded-r-[45px] fixed h-full py-[1rem]">
      <Image
        src={logo}
        alt="logo"
        className="object-cover my-[1.5rem] w-[50%]"
      />
      <ul className="w-full text-center">
        <li className="flex items-center text-[15px] py-[1rem]  pl-[2rem] bg-[#3DD2CC] ">
          <CgHome className="text-white" />{" "}
          <span className="mx-[0.8rem]">Home</span>
        </li>
        <li className="flex items-center text-[15px] py-[1rem] pl-[2rem]">
          <BiCameraMovie /> <span className="mx-[0.8rem]">Movies</span>
        </li>
        <li className="flex items-center text-[15px] py-[1rem] pl-[2rem]">
          <MdOndemandVideo /> <span className="mx-[0.8rem]">TV Series</span>
        </li>
        <li className="flex items-center text-[15px] py-[1rem] pl-[2rem]">
          <SlCalender /> <span className="mx-[0.8rem]">Upcoming</span>
        </li>

        <li className="text-left mx-[1.5rem] mt-[1rem] px-[0.7rem] rounded-lg py-[1.5rem] bg-[#191919] relative ">
          <div className="bg-[#3DD2CC] w-[40px] h-[40px] rounded-full flex items-center justify-center absolute top-[-15%] left-[40%] ">
            <FaTicketAlt />
          </div>
          <h4 className="12px">Play movie quizes and earn free tickets</h4>
          <p className="text-[10px]">50k people are playing now</p>
          <aside className="w-full text-center mt-5">
          <button className="bg-[#3DD2CC] text-[12px] p-[0.3rem] rounded-[38px] ">Start Playing</button>
       
          </aside>
           </li>
        <li className="flex items-center text-[15px] py-[1rem] pl-[2rem] ">
          <RiLogoutBoxRLine className="text-left" />{" "}
          <span className="mx-[0.8rem]">Log out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
