import { useEffect, useState } from "react"

const useFetchData = (url) => {

    const [ApiData, setApiData] = useState(null)
    const [err, SetErr] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const FetchData = async () => {

            setLoading(true)

            try {
                const responce = await fetch(url)

                if (!responce.ok) throw new Error("Faild to Fetch Data")

                const getData = await responce.json()

                setApiData(getData)

            } catch (error) {
                SetErr(error.message || "Something went wrong")
            }

            finally {
                setLoading(false)
            }

        }

        FetchData()
    }, [url])

    return {
        ApiData, err, loading
    }
}

export default useFetchData;
