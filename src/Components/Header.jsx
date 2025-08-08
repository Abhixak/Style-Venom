import React, { useEffect, useState } from "react";
import Logo from "/Favicon.png";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import {
  LuUserRound,
  LuUserRoundCheck,
  LuUserRoundMinus,
} from "react-icons/lu";
import { TfiHeart } from "react-icons/tfi";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";

const Header = () => {
  const offers = [
    "🎁 Flat 20% Off on First Purchase!",
    "🔥 Get Freebies on every purchase above ₹499!",
    "🚚 Free Shipping on Orders Over ₹499!",
    "💳 Earn Venom drops on every purchase",
    "🛍️ Play games to earn Venom drops",
    "🎉 Weekend Sale - Upto 50% Off!",
  ];

  const [currentOffer, setCurrentOffer] = useState(offers[0]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setCurrentOffer(offers[index]);
      index = (index + 1) % offers.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="w-full flex flex-col bg-gradient-to-r from-pink-200 via-pink-300 to-orange-200">
        {/* <div className=" !px-4 !py-1 ">- Your location</div> */}
        <div className="grid items-center grid-cols-[1fr_1fr]">
          <img
            src={Logo}
            alt="Logo"
            className="h-20 sm:h-20 md:h-25 !pl-5 sm:!pl-7 md:!pl-10"
          />
          <span className="absolute right-5 sm:right-7 md:right-10 flex gap-5 sm:gap-7 md:gap-10 items-center">
            <TfiHeart className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#E20045] cursor-pointer" />
            <FaOpencart className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#008ab5] cursor-pointer" />
            {/* <span className="border-2 border-[#976973] flex text-[#574141] font-bold items-center justify-center bg-[#ffe7ec] rounded-4xl"> */}

            <AiOutlineNotification className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#5CC34C] cursor-pointer" />
            <LuUserRoundMinus className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#e0344b] text-black cursor-pointer" />
            <LuUserRound className="hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out hover:text-[#008ab5] text-[#bd8180] text-black cursor-pointer" />
            <LuUserRoundCheck className="hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#305100] text-black cursor-pointer" />
            {/*         
          <CgMenuRightAlt className="md:hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#574141] cursor-pointer" />
          <RiCloseLargeLine className="hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#574141] cursor-pointer" />
         */}
          </span>
        </div>
      </header>

      <section className="text-[0.7em] sm:text-[1em] w-full h-7 sm:h-10 bg-[black] text-[#ffe7ec] flex items-center justify-center">
        <p>{currentOffer}</p>
      </section>
    </>
  );
};

export default Header;
