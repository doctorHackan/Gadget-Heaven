import React from 'react';
import { Link, NavLink } from 'react-router';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


const NavBar = ({ cart,wishlist,handleCartOn,handleWishOn }) => {

    // console.log(cart);

    const links = (
        <>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
    );

    return (
        <div className="mt-4 navbar bg-violet-800 max-w-[90%] container mx-auto rounded-t-2xl shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link onClick={handleCartOn} to='/dashboard'>
                    <div className='relative p-2 rounded-full bg-white text-black'>
                        <MdOutlineShoppingCart>
                        </MdOutlineShoppingCart>
                        <span className='text-white text-sm absolute -top-3 -left-1'>{cart.length?cart.length:null}</span>
                    </div>
                </Link>

                <Link onClick={handleWishOn} to='/dashboard'>
                <div className='relative p-2 rounded-full bg-white text-gray-700'>
                        <FaHeart  className='text-violet-700'/>
                        <span className='text-white text-sm absolute -top-3 -left-1'>{wishlist.length?wishlist.length:null}</span>
                    </div>
                
                </Link>
            </div>
        </div>
    );
};

export default NavBar;