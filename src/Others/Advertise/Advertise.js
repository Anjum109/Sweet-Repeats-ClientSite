
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

import BookNow from '../../Pages/Products/BookNow/BookNow';
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
        <div>
            <h2 className='text-5xl text-center mt-5 mb-5'>Advertise Products</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2   gap-3'>
                {
                    advertiseproduct.map(advertising => <CategoryProducs
                        key={advertising._id}
                        product={advertising}
                        setData={setData}

                    ></CategoryProducs>)
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