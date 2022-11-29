import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllSellers = () => {

    const { data: allsellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = id => {
        console.log(id)
        const proceed = window.confirm("Are you sure, you want to delete this seller?")
        if (proceed) {
            fetch(`http://localhost:5000/allsellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deleteCount > 0) {
                        toast.success("Seller Delete Successfully")
                    }
                })
        }
    }

    // const handleMakeSeller = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: "PUT",

    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deleteCount > 0) {
    //                 toast.success("Seller Delete Successfully")
    //                 refetch();
    //             }
    //         })

    // }

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
                                {/* <td><button
                                    onclick={() => { handleMakeSeller(seller._id) }}
                                    className='btn btn-primary'>Make Admin</button></td> */}
                                <td>
                                    <button
                                        onClick={() => { handleDeleteSeller(seller._id) }}
                                        className="btn btn-primary"
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