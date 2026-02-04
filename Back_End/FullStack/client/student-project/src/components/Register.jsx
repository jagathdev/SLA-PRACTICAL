import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        repassword: ""
    });

    const navigate = useNavigate();

    const getInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const storeDb = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/userData/userCreate",
                input
            );

            if (res.data.success) {
                alert("Registration Successful");
                navigate("/login");
            }

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Registration Failed");
        }
    };

    const getFormData = (e) => {
        e.preventDefault();

        if (input.password !== input.repassword) {
            alert("Password mismatch");
            return;
        }

        storeDb();
    };

    return (
        <>
            <form onSubmit={getFormData}>

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={getInput}
                    required
                    minLength={3}
                    maxLength={75}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={getInput}
                    required
                />

                <label>Gender:</label>
                <select
                    name="gender"
                    onChange={getInput}
                    required
                >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={getInput}
                    required
                    minLength={8}
                    maxLength={12}
                />

                <label>Re-Enter Password:</label>
                <input
                    type="password"
                    name="repassword"
                    onChange={getInput}
                    required
                    minLength={8}
                    maxLength={12}
                />

                <input type="submit" value="Register" />

            </form>
        </>
    );
};

export default Register;
