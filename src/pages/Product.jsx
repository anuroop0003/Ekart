import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List_Products } from "../utils/ApiServices";

export default function Product() {
  const params = useParams();
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    List_Products({
      "type": params.type,
      "category": params.category
    }).then((res) => {
      setFetchData(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (fetchData.length > 0 ? <div className='relative flex-wrap rounded-lg flex'>
    {fetchData.map((item) => (
      <div href="/product" key={item._id} className='flex m-5 flex-col min-w-[calc(33%-36px)] max-w-[calc(33%-36px)] items-center shadow-sm p-5 bg-lime-100 rounded-lg hover:bg-yellow-100 hover:cursor-pointer'>
        <div className='relative flex justify-center items-center min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]'>
          <img loading="eager" src={item.image_links} alt='Mobile Cover' className='rounded-lg max-w-full max-h-full object-cover' />
          {/* <img src={ProductBackground} alt='Product Background' className='absolute rounded-lg max-w-full max-h-full object-cover' /> */}
        </div>
        <div className="text-left w-full overflow-hidden">
          <p className='font-bold mb-2 w-fit mt-5 text-black line-clamp-2'>{item.title}</p>
          <p className='my-2 text-black'>{item.category_3}</p>
          <p className='my-2 text-black'>Seller Price : {item.selling_price}</p>
          <p className='my-2 text-black'>Product Rating : {item.product_rating}</p>
        </div>
      </div>
    ))}
  </div> :
    <div className="flex justify-center items-center min-h-[500px]">
      <strong className="text-xl font-mono">Loading...</strong>
    </div>)
}
