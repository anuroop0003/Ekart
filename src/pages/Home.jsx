import React from "react";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";

export default function Home() {
  return (
    <>
      <Banner />
      <p className='text-center font-black text-3xl mt-10'>Top Categories</p>
      <Categories />
    </>
  );
}



