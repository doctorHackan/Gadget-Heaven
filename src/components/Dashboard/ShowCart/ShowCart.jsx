import React from 'react';
import { useOutletContext } from 'react-router';
import GadgetCard from '../../GadgetCard/GadgetCard';
import Gadgets from '../../../Utils/Gadgets';

const ShowCart = () => {

    const { cart } = useOutletContext();
    console.log(cart);
    const findItem = (iid) => Gadgets.find(ele => ele.id == iid);
    const gadgets = cart.map(x => findItem(x));
    console.log(gadgets);

    return (
        <div>
            <h3 className="text-2xl mb-8 text-center text-black">Cart</h3>
            <div className='max-w-[80%] container text-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {
                    gadgets.map(gadget => <GadgetCard hint={"cart"} key={gadget.id} gadget={gadget} ></GadgetCard>)
                }

            </div>
        </div>
    );
};

export default ShowCart;