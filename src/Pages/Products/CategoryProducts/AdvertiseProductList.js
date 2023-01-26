import React from 'react';
import toast from 'react-hot-toast';
import './advertise.css'

const AdvertiseProductList = ({ product, setData }) => {
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
            {/* new design */}
            <div>
                <div className="container">

                    <div className="card-card">
                        <div className="card__image-container">
                            <img className="card__image" src={image} alt="" />
                        </div>
                        <div className="card__content">
                            <h1 className="card__title text-center text-xl text-bold mb-1">{product_name}</h1>
                            <h1 className="card__title">Seller Name: {seller_name}</h1>
                            <h2 className="">Original Price: <strong>{original_price}$</strong></h2>
                            <h2 className="">Reseal Price: <strong> {resale_price}$</strong></h2>
                        </div>
                        <div className=" flex card-actions justify-between mt-5">

                            <div>
                                <label
                                    onClick={() => setData(product)}
                                    htmlFor="booking-modal"
                                    className="button btn border-white shadow-xl shadow-slate-400 w-full bg-white text-black p-5">Book now  </label>
                            </div>
                            <div>
                                <label
                                    onClick={() => handleReport(_id)}
                                    htmlFor="booking-modal"
                                    className="button btn border-white shadow-xl shadow-slate-400 w-full bg-white text-black">Report</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* new design end */}
            {/* <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl"><strong>{product_name}</strong></h2>
                    <h2 className=" text-center">Seller Name:{seller_name}</h2>
                    <div className='flex justify-between'>

                    </div>

                    <div className=" flex card-actions justify-between pb-0">

                        <div className=''>
                            <label
                                onClick={() => setData(product)}
                                htmlFor="booking-modal"
                                className="btn bg-zinc-800 text-white w-full">Book now  </label>
                        </div>
                        <div>
                            <label
                                onClick={() => handleReport(_id)}
                                htmlFor="booking-modal"
                                className="btn bg-zinc-800 text-white w-full">Report</label>
                        </div>
                    </div>
                </div>
            </div> */}


        </div >
    );
};

export default AdvertiseProductList;