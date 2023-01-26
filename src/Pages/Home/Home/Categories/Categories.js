import React, { useEffect, useState } from 'react';
import './categories.css'
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://sweet-repeates-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mx-12'>
            <h2 className='text-center font-bold text-4xl text-red-900 mb-12'>CATEGORIES</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {
                    categories.map(category => <CategoryItem key={category._id}
                        category={category}>

                    </CategoryItem>)
                }

            </div ></div>
    );
};

export default Categories;