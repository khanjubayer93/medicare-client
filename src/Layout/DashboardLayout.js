import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Navbar from '../Pages/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex">
                   <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;