import { useParams } from "react-router-dom";

const UseParams = () => {

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


    return (<>
        <div className="bg-gray-900 h-120 text-white">
            <h1>This is a UseParamas Componenet</h1>
        </div>
    </>)
};

export default UseParams;
