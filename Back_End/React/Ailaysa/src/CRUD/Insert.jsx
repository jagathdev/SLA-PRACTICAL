import { useEffect, useState } from "react"

const Insert = () => {

    const [apiData, setApiData] = useState([])

    const [formData, setFormData] = useState([
        { title: "", price: "", category: "" },

    ])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const finalRes = await res.json()
            setApiData(finalRes)
        }
        fetchData()

    }, [])

    const getInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const getFormData = (e) => {
        e.preventDefault()

        const newProduct = { id: apiData.length + 1, ...formData }

        setApiData([...apiData, formData])
    }

    return (
        <>
            <form onSubmit={getFormData}>
                <label>Title</label>
                <input type="text" onChange={getInput} name='title' />
                <label>Price</label>
                <input type="text" onChange={getInput} name='price' />
                <label>Category</label>
                <input type="text" onChange={getInput} name='category' />
                <input type="submit" value="Add Product" />
            </form>

            {apiData.map((e) => (
                <div key={apiData.length + 1}>
                    <p>id:{e.id}</p>
                    <p>Title : {e.title}</p>
                    <p>Price : {e.price}</p>
                    <p>Category : {e.category}</p>
                </div>
            ))}
        </>
    )
}

export default Insert
