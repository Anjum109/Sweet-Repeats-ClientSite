import React from 'react';
import image from '../../../../assets/images/phone/png-transparent-illustration-ingredients-kitchen-miscellaneous-kitchen-food-thumbnail-removebg-preview.png'
import './Banner.css'
import { motion } from "framer-motion"
const Banner = () => {

    // const bannerData = [
    //     {
    //         image: img1,
    //         prev: 6,
    //         id: 1,
    //         next: 2
    //     },
    //     {
    //         image: img2,
    //         prev: 1,
    //         id: 2,
    //         next: 1
    //     }
    // ]

    return (
        <div className='m-5 grid grid-cols-1 lg:grid-cols-2 border border-white shadow-2xl shadow-slate-300 rounded-xl p-12 mx-16'>
            <motion.div animate={{ x: 70 }}
                transition={{ ease: "easeOut", duration: 3 }} >
                <div className='flex justify-center align-center'>
                    <div className='lg:ml-12'> <h1 className='banner text-2xl mt-2 lg:mt-14 lg:text-5xl'>THE PLACE TO BE FOR YOUR KITCHEN</h1>
                        <p className='mt-5 text-xl'>Purchasing the kitchenware is a step in the right direction. Enjoy the art of cooking.</p></div>
                </div></motion.div>
            <div className='ml-12'>
                <motion.div animate={{ y: 20 }}
                    transition={{ ease: "easeIn", duration: 3 }} >
                    <img src={image} alt="" /></motion.div>
            </div>

        </div>
    );
};

export default Banner;