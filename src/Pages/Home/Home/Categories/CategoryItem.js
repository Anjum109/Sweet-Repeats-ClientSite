import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriItem.css'

const CategoryItem = ({ category }) => {

    return (

        <div className='categori-item border border-red-900 bg-red-900 text-center p-24 font-bold shadow-lg shadow-red-400 text-3xl rounded-3xl'>
            <Link to={`/categories/${category._id}`}> {category.category_name}</Link>
        </div>

    );
};

export default CategoryItem;