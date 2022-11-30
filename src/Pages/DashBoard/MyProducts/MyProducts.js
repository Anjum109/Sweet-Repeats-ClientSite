import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyProductList from './MyProductList';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [myproduct, setMyProduct] = useState([]);
    // const [remaining, setremaining] = useState([]);
    useEffect(() => {
        const url = `https://sweet-repeates-server.vercel.app/addproducts?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyProduct(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const url = `https://sweet-repeates-server.vercel.app/addproducts/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingProducts = myproduct.filter(product => product._id === id)
                    setMyProduct(remainingProducts);
                    toast.success("successfully delete");
                }
                console.log(data)
            })
    }

    return (
        <div>
            {
                myproduct.map(product => <MyProductList
                    key={product._id}
                    category={product}
                    handleDelete={handleDelete}
                ></MyProductList>)
            }
        </div>
    );
};

export default MyProducts;