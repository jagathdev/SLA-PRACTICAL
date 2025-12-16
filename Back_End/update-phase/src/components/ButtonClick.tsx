const ButtonClick = () => {
    let count: number = 0;

    const OnClick = () => {
        count = count + 1
        console.log(count)
    };

    const DblClick = () => {
        count = count + 1
        console.log(count)
    }

    const OnChange = (e: any) => {
        console.log(e.target.value);
    };

    const OnSubmit = (e: any) => {
        e.preventDefault()
        console.log(e)
    } // e.target.value is undefined why?

    const MouseEnter = () => {
        console.log("Mouse Enter triggered");
    }; // how to use mouse events  

    const MouseLeave = (e: any) => {
        console.log(e.target.value)
    }

    const MouseDown = () => {

    }

    const MouseUp = () => {

    }


    return (<>
        <div>
            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>1. onClick</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onClick={OnClick}>OnClick</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>2. onChange</h1>
                <div>
                    <input type="text" onChange={OnChange} className="bg-white p-1 text-black" />
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>3. OnSubmit</h1>
                <form action="" onSubmit={OnSubmit}>
                    <label htmlFor="">Name : </label>
                    <input type="text" className="bg-white text-black" />
                    <button className="p-1 bg-green-600 rounded " >onSubmit</button>
                </form>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>5. mouseEnter</h1>
                <div onMouseEnter={MouseEnter}>
                    <ul>
                        <li>List 1</li>
                        <li>List 2</li>
                        <li>List 3</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>6. MouseLeave</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onMouseLeave={MouseLeave}>mouseLeave</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>7. MouseUp</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onMouseUp={MouseUp}>mouseUp</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>8. MouseDown</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onMouseDown={MouseDown}>mouseDown</button>
                </div>
            </div>

            <div className="bg-gray-800 h-20 text-white flex flex-col gap-3">
                <h1>9. DblClick</h1>
                <div>
                    <button className="p-1 bg-green-600 rounded " onDoubleClick={DblClick}>dblClick</button>
                </div>
            </div>
        </div>
    </>)
};

export default ButtonClick;
