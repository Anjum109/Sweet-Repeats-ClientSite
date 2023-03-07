import React from 'react';
import toast from 'react-hot-toast';
import './advertise.css'
import { motion } from "framer-motion";
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

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 flex justify-center"
                    >
                        <div className="card-card p-5">
                            <div className="card__image-container flex w-full h-72">
                                <img className="card__image w-full border image-radius" src={image} alt="" />
                            </div>
                            <div className="card__content">
                                <h1 className="card__title text-center text-xl text-bold mb-1">{product_name}</h1>
                                <h1 className="card__title">Seller Name: {seller_name}</h1>
                                <h2 className="">Original Price: <strong>{original_price}$</strong></h2>
                                <h2 className="">Reseal Price: <strong> {resale_price}$</strong></h2>
                            </div>
                            <div className=" flex card-actions justify-between my-5">

                                <div>
                                    <label
                                        onClick={() => setData(product)}
                                        htmlFor="booking-modal"
                                        className=" border-white shadow-xl shadow-slate-400 rounded-xl w-full bg-red-900 text-red-100 p-3 hover:p-4 hover:bg-red-300 hover:text-red-900 font-bold">Book now  </label>
                                </div>
                                <div>
                                    <label
                                        onClick={() => handleReport(_id)}
                                        htmlFor="booking-modal"
                                        className=" border-white shadow-xl shadow-slate-400 w-full bg-red-900 text-red-100 text-red-100 p-3 rounded-xl hover:p-4 hover:bg-red-300 hover:text-red-900 font-bold">Report</label>
                                </div>
                            </div>
                        </div></motion.div>
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