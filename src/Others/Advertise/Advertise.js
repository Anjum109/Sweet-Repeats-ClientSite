import { motion } from "framer-motion"
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import BookNow from '../../Pages/Products/BookNow/BookNow';
import AdvertiseProductList from '../../Pages/Products/CategoryProducts/AdvertiseProductList';
import CategoryProducs from '../../Pages/Products/CategoryProducts/CategoryProducs';




const Advertise = () => {
    const [data, setData] = useState(null);
    const { user } = useContext(AuthContext)
    const { data: advertiseproduct = [], refetch } = useQuery({
        queryKey: ['advertiseproduct'],
        queryFn: async () => {
            const res = await fetch('https://sweet-repeates-server.vercel.app/advertiseproduct/', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='mt-12'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-center w-full"
            >
                <h2 className='text-center font-bold text-4xl text-red-900'>ADVERTISE ITEMS</h2></motion.div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-5'>
                {
                    advertiseproduct.map(advertising => <AdvertiseProductList
                        key={advertising._id}
                        product={advertising}
                        setData={setData}

                    ></AdvertiseProductList>)
                }

            </div>
            <div>
                {
                    data &&
                    <BookNow setData={setData}
                        user={user}
                        data={data}

                    ></BookNow>
                }
            </div>
        </div>
    );
};

export default Advertise;