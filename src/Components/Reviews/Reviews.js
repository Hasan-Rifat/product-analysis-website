import React from "react";
import useReview from "../../Hooks/useReview";
import DetailsReview from "../DetailsReview/DetailsReview";

const Reviews = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="max-w-7xl items-center justify-between px-10 md:px-4 mx-auto py-12 ">
      <h2 className="text-4xl text-center font-bold py-4 md:pb-12">
        Customer Reviews - {reviews.length}
      </h2>
      <div className="grid gride-cols-1 md:grid-cols-3 gap-8 ">
        {reviews.map((review) => (
          <DetailsReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
