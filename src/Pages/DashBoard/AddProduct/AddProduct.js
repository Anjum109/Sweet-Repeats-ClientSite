import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { format } from 'date-fns';



const AddProduct = () => {

    const { user } = useContext(AuthContext)
    const date = new Date()
    const posted_time = format(date, 'PP')
    const navigate = useNavigate()

    const handleAddToCard = (event) => {
        event.preventDefault();
        const form = event.target;
        const product_name = form.product_name.value;
        const category_name = form.category_name.value;
        const image = form.image.value;
        const original_price = form.original_price.value;
        const resale_price = form.resale_price.value;
        const years_of_use = form.years_of_use.value;
        const seller_name = form.seller_name.value;
        const location = form.location.value;
        const description = form.description.value;



        const booking = {
            product_name,
            category_name,
            image,
            original_price,
            resale_price,
            years_of_use,
            seller_name,
            location,
            description,
            posted_time,
            email: user.email
        }


        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Add confirm')
                    form.reset();

                }
                else {
                    toast.error(data.message)
                }

            })

    }




    // if (isLoading) {
    //     return <Loading></Loading>;
    // }
    return (
        <div>
            <div className='mb-6'>
                <h2 className='text-4xl text-center text-orange-500 font-bold my-4'>Add Products</h2>
                <div className='flex justify-center items-center'>
                    <div className='w-96 bg-gray-800 rounded-md p-7'>
                        <form onSubmit={handleAddToCard}>

                            <select name='category_name' className="select select-sm select-bordered w-full max-w-xs my-2">
                                <option disabled selected>Category</option>
                                <option value="Cook Ware">Cook Ware</option>
                                <option value="Cook Tools">Cook Tools</option>
                                <option value="Electrics">Electrics</option>

                            </select>
                            <input type="text" name='image' placeholder="Photo Url" className="input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='product_name' placeholder="product_name" className="input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='original_price' placeholder="OriginalPrice" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='resale_price' placeholder="ResalePrice" className="input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='years_of_use' placeholder="Year Of Use" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='seller_name' placeholder="Seller Name" className="input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='location' placeholder="location" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                            <textarea name='description' className="textarea textarea-bordered " cols="42" rows="4" placeholder="description"></textarea>
                            <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;