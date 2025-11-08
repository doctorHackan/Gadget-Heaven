import React, { useState } from 'react';
import Gadgets from '../../Utils/Gadgets';
import { FaLeaf } from 'react-icons/fa';

const Query = ({ handleGadgetChange }) => {

    const [all, setAll] = useState(true);
    const [mobile, setMobile] = useState(false);
    const [laptop, setLaptop] = useState(false);
    const [watch, setWatch] = useState(false);

    const handleAll = () => {
        if (!all) { handleGadgetChange(Gadgets); setAll(true); setMobile(false);
            setLaptop(false);
            setWatch(false);}

    }
    const handleMobile = () => {
        if (!mobile) {
            const newGadgets = Gadgets.filter(gadget => gadget.category.includes("Mobile"))
            // console.log(newGadgets);
            handleGadgetChange(newGadgets);
            setAll(false);
            setMobile(true);
            setLaptop(false);
            setWatch(false);
        }
    }
    const handleLaptop = () => {
        if (!laptop) {
            const newGadgets = Gadgets.filter(gadget => gadget.category.includes("Laptop"))
            handleGadgetChange(newGadgets);
            setLaptop(true);
            setAll(false);
            setMobile(false);
            setWatch(false);
        }
    }
    const handleWatch = () => {
        if (!watch) {
            const newGadgets = Gadgets.filter(gadget => gadget.category.includes("Watch"))
            handleGadgetChange(newGadgets);
            setWatch(true);
            setLaptop(false);
            setAll(false);
            setMobile(false);
        }
    }

    // const bgAll = {all && 'bg-violet-600'};

    return (
        <div className='flex flex-col gap-3'>
            <button onClick={handleAll} className={"btn "+(all?"bg-violet-700 text-white":null)}>All</button>
            <button onClick={handleMobile} className={"btn "+(mobile?"bg-violet-700 text-white":null)}>Mobile</button>
            <button onClick={handleLaptop} className={"btn "+(laptop?"bg-violet-700 text-white":null)}>Laptop</button>
            <button onClick={handleWatch} className={"btn "+(watch?"bg-violet-700 text-white":null)}>Smart Watch</button>
        </div>
    );
};

export default Query;