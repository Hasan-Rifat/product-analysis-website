import React from "react";
import './Blog.css'

const Blog = ({ q }) => {
  const { q1, ans } = q;
  return (
    <div className="">
      <h2 className="text-6xl">{q1}</h2>
      <p><span>{ans}</span></p>
    </div>
  );
};

export default Blog;
