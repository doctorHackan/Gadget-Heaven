import React from 'react';
import BannerImage from '../../assets/banner.jpg';

const Hero = () => {
    return (
        <div className='max-w-[90%] bg-violet-800 rounded-b-2xl relative container mx-auto'>
            <div className='text-center pt-4 pb-40'>
                <h2 className='max-w-[70%] container mx-auto text-center text-4xl mb-5'>Upgrade Your Tech Accessories with Our Gadget Accessories</h2>
                <p className='text-xl max-w-[60%] container mx-auto text-center mb-5'>Explore the latest gadgets that will take your experiences to the next level in the world of digital science and technology.</p>
                <a className='btn btn-outline' href="#shop">Shop Now</a>
            </div>
            <div className='bg-[rgba(255,255,255,0.4)] border-2 border-white rounded-2xl absolute -bottom-55 md:left-1/2 md:-translate-x-1/2 p-4 text-center w-fit'>
                <img className='object-cover max-w-full rounded-2xl h-[400px] w-[700px]' src={BannerImage} alt="gadget banner photo" />
            </div>
        </div>
    );
};

export default Hero;