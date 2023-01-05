import {
  BookmarkBorder,
  FavoriteBorder,
  Star,
  Share,
} from "@mui/icons-material";

const Details = () => {
  return (
    <div className="flex items-center justify-between">
      <aside className="basis-[65%]">
        <div className="text-white flex items-center my-6 gap-3">
          <h2>Topgon:Maverick</h2>
          <li>2022</li>
          <li>PG-13</li>
          <li>2h 10m</li>
          <span className="border-[1px] border-solid p-1 border-gray-200 shadow-xl rounded-lg mx-2">
            Action
          </span>
          <span className="border-[1px] border-solid p-1 border-gray-200 shadow-xl rounded-lg mx-2">
            Drama
          </span>
        </div>

        <p className="text-white">
          After thirty years, Maverick is still pushing the envelope as a top
          naval aviator, but must confront ghosts of his past when he leads TOP
          GUN&apos;s elite graduates on a mission that demands the ultimate
          sacrifice from those chosen to fly it.
        </p>
        <p className="border-b-2 border-b-gray-200 text-white p-2">
          Director: <span className="text-[#3DD2CC]">romeoscript</span>
        </p>
        <p className="border-b-2 border-b-gray-200 text-white p-2">
          Writer: <span className="text-[#3DD2CC]">romeoscript</span>
        </p>
        <p className="border-b-2 border-b-gray-200 text-white p-2">
          Stars: <span className="text-[#3DD2CC]">romeoscript</span>
        </p>
        {/* <p className="border-b-2 border-b-gray-200  p-2">Director: <span>romeoscript</span></p> */}

        <div className="relative my-4 mb-[2rem]">
          <input
            type="button"
            value="Top rated movie #65"
            className="w-[25%] h-[40px] bg-[#3DD2CC] text-white rounded-xl absolute left-0 cursor-pointer"
          />
          <select
            name=""
            className="w-full h-[40px] pl-[11rem] p-2 rounded-xl text-white outline-none bg-[#121212]"
          >
            <option value="#">Awards 9 nominations</option>
          </select>
        </div>
      </aside>
      <aside>
        <div className="flex items-center ">
          <FavoriteBorder className="text-white mx-2 cursor-pointer" />
          <Share className="text-white mx-2 cursor-pointer" />
          <BookmarkBorder className="text-white mx-2 cursor-pointer" />
          <Star className="text-[yellow] mx-2 cursor-pointer" />
          <p className="text-white mx-4">
            <span className="text-2xl font-bold">8.5</span>/ <span>350k</span>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Details;
