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
        const posted_time = form.posted_time.value;
        const condition_type = form.condition_type.value;
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
            condition_type,
            email: user.email
        }


        fetch('https://sweet-repeates-server.vercel.app/category', {
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
                    navigate('/dashboard/myproducts')
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
                <h2 className='text-4xl text-center font-bold my-4'>Add Products</h2>
                <div className='flex justify-center items-center m-5 pl-5'>
                    <div className='w-full rounded-md p-12 m-5'>
                        <form onSubmit={handleAddToCard}>

                            <select name='category_name' className="select select-sm select-bordered w-full max-w-xs my-2 mx-5">

                                <option disabled selected value="Cook Ware">Cook Ware</option>
                                <option value="Cook Tools">Cook Tools</option>
                                <option value="Electrics">Electrics</option>

                            </select>
                            <input type="text" name='image' placeholder="Photo Url" className="input input-sm input-bordered w-full mx-5 max-w-xs" />
                            <input type="text" name='product_name' placeholder="product_name" className="input input-sm input-bordered w-full max-w-xs mx-5 mt-2" />
                            <input type="text" name='original_price' placeholder="OriginalPrice" className=" my-2 input input-sm input-bordered w-full max-w-xs mx-5" />
                            <input type="text" name='resale_price' placeholder="ResalePrice" className="input mx-5 input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='years_of_use' placeholder="Year Of Use" className="mx-5 my-2 input input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='seller_name' placeholder="Seller Name" className="input mx-5 input-sm input-bordered w-full max-w-xs" />
                            <input type="text" name='posted_time' placeholder="posted_time" className="input mx-5 input-sm input-bordered w-full max-w-xs" />
                            <select name='condition_type' className="select select-sm select-bordered w-full max-w-xs my-2 mx-5">

                                <option disabled selected value="Good">Good</option>
                                <option value="Best">Best</option>
                                <option value="Excellent">Excellent</option>

                            </select>
                            <input type="text" name='location' placeholder="location" className=" my-2 input input-sm input-bordered w-full max-w-xs mx-5" />
                            <textarea name='description' className="textarea textarea-bordered mx-5 " cols="42" rows="4" placeholder="description"></textarea>
                            <input type="submit" className='w-full bg-red-900 text-white p-4 mt-5' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;