import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AllSellers = () => {

    const [verify, setVerify] = useState(false);
    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('https://sweet-repeates-server.vercel.app/allsellers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = id => {
        console.log(id)
        const proceed = window.confirm("Are you sure, you want to delete this seller?")
        if (proceed) {
            fetch(`https://sweet-repeates-server.vercel.app/allsellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        toast.success("Seller Delete Successfully")
                        refetch();
                    }
                })
        }
    }

    const handleMakeSeller = id => {
        console.log('done');
        fetch(`https://sweet-repeates-server.vercel.app/users/Seller/${id}`, {
            method: "PUT",

            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Seller verified Successfully")
                    refetch();
                }
            })

    }

    return (
        <div className='p-5'>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allsellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    {
                                        seller.verify = "verified" ? (
                                            <button className='btn bg-red-900 text-white'> verified</button>
                                        ) :
                                            (
                                                <button onClick={() => handleMakeSeller(seller._id)} className='btn btn-primary'>unverified</button>
                                            )
                                    }
                                </td>
                                {/* <td>
                                    {!seller.verify ? <button
                                        onclick={() => { handleMakeSeller(seller._id) }}
                                        className='btn btn-primary'>Make Verify</button> : "Verified"}
                                </td> */}
                                <td>
                                    <button
                                        onClick={() => { handleDeleteSeller(seller._id) }}
                                        className="btn bg-red-900 text-white"
                                    > Delete Seller
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllSellers;