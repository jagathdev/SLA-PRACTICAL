import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
    return (
        <div>
            <Outlet />
            <Navbar />
        </div>
    )
}

export default Layout