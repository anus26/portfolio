import React, { useState } from "react";
import NavabarLogo from "../NavabarLogo.jsx";
import NavabarLink from "./NavabarLink.jsx";
import Navabarbtn from "./Navabarbtn.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav
      className="
fixed
      top-0
      left-0
w-full
      z-50
      
    "
    >

      <div
        className="
    
    w-full

max-w-[1300px]
mx-auto
px-4 sm:px-6 lg:px-8

        pt-4
      "
      >

        {/* Navbar Box */}
        <div
          className="
          h-[70px]
          w-full
         
        
             flex
          items-center
  
          justify-between
          border
          border-orange
          rounded-2xl sm:rounded-full
          bg-black
          px-4 sm:px-6
        "
        >

          <NavabarLogo />

   
          <div className="hidden lg:flex">
            <NavabarLink />
          </div>

    
          <div className="hidden lg:flex">
            <Navabarbtn />
          </div>

       
           <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            lg:hidden
            text-white
            text-2xl
          "
          >
            <GiHamburgerMenu />
          </button> 

        </div>

       
        {menuOpen && (
          <div
            className="
            lg:hidden
            mt-3
            w-full
            border
            border-orange
            rounded-2xl
            bg-black
            p-6
          "
          >

            <div className="flex flex-col gap-6">
              <NavabarLink />

              <div className="flex justify-center">
                <Navabarbtn />
              </div>
            </div>

          </div>
        )}

      </div>

    </nav>
  );
};

export default NavbarMain;