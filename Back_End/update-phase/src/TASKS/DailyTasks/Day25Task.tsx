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
            <form onClick={formData} >
                <input type="text" onChange={getVal} className="bg-red-200 text-black" />
                <input type="submit" value="getData" />
                <h1>{fdata}</h1>
            </form>
        </>
    )
}

export default Day25Task;

