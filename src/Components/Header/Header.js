import React from "react";
import CustomLink from "../CustomLinks/CustomLinks";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <div className="mx-auto flex max-w-7xl bg-white text-black font-xl items-center justify-between px-12 md:px-5 py-2">
      <div className="logo">
        <img className="w-[120px]" src={logo} alt="" />
      </div>
      <div className="menu">
        <nav className="flex text-2xl">
          <CustomLink className="mr-12 text-[#8f969d]" to="/home">Home</CustomLink>
          <CustomLink className="mr-12 text-[#8f969d]" to="/reviews">Reviews</CustomLink>
          <CustomLink className="mr-12 text-[#8f969d]" to="/dashboard">Dashboard</CustomLink>
          <CustomLink className="mr-12 text-[#8f969d]" to="/blogs">Blogs</CustomLink>
          <CustomLink className="mr-12 text-[#8f969d]" to="/about">About</CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
