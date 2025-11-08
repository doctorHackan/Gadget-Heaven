import React from 'react';
import ShowCart from './ShowCart/ShowCart';
import { useOutletContext } from 'react-router';
import ShowWish from '../ShowWish/ShowWish';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { cartOn, handleCartOn, handleWishOn, cart, setWishlist, setCart } = useOutletContext();
  return (
    <div className=''>
      <title>Dashboard|Gadget-Heaven</title>
      <div className='max-w-[90%] bg-violet-800 rounded-b-2xl relative container mb-10 mx-auto'>
        <div className='text-center pt-4 pb-4'>
          <h2 className='text-4xl font-bold mb-5'>DashBoard</h2>
          <p className='text-2xl max-w-[60%] container mx-auto text-center mb-5'>Explore the latest gadgets that will take your experiences to the next level in the world of digital science and technology.</p>
          <button onClick={handleCartOn} className='btn mb-5 text-violet-800 bg-white px-7 hover:bg-transparent hover:text-white rounded-4xl mr-3 py-1'>Cart</button>
          <button onClick={handleWishOn} className='btn text-violet-800 hover:bg-transparent hover:text-white bg-white py-1 rounded-4xl mb-5'>Wishlist</button>
        </div>
      </div>

      {
        cartOn ? <ShowCart></ShowCart> : <ShowWish></ShowWish>
      }

      <div className='mt-10 text-center'>
        <button className='btn btn-dash hover:bg-violet-800 hover:text-white text-black' onClick={() => {
          if (cart.length) {
            setCart([]);
            setWishlist([]);
            toast("You have successfully purchased", {
              position: 'top-center',
            })
          }
        }}>Purchase</button>
      </div>

    </div>
  );
};

export default Dashboard;