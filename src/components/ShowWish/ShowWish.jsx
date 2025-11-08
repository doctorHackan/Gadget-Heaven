import React from 'react';
import { useOutletContext } from 'react-router';
import GadgetCard from '../GadgetCard/GadgetCard';
import Gadgets from '../../Utils/Gadgets';

const ShowWish = () => {

    const { wishlist } = useOutletContext();
    console.log(wishlist);
    const findItem = (id) => Gadgets.find(ele => ele.id == id);
    const gadgets = wishlist.map(id => findItem(id));

    return (
        <div>
            <h3 className="text-2xl mb-8 text-center text-black">Wish List</h3>
            <div className='max-w-[80%] container text-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {
                    gadgets.map(gadget => <GadgetCard hint={"wish"} key={gadget.id} gadget={gadget} ></GadgetCard>)
                }

            </div>
        </div>
    );
};

export default ShowWish;