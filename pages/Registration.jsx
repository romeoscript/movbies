import Image from "next/image";
import logo from "../images/Vector.png";
import avatar from "../images/Rectangle 1.png";
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
        <div className="absolute bottom-[20%] left-[5%]">
          <h2 className="text-2xl font-bold">
            {" "}
            Benefits of your free IMDb account
          </h2>

          <p className="mt-4">Personalized Recommendations</p>
          <p>Discover shows you&#39;ll love.</p>

          <p className="mt-4">Your Ratings</p>
          <p>Rate and remember everything you&#39;ve seen.</p>

          <p className="mt-4">Contribute to IMDb</p>
          <p>
            Add data that will be seen by millions of people and get cool
            badges.
          </p>
        </div>
      </aside>
      <aside className="basis-[45%]">
        <Image src={logo} alt="logo" width={90} height={33} className="m-4" />

        <div className="w-[60%] m-auto  text-center p-4">
          <h2 className="mt-4 font-bold text-[25px]">Create an account </h2>
          <p className="text-[14px] mb-[2rem] mt-2">
            Let&#39;s get started with your 30 days free trial.
          </p>
          <RegForm />
        </div>
      </aside>
    </div>
  );
};

export default Registration;
