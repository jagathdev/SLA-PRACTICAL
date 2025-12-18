import { useState } from "react";
import Goback from "../../components/Goback";

const Day19Task = () => {

    return (<>
        <div className="h-120 bg-gray-800 p-3">
            <Goback />
            <div className="text-white flex flex-col gap-5 p-5">
                <Shop />
            </div>
        </div>
    </>)
};

export default Day19Task;

export const Shop = () => {

    const [product, setProduct] = useState([
        { product: "Pen", price: "Rs.20", qty: 5 },
        { product: "Pencil", price: "Rs.10", qty: 4 },
        { product: "Scale", price: "Rs.15", qty: 3 },
        { product: "Rubber", price: "Rs.5", qty: 2 },
    ]);

    const IncreaseQty = () => {

    };

    const DecreaseQty = () => {

    };

    const getToalAmount = () => {

    }

    return (<>
        <div className="text-white">
            <h1 className="text-2xl font-bold mb-5">This is a Shop Component</h1>
            <div className="flex gap-5">
                {product.map((e, i) => (
                    <div key={i}>
                        <div className="p-5 mb-5 font-semibold bg-amber-200 text-black w-60">
                            <h1>Product Name : {e.product}</h1>
                            <h1>Price : {e.price}</h1>
                            <h1>Qty : <button className="px-3 text-xl" onClick={IncreaseQty}>+</button>{e.qty}<button className="px-3 text-xl" onClick={DecreaseQty}>-</button></h1>
                            <button onClick={getToalAmount}>Get Total</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-5 justify-center items-center">

            </div>
        </div>

    </>)

}

