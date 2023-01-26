import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle.js/useTitle';
import BookNow from '../BookNow/BookNow';
import CategoryProducs from '../CategoryProducts/CategoryProducs';


const Products = () => {
    const products = useLoaderData();
    const [data, setData] = useState(null);
    const { user } = useContext(AuthContext);
    useTitle('Products');

    console.log(products);
    return (
        <div className='grid grid-cols-1'>

            {
                products.map(product => <CategoryProducs
                    product={product}
                    key={product._id}
                    setData={setData}
                ></CategoryProducs>)
            }
            {
                data && <BookNow
                    data={data}
                    user={user}
                    setData={setData}
                ></BookNow>
            }


        </div >
    );
};

export default Products;