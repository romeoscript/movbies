import { TiTick } from "react-icons/ti";

const Checked = ({title}) => {
  return (
    <div>
      <div className="flex text-white justify-between mb-2">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">uncheck all</p>
      </div>
      {/* checked items */}
      <div className="bg-[#212121] rounded-[30px] p-[0.7rem] min-h-[280px]">
        {/* checked items__inputs */}
        <div className="flex justify-between items-center border-b-2 border-[grey] py-[0.5rem]">
          <p className="text-white">Action</p>
          <label
            htmlFor="checkbox-1"
            className="cursor-pointer relative w-[22px] h-[22px] bg-[steelblue] block rounded-lg"
          >
            <input
              type="checkbox"
              className="appearance-none h-full w-full outline-none rounded-sm mycheck"
              id="checkbox-1"
            />
            <TiTick className="text-[black] w-[22px] h-[22px] absolute top-0 text-opacity-0 check-1 transition" />
          </label>
        </div>
        {/* checked items input ends */}
        {/* checked items__inputs */}
        <div className="flex justify-between items-center border-b-2 border-[grey] py-[0.5rem]">
          <p className="text-white">Adventures</p>
          <label
            htmlFor="checkbox-2"
            className="cursor-pointer relative w-[22px] h-[22px] bg-[steelblue] block rounded-lg"
          >
            <input
              type="checkbox"
              className="appearance-none h-full w-full outline-none rounded-sm mycheck"
              id="checkbox-2"
            />
            <TiTick className="text-[black] w-[22px] h-[22px] absolute top-0 text-opacity-0 check-1 transition" />
          </label>
        </div>
        {/* checked items input ends */}
        {/* checked items__inputs */}
        <div className="flex justify-between items-center border-b-2 border-[grey] py-[0.5rem]">
          <p className="text-white">Animated</p>
          <label
            htmlFor="checkbox-3"
            className="cursor-pointer relative w-[22px] h-[22px] bg-[steelblue] block rounded-lg"
          >
            <input
              type="checkbox"
              className="appearance-none h-full w-full outline-none rounded-sm mycheck"
              id="checkbox-3"
            />
            <TiTick className="text-[black] w-[22px] h-[22px] absolute top-0 text-opacity-0 check-1 transition" />
          </label>
        </div>
        {/* checked items input ends */}
        {/* checked items__inputs */}
        <div className="flex justify-between items-center border-b-2 border-[grey] py-[0.5rem]">
          <p className="text-white">Comedy</p>
          <label
            htmlFor="checkbox-4"
            className="cursor-pointer relative w-[22px] h-[22px] bg-[steelblue] block rounded-lg"
          >
            <input
              type="checkbox"
              className="appearance-none h-full w-full outline-none rounded-sm mycheck"
              id="checkbox-4"
            />
            <TiTick className="text-[black] w-[22px] h-[22px] absolute top-0 text-opacity-0 check-1 transition" />
          </label>
        </div>
        {/* checked items input ends */}
        {/* checked items__inputs */}
        <div className="flex justify-between items-center border-b-2 border-[grey] py-[0.5rem]">
          <p className="text-white">Crime</p>
          <label
            htmlFor="checkbox-5"
            className="cursor-pointer relative w-[22px] h-[22px] bg-[steelblue] block rounded-lg"
          >
            <input
              type="checkbox"
              className="appearance-none h-full w-full outline-none rounded-sm mycheck"
              id="checkbox-5"
            />
            <TiTick className="text-[black] w-[22px] h-[22px] absolute top-0 text-opacity-0 check-1 transition" />
          </label>
        </div>
        {/* checked items input ends */}
        {/* checked items__inputs */}
        <div className="flex justify-between items-center border-b-2 border-[grey] py-[0.5rem]">
          <p className="text-white">Fantasy</p>
          <label
            htmlFor="checkbox-6"
            className="cursor-pointer relative w-[22px] h-[22px] bg-[steelblue] block rounded-lg"
          >
            <input
              type="checkbox"
              className="appearance-none h-full w-full outline-none rounded-sm mycheck"
              id="checkbox-6"
            />
            <TiTick className="text-[black] w-[22px] h-[22px] absolute top-0 text-opacity-0 check-1 transition" />
          </label>
        </div>
        {/* checked items input ends */}
      </div>
    </div>
  );
};

export default Checked;
