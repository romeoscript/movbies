import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";
import Hero from "../components/moviedetails/Hero";
import {
  BookmarkBorder,
  FavoriteBorder,
  Star,
  Share,
} from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export default function Movie() {
  return (
    <>
      <Head>
        <title>Movie page</title>
        <meta name="description" content="the movie description page " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="px-[1.5rem]">
          <Hero />
          <div className="flex items-center justify-between">
            <aside className="text-white flex items-center my-6 gap-3">
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
            </aside>
            <aside className="flex items-center ">
              <FavoriteBorder />
              <Share />
              <BookmarkBorder />
              <Star />
              <p className="text-white mx-4">
                <span className="text-2xl font-bold">8.5</span>/ <span>350k</span>
              </p>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
}
