import { useState } from "react"

const Day25Task = () => {

    const [data, setData] = useState("")

    const [fdata, setfdata] = useState("")

    const getVal = (e: any) => {
        e.preventDefault()
        console.log(e)
        setData(e.target.value)
    }

    const formData = (e: any) => {
        e.preventDefault()
        setfdata(data)
        console.log(e.target.value)
    }

    return (
        <>
            <div className="p-5">
                <form onClick={formData}>
                    <input type="text" onChange={getVal} placeholder="Enter the Number" className="border-white" />
                    <input type="submit" value="getData" className="bg-white text-black ml-5 rounded" />
                    <h1>{fdata}</h1>
                </form>
            </div>
            <OddEven />
        </>
    )
}

export default Day25Task;

export const OddEven = () => {

    const [data, setData] = useState(null)

    const addNum = (e: any) => {

        e.preventDefault()

        const value = e.target.value

        console.log(value)

        const random = Math.min(Math.floor(Math.random() * 10) * 2, 100)

        if (Number(value) % 2 === 0) {
            setData(random + value)
        } else {
            setData(random + value)
        }

    }

    // const getformData = (e: any) => {

    //     e.preventDefault()

    //     const formData = e.target.value

    //     console.log(formData)
    // }

    return (<>
        <div className="bg-gray-400">
            <form>
                <input className="" placeholder="Enter <100 Number only" onChange={addNum} type="text" />
                <input type="submit" className="ml-5 bg-white text-black" />
                <p>{data}</p>
            </form>
        </div>
    </>)
}