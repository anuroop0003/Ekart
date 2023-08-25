"use client";
import dynamic from "next/dynamic";
import "../../src/app/globals.css";

export default function Homepage() {
  const Header = dynamic(() => import("../components/Header/Header"), { ssr: false });
  const Banner = dynamic(() => import("../components/Banner/Banner"), { ssr: false });
  const Footer = dynamic(() => import("../components/Footer/Footer"), { ssr: false });
  const Categories = dynamic(() => import("../components/Categories/Categories"), { ssr: false });
  return (
    <>
      <Header />
      <Banner />
      <p className="text-center font-black text-3xl mt-10">Top Categories</p>
      <Categories />
      <Footer />
    </>
  );
}
