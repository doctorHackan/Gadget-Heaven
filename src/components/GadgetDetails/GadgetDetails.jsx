import React from 'react';
import { useParams } from 'react-router';
import Gadgets from '../../Utils/Gadgets';
import AddToCart from '../AddToCart/AddToCart';

const GadgetDetails = () => {

  const parameter = useParams();
  const id = parameter.gadgetId;
  const item = Gadgets.find(ele=>ele.id==id);

  const {name,price,category,brand} = item;

  return (
    <div>
      <title>{`Gadget-${id}`}</title>
      <div className='max-w-[90%] bg-violet-800 rounded-b-2xl relative container mx-auto'>
        <div className='text-center pt-4 pb-40'>
          <h2 className='text-3xl font-bold'>Product Details</h2>
          <p>Explore the latest gadgets that will take your experiences to the next level in the world of digital science and technology.</p>
        </div>
        <div className='bg-[rgba(255,255,255,1)] border-2 border-white rounded-2xl absolute -bottom-55 md:left-1/2 md:-translate-x-1/2 p-4 text-center w-fit'>
          
          <div className='h-[400px] text-black w-[700px]'>
            <h2 className='text-4xl mb-2 font-bold'>{name}</h2>
            <h3 className='text-2xl mb-2'>{category}</h3>
            <p className='text-xl mb-2 font-bold'>{brand}</p>
            <p className='mb-2'>{price}$</p>

            <AddToCart id={id}></AddToCart>
            
          </div>
        </div>
      </div>
      <div className='container mx-auto text-black mt-70 max-w-[90%] text-center'>
        <h3 className='text-4xl font-bold'>Next comes the footer</h3>
      </div>
    </div>
  );
};

export default GadgetDetails;