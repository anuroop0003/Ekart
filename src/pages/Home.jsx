import React from "react";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <p className='text-center font-black text-3xl mt-10'>Top Categories</p>
      <Categories />
      <Footer />
    </>
  );
}
