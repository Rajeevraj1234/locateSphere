import { BiSolidQuoteLeft } from "react-icons/bi";

import {motion} from "framer-motion"

const Testimonials = () => {
  return (
    <div 
    data-scroll
    data-scroll-speed="-0.1"
    className="h-full pt-20 xl:w-[1905px] bg-[#EAE7DD]  pb-[9rem]">
      <div>
        <h1 
        data-scroll
        data-scroll-section
        data-scroll-speed="0.2"
        className="text-center text-[9rem] font-semibold text-[#594434] tracking-widest mb-[7rem] font-heading">
          TESTIMONIALS
        </h1>
        <div className=" flex justify-center items-center gap-10 w-full px-20 ">
            <motion.div 
            initial={{y:0}}
            whileHover={{y:-20}}
            transition={{type:"spring", damping:6}}
            className="h-[250px] w-[400px]  p-5 rounded-3xl  bg-green-900    shadow-xl">
                <BiSolidQuoteLeft  className="text-3xl text-white"/>
                <p className="mt-3 text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In repudiandae debitis quasi doloremque ratione sunt consequatur inventore dolor assumenda accusamus...</p>
                <p className="text-right translate-y-9 text-white font-bold">-Jhon Doe</p>
            </motion.div>
            <motion.div 
            initial={{y:0}}
            whileHover={{y:-20}}
            transition={{type:"spring", damping:6}}
            className="h-[250px] w-[400px]  p-5 rounded-3xl  bg-green-900 shadow-xl">
                <BiSolidQuoteLeft  className="text-3xl text-white"/>
                <p className="mt-3 text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In repudiandae debitis quasi doloremque ratione sunt consequatur inventore dolor assumenda accusamus...</p>
                <p className="text-right translate-y-9 text-white font-bold">-Jhon Doe</p>
            </motion.div>
            <motion.div 
            initial={{y:0}}
            whileHover={{y:-20}}
            transition={{type:"spring", damping:6}}
            className="h-[250px] w-[400px]  p-5 rounded-3xl  bg-green-900 shadow-xl">
                <BiSolidQuoteLeft  className="text-3xl text-white"/>
                <p className="mt-3 text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In repudiandae debitis quasi doloremque ratione sunt consequatur inventore dolor assumenda accusamus...</p>
                <p className="text-right translate-y-9 text-white font-bold">-Jhon Doe</p>
            </motion.div>
            <motion.div 
            initial={{y:0}}
            whileHover={{y:-20}}
            transition={{type:"spring", damping:6}}
            className="h-[250px] w-[400px]  p-5 rounded-3xl  bg-green-900 shadow-xl">
                <BiSolidQuoteLeft  className="text-3xl text-white"/>
                <p className="mt-3 text-white ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In repudiandae debitis quasi doloremque ratione sunt consequatur inventore dolor assumenda accusamus...</p>
                <p className="text-right translate-y-9 text-white font-bold">-Jhon Doe</p>
            </motion.div>
            
            
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
