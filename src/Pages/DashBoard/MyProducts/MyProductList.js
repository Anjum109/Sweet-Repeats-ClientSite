import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProductList = ({ category }) => {

    const { _id, description, image, location, original_price, posted_time, product_name, resale_price, seller_name, years_of_use } = category;

    const { loading } = useContext(AuthContext)

    const handleDelete = id => {
        const url = `http://localhost:5000/addproducts/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (

        <div>
            <div className="flex flex-col mb-5 ml-5 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <p className="text-sm dark:text-gray-400">{description}</p>
                </div>
                <div className="flex space-x-4">
                    <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Sellar Name:{seller_name}</a>
                        <span className="text-xm dark:text-gray-400">Model Name: {product_name}</span>
                        <span className="text-xm dark:text-gray-400">Post Time: {posted_time}</span>
                        <span className=" text-xm dark:text-gray-400">Use: {years_of_use} Years</span>
                        <span className=" text-xm dark:text-gray-400">Location: {location}</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <span className='text-xm'>OriginalPirce:{original_price}</span>
                        <span className='text-xm'>ResalePirce: {resale_price}</span>

                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn w-60 font-bold mt-3' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div >
    );
};

export default MyProductList;