import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayOut = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            !isAdmin && !isSeller && <li className='mt-2'><Link to='/dashboard/myorders'>My Orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li className='mt-2'><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='mt-2'><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li className='mt-2'><Link to='/dashboard/addproducts'>Add a Product</Link></li>
                                <li className='mt-2'><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayOut;