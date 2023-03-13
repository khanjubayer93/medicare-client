import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../CustomHooks/useAdmin';
import { AuthContext } from '../Pages/Context/AuthProvider';
import Footer from '../Pages/Footer';
import Navbar from '../Pages/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mx-8">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-700 text-white">
                        <li><Link to='/dashboard'>My Appoinment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/alluser'>All User</Link></li>
                                <li><Link to='/dashboard/add_doctor'>Add doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manege Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;