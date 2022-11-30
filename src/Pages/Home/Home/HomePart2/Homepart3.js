import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/images/productpic//1.jpg'
import img2 from '../../../../assets/images/productpic//2.jpg'
import img3 from '../../../../assets/images/productpic//3.jpg'
import img4 from '../../../../assets/images/productpic//4.jpg'
import img5 from '../../../../assets/images/productpic/kitchen-knife-pink-background_563818-4752.jpg'
import img6 from '../../../../assets/images/productpic//6.jpg'

const Homepart3 = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/room-interior-design_23-2148899451.jpg?w=1060&t=st=1669795189~exp=1669795789~hmac=ad256697e71233f2c098b48f54cfd8899cefe85d6cb8d61ec458c4d8f86cb0c7")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold  text-red-900 rounded-lg bg-red-100 p-5">Company Intruduction</h1>
                        <p className="mb-5">Sweet Repeats established in 2002,is a large and comprehensive production enterprise that produces scissors 、cast knife、 kitchen knives 、non-stick knife 、damascus knife and other household kitchen hardwares.Our company is located in ABZ,the capital of knives and scissors in ABZ.Besides,we have owned production base of more than 20000 square meters. Our products have won a sincere trust of our customers and enjoyed a high reputation among the international markets. We offer OEM, ODM service, welcome to our factory for business cooperation.</p>
                        <Link to='/' className="btn bg-red-900 text-white">Get Started</Link>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='m-5 text-center text-2xl lg:text-3xl p-5 bg-red-900 text-white'>Some OF Our Product Pictures</h2>
                <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 p-5 m-5'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img3} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img4} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img5} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img6} alt="Shoes" /></figure>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Homepart3;