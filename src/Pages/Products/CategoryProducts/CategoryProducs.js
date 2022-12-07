import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CategoryProducs = ({ product, setData }) => {


    const { description, image, location, advertising, original_price, posted_time, condition_type, product_name, resale_price, seller_name, years_of_use, _id } = product;



    const handleReport = id => {
        fetch(`https://sweet-repeates-server.vercel.app/reportproduct/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('succefully report done')
            })
    }

    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
                <figure><img src={image} alt="" /></figure>
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
                    <div className=" flex card-actions justify-end">

                        <label
                            onClick={() => setData(product)}
                            htmlFor="booking-modal"
                            className="btn bg-red-900 text-white w-full">Book now  </label>
                        <label
                            onClick={() => handleReport(_id)}
                            htmlFor="booking-modal"
                            className="btn bg-red-900 text-white w-full">Report</label>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default CategoryProducs;