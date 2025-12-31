import { useRef, useState } from "react";

const Day27Task = () => {

    const [showbox, setShowbox] = useState(true)
    const data = useRef<HTMLHeadingElement>(null);
    const box = useRef<boolean>(true);
    const inputValue = useRef<any>("");

    // const [value, setVal] = useState()

    const handleClick = () => {
        if (data.current) {
            data.current.textContent = "useRef Hook is used to access DOM Elements";
        }
    }

    const hideBox = () => {
        box.current = !box.current

        setShowbox(box.current)
        console.log(box.current);
    }

    const handleChange = () => {
        console.log(inputValue.current)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(data.current)
    }


    return (<>
        <div>
            <h1 ref={data}>Its a UseRef Component</h1>
            <button onClick={handleClick}>Change Text</button>
        </div>

        <div className={showbox ? "bg-red-500 text-white p-5 w-50 h-50 text-center" : ""} >
            <h1>This is a Box</h1>
        </div >
        <button onClick={hideBox}>{showbox ? "Hide Box" : "Show Box"}</button>

        <div>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" onChange={handleChange} />
                <label>Email :</label>
                <input type="text" name="email" onChange={handleChange} />
                <label>Password:</label>
                <input type="text" name="password" onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    </>)
}

export default Day27Task;