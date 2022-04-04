import React from "react";

const DetailsReview = ({ review }) => {
  const { name, rating, reviews, image } = review;
  console.log(review);
  return (
    <div className="shadow-2xl p-5 rounded-xl">
      <div className="">
        <div className="img">
          <img src={image} className="w-[350px] h-[366px]" alt="" />
        </div>
        <p>
          <span className="text-xl font-medium">Name:</span> {name}
        </p>
        <p>
          <span className="text-xl font-medium">Review:</span>{" "}
          {reviews.slice(0, 200)}
        </p>
        <p>
          <small>
            <span className="text-xl font-medium">Rating:</span> {rating} Star
          </small>
        </p>
      </div>
    </div>
  );
};

export default DetailsReview;
