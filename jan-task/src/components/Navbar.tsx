import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <h1>This is a NavBar</h1>
            <Link to='/about'>About Page</Link>
            <Link to='/login'>Login Page</Link>
        </>
    )
}

export default Navbar
