import { useContext } from "react";
import { UserContext } from "../context/NewContext";

const LoginPage = () => {

    const { inputData, setInputData, getInputData } = useContext(UserContext)
    return (
        <>
            <input onChange={getInputData} type="text" className="border" placeholder="Enter Your Name" />

            <div>
                <p>{inputData}</p>
            </div>
        </>
    )
}

export default LoginPage;
