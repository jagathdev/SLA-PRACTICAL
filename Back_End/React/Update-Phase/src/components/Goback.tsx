import { useNavigate } from "react-router-dom";

const Goback = () => {

    const navigate = useNavigate();

    const goBack = () => {

        navigate(-1)
    }

    return (<>
        <div className="flex flex-col w-40">
            <button onClick={goBack} className="p-2 rounded-2xl text-black font-bold bg-amber-300">Go Previous Page</button>
        </div>

    </>)
};

export default Goback;