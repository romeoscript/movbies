import Regbutton from "./Regbutton";

const RegForm = () => {
  return (
    <form action="">
      <input
        type="text"
      
        placeholder="Name"
        className="bg-transparent outline-none w-full p-2 border-b-[1px] mt-3"
      />
      <input
        type="email"
        placeholder="please enter your email address"
        className="bg-transparent outline-none w-full p-2 border-b-[1px] mt-3"
      />

      <input
        type="password"
        placeholder="password"
        className="bg-transparent outline-none w-full p-2 border-b-[1px] mt-3"
      />

      <button className="rounded-lg bg-white p-[0.5rem] m-auto my-[1rem] w-full text-black">
        Create account
      </button>
      <Regbutton />
      <p className="text-[12px]">
        Already have an account ? <span className="font-bold">Log in</span>{" "}
      </p>
    </form>
  );
};

export default RegForm;
