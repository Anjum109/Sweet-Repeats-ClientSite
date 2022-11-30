import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProductList = ({ category }) => {

    const { _id, description, condition_type, image, location, original_price, posted_time, product_name, resale_price, seller_name, years_of_use } = category;

    const { loading } = useContext(AuthContext)

    const handleDelete = id => {
        const url = `https://sweet-repeates-server.vercel.app/addproducts/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-12 mx-12'>
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
                    <div className="card-actions justify-end">

                        <label
                            onClick={() => handleDelete(_id)}
                            htmlFor="booking-modal"
                            className="btn bg-red-900 text-white w-full">Book now  </label>
                    </div>
                </div>
            </div>

            {/* <div className='text-center'>
                    <button className='btn w-60 font-bold mt-3' >Delete</button>
                </div> */}
        </div>

    );
};

export default MyProductList;