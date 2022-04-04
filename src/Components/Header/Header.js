import React from "react";
import CustomLink from "../CustomLinks/CustomLinks";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <div className="flex max-w-7xl justify-center items-center">
      <div className="logo">
        <img className="w-10" src={logo} alt="" />
      </div>
      <div className="menu">
        <nav>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/reviews">Reviews</CustomLink>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
