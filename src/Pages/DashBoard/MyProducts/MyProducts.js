import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyProductList from './MyProductList';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    // const [myproduct, setMyProduct] = useState([]);
    // const [remaining, setremaining] = useState([]);

    const { data: myProduct = [], refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch(`https://sweet-repeates-server.vercel.app/addproducts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleAdvertise = id => {
        fetch(`https://sweet-repeates-server.vercel.app/advertiseproduct/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('This Product Advertise is Start');
                    refetch()
                }

            })
    }




    const handleDelete = id => {
        const url = `https://sweet-repeates-server.vercel.app/addproducts/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingProducts = myProduct.filter(product => product._id === id)
                    // setMyProduct(remainingProducts);
                    toast.success("successfully delete");
                    refetch();
                }
                console.log(data)
            })
    }

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Product Name</th>
                        <th>Original Price</th>
                        <th>Resale Price</th>
                        <th>Location</th>
                        <th>Delete</th>
                        <th>Advertise</th>
                    </tr></thead></table>

            {
                myProduct.map(product => <MyProductList
                    key={product._id}
                    category={product}
                    handleDelete={handleDelete}
                    handleAdvertise={handleAdvertise}
                    refetch={refetch}
                ></MyProductList>)
            }
        </div>
    );
};

export default MyProducts;