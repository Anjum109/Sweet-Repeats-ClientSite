import React from 'react';
import BannerItems from './BannerItems';
import img1 from '../../../../assets/images/BannerImage/image1.jpg'
import img2 from '../../../../assets/images/BannerImage/img2.png'

const Banner = () => {

    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 1
        }
    ]

    return (
        <div className="carousel w-full">

            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }



        </div >
    );
};

export default Banner;