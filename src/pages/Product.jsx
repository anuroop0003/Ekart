import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List_Products } from "../utils/ApiServices";

export default function Product() {
  const params = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [dataLimit, setDataLimit] = useState({ skip_limit: 0, max_limit: 20, total_length: 0 });
  const [limitLoader, setLimitLoader] = useState(false);

  useEffect(() => {
    List_Products({
      "type": params.type,
      "category": params.category,
      "skip_limit": dataLimit.skip_limit,
      "max_limit": dataLimit.max_limit

    }).then((res) => {
      setFetchData(res.data.data.productsList);
      setDataLimit((prev) => ({ ...prev, total_length: res.data.data.productsLength }))
      setLimitLoader(false);
    }).catch((err) => {
      console.log(err);
      setLimitLoader(false);
    })
  }, [dataLimit.max_limit]);

  function handleLoadMoreData() {
    setDataLimit((prev) => ({ skip_limit: prev.skip_limit, max_limit: prev.max_limit + 40 }));
    setLimitLoader(true);
  }

  return (fetchData.length > 0 ? <div id="products-container" className='relative flex-wrap rounded-lg flex'>
    {fetchData.map((item) => (
      <a href={`/${item._id}`} key={item._id} className='flex m-5 flex-col max-w-[calc(100%-40px)] min-w-[calc(100%-40px)] md:min-w-[calc(50%-40px)] md:max-w-[calc(50%-40px)] lg:min-w-[calc(33.33%-40px)] xl:min-w-[calc(25%-40px)] xl:max-w-[calc(25%-40px)] lg:max-w-[calc(33.33%-40px)] items-center shadow-sm p-5 bg-slate-300 rounded-lg hover:bg-yellow-300 hover:cursor-pointer'>
        <div className='relative flex justify-center items-center min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]'>
          <img loading="eager" src={item.image_links} alt='Mobile Cover' className='rounded-lg max-w-full max-h-full object-cover' />
        </div>
        <div className="text-left w-full overflow-hidden">
          <p className='font-bold mb-2 w-fit mt-5 text-black line-clamp-2'>{item.title}</p>
          <p className='my-2 text-black'>{item.category_3}</p>
          <p className='my-2 text-black font-mono'>Seller Price : {item.selling_price}</p>
          <p className='my-2 text-black font-mono'>Product Rating : {item.product_rating}</p>
        </div>
      </a>
    ))}
    {limitLoader ?
      <span className="inline-block w-full text-center my-5 h-10">
        <FontAwesomeIcon className="text-2xl" icon={faSpinner} spin />
      </span>
      : (dataLimit.total_length > (dataLimit.skip_limit + dataLimit.max_limit) && <span className="inline-block w-full text-center my-5 h-10">
        <button onClick={handleLoadMoreData} className="bg-black text-white p-2 h-10 text-xs rounded-md">
          Load More Data
        </button>
      </span>)
    }
  </div> :
    <div className="flex justify-center items-center min-h-[500px]">
      <strong className="text-xl font-mono">Loading...</strong>
    </div>)
}
