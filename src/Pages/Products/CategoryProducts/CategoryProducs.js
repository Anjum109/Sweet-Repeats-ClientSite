import React, { useState } from 'react';

const CategoryProducs = ({ product, setData }) => {


    const { description, gender, image, location, original_price, posted_time, condition_type, product_name, rating, resale_price, seller_name, years_of_use } = product;
    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center"><strong>{product_name}</strong></h2>
                    <h2 className="card-title">Seller Name:{seller_name}</h2>
                    <h2 className="card-title">Post Time: {posted_time}</h2>
                    <h2 className="card-title">Condition: {condition_type}</h2>
                    <h2 className="card-title">Year Of Use:{years_of_use}</h2>
                    <h2 className="card-title">Location: {location}</h2>
                    <h2 className="card-title">Original Price: <strong>{original_price}$</strong></h2>
                    <h2 className="card-title">Reseal Price: <strong> {resale_price}$</strong></h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">

                        <label
                            onClick={() => setData(product)}
                            htmlFor="booking-modal"
                            className="btn bg-red-900 text-white w-full">Book now  </label>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col mb-5 ml-5 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{product_name}</h2>
                    <p className="text-sm dark:text-gray-400">{description}</p>
                </div>
                <div className="flex space-x-4">
                    <img alt="" src={image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Sellar Name:{seller_name}</a>
                        <span className="text-xm dark:text-gray-400">Post Time: {posted_time}</span>
                        <span className="text-xm dark:text-gray-400">Condition Type: {condition_type}</span>
                        <span className=" text-xm dark:text-gray-400">Use: {years_of_use} Years</span>
                        <span className=" text-xm dark:text-gray-400">Location: {location}</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                        <span className='text-xm'>OriginalPirce:{original_price}$</span>
                        <span className='text-xm'>ResalePirce: {resale_price}$</span>

                    </div>
                </div>
                <div className='text-center'>
                    <label
                        onClick={() => setData(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary">Book now
                    </label>
                </div>
            </div> */}
        </div >
    );
};

export default CategoryProducs;