import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import facebook from '../../../assets/images/phone/icons8-facebook-24.png'
import linkedin from '../../../assets/images/phone/icons8-linkedin-24 (1).png'
import youtube from '../../../assets/images/phone/icons8-youtube-logo-24.png'
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/blog">Blog</Link></li>

        {user?.uid ?
            <>
                <li className=''><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign out</button></li>

            </>
            :
            <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </>

        }
    </React.Fragment>



    return (
        <div>
            {/* 1st navbar start */}
            <div className="navbar bg-rose-900 rounded-3xl text-white flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-900 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex lg:mr-4">
                    <ul className="menu menu-horizontal p-0">
                        <img className='lg:mr-2' src={facebook} alt="" />
                        <img className='lg:mr-2' src={linkedin} alt="" />

                        <img className='lg:mr-2' src={youtube} alt="" />
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            {/* 1st navbar end */}
            <div className="mt-3 navbar flex justify-between text-red-900 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="items menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-900 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="normal-case text-xl my-2"><span className='sweet text-3xl ml-5'>Sweet Repeats</span></Link>
                </div>
                <div className="items navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;