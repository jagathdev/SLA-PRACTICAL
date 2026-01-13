import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="bg-blue-400 flex justify-between p-3 mb-5">
                <div>Logo</div>
                <div className="flex gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
