import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [data, setData] = useState()

    const formData = (e) => {
        e.preventDefault()
        setData(e.target.value)
        console.log(data)
    }


    return (<>
        <div className=" bg-white text-black h-50 w-50 rounded p-5 ">

            <form onSubmit={formData} className="flex flex-col gap-5 justify-center items-center">
                <h1 className="">Please Register Here</h1>
                <div>
                    <label>Name : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div>
                    <label>Confirm Password : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div>
                    <label>Admin :</label>
                    <select>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="flex gap-8">
                    <Link to='/login' className="border-2 rounded">Submit</Link>
                </div>
            </form>
        </div >
    </>)
};

export default Register;
