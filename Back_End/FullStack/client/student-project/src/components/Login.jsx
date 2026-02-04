import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const getInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const checkDatabaseData = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/userData/checkUser",
                input
            );

            console.log("Login Response:", res.data);

            if (res.data.success) {
                alert("Login Successful");
                navigate("/home");
            } else {
                alert(res.data.message);
            }

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || "Login Failed");
        }
    };

    const getFormData = (e) => {
        e.preventDefault();

        if (!input.email || !input.password) {
            alert("All fields are required");
            return;
        }

        checkDatabaseData();
    };

    return (
        <>
            <form onSubmit={getFormData}>

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={getInput}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={getInput}
                    required
                />

                <input type="submit" value="Login" />

            </form>
        </>
    );
};

export default Login;
