import { useState } from "react";

const APIDataFetch = () => {

    const [data, setData] = useState({ carts: [] })

    const getData = async () => {
        const apidata = await fetch('https://dummyjson.com/carts')
        const finalData = await apidata.json()
        setData(finalData)
        console.log(finalData.carts)
        console.log(data)
    }

    return (
        <>
            <button onClick={getData}>Show Data</button>
            {data?.carts.map((e) => (
                <div key={e.id}>
                    <div>{e.id.products.map((e) => (
                        <div>
                            <h1>{e.price}</h1>
                            <h1>{e.quantity}</h1>
                            <h1>{e.total}</h1>
                        </div>
                    ))}</div>
                </div>
            ))}
        </>
    )
};



export default APIDataFetch;
