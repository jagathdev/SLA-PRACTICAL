import useFetchData from "../hooks/useFetchData"

const Receipe = () => {

    const { ApiData, err, loading } = useFetchData("https://dummyjson.com/recipes")

    if (loading) return <h1>Loading Please Wait ....</h1>

    if (err) return <h1>Error :{err}</h1>

    if (!ApiData) return <h1>Data is Null</h1>

    return (
        <>
            {ApiData.recipes?.map((e) => (
                <div key={e.id}>
                    <h1>{e.name}</h1>
                    <p>{e.userId}</p>
                    <img src={e.image} width={200} />
                    <p>{e.prepTimeMinutes}</p>
                    <p>{e.servings}</p>
                </div>
            ))}
        </>
    )
}

export default Receipe