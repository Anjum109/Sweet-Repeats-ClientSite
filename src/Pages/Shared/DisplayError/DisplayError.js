import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import img from '../../../assets/images/productpic/istockphoto-1222806141-612x612.jpg'

const DisplayError = () => {
    const error = useRouteError();

    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div className='text-center'>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
            <div className='w-full  m-5'>
                <img className='mx-auto mb-48' src={img} alt="" />
            </div>

        </div>
    );
};

export default DisplayError;