import LocomotiveScroll from "locomotive-scroll";

const Hero = () => {
  new LocomotiveScroll();
  return (
    <>
      <div className="flex h-full xl:h-[840px] xl:w-[1905px] bg-[#EAE7DD]">
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="0.3"
          className="pt-[60px] w-[70%] flex justify-end items-end z-[2] "
        >
          <h1 className="text-[10rem] font-heading font-bold text-[#594434] translate-x-[20%]">
            LOOKING FOR <br /> LOST ITEM
          </h1>
        </div>
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-0.9"
          className="w-1/2  flex justify-center items-end  "
        >
          <img
            className="h-[700px] translate-x-[-20%]"
            src="images/hero1.jpg"
            alt=""
          />
          <img
            className="h-[700px] translate-y-20 absolute "
            src="images/hero2.jpg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center top-[20%] left-[30%] border-2 rounded-[50%]  border-white     h-[110px] w-[110px]  hover:scale-[150%] hover:bg-green-900 transition-all duration-300 hover:border-none z-[4]">
          <span className="font-bold  text-white text-md ">FIND ITEM </span>
        </div>
      </div>
      <div className="bg-[#EAE7DD] w-full h-[900px] ">
        <div className="pt-[60px] w-[60%]  flex justify-end items-end z-[2] relative ">
          <h1 className="text-[10rem] font-heading font-bold text-[#594434] ">
            FOUND !! <br /> LOST ITEM
          </h1>
          <div className=" absolute inset-0 flex justify-center items-center top-[120%] left-[70%] border-2 rounded-[50%]  border-white     h-[110px] w-[110px]  hover:scale-[150%] hover:bg-green-900 transition-all duration-300 hover:border-none z-[4]">
            <span className="font-bold  text-white text-md ">POST ITEM </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
