import React from 'react';
import { Link, useOutletContext } from 'react-router';

const GadgetCard = ({gadget,hint}) => {

    const {name,category,price,brand,id} = gadget;
    const {cart,wishlist,setCart,setWishlist} = useOutletContext();
    // console.log(name,category);

    const handleRemove = ()=>{
      if(hint==="cart"){
        const newCart = cart.filter(nid=>nid!=id);
        // console.log(newCart);
        setCart(newCart);
      }
      else if(hint==="wish"){
        const newWish = wishlist.filter(nid=>nid!=id);
        // console.log(newWish);
        setWishlist(newWish);
      }
    }

    return (
      <div className='border rounded-2xl border-gray-700 p-5 text-black text-center hover:bg-violet-600 hover:text-base-100 duration-800'>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <p>{price}$</p>
        <p>{brand}</p> 
        <Link onClick={handleRemove} to={hint==="shop"?`/home/${id}`:'#'} className='btn btn-outline'>
        {
          hint==="shop"?'Show Details':'Remove'
        }
        </Link>
      </div>
    );
};

export default GadgetCard;