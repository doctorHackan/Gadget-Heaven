import React,{useState} from 'react';
import Gadgets from '../../Utils/Gadgets';
import GadgetCard from '../GadgetCard/GadgetCard';
import Query from '../Query/Query';

const Home = () => {

    // console.log(Gadgets);
    const [gadgets,setGadgets] = useState(Gadgets);

    const handleGadgetChange = (newGadgets)=>{
        setGadgets(newGadgets);
    }



    return (
      <div id='shop' className=' mt-70 max-w-[90%] mx-auto text-black'>
        <h2 className='text-black text-4xl text-center mb-8'>Events capturing cutting edge gadgets</h2>
        <div className='flex gap-4 flex-1'>
            <div className=''>
                <Query handleGadgetChange={handleGadgetChange} ></Query>
            </div>
            <div className='flex-3 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            gadgets.map(gadget=><GadgetCard hint={'shop'} key={gadget.id} gadget={gadget} />)
        }
      </div>
        </div>
      </div>
    );
};

export default Home;