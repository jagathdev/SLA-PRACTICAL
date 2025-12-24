import { useState } from "react";

const Day23Task = () => {

    return (<>
        <div className=" text-white">
            <Toggle />
            <Counter />
            <Greeting />
        </div>
    </>)
}
export default Day23Task;

export const Toggle = () => {
    const [data, setData] = useState(true)

    const handleClick = () => {
        setData(!data)
    }

    return (<>
        <div>
            <h1>1.Hide and Show</h1>
            {data && <div className="bg-gray-200 p-5 w-50 h-50 rounded-2xl mb-5">
            </div>}
            <button onClick={handleClick} className={data ? "bg-red-600 text-white p-2 rounded" : "bg-green-600 text-white p-2 rounded"} > {data ? "Hide" : "Show"}</button >
        </div>
    </>)
}

export const Counter = () => {
    const [count, setCount] = useState(0)

    const Increase = () => {
        count < 10 && setCount(count + 1) //less then 10 mean 9 only print why print 10
    }

    const Decrease = () => {
        count > 0 && setCount(count - 1) //grater then 0 mean 0 only print why print -1
    }

    return (<>
        <div className="py-5">
            <h1>2. Counter</h1>
            <div className="flex gap-5 items-center">
                <button onClick={Increase} className="bg-green-500 text-white p-2 rounded">+</button>
                <span>Count Value : {count}</span>
                <button className="bg-red-500 text-white p-2 rounded" onClick={Decrease}>-</button>
            </div>
        </div>
    </>)
}

export const Greeting = () => {
    const [greet, setGreet] = useState("WelCome")

    const Welcome = (string: any) => {
        setGreet(string)
    }

    const GoodMorning = (string: any) => {
        setGreet(string)
    }

    const GoodNight = (string: any) => {
        setGreet(string)
    }

    return (<>
        <h1 className="text-2xl font-bold">Message:{greet}</h1>
        <button onClick={() => Welcome("Welcome")}>Welcome</button>
        <button onClick={() => GoodMorning("GoodMorning")}>GoodMorning</button>
        <button onClick={() => GoodNight("GoodNight")}>GoodNight</button>
    </>)
}