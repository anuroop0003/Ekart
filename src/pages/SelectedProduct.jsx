import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton/CustomButton";
import { Selected_Product } from "../utils/ApiServices";

// const fetchedData = {
//     "_id": "64e1dcc329489674c374b794",
//     "category_1": "Electronics",
//     "category_2": "Computer Accessories",
//     "category_3": "Pendrives",
//     "title": "Branko 64 GB Metal Body Pen Drive 64 GB Pen Drive  (Silver)",
//     "product_rating": "3.9",
//     "selling_price": "₹529",
//     "mrp": "₹1,099",
//     "seller_name": "BRANKO",
//     "seller_rating": "3.9",
//     "description": "Do you have more than one or two computers at home and have to switch from one system to another for performing different tasks? Then it can be really difficult to move important files unless you have a good-quality pen drive such as this Branko USB drive.Compatible with a USB 2.0 Interface, this pen drive has a 64 GB capacity which you can use to transfer files, keep backup and share videos or movies with your friends. It has a sleek and portable design, and a durable body.Take it with you everywhere, wherever you go.",
//     "highlights": "USB 2.0|64 GB Metal For Laptop Color:Silver",
//     "image_links": "https://rukminim1.flixcart.com/image/612/612/xif0q/pendrive/pendrive/h/t/u/64-gb-metal-body-pen-drive-branko-original-imagknekecun3z9n.jpeg?q=70",
//     "__v": 0
// };

export default function SelectedProduct() {

    const [fetchedData, setFetchedData] = useState({});

    const params = useParams();

    console.log("params", params);

    useEffect(() => {
        Selected_Product({
            "id": params.id
        }).then((res) => {
            console.log(res.data.data);
            setFetchedData(res.data.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function discountFinder(selling_price, mrp) {
        const mrprice = mrp?.slice(1)?.replace(",", "");
        const sellingprice = selling_price?.slice(1)?.replace(",", "");
        if (mrprice) {
            return Math.ceil(((mrprice - sellingprice) / mrprice) * 100);
        }
        return 100;
    }
    return (
        <div className="p-5">
            <div className="flex">
                <div className="w-1/2 flex justify-center items-center p-5" >
                    <img loading="eager" width={100} height={300} alt={fetchedData._id} src={fetchedData.image_links} />
                </div>
                <div className="w-1/2 p-5">
                    <p className="font-bold text-2xl">{fetchedData.title}</p>
                    <p className="my-2 text-xl font-bold ">{fetchedData.category_3}</p>
                    <div className="">
                        {fetchedData.mrp && <span className="font-bold text-red-600 text-3xl line-through mr-4">{fetchedData.mrp}</span>}
                        {fetchedData.selling_price && <span className="font-bold text-green-600 text-3xl mr-4">{fetchedData.selling_price}</span>}
                        <span className="text-xl">Total savings <code className="font-bold">{discountFinder(fetchedData?.selling_price, fetchedData?.mrp)}%</code></span>
                    </div>
                    <CustomButton className="w-60 mt-4" placeholder="Add to cart" />
                </div>
            </div>
            <p className="mb-2">Description:</p>
            <p>{fetchedData.description || "No desciption available"}</p>
            <p className="mt-10 mb-2">Highlights:</p>
            <ol>
                {fetchedData?.highlights ? fetchedData?.highlights?.split("|")?.map((item) => <li key={item} className="list-disc list-inside">{item}</li>) : <li className="list-inside">No highlights available</li>}
            </ol>
            <div className="mt-10 flex gap-5 wrap text-lg">
                <div className="shadow-sm shadow-black w-2/6 p-5 rounded-xl flex gap-5 justify-center bg-green-400">
                    <span className="">
                        Seller Name
                    </span>
                    <span className="font-bold">
                        {fetchedData?.seller_name}
                    </span>
                </div>
                <div className="shadow-sm shadow-black w-2/6 p-5 rounded-xl flex gap-5 justify-center bg-green-400">
                    <span className="">
                        Seller Rating
                    </span>
                    <span className="font-bold">
                        {fetchedData?.seller_rating}
                    </span>
                </div>
                <div className="shadow-sm shadow-black w-2/6 p-5 rounded-xl flex gap-5 justify-center bg-green-400">
                    <span className="">
                        Product Rating
                    </span>
                    <span className="font-bold">
                        {fetchedData?.product_rating}
                    </span>
                </div>
            </div>
        </div>
    )
};