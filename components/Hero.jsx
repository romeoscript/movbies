import Image from "next/image";
import bgimage from "../images/herobg.png";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Hero = ({ movieList }) => {
  console.log(movieList);
  return (
    <>
      {movieList.slice(0, 1).map((movie) => {
        return (
          <div className="relative h-[250px] rounded" key={movie.id}>
            <Image
              src={movie.image}
              alt="image provider"
              width={100}
              height={100}
              className="absolute top-0 left-0 rounded-xl h-full w-full object-cover"
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
          </div>
        );
      })}
    </>
  );
};

export default Hero;
