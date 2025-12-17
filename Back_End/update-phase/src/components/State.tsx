import { useState } from "react";

interface newUser {
    tech: string,
    year: number,
    new?: {
        name: string
    }
}

const State = () => {

    const [countVal, setCountVal] = useState<number>(10)

    const updateCount = () => {
        setCountVal(countVal + 1)
    }

    const [string, setString] = useState<string>("Front End")

    const updateString = () => {
        setString(string === "Front End" ? 'React' : "Front End")
    }

    const [odd, setOdd] = useState<Array<number>>([])

    const getArray = () => {
        setOdd([1, 3, 5, 7, 9, 11, 13])
    };

    const [user, setUser] = useState<newUser>({ tech: "React", year: 2025 })

    const getObject = () => {
        setUser({ tech: "Node", year: 2026, new: { name: "jagath" } })
    }

    return (<>
        <div className="font-bold">

            <div className="">
                <h1>DataTyes</h1>
                <h2>1. Primitive DataTypes</h2>
                <h2>2. Non Primitive DataTypes</h2>
            </div>

            <div className="flex justify-center font-bold text-2xl">
                <h2>1. Primitive DataTypes</h2>
            </div>

            <div className="bg-red-400  h-30 flex flex-col items-center gap-3 m-5">
                <h1>1.Numbers</h1>
                <p>Count Value : {countVal}</p>
                <button className="p-2 bg-amber-500 rounded" onClick={updateCount}>Update Value</button>
            </div>

            <div className="bg-red-400 m-5  h-30 flex flex-col items-center gap-3">
                <h1>2. String</h1>
                <p> {string}</p>
                <button className="p-2 bg-amber-500 rounded" onClick={updateString}>Change Value</button>
            </div>

            <div className="bg-red-400 m-5 h-auto flex flex-col items-center gap-3">
                <h1>3. Boolean</h1>
                <p> {countVal >= 18 ? `Eligible For Vote` : "Not Eligible"}</p>
            </div>

            <div className="bg-red-400 m-5 h-auto flex flex-col items-center gap-3">
                <h1>4. Undefined</h1>
                <p> {string ?? "Server Error"}</p>
            </div>

            <div className="bg-red-400 m-5 h-auto flex flex-col items-center gap-3">
                <h1>5. Null</h1>
                <p> {string && countVal ? "true" : "false"}</p>
            </div>

        </div>

        <div className="font-bold">

            <h2>2. Non - Primitive DataTypes</h2>

            <div className="bg-green-400  h-auto flex flex-col items-center gap-3 m-5">
                <h1>1.Array</h1>

                <div>{odd.map((item, i) =>
                    <li key={i}>{item}</li>
                )}</div>

                <button className="p-2 bg-gray-800 rounded text-white"
                    onClick={getArray}>Get Array</button>
            </div>

            <div className="bg-green-400  h-auto flex flex-col items-center gap-3 m-5">
                <h1>2. Object</h1>
                <p>{user.tech}</p>
                <p>{user.year}</p>
                <p>{user.new?.name}</p>
                <button className="p-2 bg-gray-800 rounded text-white" onClick={getObject}>Get Object</button>
            </div>

        </div>

    </>)
};

export default State;
