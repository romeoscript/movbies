import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import List from "./List";
import Checked from "./Checked";

const Homepage = () => {
  return (
    <Layout>
      <div className="flex px-[1rem]">
        <aside className="  basis-[70%] ">
          <Hero />
          <List name={"Trending"} />
          <List name={"Upcoming"} />
          <List name={"Tv Series"} />
        </aside>
        <aside className="basis-[28%] px-[2rem] ">
          <div className="mb-[2rem]">
            <Checked title={'Categories'} />
          </div>
          <Checked title={'Services'} />
        </aside>
      </div>
    </Layout>
  );
};

export default Homepage;
