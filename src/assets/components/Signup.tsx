import { FaUser } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Signin = () => {
  return (
    <div className="xl:h-[840px] xl:w-[1905px] flex justify-center items-center bg-[#EAE7DD] outline-none">
      <div className="h-[650px] w-[500px] bg-white rounded-xl p-5">
        <h1 className="text-[3rem] font-heading text-center mb-20">SignUp</h1>
        <form action="">
          <div className="flex gap-3 items-center pl-5 mb-10">
            <FaUser className="text-xl" />
            <input
              type="text"
              placeholder="Firstname"
              required
              className="border-b border-black focus:outline-none px-2 py-1 "
            />
          </div>
          <div className="flex gap-3 items-center pl-5 mb-10">
            <FaUser className="text-xl" />
            <input
              type="text"
              placeholder="Lastname"
              required
              className="border-b border-black focus:outline-none px-2 py-1 "
            />
          </div>
          <div className="flex gap-3 items-center pl-5 mb-10">
            <MdAlternateEmail className="text-xl" />
            <input
              type="email"
              required
              placeholder="email"
              className="border-b border-black focus:outline-none px-2 py-1 "
            />
          </div>
          <div className="flex gap-3 items-center pl-5 mb-10">
            <PiPasswordBold className="text-2xl" />
            <input
              type="password"
              placeholder="**********"
              required
              className="border-b border-black focus:outline-none px-2 py-1"
            />
          </div>
          <div className="flex gap-3 items-center pl-5 mb-16">
            <FaPhoneAlt className="text-xl" />
            <input
              type="number"
              placeholder="Phone"
              required
              className="border-b border-black focus:outline-none px-2 py-1 "
            />
          </div>
        </form>
        <div className="text-center">
          <button className="bg-green-900 text-white font-bold text-xl px-9 py-3 rounded-md ">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
