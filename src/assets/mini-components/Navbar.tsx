const Navbar = () => {
  return (
    <div className=" fixed h-[60px] w-full px-10 z-[99] ">
      <div className="flex justify-between h-full w-full items-center">
        <div className="font-heading text-3xl tracking-tighter ">.locateSphere</div>
        <div>
          <ul className="flex gap-10 text-xl">
            <li className="hover:bg-green-900 transition-opacity cursor-pointer mix-blend-multiply hover:text-white  px-10 py-3 font-bold">Home</li>
            <li className="hover:bg-green-900 transition-opacity cursor-pointer mix-blend-multiply hover:text-white  px-10 py-3 font-bold">About</li>
            <li className="hover:bg-green-900 transition-opacity cursor-pointer mix-blend-multiply hover:text-white  px-10 py-3 font-bold">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
