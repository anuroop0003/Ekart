"use client";
import { List_Categories } from "@/services/ApiConfig";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../../public/logo light.svg";
export default function Header() {
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    List_Categories({
      category: "category_2",
    }).then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  return (
    <div className="bg-gray-800 h-20 w-full flex  items-center relative">
      <Image title="E KART" height={60} width={60} alt="Logo" className="mx-3" priority src={Logo} />
      <span className="bg-gray-900 transition-opacity hover:bg-gray-700 text-white group rounded-md px-3 py-2 ml-5 text-sm font-medium cursor-pointer">
        Categories
        <div
          className="absolute mx-5 flex flex-wrap transition-opacity group-hover:visible left-0 p-5 group-hover:h-auto group-hover:opacity-100
        invisible h-0 opacity-0 z-50 top-[58px] bg-white rounded-xl"
        >
          {categories.map((item) => (
            <Link
              href="#"
              key={item}
              className="w-[50%] sm:w-[50%] md:w-[33%] lg:w-[20%] h-full font-medium hover:underline cursor-pointer text-black"
            >
              {item}
            </Link>
          ))}
        </div>
      </span>

      <Image
        title={userDetails?.name}
        height={40}
        width={40}
        alt="Logo"
        className="mx-3 cursor-pointer absolute right-0"
        src={userDetails?.photoURL}
      />
    </div>
  );
}
