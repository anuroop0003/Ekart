import { useEffect, useState } from "react";
import MobileCover from "../../assets/categories/Mobile Cover.jpg";
import ProductBackground from "../../assets/product_background.svg";
import { List_Categories } from "../../utils/ApiServices";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    List_Categories({
      category: "category_1",
    }).then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  console.log(categories);

  return (
    <div className='relative w-full px-2.5 py-10 sm:py-14 rounded-lg flex gap-10 flex-wrap justify-center'>
      {categories?.data?.map((item) => (
        <a href={`/product/${categories.type}/${item}`} key={item} className='flex flex-auto flex-col justify-center h-full min-w-[150px] max-w-[150px] shadow-sm p-[10px] bg-slate-200 rounded-lg hover:bg-yellow-200 hover:cursor-pointer'>
          <div className='relative w-full h-full bg-contain flex justify-center items-center'>
            <img src={MobileCover} height={100} width={100} alt='Mobile Cover' className='rounded-lg' />
            <img src={ProductBackground} height={100} width={100} alt='Product Background' className='absolute rounded-lg' />
          </div>
          <p className='font-bold text-center mt-5 text-black min-h-[48px] font-mono'>{item}</p>
        </a>
      ))}
    </div>
  );
}
