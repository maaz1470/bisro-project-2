import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"
import useCart from "../hook/useCart"

export default function NavBar() {
    const { user, logOut } = useContext(AuthContext)

    const [cart] = useCart();


    const handleLogout = () => {
        logOut().then(() => {
            console.log('logout successfully')
        });
    }

    const navOption = (
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/menu'}>Menu</Link></li>
            <li><Link to={'/order/salad'}>Order Food</Link></li>
            {
                !user && <>
                    <li><Link to={'/auth/login'}>Login</Link></li>
                    <li><Link to={'/auth/register'}>Register</Link></li>
                </>
            }
            {
                user && (
                    <>
                        <li>
                            <button className="btn hover:text-white">
                                Cart
                                <div className="badge badge-secondary">{cart?.length}</div>
                            </button>
                        </li>
                    </>
                )
            }
        </>
    )
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>

                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            {
                user && (
                    <>
                        <div className="navbar-end">
                            <button className="btn" onClick={handleLogout}>Logout</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}