import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const navItems =
        <React.Fragment>
            <li><Link to='/'>Hoem</Link></li>
            <li><Link to='/appoinment'>Appoinment</Link></li>
            <li><Link>Contact Us</Link></li>
        </React.Fragment>
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    
    return (
        <div className="navbar bg-accent text-white mt-5 rounded-sm px-5 max-w-[1320px] m-auto sm:flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2  w-52 bg-slate-700">
                        {navItems}
                    </ul>
                </div>
                <Link className="uppercase text-xl">Medicare</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}

                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    user?.uid ?
                        <>
                            <Link to='/dashboard'>Dashboard</Link>
                            <button className='ml-2' onClick={handleLogout}>Logout</button>
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img className='h-12 w-12 rounded-full ml-2' src={user?.photoURL} alt="" />
                            </div>

                        </>
                        :
                        <>
                            <Link to='/login' className="">Login</Link>
                            <p className='mx-1'>|</p>
                            <Link to='/register' className="">Register</Link>
                        </>
                }


            </div>
            <label
                htmlFor="dashboardDrawer"
                tabIndex={3} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;