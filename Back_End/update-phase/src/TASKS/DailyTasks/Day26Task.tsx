import { useState } from "react"

const Day26Task = () => {

    const [formData, setFromData] = useState({ name: "", email: "", mobile: "", password: "" })

    const [error, setError] = useState("")

    const formSubmit = (e: any) => {
        e.preventDefault()

        if (!formData.email) {
            setError("Email is required")
        }
        else if (!formData.password) {
            setError("Password is required")
        }
        else if (!formData.name) {
            setError("Name is required")
        }
        else if (!formData.mobile) {
            setError("Mobile no is required")
        }
        else {
            alert("Form Submitted Successfully")
        }
    }

    const getInput = (e: any) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
    }

    return (
        <>
            <div className="flex bg-green-200 flex-col text-black">
                <form onSubmit={formSubmit}>
                    <div>
                        <label>Name :</label>
                        <input type="text" name="name" onChange={getInput} />
                    </div>
                    <div>
                        <label>Email :</label>
                        <input type="email" name="email" onChange={getInput} />
                    </div>
                    <div>
                        <label>Mobile :</label>
                        <input type="number" name="mobile" onChange={getInput} />
                    </div>
                    <div>
                        <label>Password :</label>
                        <input type="password" name="password" onChange={getInput} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </>
    )
}

export default Day26Task;

