import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo light.svg";
import { List_Categories } from "../../utils/ApiServices";

export default function Header() {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    List_Categories({
      category: "category_2",
    }).then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className='bg-gray-800 h-20 w-full flex  items-center relative'>
      <img title='E KART' onClick={() => navigate("/")} height={60} width={60} alt='Logo' className='mx-3 cursor-pointer' src={Logo} />
      <div className="grow">
        <span className='bg-gray-900 transition-opacity hover:bg-gray-700 text-white group rounded-md px-3 py-2 ml-5 text-sm font-medium cursor-pointer'>
          Categories
          <div
            className='absolute mx-5 flex flex-wrap transition-opacity group-hover:visible left-0 p-5 group-hover:h-auto group-hover:opacity-100
        invisible h-0 opacity-0 z-50 top-[58px] bg-white rounded-xl'>
            {categories?.data?.map((item) => (
              <a href={`/product/${categories.type}/${item}`} key={item} className='w-[50%] sm:w-[50%] md:w-[33%] lg:w-[20%] h-full font-medium hover:underline cursor-pointer text-black'>
                {item}
              </a>
            ))}
          </div>
        </span>
      </div>
      <span className="flex justify-center items-center relative px-3 group">
        <img height={40} width={40} alt='Logo' className='rounded-full cursor-pointer group-hover:item' src={userDetails?.photoURL} />
        <div className="absolute hidden group-hover:block border-black border-2 bg-gray-100 rounded-xl top-full z-50 right-[10px] p-2" id="user-detail">
          <p className="whitespace-nowrap mb-2 font-mono">{userDetails?.name || userDetails?.email}</p>
          <p className="text-center cursor-pointer hover:underline font-mono bg-black text-white p-1 rounded-xl" onClick={() => handleLogOut()}>Log Out</p>
        </div>
      </span>
    </div>
  );
}
