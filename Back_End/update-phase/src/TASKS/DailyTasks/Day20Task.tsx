import { Link } from "react-router-dom";

const Day20Task = () => {

    interface newUser {
        id: number;
        name: string;
        age: number;
        dept: string;
    }

    const user: newUser[] = [
        { id: 1, name: "Jagath", age: 23, dept: "IT" },
        { id: 2, name: "Suriya", age: 20, dept: "BCA" },
        { id: 3, name: "Karthi", age: 19, dept: "CSE" },
        { id: 4, name: "Hari", age: 25, dept: "ECE" },
    ];

    // const name = "jagath"

    return (<>
        <div className="bg-gray-900 h-120 text-white">
            <div >
                <h1 className="pb-5">Day 20 Task Login page and Register Page dont have a Navbar </h1>
                <Link to='/login' className="bg-black text-white font-semibold p-1 rounded">Register Page</Link>
            </div>
            <div>
                <h1>useLocation</h1>
                <p>Use useLocation Hook go to one page to another page with data</p>
                <Link to='/task/uselocation' state={{ data: user }} className="bg-black text-white font-semibold p-1 rounded">Getuser Data</Link>
            </div>

            <div>
                <h1>useParams</h1>
                <p>Use useParams Hook go to one page to another page with data passing via url</p>
                <Link to='/task/useparams' className="bg-black text-white font-semibold p-1 rounded">Getuser Data</Link>
            </div>

            <div>
                {user.map((e) => (
                    <Link to={`/task/useparams/${e.id}`} className="bg-black text-white font-semibold p-1 rounded">Get Data</Link>
                ))}
            </div>
            {/* <UseParams userData={user} /> */}
        </div >
    </>)
};

export default Day20Task;


