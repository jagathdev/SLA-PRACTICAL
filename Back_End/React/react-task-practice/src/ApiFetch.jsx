import { useEffect, useState } from "react"

const ApiFetch = () => {

    const [apiData, setApiData] = useState()

    useEffect(() => {
        const fetchApiData = async () => {
            const apiData = await fetch('https://dummyjson.com/users')
            const finaldata = await apiData.json()
            setApiData(finaldata)
        }
        fetchApiData()
    }, [])


    return (
        <>
            apiFetch Component

            {apiData.users.map((e) => (
                <div key={e.id}>
                    <h1>{e.firstName}</h1>
                    <h1>{e.lastName}</h1>
                    <h1>{e.age}</h1>
                    <h1>{e.gender}</h1>
                </div>
            ))}
        </>
    )
}

export default ApiFetch;

