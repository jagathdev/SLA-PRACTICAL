import { createContext, useState } from "react";

export const UserContext = createContext();

export const NewContext = ({ children }) => {

    const [inputData, setInputData] = useState("")

    const getInputData = (e) => {
        setInputData(e.target.value)
        console.log(inputData)
    }

    return (<>
        <UserContext.Provider value={{ inputData, setInputData, getInputData }}>
            {children}
        </UserContext.Provider>
    </>)
}

