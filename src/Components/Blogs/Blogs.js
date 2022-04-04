import React from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const QNA = [
    {
      q1: "what is context api ",
      ans: 'The React Context API is a way to effectively create global variables for a React app that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to children to parents. The topic is also referred to as a simple, light method for managing the state using Redox.',
    },
    {
      q1: "what is semantic tag",
      ans: "Semantic HTML tags provide information about the content of a tag that goes beyond the way they appear on a page. The text enclosed in the <code> tag is immediately recognized by the browser as some kind of coding language. example <article> <aside> <details> <figcaption> <figure> <footer> <header> <main> <mark> <nav> <section> <summary> <time>",
    },
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-12  max-w-7xl justify-center  mx-auto ">
      {
        QNA.map(q=> <Blog q={q}></Blog>)
      }
    </div>
  );
};

export default Blogs;
