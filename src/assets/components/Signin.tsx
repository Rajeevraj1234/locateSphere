import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";

const Signin = () => {
  return (
    <div className="h-full xl:h-[840px] xl:w-[1905px] flex justify-center items-center bg-[#EAE7DD]">
      <div className="h-[450px] w-[500px] bg-white rounded-xl p-5">
        <h1 className="text-[3rem] font-heading text-center mb-20">SignIn</h1>
        <div className="flex gap-3 items-center pl-5 mb-10">
          <FaUser className="text-xl" />
          <input
            type="text"
            placeholder="Username"
            className="border-b border-black focus:outline-none px-2 py-1 "
          />
        </div>
        <div className="flex gap-3 items-center pl-5 mb-16 relative">
          <PiPasswordBold className="text-2xl" />
          <input
            type="password"
            placeholder="**********"
            className="border-b border-black focus:outline-none px-2 py-1"
          />
          <a href="" className="absolute bottom-[-120%] left-[57%] text-sm hover:text-blue-900">Forgot Password ?</a>
        </div>
        
        <div className="text-center">
          <button className="bg-green-900 text-white font-bold text-xl px-9 py-3 rounded-lg">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
