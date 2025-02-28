import React, { useState } from "react";
import NavabarLogo from "../NavabarLogo";
import NavabarLink from "./NavabarLink";
import Navabarbtn from "./Navabarbtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-black">
      <div className="flex justify-between items-center max-w-[1100px] mx-auto px-6 py-4 rounded-full border border-orange">
        {/* Logo */}
        <NavabarLogo />

        {/* Links */}
        <div className={`${menuOpen ? "absolute top-16 left-0 w-full bg-black p-4" : "hidden"} lg:block`}>
          <NavabarLink />
        </div>

        {/* Buttons */}
        <Navabarbtn />

        {/* Hamburger Button */}
        <button className="lg:hidden text-2xl p-3 border-orange rounded-full text-white" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
