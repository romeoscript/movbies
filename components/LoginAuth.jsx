const LoginAuth = () => {
  return (
    <form action="">
      <input
        type="email"
        placeholder="please enter your email address"
        className="bg-transparent outline-none w-full p-2 border-b-[1px] mt-3"
      />

      <input
        type="password"
        placeholder="please enter your password"
        className="bg-transparent outline-none w-full p-2 border-b-[1px] mt-3"
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
      <p className="text-[12px]">
        Don’t have an account ?{" "}
        <span className="font-bold">Sign up for free</span>{" "}
      </p>
    </form>
  );
};

export default LoginAuth;
