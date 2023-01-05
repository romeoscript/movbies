import Image from "next/image";
import { PlayArrow } from "@mui/icons-material";
import heroimage from "../../images/Rectangle 29.png";

const Hero = () => {
  return (
    <div className="relative h-[250px] rounded w-full ">
      <Image
        src={heroimage}
        alt="image provider"
        className="absolute top-0 left-0 rounded-xl  w-full h-full object-cover aspect-[3/3]"
      />
      <div className="z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <button className=" text-white w-[80px] h-[80px] bg-white-35 border-2 border-solid border-gray-200 shadow-xl-lg bg-blur-2x  rounded-full">
          <PlayArrow className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
