import React from "react";
import './Blog.css'

const Blog = ({ q }) => {
  const { q1, ans } = q;
  return (
    <div className="bg p-16 rounded-2xl">
      <h2 className="text-3xl font-bold">{q1}?</h2>
      <p><span className="text-base font-normal">{ans}</span></p>
    </div>
  );
};

export default Blog;
