import { useState } from "react";

const ConditionalRendering = () => {
    const [login, setLogin] = useState(true)

    const handleClick = () => {
        setLogin(!login)
    }

    return (<>
        <button onClick={handleClick} className={login ? "bg-green-500 text-white m-5 px-3" : "bg-red-500 text-white px-3 m-5"} > {login ? "Login" : "Logout"}</button >
    </>)
}

export default ConditionalRendering;


export const FormAlert = () => {
    const [formdata, setFormData] = useState({ name: "", age: "", mobile: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formdata, [name]: value })
    }

    const getFormData = (e) => {
        e.preventDefault()
        alert(formdata.name)
        alert(formdata.age)
        alert(formdata.mobile)
    }

    return (<>
        <form onSubmit={getFormData} >
            <label>Name :</label>
            <input type="text" className="border" onChange={handleChange} name="name" />
            <label>Age :</label>
            <input type="text" className="border" onChange={handleChange} name="age" />
            <label>mobile :</label>
            <input type="text" className="border" onChange={handleChange} name="mobile" />
            <input type="submit" />
        </form>
    </>)
}



