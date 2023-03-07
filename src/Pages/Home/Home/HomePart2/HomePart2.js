import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../../assets/images/home/cooking-gadgets-vl-2x1-211223_0.jpg'
import { motion } from "framer-motion"
const HomePart2 = () => {
    return (

        <div className="bg-base-200 mt-12 mb-6">
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
                <div className="flex flex-col lg:flex-row p-12">
                    <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-12 lg:mt-5 sm:mt-12'>
                        <h1 className="lg:text-5xl text-2xl mt-5 font-bold"> DECORATE YOUR KITCHEN WITH YOUR NEEDS!!</h1>
                        <p className="py-6">We are provide you a better quality products </p>
                        <button>Lear More About Our Website <Link className='text-primary'>Click here</Link>
                        </button>
                    </div>
                </div></motion.div>

        </div>

    );
};

export default HomePart2;