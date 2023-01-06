import Image from "next/image";
import logo from "../images/Vector.png";
import shehulk from "../images/Rectangle 6.png";

const Login = () => {
  return (
    <div className="bg-[#191919] text-white h-[100vh] flex ">
      <aside className="basis-[50%]">
        <Image src={logo} alt="logo" width={90} height={33} className="m-4"/>

        <div className="w-[60%] m-auto  text-center p-4">
          <h2 className="mt-4 font-bold text-[25px]">Welcome back, Olivia </h2>
          <p className="text-[14px] mb-[2rem] mt-2">
            Welcome back! Please enter your details.
          </p>
          <button className="flex items-center rounded-lg border-2 p-[0.5rem] m-auto my-[1.5rem] w-full justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 24 24"
              aria-labelledby="googleColor"
              role="presentation"
              class="h-icon currentColor"
              data-v-0996fe04=""
              className="mx-2"
            >
              <g data-v-0996fe04="">
                <g data-v-0996fe04="">
                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#FFC107"
                  ></path>
                  <path
                    d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
                    fill="#FF3D00"
                  ></path>
                  <path
                    d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855C15.6085 16.785 15.609 16.785 15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#1976D2"
                  ></path>
                </g>
              </g>
            </svg>
            Log in with Google
          </button>

          <div className="flex items-center w-[90%] mx-auto my-[1rem] ">
            <hr className="w-[45%]" />
            <span className="mx-[1rem]">or</span>
            <hr className="w-[45%]" />
          </div>

          <form action="">
            <input
              type="email"
              placeholder="please enter your email address"
              className="w-full p-[0.5rem] border-b-[1px] border-[#4D4B4B] bg-transparent outline-none my-3"
            />
            <input
              type="password"
              className="w-full p-[0.5rem] border-b-[1px] border-[#4D4B4B] bg-black outline-none mt-3"
            />

            <div className="flex justify-between my-2">
              <p className="text-[12px]">
                <input type="checkbox" name="" id="" className="mx-2" />
                Remember me for 30 days
              </p>
              <p className="text-[10px]">Forgot Password</p>
            </div>
            <button className="rounded-lg bg-white p-[0.5rem] m-auto my-[1rem] w-full text-black">
              Log in
            </button>
            <p className="text-[12px]">Don’t have an account ? <span className="font-bold">Sign up for free</span> </p>
          </form>
          {/* 


oliviabrooke3435@gmail.com
********
Remember me for 30 days
Forgot password
Log in
Top Gun: Maverick
Don’t have an account ? Sign up for free 
2022 | PG-13 | 2h 10m
8.5 / 10
Genres : Action , Drama */}
        </div>
      </aside>
      <aside className="relative basis-[50%] ">
        <Image
          src={shehulk}
          alt="images"
          className="w-full h-full object-cover"
        />
      </aside>
    </div>
  );
};

export default Login;
