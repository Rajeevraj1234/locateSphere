

const Footer = () => {
  return (
    <div className=" bg-black w-full h-[100px] flex justify-between items-center px-[4rem] rounded-t-2xl">
      <div className="font-heading text-3xl tracking-tighter text-white ">
        .locateSphere
      </div>
      <div className="text-white flex gap-5 ">
        <span className="text-white font-heading cursor-pointer">GitHub</span>
        <span className="text-white font-heading cursor-pointer">Instagram</span>
        <span className="text-white font-heading cursor-pointer">Twitter</span>
       
      </div>
    </div>
  );
};

export default Footer;
