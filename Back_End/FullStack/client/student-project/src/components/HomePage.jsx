import { useEffect, useState } from "react";

const HomePage = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/userData/userShow"
            );

            const data = await response.json();

            if (!data.success) {
                setError(data.message);
                return;
            }

            setUsers(data.users);

        } catch (err) {
            console.error(err);
            setError("Server error");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <h1>Users Data</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Gender:</b> {user.gender || "N/A"}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default HomePage;
