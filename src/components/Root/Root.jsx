import React,{useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import {getFromLS, addToLS} from '/src/Utils/LS';
import { ToastContainer,toast } from 'react-toastify';

const Root = () => {

  const [cart,setCart] = useState(getFromLS('cart'));
  const [wishlist,setWishlist] = useState(getFromLS('wishlist'));
  const [cartOn,setCartOn] = useState(true);
  const [wishOn,setWishOn] = useState(false);

  const handleCartOn = ()=>{
    if(!cartOn){
      setCartOn(true);
      setWishOn(false);
    }
  }
  const handleWishOn = ()=>{
    if(!wishOn){
      setWishOn(true);
      setCartOn(false);
    }
  }


  const handleCart = (itemId)=>{
    const alreadyAdded = cart.find(ele=>ele==itemId);
    if(!alreadyAdded){
      const newCart = [...cart,itemId];
      setCart(newCart);
    }
    else{
      toast('Item already added in the cart',{position:'top-left'});
    }
  }

  const handleWishlist = (itemId)=>{
    const alreadyAdded = wishlist.find(ele=>ele==itemId);
    if(!alreadyAdded){
      const newWishlist = [...wishlist,itemId];
      setWishlist(newWishlist);
    }
    else{
      toast('Item already added in the wishlist',{position:'top-left'});
    }
  }

  useEffect(()=>{
    addToLS('cart',cart);
  },[cart]);

  useEffect(()=>{
    addToLS('wishlist',wishlist);
  },[wishlist]);



  return (
    <div className='text-white'>
      <ToastContainer></ToastContainer>
      <NavBar cart={cart} wishlist={wishlist} handleCartOn={handleCartOn} handleWishOn={handleWishOn}></NavBar>
      <Outlet context={{handleCart,setCart,setWishlist,handleWishlist,cart,wishlist,handleCartOn,handleWishOn,cartOn}}></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;