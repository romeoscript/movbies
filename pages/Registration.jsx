import Image from "next/image";
import logo from "../images/Vector.png";
import avatar from "../images/Rectangle 1.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import LoginAuth from "../components/LoginAuth";
import { Star } from "@mui/icons-material";
import Button from "../components/Button";
import RegForm from "../components/RegForm";

const Registration = () => {
  return (
    <div className="bg-[#191919] text-white h-[100vh] flex ">
      <aside className="relative basis-[55%] bg-cover bg-no-repeat ">
        <Image
          src={avatar}
          alt="avatar"
          className="absolute w-full h-full object-cover"
        />
      </aside>
      <aside className="basis-[45%]">
        <Image src={logo} alt="logo" width={90} height={33} className="m-4" />

        <div className="w-[60%] m-auto  text-center p-4">
          <h2 className="mt-4 font-bold text-[25px]">Create an account </h2>
          <p className="text-[14px] mb-[2rem] mt-2">
            Let’s get started with your 30 days free trial.
          </p>
          <RegForm />
        </div>
      </aside>
    </div>
  );
};

export default Registration;
