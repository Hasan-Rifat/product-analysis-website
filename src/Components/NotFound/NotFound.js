import React from "react";
import image from '../../Images/404.jpg'

const NotFound = () => {
  return (
    <div className=" mx-auto max-w-7xl items-center justify-between px-10 md:px-4">
        <img src={image} className='' alt="" />
    </div>
  );
};

export default NotFound;
