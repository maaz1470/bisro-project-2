import React from 'react';
import SectionTitle from '../../../shared/SectionTitle';
import FeaturedImg from './../../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading={'Check it out'} heading={'Featured Item'}  />
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 28, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus odit inventore saepe quisquam qui ad perspiciatis deleniti magni quis doloremque, rem quod numquam reiciendis, laudantium accusamus ipsum vel unde!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;