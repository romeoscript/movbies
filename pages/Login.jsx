import Image from "next/image";
import { useState } from "react";
import logo from "../images/Vector.png";
import shehulk from "../images/Rectangle 6.png";
import avatar from "../images/Rectangle 1.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import LoginAuth from "../components/LoginAuth";
import { Star } from "@mui/icons-material";
import Button from "../components/Button";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "She-Hulk: Attorney at Law",
      image: shehulk,
      genre: "Action , Adventure , Comedy",
      year: 2022,
      type: "TV series",
      Rating: 8.5,
    },
    {
      title: "Avatar",
      image: avatar,
      genre: "Drama , Adventure , Comedy",
      year: 2022,
      type: "Movie",
      Rating: 7.5,
    },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  if (session) {
    return <div>welcome {session.user.name}</div>;
  } else {
    return (
      <div className="bg-[#191919] text-white h-[100vh] flex ">
        <aside className="basis-[50%]">
          <Image src={logo} alt="logo" width={90} height={33} className="m-4" />

          <div className="w-[60%] m-auto  text-center p-4">
            <h2 className="mt-4 font-bold text-[25px]">
              Welcome back, Olivia{" "}
            </h2>
            <p className="text-[14px] mb-[2rem] mt-2">
              Welcome back! Please enter your details.
            </p>
            <Button button={signIn} />

            <div className="flex items-center w-[90%] mx-auto my-[1rem] ">
              <hr className="w-[45%]" />
              <span className="mx-[1rem]">or</span>
              <hr className="w-[45%]" />
            </div>

            <LoginAuth />
          </div>
        </aside>
        <aside className="relative basis-[50%] bg-cover bg-no-repeat ">
          <Image
            src={slides[currentIndex].image}
            alt="avatar"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute bottom-4 text-white p-4 flex justify-between items-start w-full">
            <div>
              <h2 className="font-bold text-2xl">
                {slides[currentIndex].title}
              </h2>
              <p>
                {slides[currentIndex].type} |
                <span> {slides[currentIndex].year}</span> | <span>TV-14</span>
              </p>
              <p>
                <span>Genres :</span> {slides[currentIndex].genre}
              </p>
            </div>
            <div>
              <aside className="flex items-center">
                <span>
                  <Star className="text-[yellow]  cursor-pointer" />
                </span>
                <span className="text-white mx-2">
                  <span className="text-2xl font-bold">
                    {slides[currentIndex].Rating}
                  </span>
                  / <span>350k</span>
                </span>
              </aside>

              <div className="flex justify-around mt-2">
                <span
                  className="p-2 border-2 rounded-full cursor-pointer"
                  onClick={prevSlide}
                >
                  <AiOutlineArrowLeft />
                </span>
                <span
                  className="p-2 border-2 rounded-full cursor-pointer"
                  onClick={nextSlide}
                >
                  <AiOutlineArrowRight />
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
};

export default Login;
