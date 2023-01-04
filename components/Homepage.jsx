import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import bgimage from "../images/herobg.png";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Homepage = () => {
  return (
    <Layout>
      <div className="flex px-[1rem]">
        <aside className=" relative h-[250px] basis-[70%] rounded">
          <Image
            src={bgimage}
            alt="image provider"
            width="100%"
            height="100%"
            className="absolute top-0 left-0 rounded-xl h-full"
          />
          <div className="z-20 absolute bottom-7 right-5 ">
            <button className="bg-[#e8e8e81a] text-white py-2 mx-2 rounded-[15px] px-6 shadow-md: 0px 2px 4px #00000040">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="bg-[#e8e8e81a] text-white py-2 mx-2 rounded-[15px] px-6 shadow-md: 0px 2px 4px #00000040">
              <InfoOutlined />
              <span> More info</span>
            </button>
          </div>
        </aside>
        <aside></aside>
      </div>
    </Layout>
  );
};

export default Homepage;
