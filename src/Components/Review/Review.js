import React from "react";
import useReview from "../../Hooks/useReview";
import CustomLink from "../CustomLinks/CustomLinks";
import DetailsReview from "../DetailsReview/DetailsReview";

const Review = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="max-w-7xl items-center justify-between px-10 md:px-4 mx-auto py-12 ">
      <h2 className="text-4xl text-center font-bold pb-4 md:pb-12">
        Customer Reviews - {reviews.slice(0, 3).length}
      </h2>
      <div className="grid gride-cols-1 md:grid-cols-3 gap-8">
        {reviews.slice(0, 3).map((review) => (
          <DetailsReview review={review} key={review.id} />
        ))}
      </div>
      <CustomLink to="/reviews">
        <div className="flex space-x-2 pt-8 justify-center">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-[#eb1478] text-white font-medium text-xl leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            See All Reviews
          </button>
        </div>
      </CustomLink>
    </div>
  );
};

export default Review;
