const RenderArr = ({ FruitArray }) => {

    return (<>
        {FruitArray.map((e, i) => (
            <div className="m-5" key={i}>{e}</div>
        ))}
    </>)
}


export default RenderArr;
