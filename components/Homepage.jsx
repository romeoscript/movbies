import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import List from "./List";
import Checked from "./Checked";
import { useState } from "react";

const Homepage = () => {
  const [Movies, setMovies] = useState([]);

  function fetchMovieHandler() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=7d781093156480b77bea467c042ecf86"
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.results.slice(0, 4).map((MovieData) => {
          console.log(data.results);
          return {
            id: MovieData.id,
            title: MovieData.original_title,
            description: MovieData.overview,
            date: MovieData.release_date,
            image: "https://image.tmdb.org/t/p/w500" + MovieData.poster_path,
            rating: MovieData.vote_average,
          };
        });
        setMovies(transformedData);
        console.log(transformedData);
      })

      .catch((err) => console.error(err));
  }
  return (
    <Layout>
      <div className="flex px-[1rem]">
        <aside className="  basis-[70%] ">
          <Hero movieList={Movies}/>
          <button onClick={fetchMovieHandler}> click me</button>
          <List name={"Trending"} movieList={Movies} />
          <List name={"Upcoming"} />
          <List name={"Tv Series"} />
        </aside>
        <aside className="basis-[28%] px-[2rem] ">
          <div className="mb-[2rem]">
            <Checked title={"Categories"} />
          </div>
          <Checked title={"Services"} />
        </aside>
      </div>
    </Layout>
  );
};

export default Homepage;
