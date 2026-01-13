const Input = ({ getInput }) => {

    return (<>
        <div>
            <input onChange={getInput} className="border" placeholder="Enter Your Name" type="text" />
        </div>
    </>)
};

export default Input;
