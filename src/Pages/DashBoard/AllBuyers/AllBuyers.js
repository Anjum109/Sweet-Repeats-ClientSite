import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllBuyers = () => {

    const { data: allbuyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            const res = await fetch('https://sweet-repeates-server.vercel.app/allbuyers');
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
                        refetch()
                    }

                })
        }
    }

    return (
        <div className='p-5'>
            {/* <h2 className="text-3xl">All Users</h2> */}
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
                            allbuyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <button
                                        onClick={() => { handleDeleteSeller(buyer._id) }}
                                        className="btn bg-red-900 text-white"
                                    > Delete Seller
                                    </button>
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;