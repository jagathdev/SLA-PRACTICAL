
const Parent = ({ childData }) => {

    const getData = () => {
        console.log('data from child')
    }

    return (
        <>
            <h1>Parent Component</h1>
            <child sendData={getData} />
        </>
    )
}

export default Parent