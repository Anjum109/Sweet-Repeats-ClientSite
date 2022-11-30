import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyProductList from './MyProductList';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [myproduct, setMyProduct] = useState([]);
    useEffect(() => {
        const url = `https://sweet-repeates-server.vercel.app/addproducts?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
            })
    }, [])
    return (
        <div>
            {
                myproduct.map(product => <MyProductList
                    key={product._id}
                    category={product}
                ></MyProductList>)
            }
        </div>
    );
};

export default MyProducts;