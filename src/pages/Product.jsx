import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List_Products } from "../utils/ApiServices";


const selectedData = {
  "_id": "64e1dcc329489674c374b794",
  "category_1": "Electronics",
  "category_2": "Computer Accessories",
  "category_3": "Pendrives",
  "title": "Branko 64 GB Metal Body Pen Drive 64 GB Pen Drive  (Silver)",
  "product_rating": "3.9",
  "selling_price": "₹529",
  "mrp": "₹1,099",
  "seller_name": "BRANKO",
  "seller_rating": "3.9",
  "description": "Do you have more than one or two computers at home and have to switch from one system to another for performing different tasks? Then it can be really difficult to move important files unless you have a good-quality pen drive such as this Branko USB drive.Compatible with a USB 2.0 Interface, this pen drive has a 64 GB capacity which you can use to transfer files, keep backup and share videos or movies with your friends. It has a sleek and portable design, and a durable body.Take it with you everywhere, wherever you go.",
  "highlights": "USB 2.0|64 GB Metal For Laptop Color:Silver",
  "image_links": "https://rukminim1.flixcart.com/image/612/612/xif0q/pendrive/pendrive/h/t/u/64-gb-metal-body-pen-drive-branko-original-imagknekecun3z9n.jpeg?q=70",
  "__v": 0
};

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
      <a href={`/${item._id}`} key={item._id} className='flex m-5 flex-col max-w-[calc(100%-40px)] min-w-[calc(100%-40px)] md:min-w-[calc(50%-40px)] md:max-w-[calc(50%-40px)] lg:min-w-[calc(33.33%-40px)] xl:min-w-[calc(25%-40px)] xl:max-w-[calc(25%-40px)] lg:max-w-[calc(33.33%-40px)] items-center shadow-sm p-5 bg-slate-300 rounded-lg hover:bg-yellow-300 hover:cursor-pointer'>
        <div className='relative flex justify-center items-center min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]'>
          <img loading="eager" src={item.image_links} alt='Mobile Cover' className='rounded-lg max-w-full max-h-full object-cover' />
          {/* <img src={ProductBackground} alt='Product Background' className='absolute rounded-lg max-w-full max-h-full object-cover' /> */}
        </div>
        <div className="text-left w-full overflow-hidden">
          <p className='font-bold mb-2 w-fit mt-5 text-black line-clamp-2'>{item.title}</p>
          <p className='my-2 text-black'>{item.category_3}</p>
          <p className='my-2 text-black font-mono'>Seller Price : {item.selling_price}</p>
          <p className='my-2 text-black font-mono'>Product Rating : {item.product_rating}</p>
        </div>
      </a>
    ))}
  </div> :
    <div className="flex justify-center items-center min-h-[500px]">
      <strong className="text-xl font-mono">Loading...</strong>
    </div>)
}
