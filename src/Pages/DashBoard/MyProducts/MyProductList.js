import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProductList = ({ category, handleDelete, handleAdvertise, setData, refetch }) => {

    const { _id, advertise, description, condition_type, image, location, original_price, posted_time, product_name, resale_price, seller_name, years_of_use } = category;

    const { loading } = useContext(AuthContext)



    return (
        <div>
            {/* new design start */}
            <table className="table w-full">


                <tr>
                    <th>{product_name}</th>
                    <th>{original_price}</th>
                    <th>{resale_price}</th>
                    <th>{location}</th>
                    <th> <button className='btn' onClick={() => handleDelete(_id)}>Delete</button></th>
                    <th>
                        {
                            advertise ? <button className='btn btn-primary'>Advertised</button>
                                :
                                <button className='btn w-60 font-bold mt-3' onClick={() => handleAdvertise(_id)}>Advertise</button>
                        }
                    </th>

                </tr>



            </table>


            {/* new design end */}
            {/* <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-12 mx-12'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">

                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center"><strong>{product_name}</strong></h2>
                        <h2 className="card-title">Seller Name:{seller_name}</h2>
                        <h2 className="card-title">Post Time: {posted_time}</h2>
                        <h2 className="card-title">Condition: {condition_type}</h2>
                        <h2 className="card-title">Year Of Use:{years_of_use}</h2>
                        <h2 className="card-title">Location: {location}</h2>
                        <h2 className="card-title">Original Price: <strong>{original_price}$</strong></h2>
                        <h2 className="card-title">Reseal Price: <strong> {resale_price}$</strong></h2>
                        <p>{description}</p>

                        <div className="card-actions justify-end">

                            <div className='text-center'>
                                <button className='btn w-60 font-bold mt-3' onClick={() => handleDelete(_id)}>Delete</button>
                                {
                                    advertise ? <button className='btn btn-primary'>Advertised</button>
                                        :
                                        <button className='btn w-60 font-bold mt-3' onClick={() => handleAdvertise(_id)}>Advertise</button>
                                }
                            </div>
                        </div>
                      
                    </div>
                </div>

               
            </div> */}
        </div>

    );
};

export default MyProductList;