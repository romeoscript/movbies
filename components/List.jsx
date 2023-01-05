import Image from "next/image";
import housedragon from "../images/Rectangle 17.png";
import topgon from "../images/Rectangle 18.png";
import nope from "../images/Rectangle 19.png";
import dreams from "../images/Rectangle 20.png";

const List = ({name}) => {
  return (
    <div>
      <aside className="flex justify-between px-[0.4rem] mt-[1rem]">
        <h1 className="text-white text-xl">{name}</h1>{" "}
        <span className="text-slate-100">see all</span>
      </aside>

      {/* videos lists starts here */}
      <div className="flex justify-between my-[1rem]">
        <aside className="w-[150px] h-[200px] rounded-[20px]">
          <Image src={housedragon} alt="movie" className="w-full h-full " />
        </aside>
        <aside className="w-[150px] h-[200px] rounded-[20px]">
          <Image src={topgon} alt="movie" className="w-full h-full " />
        </aside>
        <aside className="w-[150px] h-[200px] rounded-[20px]">
          <Image src={nope} alt="movie" className="w-full h-full " />
        </aside>
        <aside className="w-[150px] h-[200px] rounded-[20px]">
          <Image src={dreams} alt="movie" className="w-full h-full " />
        </aside>
      </div>
    </div>
  );
};

export default List;
