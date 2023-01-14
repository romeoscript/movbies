import Image from "next/image";
// import housedragon from "../images/Rectangle 17.png";
// import topgon from "../images/Rectangle 18.png";
// import nope from "../images/Rectangle 19.png";
import dreams from "../images/Rectangle 20.png";

const List = ({ name, movieList }) => {
  console.log(movieList);
  return (
    <div>
      <aside className="flex justify-between px-[0.4rem] mt-[1rem]">
        <h1 className="text-white text-xl">{name}</h1>{" "}
        <span className="text-slate-100">see all</span>
      </aside>

      {/* videos lists starts here */}
      <div className="flex justify-between my-[1rem]">
        {movieList?.map((movie) => {
           console.log(movie.image)
          return (
            <aside
              className="w-[150px] h-[200px] rounded-[20px]"
              key={movie.id}
            >
            
              <Image src={movie.image} alt="movie" width={100} height={100} className="w-full h-full rounded-[20px]" />
            </aside>
          );
        })} 
      </div>
    </div>
  );
};

export default List;
