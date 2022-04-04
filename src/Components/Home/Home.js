import React from "react";
import img from "../../Images/the-watch.png";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-main py-16 mx-auto grid grid-cols-1 md:grid-cols-3 max-w-7xl items-center justify-between px-10 md:px-4">
          <div className="info md:col-span-2 md:order-1 order-2">
            <h2 className="text-6xl text-white">The Watch Best smart watch</h2>
            <h2 className="text-4xl py-6 text-[#57aeff]">
              The best smartwatch for Android
            </h2>
            <p>
              We test every new smartwatch to gauge its design and comfort. If
              it’s not stylish and comfortable enough to get you from an early
              morning workout to the office to a night out, you probably won’t
              wear it every day. Most smartwatches are also fitness trackers, so
              we put all of its sensors to the test, from step counts to heart
              rate to GPS (when applicable).
            </p>
            <p>
              We install apps and use them to see if the device’s app store is
              robust enough to elevate it to smartwatch status. If the watch has
              built-in LTE, we test cellular connectivity and call quality to
              make sure the device can actually stand on its own without a
              smartphone nearby.
            </p>
            <div className="flex space-x-2 pt-8">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-[#eb1478] text-white font-medium text-xl leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Show more
              </button>
            </div>
          </div>
          <div className="image md:col-span-1 order-1 md:order-2 pb-8 md:pb-0">
            <img className="mx-auto" src={img} alt="" />
          </div>
        </div>
      </section>
      <section>
        <Review className="max-w-7xl items-center justify-between px-10 md:px-4"></Review>
      </section>
    </main>
  );
};

export default Home;
