import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriItem.css'

import { motion } from "framer-motion"
const CategoryItem = ({ category }) => {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-center"
        >
            <div className='categori-item border border-red-900 bg-red-900 text-center p-24 font-bold shadow-lg shadow-red-400 text-3xl rounded-3xl'>
                <Link to={`/categories/${category._id}`}> {category.category_name}</Link>
            </div></motion.div>

    );
};

export default CategoryItem;