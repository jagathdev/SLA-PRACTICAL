import { useEffect, useState } from "react"

const Day24Task = () => {

    const [data, setData] = useState<any[]>([])

    const showData = async () => {

        const cart = await fetch("https://dummyjson.com/carts")

        const cartData = await cart.json()

        const finalData = cartData.carts
        // const products = finalData.products

        setData(finalData)

    }

    useEffect(() => {
        showData()
    }, [])


    return (
        <>
            <div className="p-5">
                <h1>Day24 Task</h1>
                <li>
                    1. Fetch Function using Use Effect to take the values form the API. and showing on the screen.
                </li>
                <li>
                    2. Timer Program.
                </li>
                <li>
                    3. Timer when its come 50 stop and start at 10
                </li>
                <li>
                    4. Timer when its come odd number showing the text its odd
                </li>
                <li>
                    5. Timer when its come Even number showing the text its Even
                </li>
                <div>
                    <li>
                        What is UseEffect?
                    </li>
                    <li>
                        how many UseEffect Using In single components:
                    </li>
                    <li>
                        How Handling the Life cycly methods in useEffect.
                    </li>
                    <li>
                        what is mounting , what is unmounding , what is updating
                    </li>
                </div>
            </div>

            <div className="bg-red-200">
                <h1>1. Fetch Function using Use Effect to take the values form the API. and showing on the screen.</h1>

                {data.map((e: any) => (
                    <div key={e.id} >
                        <div className="flex flex-wrap gap-5 " >{e.products.map((item: any) => (
                            <div className="bg-white rounded text-black p-5 w-50" key={item.id}>
                                <h1>{item.id}</h1>
                                <h1>{item.title}</h1>
                                <h1>{item.quantity}</h1>
                                <h1>{item.total}</h1>
                                <button>pay Now</button>
                            </div>
                        ))}</div>
                    </div>
                ))
                }

            </div>
        </>
    )
}
export default Day24Task;

