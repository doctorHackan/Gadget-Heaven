import React from 'react';
import { useOutletContext } from 'react-router';

const AddToCart = ({id}) => {

    const {handleCart,handleWishlist} = useOutletContext();


    return (
        <div>
            <button onClick={()=>{handleCart(id)}} className='btn mr-2 btn-outline'>Add to cart</button>
            <button onClick={()=>{handleWishlist(id)}} className='btn btn-outline'>Add to wishlist</button>
        </div>
    );
};

export default AddToCart;