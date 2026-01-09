import { Link } from "react-router-dom";

const Login = () => {

    const loginData = (e) => {
        e.preventDefault()
    }

    return (<>
        <div className="bg-white text-black h-50 w-80 rounded">
            <form onSubmit={loginData}>
                <div className="p-3 ml-7">
                    <label>Email : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div className="p-3">
                    <label>Password : </label>
                    <input type="password" className="border-2 rounded" />
                </div>

                <div className="flex justify-center gap-5">

                    <Link to='/home' className="bg-black text-white font-semibold p-1 rounded">Login</Link>

                    <Link to='/' className="bg-black text-white font-semibold p-1 rounded" >Register</Link>

                </div>
            </form>
        </div>
    </>)
};

export default Login;

