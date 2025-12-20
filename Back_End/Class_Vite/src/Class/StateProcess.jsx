

const StateProcess = () => {

    const [product, shopingCart] = useState(
        [
            { id: 1, name: "pencil", qyt: 3, price: "Rs.20" },
            { id: 1, name: "pencil", qyt: 3, price: "Rs.20" },
            { id: 1, name: "pencil", qyt: 3, price: "Rs.20" },
        ]
    );
    // you access the object inside data change you use spread operator 

    return (
        <>
            {/* Theme Change */}
            <div>
                <div>

                </div>
            </div>
        </>
    )
};

export default StateProcess;
