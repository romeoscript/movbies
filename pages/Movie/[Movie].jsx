import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../../components/Layout";
import Hero from "../../components/moviedetails/Hero";
import Details from "../../components/moviedetails/Details";

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
          <Details />
        </div>
      </Layout>
    </>
  );
}
