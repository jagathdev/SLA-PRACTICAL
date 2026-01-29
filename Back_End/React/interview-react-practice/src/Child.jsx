import Parent from "./Parent"

const Child = () => {
    const data = "it is a child data"
    return (
        <>
            <Parent childData={data} />
        </>
    )
}

export default Child
