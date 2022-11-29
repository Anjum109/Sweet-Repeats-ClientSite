import React, { useEffect, useState } from 'react';
import './categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='m-12'>
            <h2 className='m-5 text-center  text-2xl lg:text-4xl p-5 '>Categories</h2>
            <div className=' grid grid-rows-1 gap-6'>

                {
                    categories.map(category => <p className='button-78' key={category._id}
                        category={category}>
                        <Link to={`/categories/${category._id}`}> {category.category_name}</Link>
                    </p>)
                }

            </div ></div>
    );
};

export default Categories;