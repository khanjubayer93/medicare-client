import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems =
        <React.Fragment>
            <li><Link>Hoem</Link></li>
            <li><Link to='/appoinment'>Appoinment</Link></li>
            <li><Link>Contact Us</Link></li>
        </React.Fragment>
    return (
        <div className="navbar bg-accent text-white mt-5 rounded-sm px-5 max-w-[1320px] m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  w-52">
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
                <Link to='/login' className="">Login</Link>
                <p className='mx-1'>|</p>
                <Link to='/register' className="">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;